import { BLOG_POST } from '@/components';
import { getPageBySlug as getPage, getSiteSettings as getSite, getPagesByType } from '@/utils/test-content-source';

export async function getPageBySlug(type: string, slug: string) {
    return getPage(type, slug);
}

export async function getSiteSettings() {
    return getSite();
}

export async function getBlogPosts() {
    return getPagesByType(BLOG_POST);
}
