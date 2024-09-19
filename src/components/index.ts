import SectionsPageLayout from './layouts/SectionsPageLayout';
import BlogPageLayout from './layouts/BlogPageLayout';

import HeroBanner from './sections/HeroBanner';
import PromoBanner from './sections/PromoBanner';
import MarkdownSection from './sections/Markdown';

const pageLayoutMapping: Record<string, any> = {
    'sections-page': SectionsPageLayout,
    'blog-page': BlogPageLayout,
}

const sectionsMapping: Record<string, any> = {
    'hero-banner': HeroBanner,
    'promo-banner': PromoBanner,
    'markdown': MarkdownSection,
};

export function getComponentBySectionType(type: string) {
    return sectionsMapping[type] || null;
}

export function getLayoutByPageType(type: string) {
    return pageLayoutMapping[type] || null;
}
