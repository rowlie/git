import SectionsPageLayout from './layouts/SectionsPageLayout';
import BlogPageLayout from './layouts/BlogPostLayout';

import HeroSection from './sections/HeroSection';
import PromoBanner from './sections/PromoBanner';
import MarkdownSection from './sections/Markdown';
import FaqSection from './sections/Faq';
import CardsSection from './sections/Cards';
import TestimonialsSection from './sections/Testimonials';

export const SECTIONS_PAGE = 'sections-page';
export const BLOG_POST = 'blog-post';

const pageLayoutMapping: Record<string, unknown> = {
    [SECTIONS_PAGE]: SectionsPageLayout,
    [BLOG_POST]: BlogPageLayout,
}

const sectionsMapping: Record<string, unknown> = {
    'hero-section': HeroSection,
    'promo-banner': PromoBanner,
    'markdown': MarkdownSection,
    'faq-section': FaqSection,
    'cards-section': CardsSection,
    'testimonials': TestimonialsSection,
};

export function getComponentBySectionType(type: string) {
    return sectionsMapping[type] || null;
}

export function getLayoutByPageType(type: string) {
    return pageLayoutMapping[type] || null;
}
