import NextLink from 'next/link';
import { Button } from "@/components/ui/button"
import * as AnnotationsHelper from "@/lib/annotations";

import { type Link } from '../../types';

export type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
}


const Link = (props: LinkProps) => {
    const { href, children, className = '', variant = 'link' } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    return (
        <Button asChild variant={variant}>
            <NextLink href={href} className={className} {...AnnotationsHelper.setFieldPath(fieldPath)}>
                {children}
            </NextLink>
        </Button>
    );
}

export default Link;
