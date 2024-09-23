import { ObjectModel } from '@stackbit/types';

export const PromoBanner: ObjectModel = {
    type: 'object',
    name: 'promo-banner',
    label: 'Promo Banner',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            required: true,
        },
        {
            type: 'string',
            name: 'className',
            label: 'Class Name',
        },
        {
            type: 'list',
            name: 'cta',
            label: 'Call to Action',
            items: {
                type: 'model',
                models: ['Link'],
            },
        }
    ],
}

