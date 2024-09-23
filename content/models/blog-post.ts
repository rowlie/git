import { PageModel } from '@stackbit/types';

export const BlogPost: PageModel = {
    name: 'blog-post',
    label: 'Blog Post',
    filePath({ data }) {
        const { slug } = data;

        if (slug === '/') {
            return Promise.resolve('content/posts/index.json');
        }

        return Promise.resolve(`content/posts${slug}.json`);
    },
    type: 'page',
    fields: [{
        type: 'string',
        name: 'title',
        label: 'Title',
        required: true,
    }, {
        type: 'slug',
        name: 'slug',
        label: 'Slug',
    }, {
        type: 'model',
        name: 'image',
        label: 'Image',
        models: ['Image'],
    },
    {
        type: 'markdown',
        name: 'content',
        label: 'Content',
    }, {
        type: 'list',
        name: 'authors',
        label: 'Authors',
        items: {
            type: 'reference',
            models: ['Author']
        },
    }],
    hideContent: true,
}
