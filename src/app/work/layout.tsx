import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Work • Schumacher Design",
    description: "",
    keywords: ['schumacher','schumacher design','design'],
  };

export default function WorkLayout({
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