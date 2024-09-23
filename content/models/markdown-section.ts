import { ObjectModel } from '@stackbit/types';

export const MarkdownSection: ObjectModel = {
    type: 'object',
    name: 'markdown',
    label: 'Markdown Section',
    fields: [
        {
            type: 'markdown',
            name: 'content',
            label: 'Content',
            required: true,
        },
        {
            type: 'string',
            name: 'className',
            label: 'Class Name',
        }
    ],
}

