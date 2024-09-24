import { PageModel } from '@stackbit/types';

export const BlogPost: PageModel = {
    type: 'page',
    name: 'blog-post',
    label: 'Blog Post',
    filePath({ data }) {
        const { slug } = data;

        if (slug === '/') {
            return Promise.resolve('content/posts/index.json');
        }

        return Promise.resolve(`content/posts${slug}.json`);
    },
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
    },{
        type: 'string',
        name: 'excerpt',
        label: 'Excerpt',
    },{
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
