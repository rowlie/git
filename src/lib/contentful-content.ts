import { createClient, type Entry } from 'contentful';
import { BLOG_POST, SECTIONS_PAGE } from '@/components';
import type { BlogPostLayoutProps } from '@/components/layouts/BlogPostLayout';
import type { SectionsPageLayoutProps } from '@/components/layouts/SectionsPageLayout';
import type { CardProps, CardsSection } from '@/components/sections/Cards';
import type { FaqSection } from '@/components/sections/Faq';
import type { HeroSection } from '@/components/sections/HeroSection';
import type { MarkdownSection } from '@/components/sections/Markdown';
import type { PromoBanner } from '@/components/sections/PromoBanner';
import type { TestimonialsSection } from '@/components/sections/Testimonials';
import type { Image, Link, Author, Section } from '@/components/types';

const isDev = process.env.NODE_ENV !== 'production';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: isDev ? process.env.CONTENTFUL_PREVIEW_API_TOKEN! : process.env.CONTENTFUL_DELIVERY_API_TOKEN!,
    host: isDev ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export async function getPagesByType(type: string) {
    const pages = await getElementsByType(type);

    if (!pages) {
        return [];
    }

    if (type === SECTIONS_PAGE) {
        return pages.map(convertSectionsPage);
    } else if (type === BLOG_POST) {
        return pages.map(convertBlogPost);
    }
}

export async function getPageBySlug(type: string, slug: string) {
    const page = await getElementBySlug(type, slug);

    if (!page) {
        return null;
    }

    if (page.sys.contentType.sys.id === SECTIONS_PAGE) {
        return convertSectionsPage(page);
    } else if (page.sys.contentType.sys.id === BLOG_POST) {
       return convertBlogPost(page);
    }
}

function getElementBySlug(type: string, slug: string) {
    return client.getEntries({
        include: 10,
        content_type: type,
        'fields.slug': slug,
    }).then((result) => {
        return result.items[0];
    });
}

function getElementsByType(type: string) {
    return client.getEntries({
        content_type: type,
        include: 10,
    }).then((result) => {
        return result.items;
    });
}

function convertSectionsPage(page: Entry<any>): SectionsPageLayoutProps {
    return {
        _id: page.sys.id,
        title: page.fields.title!.toString(),
        slug: page.fields.slug!.toString(),
        sections: (page.fields.sections as []).map(convertSection),
    };
}

function convertBlogPost(post: Entry<any>): BlogPostLayoutProps {
    return {
        _id: post.sys.id,
        title: post.fields.title!.toString(),
        slug: post.fields.slug!.toString(),
        content: post.fields.content!.toString(),
        authors: (post.fields.authors as any[] || []).map(covertAuthor),
        excerpt: post.fields.excerpt as string,
        image: post.fields.image && convertImage(post.fields.image) || undefined,
    } 
}

function convertLink(link: Entry<any>): Link {
    return {
        title: link.fields.title!.toString(),
        url: link.fields.url!.toString(),
        variant: link.fields.variant as Link['variant'] || 'default',
    };
}

function convertImage(image: any): Image | null {
    if (!image.fields?.url?.fields.file) {
        return null;
    }

    return {
        url: 'https:' + image.fields?.url?.fields.file.url,
        alt: image.fields?.alt?.toString(),
    };
}

function convertCard(card: Entry<any>) {
    return {
        title: card.fields.title!.toString(),
        description: card.fields.description as string,
        image: card.fields.image && convertImage(card.fields.image) || undefined,
        link: card.fields.link && convertLink(card.fields.link as Entry<any>) || undefined,
    } satisfies CardProps;
}

function covertAuthor(author: Entry<any>): Author {
    return {
        name: author.fields.name as string,
        image: author.fields.image && convertImage(author.fields.image) || undefined,
        title: author.fields.title as string,
    }
}

function convertTestimonial(testimonial: Entry<any>) {
    const { fields } = testimonial;
    return {
        quote: fields.quote as string,
        author: covertAuthor(fields.author as Entry<any>),
    };
}

function convertSection(section: Entry<any>): Section {
    const { sys, fields } = section;
    if (sys.contentType.sys.id === 'hero-section') {
        return {
            type: 'hero-section',
            title: fields.title!.toString(),
            subtitle: fields.subtitle!.toString(),
            className: fields.className?.toString(),
            image: convertImage(fields.image) || undefined,
            cta: (fields.cta as any[] || []).map(convertLink) || [],
        } satisfies HeroSection;
    } else if (sys.contentType.sys.id === 'promo-banner') {
        return {
            type: 'promo-banner',
            title: fields.title!.toString(),
            subtitle: fields.subtitle!.toString(),
            className: fields.className?.toString(),
            cta: (fields.cta as any[] || []).map(convertLink) || [],
        } satisfies PromoBanner;
    } else if (sys.contentType.sys.id === 'cards-section') {
        return {
            type: 'cards-section',
            title: fields.title as string,
            subtitle: fields.subtitle as string,
            className: fields.className as string,
            cards: (fields.cards as any[] || []).map(convertCard),
        } satisfies CardsSection;
    } else if (sys.contentType.sys.id === 'faq-section') {
        return {
            type: 'faq-section',
            title: fields.title as string,
            subtitle: fields.subtitle as string,
            className: fields.className as string,
            faqs: (fields.faqs as any[] || []).map((faq: Entry<any>) => ({
                question: faq.fields.question as string,
                answer: faq.fields.answer as string,
            })),
            isSingleMode: fields.isSingleMode as boolean,
        } satisfies FaqSection;
    } else if (sys.contentType.sys.id === 'testimonials') {
        return {
            type: 'testimonials',
            title: fields.title as string,
            subtitle: fields.subtitle as string,
            className: fields.className as string,
            testimonials: (fields.testimonials as any[] || []).map(convertTestimonial)

        } satisfies TestimonialsSection;
    } else if (sys.contentType.sys.id === 'markdown') {
        return {
            type: 'markdown',
            content: fields.content as string,
        } satisfies MarkdownSection;
    } else {
        throw new Error(`Unknown section type: ${sys.contentType.sys.id}`);
    }
}