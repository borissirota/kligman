import { Link } from 'react-router-dom'
import { site } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex max-w-md items-start gap-3">
          <img
            src={site.images.logo}
            alt=""
            className="h-11 w-auto shrink-0 object-contain object-left sm:h-12"
            width={140}
            height={56}
            loading="lazy"
            decoding="async"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-neutral-900">{site.siteName}</p>
            <p className="mt-1 text-xs text-neutral-500">
              {site.trainer.name} · {site.trainer.club}
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Fußnavigation">
          <Link to="/impressum" className="text-neutral-600 hover:text-emerald-900">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-neutral-600 hover:text-emerald-900">
            Datenschutz
          </Link>
          <Link to="/agb" className="text-neutral-600 hover:text-emerald-900">
            AGB
          </Link>
        </nav>
      </div>
    </footer>
  )
}
