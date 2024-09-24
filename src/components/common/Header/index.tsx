import NextLink from 'next/link';
import Image from 'next/image';
import Link from '@/components/common/Link';
import Container from '@/components/common/Container';

import { type Link as LinkType } from '../../types';

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
                <NextLink href='/'>
                    <Image src={Logo} alt={title} width={logoWidth} />
                </NextLink>
                {links && links.length > 0 && (
                    <div className={styles['links']}>
                        {links.map((link) => {
                            const { url, title, variant = 'link' } = link;

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
