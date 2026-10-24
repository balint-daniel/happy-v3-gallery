import { CalendarHeart, PartyPopper } from 'lucide-react'
import { HeroSlideshow } from '@/components/hero-slideshow'
import type { Dictionary } from '@/lib/i18n'

export function Hero({ dict, heroPhotos }: { dict: Dictionary; heroPhotos: string[] }) {
  const { hero } = dict

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-sunny/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-mint/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 md:grid-cols-2 md:px-6 md:pb-24 md:pt-16">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <PartyPopper className="size-4" aria-hidden="true" />
            {hero.badge}
          </span>

          <h1 className="text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            {hero.titleStart} <span className="text-primary">{hero.titleHighlight}</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {hero.intro.before} <strong className="font-bold text-foreground">{hero.intro.playhouse}</strong>{' '}
            {hero.intro.middle} <strong className="font-bold text-foreground">{hero.intro.cellar}</strong>{' '}
            {hero.intro.after}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#foglalas"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <CalendarHeart className="size-5" aria-hidden="true" />
              {hero.ctaPrimary}
            </a>
            <a
              href="#rolunk"
              className="inline-flex items-center justify-center rounded-full px-6 py-4 font-bold text-foreground underline-offset-4 hover:underline"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-card shadow-2xl rotate-2 transition-transform duration-500 motion-safe:hover:rotate-0 motion-safe:hover:scale-[1.02] sm:aspect-[4/4]">
            <HeroSlideshow
              slideLabel={hero.slideAria}
              slides={[
                { src: '/images/hero.png', alt: hero.imageAlt },
                ...heroPhotos.map((src) => ({ src, alt: hero.ownPhotoAlt })),
              ]}
            />
          </div>
          <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl -rotate-3 sm:-left-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-sunny text-foreground">
              <PartyPopper className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-lg font-bold leading-tight">{hero.cardTitle}</p>
              <p className="text-sm text-muted-foreground">{hero.cardText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
