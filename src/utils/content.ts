import { type HeaderProps } from '@/components/common/Header';
import { type FooterProps } from '@/components/common/Footer';

export interface SiteSettings {
    title: string;
    header: HeaderProps;
    footer: FooterProps;
};

import { getPageBySlug as getPage, getSiteSettings as getSite } from '@/utils/test-content-source';

export async function getPageBySlug(type: string, slug: string) {
    return getPage(type, slug);
}

export async function getSiteSettings() {
    return getSite();
}
