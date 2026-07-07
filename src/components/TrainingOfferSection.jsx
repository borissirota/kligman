import { Section } from './Section'
import { site } from '../data/siteContent'

export function TrainingOfferSection() {
  const { contact, training } = site

  return (
    <Section id="trainingsangebot" title={training.title} className="bg-neutral-50/80">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="space-y-8">
          <p className="text-base leading-relaxed text-neutral-700">{training.intro}</p>

          <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-medium text-neutral-900">{training.unitNote}</p>
            <dl className="mt-4 divide-y divide-neutral-100">
              {training.prices.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-0.5 py-3 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <dt className="text-sm text-neutral-700">{row.label}</dt>
                  <dd className="text-sm font-semibold tabular-nums text-neutral-900 sm:text-right">
                    {row.amount}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-neutral-600">{training.priceFootnote}</p>
          </div>

          <p className="text-base leading-relaxed text-neutral-800">
            <a
              href={`tel:${contact.phoneTel}`}
              className="font-medium text-emerald-900 underline-offset-2 hover:underline"
            >
              Rufen Sie uns an
            </a>
            {' '}
            oder bitte kontaktieren Sie mich. Wir freuen uns auf die erste Trainingsstunde mit Ihnen!
          </p>

          <div className="space-y-4 border-t border-neutral-200 pt-8 text-base leading-relaxed text-neutral-700">
            <p>{training.seasonsKids}</p>
            <a
              href="#sommer-2026"
              className="inline-flex items-center justify-center rounded-md bg-[#4169E1] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3557c7]"
            >
              Sommer 2026
            </a>
            <p>{training.camps}</p>
          </div>
        </div>

        <figure className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm lg:sticky lg:top-24">
          <img
            src={site.images.trainingAction}
            alt="Aktive Trainingsszene in der Halle"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="border-t border-neutral-100 px-3 py-2 text-xs text-neutral-500">
            Training in der Halle – Fokus auf Technik und Spielnähe.
          </figcaption>
        </figure>
      </div>
    </Section>
  )
}
