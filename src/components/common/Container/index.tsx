import style from './style.module.css';

export interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    const { className = '', children } = props;

    return (
        <div className={`${style.container} ${className}`}>
            {children}
        </div>
    )
}

export default Container;
