import NextImage from 'next/image';
import Container from "@/components/common/Container";

import * as AnnotationsHelper from "@/lib/annotations";
import MarkdownSection from '@/components/sections/Markdown';
import { type Image, PageCommonProps } from '@/components/common/types';

import styles from './blog-post.module.css';

export type BlogPostLayoutProps = PageCommonProps & {
    excerpt?: string;
    image?: Image;
    content: string;
}

export default function BlogPageLayout(props: BlogPostLayoutProps) {
    const { title, content, _id, image } = props;

    return (
        <Container className='flex flex-col' {...AnnotationsHelper.setObjectId(_id)}>
            {image && (
                <div className={styles["image-container"]}>
                    <NextImage
                        src={image.url}
                        alt={image.alt || title}
                        fill={true}
                        className={styles["image"]}
                        {...AnnotationsHelper.setFieldPath('.image')}
                    />
                </div>
            )}
            <div className={styles['post-container']}>
                <h1 className={styles['title']}>{title}</h1>
                <MarkdownSection
                    {...AnnotationsHelper.setFieldPath('.content')}
                    content={content}
                    className={styles['content']}
                />
            </div>
        </Container>
    );
}
