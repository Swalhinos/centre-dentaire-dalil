import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  title: 'Dr Houssam Eddine Dalil | Chirurgien-Dentiste à Taza — Maroc',
  description:
    'Cabinet dentaire du Dr Houssam Eddine Dalil à Taza — Maroc. Implants dentaires, orthodontie, blanchiment, prothèses et urgences. Prenez rendez-vous sur WhatsApp.',
  keywords: ['dentiste Taza', 'dentiste Taza', 'Dr Houssam Eddine Dalil', 'cabinet dentaire Taza', 'implant dentaire Maroc', 'blanchiment dentaire Taza', 'dental implants Morocco'],
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Dr Houssam Eddine Dalil | Dentist in Taza',
    description:
      'Premium dental care in the heart of Taza. Book your appointment with Dr Houssam Eddine Dalil today.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport: Viewport = {
  themeColor: '#4FC3F7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${playfair.variable} ${plexArabic.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
