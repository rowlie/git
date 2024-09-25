import { ObjectModel } from '@stackbit/types';

export const FAQsSection: ObjectModel = {
    type: 'object',
    name: 'faq-section',
    label: 'FAQs Section',
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
        },
        {
            type: 'string',
            name: 'className',
            label: 'Class Name',
        },
        {
            type: 'boolean',
            name: 'isSingleMode',
            label: 'Single Mode?',
            default: true
        },
        {
            type: 'list',
            name: 'faqs',
            label: 'FAQs',
            items: {
                type: 'object',
                fields: [
                    {
                        type: 'string',
                        name: 'question',
                        label: 'Question',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'answer',
                        label: 'Answer',
                        required: true,
                    },
                ]
            },
        }
    ],
}
