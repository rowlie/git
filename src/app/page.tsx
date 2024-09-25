import { notFound } from 'next/navigation';
import { getLayoutByPageType, SECTIONS_PAGE } from '@/components/';
import { getPageBySlug } from '@/lib/content';

export default async function Home() {
  const Layout = getLayoutByPageType(SECTIONS_PAGE);

  const page = await getPageBySlug(SECTIONS_PAGE, '/');

  if (!page) {
    return notFound();
  }

  return (
    <Layout {...page} />
  );
}
