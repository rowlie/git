import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { getSiteSettings } from '@/utils/content';

import { hexToHSL } from '@/lib/colors';

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
  const { title, header, footer, theme } = siteSettings;

  return (
    <html lang='en'>
      <body>
        {theme && (
          <style>
            {`
            :root {
              --background: ${hexToHSL(theme.background)};
              --foreground: ${hexToHSL(theme.foreground)};
              --primary: ${hexToHSL(theme.primary)};
              --primary-foreground: ${hexToHSL(theme.primaryForeground)};
              --secondary: ${hexToHSL(theme.secondary)};
              --secondary-foreground: ${hexToHSL(theme.secondaryForeground)};
              --muted: ${hexToHSL(theme.muted)};
              --muted-foreground: ${hexToHSL(theme.mutedForeground)};
              --accent: ${hexToHSL(theme.accent)};
              --accent-foreground: ${hexToHSL(theme.accentForeground)};
              --destructive: ${hexToHSL(theme.destructive)};
              --destructive-foreground: ${hexToHSL(theme.destructiveForeground)};
              --card: ${hexToHSL(theme.card)};
              --card-foreground: ${hexToHSL(theme.cardForeground)};
              --border: ${hexToHSL(theme.border)};
              --input: ${hexToHSL(theme.input)};
              --ring: ${hexToHSL(theme.ring)};
              --radius: ${theme.radius}px;
            }
          `}
          </style>
        )}
        <Header {...header} title={title} />
        {children}
        <Footer {...footer} />
      </body>
    </html>
  );
}
