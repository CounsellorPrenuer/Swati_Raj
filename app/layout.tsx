import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {getSiteSettings} from '@/lib/sanity.client'

export const metadata: Metadata = {
  title: 'SWAPATH - Career Guidance & Admission Guidance',
  description: 'Expert career guidance and admission counselling services. 20+ years of experience helping students find their way.',
  keywords: 'career guidance, admission guidance, education counselling, college selection',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const siteSettings = await getSiteSettings()

  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.0/tailwind.min.css" rel="stylesheet" />
      </head>
      <body>
        <Navbar siteSettings={siteSettings} />
        {children}
        <Footer siteSettings={siteSettings} />
      </body>
    </html>
  )
}
