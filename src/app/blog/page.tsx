import Container from '@/components/common/Container';
import CardsSection, { type CardProps } from '@/components/sections/Cards';
import { getBlogPosts } from '@/utils/content';

import styles from './style.module.css';

import { type Metadata } from 'next';
import { type BlogPostLayoutProps } from '@/components/layouts/BlogPostLayout';

export const metadata: Metadata = {
    title: 'Blog',
};

export default async function BlogPage() {
    const blogPosts = await getBlogPosts();

    const posts = (blogPosts as BlogPostLayoutProps[] | null)?.map((post) => ({
        title: post.title,
        description: post.excerpt,
        image: post?.image,
        link: {
            url: `/blog${post.slug}`,
            title: 'Read More',
        }
    }) satisfies CardProps) || [];

    return (
        <Container>
            <h1 className={styles['title']}>Blog</h1>
            <CardsSection cards={posts} />
        </Container>
    );
}
