import { Section } from './Section'
import { site } from '../data/siteContent'

export function TennisSchoolSection() {
  const [leadTrainer, ...supportTeam] = site.tennisSchool.team

  return (
    <Section id="tennisschule" title={site.tennisSchool.title} className="bg-white">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 text-base leading-relaxed text-neutral-700">
          <p>{site.tennisSchool.intro}</p>
          <p>{site.tennisSchool.aboutKligman}</p>
          <p>{site.tennisSchool.inGermany}</p>
          <p className="text-sm text-neutral-600">{site.tennisSchool.qualifications}</p>
          <p>{site.tennisSchool.teamNote}</p>
          <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white px-5 py-5 shadow-sm">
            <p className="font-semibold text-neutral-900">{site.tennisSchool.servicesTitle}</p>
            <p className="mt-2">{site.tennisSchool.servicesBody}</p>
          </div>
        </div>
        <div className="space-y-6">
          <figure className="overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
            <img
              src={site.images[leadTrainer.image]}
              alt={leadTrainer.alt}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="border-t border-neutral-100 px-4 py-4">
              <p className="text-lg font-semibold text-neutral-900">{leadTrainer.name}</p>
              <p className="text-sm text-neutral-600">{leadTrainer.role}</p>
              {leadTrainer.licenseUrl ? (
                <a
                  href={leadTrainer.licenseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex rounded-full border border-[#4169E1]/30 bg-[#4169E1]/10 px-3 py-1 text-xs font-medium text-[#1e3a8a] transition hover:bg-[#4169E1]/20"
                >
                  {leadTrainer.licenseLabel}
                </a>
              ) : null}
            </figcaption>
          </figure>

          <div className="grid gap-6 sm:grid-cols-2">
            {supportTeam.map((person) => (
              <figure
                key={person.name}
                className="overflow-hidden rounded-lg border border-neutral-200 shadow-sm"
              >
                <img
                  src={site.images[person.image]}
                  alt={person.alt}
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="border-t border-neutral-100 px-3 py-3">
                  <p className="font-semibold text-neutral-900">{person.name}</p>
                  <p className="text-sm text-neutral-600">{person.role}</p>
                  {person.licenseUrl ? (
                    <a
                      href={person.licenseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex rounded-full border border-[#4169E1]/30 bg-[#4169E1]/10 px-3 py-1 text-xs font-medium text-[#1e3a8a] transition hover:bg-[#4169E1]/20"
                    >
                      {person.licenseLabel}
                    </a>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
