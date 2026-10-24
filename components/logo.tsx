import { Smile } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n'

export function Logo({ dict, className = '' }: { dict: Dictionary; className?: string }) {
  return (
    <a href="#top" className={`flex shrink-0 items-center gap-2 ${className}`} aria-label={dict.brand.logoAria}>
      <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm -rotate-6">
        <Smile className="size-6" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl font-bold text-foreground">Happy</span>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {dict.brand.logoSubtitle}
        </span>
      </span>
    </a>
  )
}
