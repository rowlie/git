import { ObjectModel } from '@stackbit/types';

export const HeroSection: ObjectModel = {
    type: 'object',
    name: 'hero-section',
    label: 'Hero Section',
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
            type: 'model',
            name: 'image',
            label: 'Image',
            models: ['Image'],
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
