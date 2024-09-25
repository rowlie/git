import { BLOG_POST } from '@/components';
import { getSiteSettings as getSiteSettingsFromFile } from '@/lib/git-content';
import {
    getPageBySlug as getPageBySlugFromContentful,
    getPagesByType as getPagesByTypeFromContentful,
} from './contentful-content';

export async function getPageBySlug(type: string, slug: string) {
    return getPageBySlugFromContentful(type, slug);
}

export async function getSiteSettings() {
    return getSiteSettingsFromFile();
}

export async function getBlogPosts() {
    return getPagesByTypeFromContentful(BLOG_POST);
}
