// app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home • Lachy Schumacher Design",
  description: "Lachy Schumacher Design offers bespoke, high-impact web design and development services. We specialize in creating custom websites that transform brands and drive results.",
  keywords: [
    'Lachy Schumacher Design',
    'Web Design Sydney',
    'Custom Website Development',
    'UI UX Design',
    'Brand Identity Design',
    'SEO Optimised Websites',
    'Responsive Web Design',
    'High-Impact Digital Design'
  ],
  metadataBase: new URL("https://www.tydewest.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home • Lachy Schumacher Design",
    description: "Lachy Schumacher Design offers bespoke, high-impact web design and development services. We specialize in creating custom websites that transform brands and drive results.",
    url: "https://www.tydewest.com",
    siteName: "Lachy Schumacher Design",
    images: [
      {
        url: "https://static.tydewest.com/og-image.jpg", // Update this to your actual OG image path
        width: 1200,
        height: 630,
        alt: "Lachy Schumacher Design – High-Impact Web Design",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home • Lachy Schumacher Design",
    description: "Bespoke, high-impact web design that transforms brands.",
    images: ["https://static.tydewest.com/og-image.jpg"],
    creator: "@tydewest", // Replace or remove if not applicable
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lachy Schumacher Design",
              "url": "https://www.tydewest.com",
              "description": "Bespoke, high-impact web design and development in Australia.",
              "publisher": {
                "@type": "Organization",
                "name": "Lachy Schumacher Design",
                "url": "https://www.tydewest.com",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}