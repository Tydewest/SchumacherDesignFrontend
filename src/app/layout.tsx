import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home • Lachy Schumacher Design",
  description: "Lachy Schumacher Design offers bespoke, high-impact web design and development services. We specialize in creating custom websites that transform brands and drive results.",
  keywords: ['Next.js', 'React', 'JavaScript']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
