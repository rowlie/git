import * as AnnotationsHelper from "@/lib/annotations";
import style from './style.module.css';

export interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    const { className = '', children } = props;
    const annotations  = AnnotationsHelper.getAnnotations(props);
    
    return (
        <div className={`${style.container} ${className}`} {...annotations}>
            {children}
        </div>
    )
}

export default Container;
