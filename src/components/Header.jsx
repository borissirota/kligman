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
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 shadow-sm shadow-neutral-900/5 backdrop-blur-md">
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
          <span className="truncate text-base font-bold tracking-tight text-neutral-900 sm:text-lg">
            {site.siteName}
          </span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-emerald-800"
            >
              {item.label}
            </a>
          ))}
          <a href="#anmeldung" className="btn-primary !px-4 !py-2 !text-xs">
            Jetzt anmelden
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:border-neutral-300 lg:hidden"
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
          className="border-t border-neutral-200 bg-white px-4 py-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-emerald-50 hover:text-emerald-900"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#anmeldung"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Jetzt anmelden
              </a>
            </li>
            <li>
              <Link
                to="/impressum"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50"
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
