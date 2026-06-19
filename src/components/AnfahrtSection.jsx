import { Section } from './Section'
import { site } from '../data/siteContent'

export function AnfahrtSection() {
  const { anfahrt } = site
  const { club } = anfahrt

  return (
    <Section id="anfahrt" title={anfahrt.title} className="bg-white">
      <p className="text-base leading-relaxed text-neutral-700">{anfahrt.intro}</p>

      <div className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50/80 p-5 sm:p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Sportgelände (Verein)</h3>
        <p className="mt-3 text-base text-neutral-800">
          {club.name}
          <br />
          {club.street}
          <br />
          {club.zipCity}
        </p>
        <p className="mt-4">
          <a
            href={anfahrt.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-emerald-900 hover:underline"
          >
            {anfahrt.mapsLabel}
          </a>
        </p>
        <p className="mt-4 text-sm text-neutral-700">
          Tel.:{' '}
          <a href={`tel:${club.phoneTel}`} className="font-medium text-emerald-900 hover:underline">
            {club.phone}
          </a>
          <br />
          Fax: {club.fax}
          <br />
          E-Mail:{' '}
          <a href={`mailto:${club.email}`} className="font-medium text-emerald-900 hover:underline">
            {club.email}
          </a>
        </p>
      </div>

      <h3 className="mt-10 text-lg font-semibold text-neutral-900">So finden Sie zu uns</h3>
      <ul className="mt-6 space-y-8">
        {anfahrt.routes.map((route) => (
          <li key={route.heading}>
            <h4 className="font-semibold text-neutral-900">{route.heading}</h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base">{route.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
