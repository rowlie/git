import { defineStackbitConfig, DocumentStringLikeFieldNonLocalized, SiteMapDocumentEntry } from '@stackbit/types';
import { FileSystemContentSource } from '@stackbit/cms-git';
import { ContentfulContentSource } from '@stackbit/cms-contentful';
import { BLOG_POST, SECTIONS_PAGE } from '@/components/';

import Models from './content/models';

const pageModelNames = [
    SECTIONS_PAGE,
    BLOG_POST,
];

export default defineStackbitConfig({
    stackbitVersion: '0.6.0',
    ssgName: 'nextjs',
    contentSources: [
        new FileSystemContentSource({
            contentDirs: ['content'],
            rootPath: __dirname,
            models: Models,
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        }),
        new ContentfulContentSource({
            spaceId: process.env.CONTENTFUL_SPACE_ID!,
            accessToken: process.env.CONTENTFUL_PAT!,
            previewToken: process.env.CONTENTFUL_PREVIEW_API_TOKEN!,
        }),
    ],
    modelExtensions: [
        { name: SECTIONS_PAGE, type: 'page' },
        { name: BLOG_POST, type: 'page' },
    ],
    sitemap({ documents }) {
        const pages = documents.filter((document) => pageModelNames.includes(document.modelName));

        return pages.map((page) => {
            const slug = (page.fields.slug as DocumentStringLikeFieldNonLocalized)?.value || '';

            return {
                urlPath: getUrlByTypeFromSlug(page.modelName, slug),
                document: page,
            } as SiteMapDocumentEntry;
        }).filter((entry) => entry.urlPath.length > 0);
    },
    sidebarButtons: [
        {
            type: 'model',
            icon: 'settings',
            label: 'Settings',
            modelName: 'site-settings',
            srcType: 'fs',
            srcProjectId: '9a0364b9'
        },
    ]
});

function getUrlByTypeFromSlug(type: string, slug: string): string {
    if (type === SECTIONS_PAGE) {
        return slug;
    }

    if (type === BLOG_POST) {
        return `blog${slug}`;
    }

    return '';
}
