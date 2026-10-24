import { Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { site } from '@/lib/site'
import type { Dictionary } from '@/lib/i18n'

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <Logo dict={dict} />
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 font-bold text-foreground hover:text-primary">
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <p>{dict.brand.address}</p>
          <p>
            {'© '}
            {new Date().getFullYear()} {dict.brand.fullName}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
