import { ObjectModel } from '@stackbit/types';

export const Link: ObjectModel = {
    type: 'object',
    name: 'Link',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
        },
        {
            type: 'string',
            name: 'url',
            label: 'URL',
            required: true,
        },
        {
            type: 'enum',
            name: 'variant',
            label: 'Variant',
            options: [
                { label: 'Default', value: 'default' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' },
                { label: 'Ghost', value: 'ghost' },
                { label: 'Link', value: 'link' }
            ],
            default: 'default',
        }
    ],
}
