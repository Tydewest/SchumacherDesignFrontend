// app/work/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Work • Lachy Schumacher Design",
  description:
    "Browse selected works by Lachy Schumacher Design — a showcase of high-impact websites, visual identities, and digital experiences crafted with purpose.",
  keywords: [
    "Lachy Schumacher portfolio",
    "Web design showcase",
    "Featured work",
    "Design case studies",
    "Schumacher design work",
    "Creative agency Sydney",
    "UX UI portfolio",
  ],
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work • Lachy Schumacher Design",
    description:
      "Explore our portfolio of bespoke web design and branding projects that drive results and elevate digital presence.",
    url: "https://www.tydewest.com/work",
    siteName: "Lachy Schumacher Design",
    images: [
      {
        url: "https://static.tydewest.com/og-work.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Lachy Schumacher Design Work Showcase",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work • Lachy Schumacher Design",
    description:
      "See the creative work Lachy Schumacher Design has delivered — websites, identities, and experiences made to transform brands.",
    images: ["https://static.tydewest.com/og-work.jpg"],
    creator: "@tydewest", // Remove or update if not applicable
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}