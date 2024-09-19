import { notFound } from 'next/navigation';
import { getLayoutByPageType } from '@/components/';
import { getPageBySlug } from '@/utils/content';
import { Metadata } from 'next';

const pageLayout = 'sections-page';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;

  const page = await getPageBySlug(pageLayout, `/${slug}`);

  if (!page) {
    return notFound();
  }

  return {
    title: page.title,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const page = await getPageBySlug(pageLayout, `/${slug}`);

  if (!page) {
    return notFound();
  }

  const Layout = getLayoutByPageType(pageLayout);

  return (
    <Layout {...page} />
  );
}
