import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About • Schumacher Design",
    description: "",
    keywords: ['schumacher','schumacher design','design'],
  };

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }