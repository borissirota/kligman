import { LegalLayout } from './LegalLayout'
import { site } from '../data/siteContent'

export function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p className="text-sm text-neutral-600">{site.legal.impressumNote}</p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">Angaben gemäß § 5 TMG</h2>
      <p className="mt-4">
        {site.trainer.name}
        <br />
        {site.contact.street}
        <br />
        {site.contact.zipCity}
      </p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">Kontakt</h2>
      <p className="mt-4">
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
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
      </h2>
      <p className="mt-4">
        {site.trainer.name}
        <br />
        {site.contact.street}
        <br />
        {site.contact.zipCity}
      </p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">Haftung für Inhalte</h2>
      <p className="mt-4 text-neutral-700">
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
        der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
      </p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">Haftung für Links</h2>
      <p className="mt-4 text-neutral-700">
        Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
    </LegalLayout>
  )
}
