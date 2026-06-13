import { Section } from './Section'
import { site } from '../data/siteContent'

export function RegistrationSection() {
  const { registration } = site

  return (
    <Section id="anmeldung" title={registration.title}>
      <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-base leading-relaxed text-neutral-700">{registration.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {registration.pdfs.map((pdf) => (
            <a
              key={pdf.label}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800"
            >
              {pdf.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 hover:border-green-700/40"
          >
            Kontakt
          </a>
        </div>
        <p className="mt-6 text-sm text-neutral-500">{registration.note}</p>
      </div>
    </Section>
  )
}
