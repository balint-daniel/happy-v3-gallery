'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { LanguageSwitcher } from '@/components/language-switcher'
import { site } from '@/lib/site'
import type { Dictionary, Locale } from '@/lib/i18n'

export function SiteHeader({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false)
  const { nav } = dict

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:h-20 md:px-6">
        <Logo dict={dict} />

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <nav aria-label={nav.mainAria} className="flex items-center gap-6 lg:gap-8">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-4" aria-hidden="true" />
              <span>
                <span className="hidden lg:inline">{nav.booking} </span>
                <span className="whitespace-nowrap">{site.phoneDisplay}</span>
              </span>
            </a>
          </nav>
          <LanguageSwitcher lang={lang} label={nav.languageAria} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher lang={lang} label={nav.languageAria} />
          <a
            href={site.phoneHref}
            className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-label={`${nav.callAria} ${site.phoneDisplay}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.closeMenu : nav.openMenu}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label={nav.mobileAria}
          className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden animate-in fade-in slide-in-from-top-2"
        >
          <ul className="flex flex-col">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 font-heading text-lg font-semibold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-primary-foreground"
          >
            <Phone className="size-5" aria-hidden="true" />
            {nav.booking} {site.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  )
}
