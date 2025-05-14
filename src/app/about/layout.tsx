// app/about/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About • Lachy Schumacher Design",
  description:
    "Get to know Lachy Schumacher and the creative philosophy behind our bespoke, high-impact web design studio.",
  keywords: [
    "Lachy Schumacher",
    "About Lachy Schumacher Design",
    "Creative Web Design Sydney",
    "Boutique Design Agency Australia",
    "Web Developer Story",
    "Design Ethos"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About • Lachy Schumacher Design",
    description:
      "Discover the story behind Lachy Schumacher Design — a boutique creative studio transforming brands through web, UX, and digital craftsmanship.",
    url: "https://www.tydewest.com/about",
    siteName: "Lachy Schumacher Design",
    images: [
      {
        url: "https://tydewest.com/about-og-about.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "About Lachy Schumacher Design",
      },
    ],
    locale: "en_AU",
    type: "profile", // or "website" if this is about the studio
  },
  twitter: {
    card: "summary_large_image",
    title: "About • Lachy Schumacher Design",
    description:
      "Meet Lachy Schumacher, the creative mind behind our premium web design studio based in Australia.",
    images: ["https://tydewest.com/about-og-about.jpg"],
    creator: "@tydewest", // Remove or update if not applicable
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}