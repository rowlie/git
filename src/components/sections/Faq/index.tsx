import Container from '@/components/common/Container';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import * as AnnotationsHelper from '@/lib/annotations';
import styles from './style.module.css';

export interface Faq {
    question: string;
    answer: string;
}

export interface FaqSectionProps {
    title: string;
    subtitle?: string;
    className?: string;
    isSingleMode?: boolean;
    faq?: Faq[];
}

export interface FaqSection extends FaqSectionProps {
    type: 'faq-section'
};

const FaqSection = (props: FaqSectionProps) => {
    const { className = '', title, subtitle, faq, isSingleMode = true } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    return (
        <section className={`${styles['faq']} ${className}`} {...AnnotationsHelper.setFieldPath(fieldPath)}>
            <Container className={styles['content']}>
                <div>
                    {title && (
                        <h2 className={styles['title']}>{title}</h2>
                    )}
                    {subtitle && (
                        <p className={styles['subtitle']}>{subtitle}</p>
                    )}
                </div>
                {faq && faq.length > 0 && (
                    <Accordion type={isSingleMode ? 'single' : 'multiple'} collapsible className={className}>
                        {faq.map((faq) => (
                            <AccordionItem value={faq.question} key={faq.question}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                )}
            </Container>
        </section>
    );
}

export default FaqSection;