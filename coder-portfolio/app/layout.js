import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Geist({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Geist({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Geist_Mono({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira-code',
  display: 'swap',
});

const author = "Zeeshan Munir";

const description = "A creative MERN stack developer's portfolio showcasing projects and skills in modern web technologies like Next.js, React, Node.js, and more.";

const keywords = ["MERN stack developer", "Next.js", "React developer", "Node.js", "portfolio", "Zeeshan Munir", "web developer", "full-stack developer", "Tailwind CSS"];

const siteUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

export const metadata = {

  title: {
    default: `${author} | Creative MERN Stack Developer`,
    template: `%s | ${author}`,
  },

  description: description,
  keywords: keywords,
  author: [{ name: author }],
  creator: author,

  openGraph: {
    title: `${author}'s Portfolio`,
    description: description,
    url: siteUrl,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${author}'s Portfolio`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${author}'s Portfolio`,
    description: description,
    creator: '@ZeeshanMunir165', // Replace with your Twitter handle
    images: [`${siteUrl}/twitter-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700&family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable} antialiased bg-black`}
      >
        {/* 
        // 
         */}
        <Toaster position="top-right" />
        {children}
        <SpeedInsights />
        <Analytics />

      </body>
    </html>
  );
}
