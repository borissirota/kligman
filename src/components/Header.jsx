import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/siteContent'

const nav = [
  { href: '#tennisschule', label: 'Tennisschule' },
  { href: '#trainingsangebot', label: 'Trainingsangebot' },
  { href: '#sommer-2026', label: 'Sommer 2026' },
  { href: '#anmeldung', label: 'Anmeldung' },
  { href: '#anfahrt', label: 'Anfahrt' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/90 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={site.images.logo}
            alt=""
            className="h-9 w-auto max-w-[140px] shrink-0 object-contain object-left sm:h-10"
            width={160}
            height={56}
            decoding="async"
          />
          <span className="truncate text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
            {site.siteName}
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-emerald-800"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex rounded-md border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menü
        </button>
      </div>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-neutral-200 bg-white px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/impressum"
                className="block rounded-md px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
