import { type HeroBanner } from '@/components/sections/HeroBanner';
import { type PromoBanner } from '@/components/sections/PromoBanner';
import { type MarkdownSection } from '@/components/sections/Markdown';

export interface PageCommonProps {
    _id: string;
    title: string;
    slug: string;
}

export interface Link {
    title: string;
    url: string;
    variant?: 'link' | 'button-primary' | 'button-secondary' | 'header-link';
}

export interface Image {
    url: string;
    alt?: string;
}

export type Section = HeroBanner | PromoBanner | MarkdownSection;