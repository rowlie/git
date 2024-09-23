import { ObjectModel } from '@stackbit/types';

export const CardsSection: ObjectModel = {
    type: 'object',
    name: 'cards-section',
    label: 'Cards Section',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
        },
        {
            type: 'string',
            name: 'className',
            label: 'Class Name',
        },
        {
            type: 'list',
            name: 'cards',
            label: 'Cards',
            items: {
                type: 'object',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        required: true,
                    }, {
                        type: 'string',
                        name: 'description',
                        label: 'Description',
                    }, {
                        type: 'model',
                        name: 'image',
                        label: 'Image',
                        models: ['Image']
                    }, {
                        type: 'model',
                        name: 'link',
                        label: 'Link',
                        models: ['Link'],
                    }
                ]
            },
        }
    ],
}
