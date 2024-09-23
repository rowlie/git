import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { getSiteSettings } from '@/utils/content';

import './globals.css';

export async function generateMetadata() {
  const siteSettings = await getSiteSettings();

  const { title } = siteSettings;

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettings();
  const { title, header, footer } = siteSettings;

  return (
    <html lang='en'>
      <body>
        <Header {...header} title={title} />
        {children}
        <Footer {...footer} />
      </body>
    </html>
  );
}
