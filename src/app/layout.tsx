import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Tahir | Unity Game Developer',
  description: 'Professional Unity Game Developer specializing in C#, gameplay systems, mobile game optimization, Firebase integration, and Android game development.',
  keywords: ['Unity Developer', 'Unity Game Developer', 'Game Programmer', 'C#', 'Android Game Developer', 'Pakistan', 'Portfolio'],
  openGraph: {
    title: 'Muhammad Tahir | Unity Game Developer',
    description: 'Professional Unity Game Developer specializing in C#, gameplay systems, mobile game optimization, Firebase integration, and Android game development.',
    url: 'https://tahir-games-portfolio.web.app',
    siteName: 'Tahir Games Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
