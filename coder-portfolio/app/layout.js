import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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

export const metadata = {
  title: "Zeeshan's Portfolio",
  description: "Full-Stack Developer Portfolio",
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

        {children}
        <SpeedInsights />
        <Analytics />
        
      </body>
    </html>
  );
}
