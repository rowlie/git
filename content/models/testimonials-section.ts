import { ObjectModel } from '@stackbit/types';

export const TestimonialsSection: ObjectModel = {
    type: 'object',
    name: 'testimonials',
    label: 'Testimonials Section',
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
            name: 'testimonials',
            label: 'Testimonials',
            items: {
                type: 'object',
                fields: [
                    {
                        type: 'string',
                        name: 'quote',
                        label: 'quote',
                        required: true,
                    }, {
                        type: 'reference',
                        name: 'author',
                        label: 'Author',
                        models: ['author'],
                        // required: true,
                    }
                ]
            },
        }
    ],
}
