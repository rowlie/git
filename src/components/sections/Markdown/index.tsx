import Markdown from "markdown-to-jsx";
import Link from "@/components/common/Link";
import Container from '@/components/common/Container';

import * as AnnotationsHelper from "@/lib/annotations";

export interface MarkdownSectionProps {
    className?: string;
    content: string;
}

export interface MarkdownSection extends MarkdownSectionProps {
    type: 'markdown'
}

import styles from './style.module.css';

export default function MarkdownSection(props: MarkdownSectionProps) {
    const { content, className = '' } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    return (
        <Container className={`${styles['content']} ${className}`}>
            <Markdown
                {...AnnotationsHelper.setFieldPath(fieldPath)}
                options={{
                    overrides: {
                        a: ({ children, ...props }) => {
                            return <Link href={props.href} variant='link'>{children}</Link>;
                        },
                    }
                }}
            >
                {content}
            </Markdown>
        </Container>
    );
}