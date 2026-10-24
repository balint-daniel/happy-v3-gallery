'use client'

import Image from 'next/image'
import { ArrowUpRight, Camera, Clapperboard, Images } from 'lucide-react'
import { Thumb, useGallery } from '@/components/media-viewer'
import { areaCovers, areaKeys, type AreaKey } from '@/lib/media'
import type { Dictionary } from '@/lib/i18n'

const areaStyles: Record<AreaKey, { tag: string; button: string }> = {
  jatszohaz: { tag: 'bg-sunny text-foreground', button: 'bg-sunny text-foreground' },
  pince: { tag: 'bg-sky text-foreground', button: 'bg-sky text-foreground' },
  terasz: { tag: 'bg-mint text-foreground', button: 'bg-mint text-foreground' },
}

export function Gallery({ dict }: { dict: Dictionary }) {
  const { gallery } = dict
  const { library, openGallery } = useGallery()

  return (
    <section id="galeria" className="pb-20 pt-0 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-bold uppercase tracking-widest text-primary">{gallery.eyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">{gallery.title}</h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">{gallery.text}</p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {areaKeys.map((key) => {
            const area = gallery.areas[key]
            const items = library[key]
            const photoCount = items.filter((item) => item.type === 'image').length
            const videoCount = items.length - photoCount
            const previews = items.filter((item) => item.type === 'image').slice(0, 3)
            const hasMedia = items.length > 0
            const styles = areaStyles[key]

            return (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => openGallery(key)}
                  className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[2rem] text-left shadow-sm transition duration-500 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-safe:hover:-translate-y-1.5"
                >
                  <Image
                    src={areaCovers[key] || '/placeholder.svg'}
                    alt={area.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent"
                  />

                  <span
                    className={`absolute left-4 top-4 -rotate-3 rounded-full px-3 py-1 text-sm font-bold shadow-sm transition-transform group-hover:rotate-0 ${styles.tag}`}
                  >
                    {area.label}
                  </span>

                  {previews.length > 0 && (
                    <div aria-hidden="true" className="absolute right-4 top-4 flex">
                      {previews.map((item, i) => (
                        <span
                          key={item.src}
                          className="relative -ml-6 size-14 overflow-hidden rounded-lg border-[3px] border-card bg-card shadow-lg transition-transform duration-500 first:ml-0 sm:size-16"
                          style={{ transform: `rotate(${(i - 1) * 8}deg)`, zIndex: previews.length - i }}
                        >
                          <Thumb item={item} sizes="64px" />
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 text-background">
                    <h3 className="font-heading text-3xl font-bold">{area.title}</h3>
                    <p className="text-pretty text-sm leading-relaxed text-background/85">{area.text}</p>
                    <div className="mt-1 flex items-center justify-between gap-3">
                      {hasMedia ? (
                        <span className="flex items-center gap-3 text-sm font-semibold text-background/85">
                          <span className="flex items-center gap-1">
                            <Images className="size-4" aria-hidden="true" />
                            {photoCount} {gallery.photos}
                          </span>
                          {videoCount > 0 && (
                            <span className="flex items-center gap-1">
                              <Clapperboard className="size-4" aria-hidden="true" />
                              {videoCount} {gallery.videos}
                            </span>
                          )}
                        </span>
                      ) : (
                        <span className="text-sm font-semibold text-background/70">{gallery.soon}</span>
                      )}
                      <span
                        className={`inline-flex shrink-0 items-center gap-1 rounded-full px-4 py-2 text-sm font-bold transition-transform motion-safe:group-hover:translate-x-0.5 ${styles.button}`}
                      >
                        <span className="sr-only sm:not-sr-only">{gallery.open}</span>
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="mt-6 flex items-start gap-4 rounded-3xl border border-dashed border-primary/40 bg-card p-5 sm:items-center sm:p-6">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Camera className="size-6" aria-hidden="true" />
          </span>
          <div>
            <p className="font-heading text-lg font-bold">{gallery.honestTitle}</p>
            <p className="text-pretty leading-relaxed text-muted-foreground">{gallery.honestText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
