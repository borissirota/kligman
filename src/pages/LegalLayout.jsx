import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { site } from '../data/siteContent'

export function LegalLayout({ title, children, showContactButton = false }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="border-b border-neutral-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-sm font-medium text-emerald-900 hover:underline"
          >
            <img
              src={site.images.logo}
              alt=""
              className="h-8 w-auto object-contain object-left"
              width={120}
              height={48}
              decoding="async"
            />
            <span>← Zur Startseite</span>
          </Link>
          {showContactButton ? (
            <a
              href="/#kontakt"
              className="inline-flex shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:border-[#4169E1]/40 hover:text-[#1e3a8a]"
            >
              Kontakt
            </a>
          ) : null}
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-700">{children}</div>
      </article>
      <Footer />
    </div>
  )
}
