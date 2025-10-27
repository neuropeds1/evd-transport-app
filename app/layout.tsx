import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EVD Transport App - ICP Risk Calculator',
  description: 'Quality & Safety During Intra-Hospital Transport of Patients With a Clamped External Ventricular Drain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  )
}

