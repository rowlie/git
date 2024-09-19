import NextLink from 'next/link';
import * as AnnotationsHelper from '@/utils/annotations';
import styles from './style.module.css';

import { type Link } from '../types';

export type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'link' | 'button-primary' | 'button-secondary' | 'header-link' | 'header-button' | 'none';
}

const Link = (props: LinkProps) => {
    const { href, children, className = '', variant = 'link' } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    const classNames = {
        'link': styles['link'],
        'button-primary': `${styles['button']} ${styles['button--primary']}`,
        'button-secondary': `${styles['button']} ${styles['button--secondary']}`,
        'header-link': `${styles['link']} ${styles['header-link']}`,
        'header-button': `${styles['button']} ${styles['header-button']}`,
        'none': '',
    };

    return (
        <NextLink href={href} className={`${classNames[variant]} ${className}`} {...AnnotationsHelper.setFieldPath(fieldPath)}>
            {children}
        </NextLink>
    );
}

export default Link;
