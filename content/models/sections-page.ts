import { PageModel } from '@stackbit/types';

export const SectionsPage: PageModel = {
    name: 'sections-page',
    label: 'Sections Page',
    filePath({ data }) {
        const { slug } = data;

        if (slug === '/') {
            return Promise.resolve('content/pages/index.json');
        }

        return Promise.resolve(`content/pages${slug}.json`);
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
        type: 'list',
        name: 'sections',
        label: 'Sections',
        items: {
            type: 'model',
            models: ['hero-section', 'promo-banner', 'markdown', 'faq-section', 'cards-section', 'testimonials'],
        },
    }],
    hideContent: true,
}
