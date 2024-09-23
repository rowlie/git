import SectionsPageLayout from './layouts/SectionsPageLayout';
import BlogPageLayout from './layouts/BlogPostLayout';

import HeroBanner from './sections/HeroBanner';
import PromoBanner from './sections/PromoBanner';
import MarkdownSection from './sections/Markdown';
import FaqSection from './sections/Faq';
import CardsSection from './sections/Cards';

const pageLayoutMapping: Record<string, any> = {
    'sections-page': SectionsPageLayout,
    'blog-post': BlogPageLayout,
}

const sectionsMapping: Record<string, any> = {
    'hero-banner': HeroBanner,
    'promo-banner': PromoBanner,
    'markdown': MarkdownSection,
    'faq-section': FaqSection,
    'cards-section': CardsSection,
};

export function getComponentBySectionType(type: string) {
    return sectionsMapping[type] || null;
}

export function getLayoutByPageType(type: string) {
    return pageLayoutMapping[type] || null;
}
