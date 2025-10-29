import type { Metadata } from 'next'
import './globals.css'
import { ThemeWrapper } from '@/components/ThemeWrapper'

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
      <body className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  )
}

