import { LegalLayout } from './LegalLayout'

export function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <h2 className="text-lg font-semibold text-neutral-900">Geltungsbereich</h2>
      <p className="mt-4 text-neutral-700">
        Für Trainingsleistungen und Teilnahme am Vereinstraining gelten die Regelungen des TSV Schäftlarn sowie
        – soweit anwendbar – die Bedingungen des Deutschen Tennis Bundes und des Bayerischen Tennisverbands.
        Einzelheiten zu Gebühren, Kündigungsfristen und Haftung sind hier durch den Verein bzw. durch
        vollständige AGB zu ergänzen.
      </p>
      <h2 className="mt-10 text-lg font-semibold text-neutral-900">Vertragsgegenstand</h2>
      <p className="mt-4 text-neutral-700">
        Gegenstand ist die Organisation und Durchführung von Tennistraining in Abstimmung mit dem Verein.
        Individuelle Vereinbarungen treten vorrangig.
      </p>
    </LegalLayout>
  )
}
