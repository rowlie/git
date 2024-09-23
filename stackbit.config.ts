import { resolve } from 'path';
import { defineStackbitConfig, DocumentStringLikeFieldNonLocalized, SiteMapDocumentEntry } from '@stackbit/types';
import { FileSystemContentSource } from '@stackbit/cms-git';

import Models from './content/models';

export default defineStackbitConfig({
    stackbitVersion: '0.6.0',
    ssgName: 'nextjs',
    contentSources: [
        new FileSystemContentSource({
            contentDirs: ['content'],
            rootPath: resolve(__dirname),
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
    }
});



function getUrlByTypeFromSlug(type: string, slug: string): string {
    if (type === 'sections-page') {
        return slug;
    }

    if (type === 'blog-post') {
        return `blog${slug}`;
    }

    return '';
}