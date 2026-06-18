import { Section } from './Section'
import { site } from '../data/siteContent'

export function RegistrationSection() {
  const { registration } = site

  return (
    <Section id="anmeldung" title={registration.title} className="bg-neutral-50">
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-md shadow-neutral-900/5 sm:p-8">
        <p className="text-base leading-relaxed text-neutral-700">{registration.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {registration.pdfs.map((pdf) => (
            <a
              key={pdf.label}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {pdf.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="btn-secondary"
          >
            Kontakt
          </a>
        </div>
        <p className="mt-6 text-sm text-neutral-500">{registration.note}</p>
      </div>
    </Section>
  )
}
