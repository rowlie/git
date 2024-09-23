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
    faqs?: Faq[];
}

export interface FaqSection extends FaqSectionProps {
    type: 'faq-section';
};

const FaqSection = (props: FaqSectionProps) => {
    const { className = '', title, subtitle, faqs, isSingleMode = true } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    return (
        <section className={`${styles['faq']} ${className}`} {...AnnotationsHelper.setFieldPath(fieldPath)}>
            <Container className={styles['content']}>
                <h2
                    className={styles['title']}
                    {...AnnotationsHelper.setFieldPath('.title')}
                >
                    {title}
                </h2>
                {subtitle && (
                    <p
                        className={styles['subtitle']}
                        {...AnnotationsHelper.setFieldPath('.subtitle')}
                    >
                        {subtitle}
                    </p>
                )}
                {faqs && faqs.length > 0 && (
                    <Accordion type={isSingleMode ? 'single' : 'multiple'} collapsible className={className}>
                        {faqs.map((faq, index) => (
                            <AccordionItem value={faq.question} key={faq.question} {...AnnotationsHelper.setFieldPath(`.faqs.${index}`)}>
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