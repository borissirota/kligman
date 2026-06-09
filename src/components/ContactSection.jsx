import { Section } from './Section'
import { ContactForm } from './ContactForm'
import { site } from '../data/siteContent'

export function ContactSection() {
  return (
    <Section id="kontakt" title={site.contactSection.title} className="bg-neutral-50/80">
      <p className="mb-8 text-base text-neutral-700">{site.contactSection.intro}</p>
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        <address className="not-italic lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Adresse</p>
          <p className="mt-2 text-base text-neutral-800">
            {site.trainer.name}
            <br />
            {site.contact.street}
            <br />
            {site.contact.zipCity}
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-emerald-800">Mobil</p>
          <p className="mt-2">
            <a
              href={`tel:${site.contact.mobileTel}`}
              className="text-lg font-medium text-neutral-900 hover:text-emerald-900"
            >
              {site.contact.mobileDisplay}
            </a>
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-emerald-800">E-Mail</p>
          <p className="mt-2">
            <a
              href={`mailto:${site.contact.email}`}
              className="text-lg font-medium text-neutral-900 hover:text-emerald-900"
            >
              {site.contact.email}
            </a>
          </p>
          <p className="mt-3 text-xs text-neutral-500">
            Anfragen über das Formular werden an diese Adresse geschickt.
          </p>
        </address>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
