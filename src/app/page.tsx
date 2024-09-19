import { notFound } from 'next/navigation';
import { getLayoutByPageType } from '@/components/';
import { getPageBySlug } from '@/utils/content';

const pageLayout = 'sections-page';

export default async function Home() {
  const Layout = getLayoutByPageType(pageLayout);

  const page = await getPageBySlug(pageLayout, '/');

  if (!page) {
    return notFound();
  }

  return (
    <Layout {...page} />
  );
}
