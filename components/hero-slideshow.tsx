'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const INTERVAL_MS = 2500

export function HeroSlideshow({ slides, slideLabel }: { slides: { src: string; alt: string }[]; slideLabel: string }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [slides.length])

  return (
    <>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src || '/placeholder.svg'}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="(min-width: 768px) 50vw, 100vw"
          aria-hidden={i !== active}
          className={`object-cover transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {slides.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-1.5 rounded-full bg-foreground/30 px-2.5 py-2 backdrop-blur">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${slideLabel} ${i + 1}/${slides.length}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all ${i === active ? 'w-5 bg-background' : 'w-2 bg-background/60'}`}
            />
          ))}
        </div>
      )}
    </>
  )
}
