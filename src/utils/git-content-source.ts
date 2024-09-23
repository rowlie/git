import { readFileSync, readdirSync, watch } from 'fs';
import { resolve } from 'path';

import { type SectionsPageLayoutProps } from '@/components/layouts/SectionsPageLayout';
import { type BlogPostLayoutProps } from '@/components/layouts/BlogPostLayout';
import type { SiteSettings, Author } from '@/components/common/types';

const CONTENT_PATH = 'content/';
const path = resolve(`@/../${CONTENT_PATH}`);

function readDirectory(directory: string) {
    return readdirSync(`${path}/${directory}`).map((file) => {
        return {
            ...JSON.parse(readFileSync(`${path}/${directory}/${file}`, 'utf-8')),
            _id: `${CONTENT_PATH}${directory}/${file}`,
        };
    });
}

let blogPosts: (BlogPostLayoutProps & { _id: string })[] = [];
let pages: (SectionsPageLayoutProps & { _id: string })[] = [];
let authors: (Author & { _id: string })[] = [];

function loadData() {
    authors = readDirectory('authors');
    pages = readDirectory('pages').map(resolveSectionsPage);
    blogPosts = readDirectory('posts').map(resolveBlog);
}

function resolveSectionsPage(page: SectionsPageLayoutProps) {
    return {
        ...page,
        sections:(page.sections|| []).map((section) => {
            if (section.type === 'testimonials') {
                return {
                    ...section,
                    testimonials: (section.testimonials || []).map((testimonial) => ({
                        ...testimonial,
                        author: authors.find((authorData) => authorData._id === (testimonial.author as unknown as string))!
                    }))
                }
            }

            return section
        })
    }
}

function resolveBlog(post: any) {
    return {
        ...post,
        authors: post.authors?.map((author: string) => authors.find((authorData) => authorData._id === author)).filter(Boolean),
    }
}

loadData();

watch(path, {
    recursive: true,
    encoding: 'utf-8',
    persistent: true,
}).addListener('change', loadData);

export async function getSiteSettings(): Promise<SiteSettings> {
    return JSON.parse(readFileSync(`${path}/site-settings.json`, 'utf-8'));
}

export function getPageBySlug(type: string, slug: string): SectionsPageLayoutProps | BlogPostLayoutProps | null {
    if (type === 'blog-post') {
        return blogPosts.find((post) => post.slug === slug) || null;
    }

    if (type === 'sections-page') {
        return pages.find((page) => page.slug === slug) as SectionsPageLayoutProps || null;
    }

    return null;
}

export function getPagesByType(type: string) {
    if (type === 'blog-post') {
        return blogPosts;
    }

    if (type === 'sections-page') {
        return pages;
    }

    return null;
}
