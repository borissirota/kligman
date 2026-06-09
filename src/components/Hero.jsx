import { site } from '../data/siteContent'

export function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-20 border-b border-neutral-200/80 bg-white"
      aria-label="Einstieg"
    >
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-800">
            {site.trainer.club}
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.35rem]">
            {site.hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            {site.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#tennisschule"
              className="inline-flex items-center justify-center rounded-md bg-emerald-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-900"
            >
              Tennisschule kennenlernen
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 hover:border-emerald-800/40 hover:text-emerald-900"
            >
              Kontakt
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <figure className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-sm">
            <img
              src={site.images.outdoorPortrait}
              alt={`${site.trainer.name} beim Training im Freien am TSV Schäftlarn`}
              className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4] lg:aspect-[4/5]"
              width={800}
              height={1000}
              loading="eager"
              decoding="async"
            />
            <figcaption className="border-t border-neutral-100 px-3 py-2 text-xs text-neutral-500">
              Training im Freien – Schwerpunkt der Vereinsarbeit: TSV Schäftlarn.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
