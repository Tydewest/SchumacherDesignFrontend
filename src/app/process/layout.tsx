import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Process • Schumacher Design",
    description: "",
    keywords: ['schumacher','schumacher design','design'],
  };

export default function ProcessLayout({
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