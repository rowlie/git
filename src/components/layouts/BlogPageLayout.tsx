import Markdown from 'markdown-to-jsx';
import NextImage from 'next/image';
import Container from "@/components/common/Container";
// import Link from "@/components/common/Link";
import * as AnnotationsHelper from "@/utils/annotations";
import MarkdownSection from '@/components/sections/Markdown';
import { type Image, PageCommonProps } from '@/components/common/types';

import styles from './blog-post.module.css';

export type BlogPageLayoutProps = PageCommonProps & {
    image?: Image;
    content: string;
}

export default function BlogPageLayout(props: BlogPageLayoutProps) {
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
