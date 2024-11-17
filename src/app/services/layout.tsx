import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Services • Schumacher Design",
    description: "",
    keywords: ['schumacher','schumacher design','design'],
  };

export default function ServicesLayout({
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