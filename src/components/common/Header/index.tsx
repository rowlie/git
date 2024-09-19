import Image from 'next/image';
import Container from '@/components/common/Container';
import Link from '@/components/common/Link';

import { type Link as LinkType } from '../types';

import styles from './style.module.css';
import Logo from './logo.svg'

export type HeaderProps = {
    links?: LinkType[];
    title: string;
}

const logoWidth = 125;

const Header = (props: HeaderProps) => {
    const { links, title } = props;

    return (
        <header className={styles['header']}>
            <Container className={styles['content']}>
                <Link href='/' variant='none'>
                    <Image src={Logo} alt={title} width={logoWidth} />
                </Link>
                {links && links.length > 0 && (
                    <div className={styles['links']}>
                        {links.map((link) => {
                            const { url, title, variant = 'header-link' } = link;

                            return (
                                <Link key={url} href={url} variant={variant}>
                                    {title}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </Container>
        </header>
    );
};

export default Header;
