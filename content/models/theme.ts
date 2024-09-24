import slugify from '@/utils/slugify';
import { DataModel } from '@stackbit/types';

export const Theme: DataModel = {
    type: 'data',
    name: 'theme',
    label: 'Theme',
    filePath({ data }) {
        const { name } = data;

        return Promise.resolve(`content/themes/${slugify(name)}.json`);
    },
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: true,
            validations: {
                unique: true,
            }
        },
        {
            type: 'color',
            name: 'background',
            label: 'Background Color',
            required: true,
            default: '#fff',
        },
        {
            type: 'color',
            name: 'foreground',
            label: 'Foreground Color',
            required: true,
            default: '#000',
        },
        {
            type: 'color',
            name: 'card',
            label: 'Card Color',
            required: true,
            default: '#fff',
        },
        {
            type: 'color',
            name: 'cardForeground',
            label: 'Card Foreground Color',
            required: true,
            default: '#000',
        },
        {
            type: 'color',
            name: 'primary',
            label: 'Primary Color',
            required: true,
            default: '#000',
        },
        {
            type: 'color',
            name: 'primaryForeground',
            label: 'Primary Foreground Color',
            required: true,
            default: '#fff',
        },
        {
            type: 'color',
            name: 'secondary',
            label: 'Secondary Color',
            required: true,
            default: '#000',
        },
        {
            type: 'color',
            name: 'secondaryForeground',
            label: 'Secondary Foreground Color',
            required: true,
            default: '#fff',
        },
        {
            type: 'color',
            name: 'muted',
            label: 'Muted Color',
            required: true,
            default: '#fff',
        },
        {
            type: 'color',
            name: 'mutedForeground',
            label: 'Muted Foreground Color',
            required: true,
            default: '#000',
        },
        {
            type: 'color',
            name: 'accent',
            label: 'Accent Color',
            required: true,
            default: '#fff',
        },
        {
            type: 'color',
            name: 'accentForeground',
            label: 'Accent Foreground Color',
            required: true,
            default: '#000',
        },
        {
            type: 'color',
            name: 'destructive',
            label: 'Destructive Color',
            required: true,
            default: '#c00',
        },
        {
            type: 'color',
            name: 'destructiveForeground',
            label: 'Destructive Foreground Color',
            required: true,
            default: '#fff',
        },
        {
            type: 'color',
            name: 'border',
            label: 'Border Color',
            required: true,
            default: '#ccc',
        },
        {
            type: 'color',
            name: 'input',
            label: 'Input Color',
            required: true,
            default: '#ccc',
        },
        {
            type: 'color',
            name: 'ring',
            label: 'Ring Color',
            required: true,
            default: '#fff',
        },
        {
            type: 'number',
            name: 'radius',
            label: 'Radius',
            validations: {
                min: 0,
                max: 10,
            },
            default: 8,
            required: true,
        },
    ],
}
