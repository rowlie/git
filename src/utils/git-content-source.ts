import { readFileSync, readdirSync, watch } from 'fs';
import { resolve } from 'path';
import { BLOG_POST, SECTIONS_PAGE } from '@/components';

import { type SectionsPageLayoutProps } from '@/components/layouts/SectionsPageLayout';
import { type BlogPostLayoutProps } from '@/components/layouts/BlogPostLayout';
import type { SiteSettings, Author } from '@/components/types';

type DocumentWithId<T> = T & { _id: string };

const CONTENT_PATH = 'content/';
const path = resolve(`@/../${CONTENT_PATH}`);

let blogPosts: DocumentWithId<BlogPostLayoutProps>[] = [];
let pages: DocumentWithId<SectionsPageLayoutProps>[] = [];
let authors: DocumentWithId<Author>[] = [];

loadData();

watch(path, {
    recursive: true,
    encoding: 'utf-8',
    persistent: true,
}).addListener('change', loadData);

function loadData() {
    authors = readDirectory('authors');
    pages = readDirectory('pages').map(resolveSectionsPage);
    blogPosts = readDirectory('posts').map(resolveBlog);
}

function readDirectory(directory: string): DocumentWithId<any>[] {
    return readdirSync(`${path}/${directory}`).map((file) => {
        return {
            ...readJsonFile(`${path}/${directory}/${file}`),
            _id: `${CONTENT_PATH}${directory}/${file}`,
        };
    });
}

function resolveSectionsPage(page: SectionsPageLayoutProps) {
    return {
        ...page,
        sections: (page.sections || []).map((section) => {
            if (section.type === 'testimonials') {
                return {
                    ...section,
                    testimonials: (section.testimonials || []).map((testimonial) => ({
                        ...testimonial,
                        author: authors.find((authorData) => authorData._id === (testimonial.author as unknown as string))!
                    }))
                };
            }

            return section;
        }),
    };
}

function resolveBlog(post: any) {
    return {
        ...post,
        authors: post.authors?.map((author: string) => authors.find((authorData) => authorData._id === author)).filter(Boolean),
    };
}

function readJsonFile(path: string) {
    return JSON.parse(readFileSync(path, 'utf-8'));
}

export async function getSiteSettings(): Promise<SiteSettings> {
    return readJsonFile(`${path}/site-settings.json`);
}

export function getPageBySlug(type: string, slug: string): SectionsPageLayoutProps | BlogPostLayoutProps | null {
    if (type === BLOG_POST) {
        return blogPosts.find((post) => post.slug === slug) || null;
    }

    if (type === SECTIONS_PAGE) {
        return pages.find((page) => page.slug === slug) as SectionsPageLayoutProps || null;
    }

    return null;
}

export function getPagesByType(type: string) {
    if (type === BLOG_POST) {
        return blogPosts;
    }

    if (type === SECTIONS_PAGE) {
        return pages;
    }

    return null;
}
