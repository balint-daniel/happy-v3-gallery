import { Cake, Camera, Castle, Check, ChefHat, Church, Music, PartyPopper, Sun, Users } from 'lucide-react'
import { OpenGalleryButton } from '@/components/media-viewer'
import type { AreaKey } from '@/lib/media'
import type { Dictionary } from '@/lib/i18n'

const spaceAreas: AreaKey[] = ['jatszohaz', 'pince']

const spaceStyles = [
  { icon: Castle, color: 'bg-sunny' },
  { icon: Music, color: 'bg-sky' },
]

const highlightIcons = [Users, ChefHat, Sun]

const occasionIcons = [Cake, PartyPopper, Church, Users]

export function Concept({ dict }: { dict: Dictionary }) {
  const { concept } = dict

  return (
    <section id="rolunk" className="bg-card py-20 md:pb-[145px] md:pt-[71px]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold uppercase tracking-widest text-primary">{concept.eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">{concept.title}</h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{concept.text}</p>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {concept.occasions.map((label, i) => {
            const Icon = occasionIcons[i]
            return (
              <li
                key={label}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 font-semibold transition duration-300 hover:border-primary/50 hover:shadow-md motion-safe:hover:-translate-y-0.5"
              >
                <Icon className="size-4 text-primary transition-transform duration-300 motion-safe:group-hover:-rotate-12 motion-safe:group-hover:scale-110" aria-hidden="true" />
                {label}
              </li>
            )
          })}
        </ul>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {concept.spaces.map(({ eyebrow, title, text, items }, i) => {
            const { icon: Icon, color } = spaceStyles[i]
            return (
              <li
                key={title}
                className={`group relative flex flex-col overflow-hidden rounded-[2rem] ${color} p-8 transition duration-500 hover:shadow-2xl motion-safe:hover:-translate-y-1.5 sm:p-10`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-card text-foreground shadow-sm transition-transform duration-500 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground/70">{eyebrow}</p>
                    <h3 className="font-heading text-3xl font-bold">{title}</h3>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-foreground/80">{text}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-semibold">
                      <Check className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <OpenGalleryButton
                  area={spaceAreas[i]}
                  className="relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-card px-5 py-2.5 font-bold text-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <Camera className="size-4" aria-hidden="true" />
                  {concept.seePhotos}
                </OpenGalleryButton>
                <span aria-hidden="true" className="absolute -bottom-10 -right-10 size-32 rounded-full bg-card/30 transition-transform duration-700 motion-safe:group-hover:scale-150" />
              </li>
            )
          })}
        </ul>

        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {concept.highlights.map(({ title, text }, i) => {
            const Icon = highlightIcons[i]
            return (
              <li
                key={title}
                className="group rounded-3xl border border-border bg-background p-6 transition duration-500 hover:border-primary/40 hover:shadow-xl motion-safe:hover:-translate-y-1.5"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-500 group-hover:bg-primary group-hover:text-primary-foreground motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
