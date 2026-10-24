import { ExternalLink, MapPin, PhoneCall } from 'lucide-react'
import { site } from '@/lib/site'
import type { Dictionary } from '@/lib/i18n'

export function Booking({ dict }: { dict: Dictionary }) {
  const { booking, brand } = dict

  return (
    <section id="foglalas" className="px-4 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-8 text-background sm:p-12 lg:col-span-3">
          <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full bg-primary/40 blur-2xl" />
          <div className="relative">
            <p className="font-bold uppercase tracking-widest text-sunny">{booking.eyebrow}</p>
            <h2 className="mt-3 text-balance text-4xl font-bold leading-tight sm:text-5xl">{booking.title}</h2>
            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-background/80">{booking.text}</p>

            <a
              href={site.phoneHref}
              className="group mt-8 flex w-full flex-col gap-1 rounded-3xl bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:-translate-y-1 sm:w-auto sm:flex-row sm:items-center sm:gap-5"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-card text-primary">
                <PhoneCall className="size-7 group-hover:animate-pulse" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-wider text-primary-foreground/85">
                  {booking.tapToCall}
                </span>
                <span className="font-heading text-3xl font-bold tracking-wide sm:text-4xl">{site.phoneDisplay}</span>
              </span>
            </a>

            <ol className="mt-10 grid gap-4 sm:grid-cols-3">
              {booking.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sunny font-heading font-bold text-foreground">
                    {i + 1}
                  </span>
                  <span className="leading-snug text-background/90">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="group rounded-[2rem] border border-border bg-card p-6 transition duration-500 hover:shadow-xl motion-safe:hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground transition-transform duration-500 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110">
                <MapPin className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{booking.addressTitle}</h3>
                <address className="mt-1 not-italic text-lg leading-relaxed text-muted-foreground">{brand.address}</address>
              </div>
            </div>
          </div>

          <MapCard dict={dict} />
        </div>
      </div>
    </section>
  )
}

function MapCard({ dict }: { dict: Dictionary }) {
  const { booking, brand } = dict

  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-h-72 flex-1 overflow-hidden rounded-[2rem] border border-border bg-secondary transition duration-500 hover:shadow-xl motion-safe:hover:-translate-y-1"
      aria-label={`${booking.mapAria} ${brand.address}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--mint) 1px, transparent 1px), linear-gradient(to bottom, var(--mint) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute left-0 right-0 top-1/3 h-5 -rotate-6 bg-card/90" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 top-0 w-5 rotate-12 bg-card/90" />
      <div aria-hidden="true" className="absolute -bottom-6 -right-6 size-32 rounded-full bg-sky" />

      <div className="relative m-auto flex flex-col items-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-8 ring-primary/20 transition-transform group-hover:-translate-y-1">
          <MapPin className="size-8" aria-hidden="true" />
        </span>
        <span className="mt-3 rounded-full bg-card px-4 py-2 text-sm font-bold shadow-md">{brand.name}</span>
      </div>

      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-bold text-background">
        {booking.directions}
        <ExternalLink className="size-4" aria-hidden="true" />
      </span>
    </a>
  )
}
