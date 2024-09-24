import Container from '@/components/common/Container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import * as AnnotationsHelper from '@/lib/annotations';

import styles from './style.module.css';

import type { Author } from '@/components/common/types';

export interface Testimonial {
    quote: string;
    author: Author;
}

export interface TestimonialsSectionProps {
    title: string;
    subtitle?: string;
    className?: string;
    testimonials?: Testimonial[];
}

export interface TestimonialsSection extends TestimonialsSectionProps {
    type: 'testimonials';
}

const TestimonialsSection = (props: TestimonialsSectionProps) => {
    const { title, subtitle, className, testimonials } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    return (
        <section className={`${styles['testimonials-section']} ${className}`} {...AnnotationsHelper.setFieldPath(fieldPath)}>
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
                {testimonials && testimonials.length > 0 && (
                    <div className={styles['testimonials-container']}>
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className='bg-card' {...AnnotationsHelper.setFieldPath(`.testimonials.${index}`)}>
                                <CardContent className='p-6'>
                                    <blockquote className='text-lg mb-4' {...AnnotationsHelper.setFieldPath('.quote')}>'{testimonial.quote}'</blockquote>
                                    {testimonial.author && (
                                        <div className='flex items-center' {...AnnotationsHelper.setFieldPath('.author')}>
                                            <Avatar className='h-12 w-12 mr-4'>
                                                <AvatarImage src={testimonial.author.image?.url} alt={testimonial.author.name} />
                                                <AvatarFallback>{testimonial.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <cite className='font-semibold not-italic'>{testimonial.author.name}</cite>
                                                {testimonial.author.title && (
                                                    <p className='text-sm text-muted-foreground'>{testimonial.author.title}</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}

export default TestimonialsSection;