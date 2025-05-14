// app/services/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services • Lachy Schumacher Design",
  description:
    "Explore the full range of services offered by Lachy Schumacher Design — from bespoke web design and development to branding, SEO, and UI/UX design.",
  keywords: [
    "Web Design Services",
    "Custom Web Development",
    "Brand Identity Design",
    "UI/UX Design",
    "SEO Services Australia",
    "Schumacher Design Services",
    "Lachy Schumacher Design Studio"
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services • Lachy Schumacher Design",
    description:
      "From strategic branding to pixel-perfect web development, discover how Lachy Schumacher Design can elevate your digital presence.",
    url: "https://www.tydewest.com/services",
    siteName: "Lachy Schumacher Design",
    images: [
      {
        url: "https://static.tydewest.com/og-services.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Services by Lachy Schumacher Design",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services • Lachy Schumacher Design",
    description:
      "Discover the services we offer to transform your brand — including web design, development, branding, SEO, and more.",
    images: ["https://static.tydewest.com/og-services.jpg"],
    creator: "@tydewest", // Remove if not used
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}