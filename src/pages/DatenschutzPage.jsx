import { LegalLayout } from './LegalLayout'
import { site } from '../data/siteContent'

export function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutz">
      <p className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        {site.legal.datenschutzNote}
      </p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">1. Verantwortliche Stelle</h2>
      <p className="mt-4">
        {site.trainer.name}
        <br />
        {site.contact.street}
        <br />
        {site.contact.zipCity}
        <br />
        Tel.:{' '}
        <a href={`tel:${site.contact.phoneTel}`} className="text-emerald-900 hover:underline">
          {site.contact.phoneDisplay}
        </a>
        <br />
        Mobil:{' '}
        <a href={`tel:${site.contact.mobileTel}`} className="text-emerald-900 hover:underline">
          {site.contact.mobileDisplay}
        </a>
        <br />
        E-Mail:{' '}
        <a href={`mailto:${site.contact.email}`} className="text-emerald-900 hover:underline">
          {site.contact.email}
        </a>
      </p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">2. Hosting & technische Bereitstellung</h2>
      <p className="mt-4 text-neutral-700">
        Diese Website wird technisch bereitgestellt durch den jeweiligen Hosting-Anbieter (bitte Anbieter,
        Serverstandort und Auftragsverarbeitungsvertrag im Verein bzw. mit Ihrem Webdienstleister eintragen).
      </p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">3. Kontaktformular</h2>
      <p className="mt-4 text-neutral-700">
        Wenn Sie uns per Formular Anfragen zukommen lassen, öffnet sich Ihr E-Mail-Programm mit einer Nachricht
        an{' '}
        <a href={`mailto:${site.contact.email}`} className="text-emerald-900 hover:underline">
          {site.contact.email}
        </a>
        . Die Angaben aus dem Formular werden in diese E-Mail übernommen und zur Bearbeitung Ihrer Anfrage
        verarbeitet. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder
        zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, sonst Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an der Beantwortung von Anfragen).
      </p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">4. Speicherdauer</h2>
      <p className="mt-4 text-neutral-700">
        Daten werden gelöscht, sobald sie für die Erreichung des Zwecks nicht mehr erforderlich sind, sofern
        keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">5. Ihre Rechte</h2>
      <p className="mt-4 text-neutral-700">
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Außerdem steht Ihnen ein Beschwerderecht
        bei einer Datenschutzaufsichtsbehörde zu.
      </p>
    </LegalLayout>
  )
}
