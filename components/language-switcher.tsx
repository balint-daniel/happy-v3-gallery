'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type Locale, localeMeta, locales } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ lang, label, className }: { lang: Locale; label: string; className?: string }) {
  const router = useRouter()

  return (
    <nav aria-label={label} className={cn('flex items-center rounded-full border border-border bg-card p-1 shadow-sm', className)}>
      {locales.map((code, i) => {
        const active = code === lang
        return (
          <span key={code} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="px-0.5 text-sm font-bold text-border">
                |
              </span>
            )}
            <Link
              href={`/${code}`}
              hrefLang={localeMeta[code].htmlLang}
              lang={localeMeta[code].htmlLang}
              aria-current={active ? 'true' : undefined}
              title={localeMeta[code].name}
              onClick={(event) => {
                if (active) {
                  event.preventDefault()
                  return
                }
                if (window.location.hash) {
                  event.preventDefault()
                  router.push(`/${code}${window.location.hash}`)
                }
              }}
              className={cn(
                'rounded-full px-3 py-1.5 text-xs font-extrabold tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                active
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              <span className="sr-only">{localeMeta[code].name}</span>
              <span aria-hidden="true">{localeMeta[code].short}</span>
            </Link>
          </span>
        )
      })}
    </nav>
  )
}
