import { ObjectModel } from '@stackbit/types';

export const Image: ObjectModel = {
    type: 'object',
    name: 'Image',
    fields: [
        {
            type: 'string',
            name: 'alt',
            label: 'Alt Text',
        },
        {
            type: 'image',
            name: 'url',
            label: 'Image',
            required: true,
        },
    ],
}
