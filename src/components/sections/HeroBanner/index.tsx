import Container from '@/components/common/Container';
import * as AnnotationsHelper from "@/lib/annotations";
import styles from './style.module.css';

import type { Image, Link } from '@/components/common/types';
import LinkElement from '@/components/common/Link';

export interface HeroBannerProps {
    title: string;
    subtitle: string;
    image?: Image;
    className?: string;
    cta?: Link[];
}

export interface HeroBanner extends HeroBannerProps {
    type: 'hero-banner'
}

const HeroBanner = (props: HeroBannerProps) => {
    const { className = '', title, subtitle, image, cta } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    return (
        <section
            className={`${styles['hero-banner']} ${className}`}
            {...AnnotationsHelper.setFieldPath(fieldPath)}
            style={{
                backgroundImage: image ? `url(${image.url})` : 'none',
            }}
        >
            <Container className='flex'>
                <div className={styles['content']}>
                    <h2 className={styles['title']}>{title}</h2>
                    <p className={styles['subtitle']}>{subtitle}</p>
                    {cta && cta.length > 0 && (
                        <div className={styles['cta-container']}>
                            {cta.map((ctaItem, index) => (
                                <LinkElement key={index} href={ctaItem.url} variant={ctaItem.variant} {...AnnotationsHelper.setFieldPath(`.cta.${index}`)}>
                                    {ctaItem.title}
                                </LinkElement>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}

export default HeroBanner;
