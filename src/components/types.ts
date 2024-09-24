import { type HeaderProps } from '@/components/common/Header';
import { type FooterProps } from '@/components/common/Footer';

import { type HeroSection } from '@/components/sections/HeroSection';
import { type PromoBanner } from '@/components/sections/PromoBanner';
import { type MarkdownSection } from '@/components/sections/Markdown';
import { type FaqSection } from '@/components/sections/Faq';
import { type CardsSection } from '@/components/sections/Cards';
import { type TestimonialsSection } from '@/components/sections/Testimonials';

export interface Link {
    title: string;
    url: string;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
}

export interface Image {
    url: string;
    alt?: string;
}

export interface Author {
    name: string;
    title?: string;
    image?: Image;
}

export interface Theme {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
    radius: number;
}

export interface SiteSettings {
    title: string;
    theme: Theme;
    header: HeaderProps;
    footer: FooterProps;
};

export interface PageCommonProps {
    _id: string;
    title: string;
    slug: string;
}

export type Section = HeroSection | PromoBanner | MarkdownSection | FaqSection | CardsSection | TestimonialsSection;
