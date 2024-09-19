import { type SectionsPageLayoutProps } from '@/components/layouts/SectionsPageLayout';
import { type BlogPageLayoutProps } from '@/components/layouts/BlogPageLayout';
import { type SiteSettings } from '@/utils/content';

export function getSiteSettings(): SiteSettings {
    const siteName = 'ACME';

    return {
        title: siteName,
        header: {
            title: siteName,
            links: [{
                title: 'Blog',
                url: '/blog',
            }, {
                title: 'Sign in',
                url: '/',
                variant: 'button-secondary',
            }]
        },
        footer: {
            copyrightText: 'Copyright © Netlify 2024.'
        },
    }
}

export function getPageBySlug(type: string, slug: string): SectionsPageLayoutProps | BlogPageLayoutProps | null {
    if (type === 'blog-page' && slug === '/post-1') {
        return {
            _id: 'blog-1',
            title: 'The Ultimate Guide to Markdown',
            content: 'Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.\n\n## Table of Contents\n1. [Why Use Markdown?](#why-use-markdown)\n2. [Basic Syntax](#basic-syntax)\n    - [Headers](#headers)\n    - [Emphasis](#emphasis)\n    - [Lists](#lists)\n3. [Advanced Syntax](#advanced-syntax)\n    - [Links](#links)\n    - [Images](#images)\n    - [Code Blocks](#code-blocks)\n4. [Conclusion](#conclusion)\n\n## Why Use Markdown?\n\nMarkdown is a simple way to format text that’s easy to write and read, and it can be converted to HTML, PDF, and other formats. Some reasons to use Markdown include:\n- **Simplicity**: It’s easy to learn.\n- **Compatibility**: It can be used on virtually any platform.\n- **Flexibility**: It integrates well with many tools, including GitHub and blogging platforms.\n\n## Basic Syntax\n\n### Headers\nHeaders are created using the `#` symbol. The number of `#` symbols represents the header level.\n\n```markdown\n# This is an H1\n## This is an H2\n### This is an H3\n```\n\n### Emphasis\nYou can add emphasis using asterisks or underscores.\n\n- *Italic* (using `*asterisks*` or `_underscores_`)\n- **Bold** (using `**double asterisks**` or `__double underscores__`)\n- ***Bold and italic*** (using `***triple asterisks***`)\n\n### Lists\n#### Unordered Lists\n```markdown\n- Item 1\n- Item 2\n    - Sub-item 1\n    - Sub-item 2\n```\n\n#### Ordered Lists\n```markdown\n1. First item\n2. Second item\n    1. Sub-item 1\n    2. Sub-item 2\n```\n\n## Advanced Syntax\n\n### Links\nTo add a hyperlink, use the following syntax:\n\n```markdown\n[Link text](https://example.com)\n```\n\nExample: [Visit OpenAI](https://openai.com)\n\n### Images\nImages are added similarly to links but with an exclamation mark at the beginning.\n\n```markdown\n![Alt text](https://example.com/image.jpg)\n```\n\nExample:\n![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)\n\n### Code Blocks\nFor inline code, use backticks:\n\n```markdown\n`code`\n```\n\nFor multi-line code blocks, use triple backticks:\n\n```markdown\n```\nfunction helloWorld() {\n    console.log("Hello, World!");\n}\n```\n```\n\n## Conclusion\n\nMarkdown is a powerful tool for writers and developers alike. Whether you are writing documentation, creating a blog post, or formatting notes, Markdown makes it simple to create rich text with minimal effort.\n\nStart using Markdown today to streamline your writing and formatting process!\n',
            slug: 'post-1',
            image: {
                url: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-AI-7Ed-Sapphire-MC001-3000x1682:VP5-1920x600',
                alt: 'Surface Laptop'
            }
        }
    }

    if (slug === '/') {
        return {
            _id: '123',
            slug: '/',
            title: 'Home',
            sections: [{
                type: 'hero-banner',
                className: 'text-white dark:text-black',
                title: 'Für kurze Zeit: Ausgewähltes Type Cover inklusive',
                subtitle: 'Das Surface Pro Copilot+PC bietet Flexibilität und außergewöhnliche KI-Funktionen für maximale Produktivität.',
                image: {
                    url: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-Copilot-Plus-PC-Pro-Keyboard-Bundle:VP5-1920x600'
                },
                cta: [{
                    title: 'See different page',
                    url: '/about',
                    variant: 'button-primary'
                }, {
                    title: 'Jetzt kaufen',
                    url: '/contact',
                    variant: 'button-secondary',
                }],
            }, {
                type: 'promo-banner',
                title: 'Join Us & Grow Your Business',
                subtitle: 'Let\'s explore opportunities, tailor strategies, and chart a course to financial success together.',
                cta: [{
                    title: 'Get Started',
                    url: '/about',
                    variant: 'button-primary'
                }]
            }]
        };
    } else if (slug === '/about') {
        return {
            _id: '123',
            slug: '/about',
            title: 'About',
            sections: [{
                type: 'hero-banner',
                title: 'Lernen Sie Surface Laptop kennen',
                subtitle: 'Nutzen Sie mit diesem außergewöhnlich leistungsstarken Notebook KI-Funktionen wie Live Captions und Cocreator.',
                image: {
                    url: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-AI-7Ed-Sapphire-MC001-3000x1682:VP5-1920x600'
                },
                cta: [{
                    title: 'Jetzt kaufen',
                    url: '/about',
                    variant: 'button-primary'
                }],
            }, {
                type: 'hero-banner',
                title: 'Game Pass',
                subtitle: 'Spiele neue Titel am ersten Tag. Und spiele mit anderen Gamern Hunderte großartiger Spiele auf Konsole und PC.',
                image: {
                    url: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Game-Pass-Update-September-2024:VP5-1596x600'
                },
                className: 'text-white',
            }]
        };
    }

    return null;
}
