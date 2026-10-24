import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { Fredoka, Nunito } from 'next/font/google'
import { getDictionary, isLocale, localeMeta, locales } from '@/lib/i18n'
import '../globals.css'

const fredoka = Fredoka({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fredoka',
  weight: ['500', '600', '700'],
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
})

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    generator: 'v0.app',
    alternates: {
      canonical: `/${lang}`,
      languages: { hu: '/hu', 'sr-Latn': '/sr', 'x-default': '/hu' },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: localeMeta[lang].ogLocale,
      type: 'website',
    },
    icons: {
      icon: [
        { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
        { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-icon.png',
    },
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fdf8ee',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <html lang={localeMeta[lang].htmlLang} className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
