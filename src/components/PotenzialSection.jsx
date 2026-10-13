import { Section } from './Section'
import { site } from '../data/siteContent'

export function PotenzialSection() {
  const { potenzial } = site

  return (
    <Section id="potenzial" title={potenzial.title} className="bg-white">
      <p className="text-base leading-relaxed text-neutral-700">{potenzial.intro}</p>
      <p className="mt-8">
        <a
          href={potenzial.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-[#4169E1] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3557c7]"
        >
          {potenzial.ctaLabel}
        </a>
      </p>
    </Section>
  )
}
