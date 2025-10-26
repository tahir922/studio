import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Tahir — Unity Game Developer | C# · Mobile Optimization · Ads & IAP',
  description: 'Experienced game developer specialising in C# scripting, gameplay mechanics, mobile optimisation and UI using DoTween.',
  openGraph: {
    title: 'Muhammad Tahir — Unity Game Developer',
    description: 'Experienced game developer specialising in C# scripting, gameplay mechanics, mobile optimisation and UI using DoTween.',
    url: 'https://tahir-games-portfolio.web.app', // Replace with actual URL
    siteName: 'Tahir Games Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630', // Replace with a proper OG image
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
