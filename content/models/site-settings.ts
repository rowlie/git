import { DataModel } from '@stackbit/types';

export const SiteSettings: DataModel = {
    type: 'data',
    name: 'site-settings',
    label: 'Site Settings',
    singleInstance: true,
    filePath() {
        return Promise.resolve(`content/site-settings.json`);
    },
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Site Name',
        },
        {
            type: 'reference',
            name: 'theme',
            label: 'Theme',
            models: ['theme'],
            required: true,
        },
        {
            type: 'object',
            name: 'header',
            label: 'Header',
            fields: [
                {
                    type: 'list',
                    name: 'links',
                    label: 'Links',
                    items: {
                        type: 'model',
                        models: ['Link']
                    }
                }
            ]
        },
        {
            type: 'object',
            name: 'footer',
            label: 'Footer',
            fields: [
                {
                    type: 'string',
                    name: 'copyrightText',
                    label: 'Copyright Text',
                },
            ]
        },

    ],
}
