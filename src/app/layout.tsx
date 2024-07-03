import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter, EB_Garamond } from 'next/font/google';
import './globals.css';
import Header from '../components/header';

export const font_body = Inter({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const font_secundary = EB_Garamond({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-secundary',
  display: 'swap',
});

export const font_title = localFont({
  src: '../../fonts/BlackDramaDemo.ttf',
  variable: '--font-drama',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Barbershop',
  description: 'A melhor barbearia do país.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={` ${font_title.variable} ${font_body.variable}  ${font_secundary.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
