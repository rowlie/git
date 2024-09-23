import { type HeaderProps } from '@/components/common/Header';
import { type FooterProps } from '@/components/common/Footer';

import { type HeroBanner } from '@/components/sections/HeroBanner';
import { type PromoBanner } from '@/components/sections/PromoBanner';
import { type MarkdownSection } from '@/components/sections/Markdown';
import { type FaqSection } from '@/components/sections/Faq';
import { type CardsSection } from '@/components/sections/Cards';

export interface Link {
    title: string;
    url: string;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
}

export interface Image {
    url: string;
    alt?: string;
}

export interface SiteSettings {
    title: string;
    header: HeaderProps;
    footer: FooterProps;
};

export interface PageCommonProps {
    _id: string;
    title: string;
    slug: string;
}

export type Section = HeroBanner | PromoBanner | MarkdownSection | FaqSection | CardsSection;
