import { defineStackbitConfig, DocumentStringLikeFieldNonLocalized, SiteMapDocumentEntry } from '@stackbit/types';
import { FileSystemContentSource } from '@stackbit/cms-git';
import { BLOG_POST, SECTIONS_PAGE } from '@/components/';

import Models from './content/models';

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
    ],
    sitemap({ documents }) {
        const pages = documents.filter((document) => ['sections-page', 'blog-post'].includes(document.modelName));

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
            srcProjectId: ''
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
