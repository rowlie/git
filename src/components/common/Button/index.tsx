import * as AnnotationsHelper from '@/utils/annotations';
import styles from './style.module.css';

export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    className?: string;
}

const Button = (props: ButtonProps) => {
    const { children, variant = 'primary', className, onClick } = props;
    const fieldPath = AnnotationsHelper.getFieldPath(props);

    const classNames = {
        'primary': `${styles['button']} ${styles['button--primary']}`,
        'secondary': `${styles['button']} ${styles['button--secondary']}`,
    }

    return (
        <button className={`${classNames[variant]} ${className}`} onClick={onClick} {...AnnotationsHelper.setFieldPath(fieldPath)}>
            {children}
        </button>
    );
}

export default Button;
