import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact • Schumacher Design",
    description: "",
    keywords: ['schumacher','schumacher design','design'],
  };

export default function ContactLayout({
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