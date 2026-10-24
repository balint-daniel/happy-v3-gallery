'use client'

import Image from 'next/image'
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Camera, ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import { areaKeys, videoMimeType, type AreaKey, type MediaItem, type MediaLibrary } from '@/lib/media'
import type { Dictionary } from '@/lib/i18n'

type ViewerState = { area: AreaKey; index: number } | null

type GalleryContextValue = {
  library: MediaLibrary
  openGallery: (area: AreaKey, index?: number) => void
}

const GalleryContext = createContext<GalleryContextValue | null>(null)

export function useGallery() {
  const ctx = useContext(GalleryContext)
  if (!ctx) throw new Error('useGallery must be used inside <GalleryProvider>')
  return ctx
}

export function GalleryProvider({
  library,
  dict,
  children,
}: {
  library: MediaLibrary
  dict: Dictionary
  children: ReactNode
}) {
  const [state, setState] = useState<ViewerState>(null)
  const openGallery = useCallback((area: AreaKey, index = 0) => setState({ area, index }), [])

  return (
    <GalleryContext.Provider value={{ library, openGallery }}>
      {children}
      <MediaViewer state={state} setState={setState} library={library} dict={dict} />
    </GalleryContext.Provider>
  )
}

export function OpenGalleryButton({
  area,
  className,
  children,
}: {
  area: AreaKey
  className?: string
  children: ReactNode
}) {
  const { openGallery } = useGallery()
  return (
    <button type="button" onClick={() => openGallery(area)} className={className}>
      {children}
    </button>
  )
}

function MediaViewer({
  state,
  setState,
  library,
  dict,
}: {
  state: ViewerState
  setState: (state: ViewerState) => void
  library: MediaLibrary
  dict: Dictionary
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const isOpen = state !== null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
    document.documentElement.classList.toggle('overflow-hidden', isOpen)
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      onClose={() => setState(null)}
      aria-label={dict.gallery.viewer.dialogLabel}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-foreground p-0 text-background backdrop:bg-foreground/80"
    >
      {state && (
        <ViewerBody
          area={state.area}
          index={state.index}
          library={library}
          dict={dict}
          onChange={(area, index) => setState({ area, index })}
          onClose={() => setState(null)}
        />
      )}
    </dialog>
  )
}

function ViewerBody({
  area,
  index,
  library,
  dict,
  onChange,
  onClose,
}: {
  area: AreaKey
  index: number
  library: MediaLibrary
  dict: Dictionary
  onChange: (area: AreaKey, index: number) => void
  onClose: () => void
}) {
  const { gallery } = dict
  const items = library[area]
  const count = items.length
  const current = items[index]
  const activeThumbRef = useRef<HTMLButtonElement>(null)
  const touchStartX = useRef<number | null>(null)

  const go = useCallback(
    (delta: number) => {
      if (count < 2) return
      onChange(area, (index + delta + count) % count)
    },
    [area, count, index, onChange],
  )

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [area, index])

  const altFor = (i: number) => `${gallery.areas[area].title} – ${gallery.viewer.photoAlt} ${i + 1}/${count}`

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-3 border-b border-background/10 px-3 py-3 sm:px-6">
        <div
          role="tablist"
          aria-label={gallery.viewer.tabsAria}
          className="flex min-w-0 flex-1 gap-2 overflow-x-auto [scrollbar-width:none]"
        >
          {areaKeys.map((key) => {
            const active = key === area
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onChange(key, 0)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active ? 'bg-sunny text-foreground' : 'bg-background/10 text-background hover:bg-background/20'
                }`}
              >
                {gallery.areas[key].title}
                <span className={`ml-2 text-xs font-semibold ${active ? 'text-foreground/70' : 'text-background/60'}`}>
                  {library[key].length}
                </span>
              </button>
            )
          })}
        </div>
        {count > 0 && (
          <p className="hidden shrink-0 text-sm font-semibold tabular-nums text-background/70 sm:block" aria-live="polite">
            {index + 1} / {count}
          </p>
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label={gallery.viewer.close}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </header>

      {count === 0 || !current ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-background/10">
            <Camera className="size-8" aria-hidden="true" />
          </span>
          <p className="max-w-sm text-pretty text-lg text-background/80">{gallery.viewer.empty}</p>
        </div>
      ) : (
        <>
          <div
            className="relative min-h-0 flex-1"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return
              const dx = e.changedTouches[0].clientX - touchStartX.current
              touchStartX.current = null
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
            }}
          >
            {current.type === 'image' ? (
              <Image
                key={current.src}
                src={current.src || '/placeholder.svg'}
                alt={altFor(index)}
                fill
                sizes="100vw"
                className="object-contain p-2 sm:p-6"
                priority
              />
            ) : (
              <video
                key={current.src}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 size-full object-contain p-2 sm:p-6"
                aria-label={`${gallery.areas[area].title} – ${gallery.viewer.video} ${index + 1}/${count}`}
              >
                <source src={current.src} type={videoMimeType(current.src)} />
              </video>
            )}

            {count > 1 && (
              <>
                <NavButton side="left" label={gallery.viewer.prev} onClick={() => go(-1)} />
                <NavButton side="right" label={gallery.viewer.next} onClick={() => go(1)} />
              </>
            )}
          </div>

          <nav aria-label={gallery.viewer.thumbsAria} className="border-t border-background/10">
            <ul className="flex gap-2 overflow-x-auto px-3 py-3 [scrollbar-width:thin] sm:px-6">
              {items.map((item, i) => (
                <li key={item.src} className="shrink-0">
                  <button
                    ref={i === index ? activeThumbRef : undefined}
                    type="button"
                    onClick={() => onChange(area, i)}
                    aria-current={i === index}
                    aria-label={`${i + 1}/${count}${item.type === 'video' ? ` – ${gallery.viewer.video}` : ''}`}
                    className={`relative block size-16 overflow-hidden rounded-xl transition sm:size-20 ${
                      i === index ? 'ring-3 ring-sunny' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Thumb item={item} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  )
}

function NavButton({ side, label, onClick }: { side: 'left' | 'right'; label: string; onClick: () => void }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/15 backdrop-blur transition-colors hover:bg-background/30 sm:flex ${
        side === 'left' ? 'left-4' : 'right-4'
      }`}
    >
      <Icon className="size-6" aria-hidden="true" />
    </button>
  )
}

export function Thumb({ item, sizes = '80px' }: { item: MediaItem; sizes?: string }) {
  if (item.type === 'image') {
    return <Image src={item.src || '/placeholder.svg'} alt="" fill sizes={sizes} className="object-cover" />
  }
  return (
    <>
      <video muted playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 size-full object-cover">
        <source src={`${item.src}#t=0.1`} type={videoMimeType(item.src)} />
      </video>
      <span className="absolute inset-0 flex items-center justify-center bg-foreground/30">
        <Play className="size-5 fill-background text-background" aria-hidden="true" />
      </span>
    </>
  )
}
