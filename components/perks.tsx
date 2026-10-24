import Image from 'next/image'
import { Camera, Check, Mountain, Sparkles } from 'lucide-react'
import { OpenGalleryButton } from '@/components/media-viewer'
import type { Dictionary } from '@/lib/i18n'

export function Perks({ dict }: { dict: Dictionary }) {
  const { perks } = dict

  return (
    <section id="extrak" aria-labelledby="perks-title" className="bg-background pb-20 pt-0 md:pb-[101px]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="perks-title" className="sr-only">
          {perks.srTitle}
        </h2>

        <div className="grid gap-6 lg:grid-cols-5">
          <article className="group flex flex-col overflow-hidden rounded-[2rem] bg-sunny transition duration-500 hover:shadow-2xl motion-safe:hover:-translate-y-1.5 lg:col-span-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/maszofal.png"
                alt={perks.imageAlt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 -rotate-3 rounded-full bg-sunny px-3 py-1 text-sm font-bold text-foreground shadow-sm transition-transform group-hover:rotate-0">
                {perks.badge}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-card text-foreground shadow-sm transition-transform duration-500 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110">
                  <Mountain className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-3xl font-bold sm:text-4xl">{perks.title}</h3>
              </div>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80">{perks.text}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#foglalas"
                  className="inline-flex w-fit items-center rounded-full bg-foreground px-5 py-2.5 font-semibold text-background transition-opacity hover:opacity-90"
                >
                  {perks.cta}
                </a>
                <OpenGalleryButton
                  area="terasz"
                  className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-foreground/80 px-5 py-2 font-semibold text-foreground transition-colors hover:bg-foreground/10"
                >
                  <Camera className="size-4" aria-hidden="true" />
                  {perks.seeReal}
                </OpenGalleryButton>
              </div>
            </div>
          </article>

          <article className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground transition duration-500 hover:shadow-2xl hover:shadow-primary/30 motion-safe:hover:-translate-y-1.5 lg:col-span-2 lg:self-start">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
              <Sparkles className="size-4 transition-transform duration-500 motion-safe:group-hover:rotate-45 motion-safe:group-hover:scale-125" aria-hidden="true" />
              {perks.cleaningBadge}
            </span>
            <h3 className="mt-5 text-balance font-heading text-2xl font-bold">{perks.cleaningTitle}</h3>
            <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/85">{perks.cleaningText}</p>
            <ul className="mt-5 flex flex-col gap-2">
              {perks.cleaningPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 font-semibold leading-snug">
                  <Check className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
