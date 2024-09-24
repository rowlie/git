import NextImage from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/common/Container';
import Link from '@/components/common/Link';

import * as AnnotationsHelper from '@/lib/annotations';

import { Image, Link as LinkType } from '@/components/types';

import styles from './style.module.css';

export interface CardProps {
    title: string
    description?: string
    image?: Image
    link: LinkType
}

export interface CardsSectionProps {
    title?: string;
    subtitle?: string;
    cards: CardProps[];
}

export interface CardsSection extends CardsSectionProps {
    type: 'cards-section';
}

export default function CardsSection(props: CardsSectionProps) {
    const { title, subtitle, cards } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    return (
        <section className={styles['cards-section']} {...AnnotationsHelper.setFieldPath(fieldPath)}>
            <Container>
                <div>
                    {title && (
                        <h2
                            className={styles['title']}
                            {...AnnotationsHelper.setFieldPath('.title')}
                        >
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p
                            className={styles['subtitle']}
                            {...AnnotationsHelper.setFieldPath('.subtitle')}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
                <div className={styles['cards-container']}>
                    {cards && cards.length > 0 && cards.map((card, index) => {
                        const { title, description, image, link } = card;

                        return (
                            <Card key={title} {...AnnotationsHelper.setFieldPath(fieldPath && `.cards.${index}`)}>
                                {image && (
                                    <div className='relative w-full aspect-[16/9]' {...AnnotationsHelper.setFieldPath(fieldPath && '.image.url')}>
                                        <NextImage
                                            alt={image.alt || title}
                                            src={image.url}
                                            fill
                                            className='object-cover'
                                            sizes='(max-width: 640px) 100vw, 640px'
                                        />
                                    </div>
                                )}
                                <CardContent className='p-4'>
                                    <h2 className='text-2xl font-bold mb-2' {...AnnotationsHelper.setFieldPath(fieldPath && '.title')}>{title}</h2>
                                    {description && (
                                        <p className='text-muted-foreground' {...AnnotationsHelper.setFieldPath(fieldPath && '.description')}>
                                            {description}
                                        </p>
                                    )}
                                    {link && (
                                        <Link className='mt-4' href={link.url} variant={link.variant || 'outline'} {...AnnotationsHelper.setFieldPath(fieldPath && '.link')}>{link.title}</Link>
                                    )}
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </Container>
        </section>
    );
}
