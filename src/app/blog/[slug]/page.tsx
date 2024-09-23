import { notFound } from 'next/navigation';
import { getLayoutByPageType, BLOG_POST } from '@/components/';
import { getPageBySlug } from '@/utils/content';

import { type Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;

  const page = await getPageBySlug(BLOG_POST, `/${slug}`);

  if (!page) {
    return notFound();
  }

  return {
    title: page.title,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const page = await getPageBySlug(BLOG_POST, `/${slug}`);

  if (!page) {
    return notFound();
  }

  const Layout = getLayoutByPageType(BLOG_POST);

  return (
    <Layout {...page} />
  );
}
