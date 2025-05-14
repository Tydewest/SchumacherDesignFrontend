// app/contact/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact • Lachy Schumacher Design",
  description:
    "Start your next project with Lachy Schumacher Design. Contact us to discuss custom web design, development, and digital branding solutions.",
  keywords: [
    "Contact Lachy Schumacher",
    "Web Design Enquiry",
    "Design Studio Australia",
    "Sydney Web Designer",
    "Bespoke Digital Agency",
    "Creative Web Development"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact • Lachy Schumacher Design",
    description:
      "Reach out to Lachy Schumacher Design to bring your brand’s vision to life through bespoke, high-impact digital design.",
    url: "https://www.tydewest.com/contact",
    siteName: "Lachy Schumacher Design",
    images: [
      {
        url: "https://static.tydewest.com/og-contact.jpg", // Update to actual OG image path
        width: 1200,
        height: 630,
        alt: "Contact Lachy Schumacher Design",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact • Lachy Schumacher Design",
    description:
      "Have a project in mind? Contact Lachy Schumacher Design today.",
    images: ["https://static.tydewest.com/og-contact.jpg"],
    creator: "@tydewest", // Remove if not applicable
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}