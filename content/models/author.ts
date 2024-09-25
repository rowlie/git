import slugify from '@/lib/slugify';
import { DataModel } from '@stackbit/types';

export const Author: DataModel = {
    type: 'data',
    name: 'author',
    label: 'Author',
    labelField: 'name',
    filePath({ data }) {
        const { name } = data;

        return Promise.resolve(`content/authors/${slugify(name)}.json`);
    },
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: true,
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title',
        },
        {
            type: 'model',
            name: 'image',
            label: 'Image',
            models: ["Image"]
        }
    ],
}
