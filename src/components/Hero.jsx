import { site } from '../data/siteContent'

const highlights = [
  { label: 'Seit 1996', detail: 'am TSV Schäftlarn' },
  { label: 'DTB A-Trainer', detail: 'zertifiziertes Team' },
  { label: 'Alle Altersstufen', detail: 'Kinder bis Erwachsene' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-20 overflow-hidden border-b border-emerald-900/10"
      aria-label="Einstieg"
    >
      <div className="relative bg-gradient-to-br from-emerald-50 via-white to-sky-50/60">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-16 left-1/4 h-56 w-56 rounded-full bg-[#4169E1]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-24">
          <div className="order-2 lg:order-1">
            <p className="section-eyebrow">{site.trainer.club}</p>
            <h1 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.65rem]">
              {site.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              {site.hero.subtitle}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-white/80 bg-white/70 px-3 py-3 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-sm font-bold text-neutral-900">{item.label}</p>
                  <p className="mt-0.5 text-xs text-neutral-500">{item.detail}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#tennisschule" className="btn-primary">
                Tennisschule kennenlernen
              </a>
              <a href="#kontakt" className="btn-secondary">
                Kontakt
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <figure className="relative">
              <div
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-[#4169E1]/20 blur-sm"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white shadow-xl shadow-emerald-900/10 ring-1 ring-neutral-200/50">
                <img
                  src={site.images.outdoorPortrait}
                  alt={`${site.trainer.name} beim Training im Freien am TSV Schäftlarn`}
                  className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4] lg:aspect-[4/5]"
                  width={800}
                  height={1000}
                  loading="eager"
                  decoding="async"
                />
                <figcaption className="border-t border-neutral-100/80 bg-white/90 px-4 py-3 text-xs text-neutral-500 backdrop-blur-sm">
                  Training im Freien – Schwerpunkt der Vereinsarbeit: TSV Schäftlarn.
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
