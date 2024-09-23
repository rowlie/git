import NextImage from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/common/Container';
import Link from '@/components/common/Link';

import { Image, Link as LinkType } from '@/components/common/types';

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

    return (
        <section className={styles['cards-section']}>
            <Container>
                <div>
                    {title && (
                        <h2 className={styles['title']}>{title}</h2>
                    )}
                    {subtitle && (
                        <p className={styles['subtitle']}>{subtitle}</p>
                    )}
                </div>
                <div className='flex flex-wrap'>
                    {cards && cards.length > 0 && cards.map((card) => {
                        const { title, description, image, link } = card;

                        return (
                            <div className='basis-1/4 mb-4' key={title}>
                                <Card className='m-2 h-full'>
                                    {image && (
                                        <div className='relative w-full aspect-[16/9]'>
                                            <NextImage
                                                alt={image.alt || title}
                                                src={image.url}
                                                fill
                                                className='object-cover'
                                                sizes='(max-width: 640px) 100vw, 640px'
                                            />
                                        </div>
                                    )}
                                    <CardContent className='p-4 pb-0'>
                                        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                                        {description && (
                                            <p className='text-muted-foreground'>
                                                {description}
                                            </p>
                                        )}
                                        <Link className='mt-4' href={link.url} variant='outline'>{link.title}</Link>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    );
}
