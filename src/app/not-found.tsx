import Container from '@/components/common/Container';
import Link from '@/components/common/Link';

export default function NotFoundPage() {
    return (
        <Container className='flex flex-col h-96 justify-center items-center'>
            <h1>404</h1>
            <p>Page not found!</p>
            <Link href='/' variant='default'>
                Go back to home
            </Link>
        </Container>
    );
}
