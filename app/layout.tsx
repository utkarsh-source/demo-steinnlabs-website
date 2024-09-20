/* eslint-disable import/no-default-export */
import localFont from 'next/font/local';

import { Providers } from './providers';

import type { Metadata } from 'next';

import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const geistSans = localFont({
  src: './fonts/Satoshi.woff',
  variable: '--font-satoshi-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/SpaceGrotesk.woff',
  variable: '--font-spacegrotesk-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Steinn Labs',
  description:
    'We help you conceptualize, design, develop, deploy and grow your app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
