import { notFound } from 'next/navigation';
import { getLayoutByPageType, SECTIONS_PAGE } from '@/components/';
import { getPageBySlug } from '@/utils/content';

import { type Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;

  const page = await getPageBySlug(SECTIONS_PAGE, `/${slug}`);

  if (!page) {
    return notFound();
  }

  return {
    title: page.title,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const page = await getPageBySlug(SECTIONS_PAGE, `/${slug}`);

  if (!page) {
    return notFound();
  }

  const Layout = getLayoutByPageType(SECTIONS_PAGE);

  return (
    <Layout {...page} />
  );
}
