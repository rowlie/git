import Container from '@/components/common/Container';
import LinkElement from '@/components/common/Link';
import * as AnnotationsHelper from '@/lib/annotations';

import styles from './style.module.css';

import type { Image, Link } from '@/components/common/types';

export interface PromoBannerProps {
    title: string;
    subtitle: string;
    className?: string;
    cta?: Link[];
}

export interface PromoBanner extends PromoBannerProps {
    type: 'promo-banner';
}

const PromoBanner = (props: PromoBannerProps) => {
    const { className = '', title, subtitle, cta } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    return (
        <section className={`${styles['promo-banner']} ${className}`} {...AnnotationsHelper.setFieldPath(fieldPath)}>
            <Container className={styles['content']}>
                <div>
                    <h2
                        className={styles['title']}
                        {...AnnotationsHelper.setFieldPath('.title')}
                    >
                        {title}
                    </h2>
                    <p
                        className={styles['subtitle']}
                        {...AnnotationsHelper.setFieldPath('.subtitle')}
                    >
                        {subtitle}
                    </p>
                </div>
                {cta && cta.length > 0 && (
                    <div className={styles['cta-container']}>
                        {cta.map((ctaItem, index) => (
                            <LinkElement key={index} href={ctaItem.url} variant={ctaItem.variant} {...AnnotationsHelper.setFieldPath(`.cta.${index}`)}>
                                {ctaItem.title}
                            </LinkElement>
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}

export default PromoBanner;