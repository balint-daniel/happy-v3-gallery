import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Concept } from '@/components/concept'
import { Perks } from '@/components/perks'
import { Gallery } from '@/components/gallery'
import { Booking } from '@/components/booking'
import { SiteFooter } from '@/components/site-footer'
import { GalleryProvider } from '@/components/media-viewer'
import { getDictionary, isLocale } from '@/lib/i18n'
import { getHeroPhotos, getMediaLibrary } from '@/lib/media.server'

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  const library = getMediaLibrary()
  const heroPhotos = getHeroPhotos()

  return (
    <GalleryProvider library={library} dict={dict}>
      <SiteHeader lang={lang} dict={dict} />
      <main>
        <Hero dict={dict} heroPhotos={heroPhotos} />
        <Concept dict={dict} />
        <Perks dict={dict} />
        <Gallery dict={dict} />
        <Booking dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </GalleryProvider>
  )
}
