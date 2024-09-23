import { BlogPostLayoutProps } from '@/components/layouts/BlogPostLayout';
import { getPageBySlug as getPage, getSiteSettings as getSite, getPagesByType as getPages } from '@/utils/test-content-source';

export async function getPageBySlug(type: string, slug: string) {
    return getPage(type, slug);
}

export async function getSiteSettings() {
    return getSite();
}

export async function getBlogPosts() {
    return getPages('blog-post');
}
