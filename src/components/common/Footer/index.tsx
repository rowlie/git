import Container from '@/components/common/Container';

export type FooterProps = {
    copyrightText: string;
}

const Footer = (props: FooterProps) => {
    const { copyrightText } = props;

    return (
        <Container className="text-center pt-4 my-8 border-t">
            {copyrightText}
        </Container>
    );
};

export default Footer;