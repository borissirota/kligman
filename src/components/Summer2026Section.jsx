import { Section } from './Section'
import { site } from '../data/siteContent'

export function Summer2026Section() {
  const { summer2026 } = site

  return (
    <Section id="sommer-2026" title={summer2026.title} className="bg-white">
      <div className="space-y-6">
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm">
          <p className="max-w-3xl text-base leading-relaxed text-neutral-700">
            {summer2026.intro}
          </p>
        </div>

        <div className="space-y-4">
          {summer2026.sections.map((section) => (
            <details
              key={section.title}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="text-base font-semibold text-neutral-900">{section.title}</span>
                <span aria-hidden="true" className="text-base font-medium text-emerald-800">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>

              <div className="border-t border-neutral-100 px-5 py-5">
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <article
                      key={`${section.title}-${item.title ?? itemIndex}`}
                      className="rounded-lg border border-neutral-200 bg-neutral-50 p-4"
                    >
                      {item.date ? (
                        <p className="text-sm font-medium text-emerald-800">{item.date}</p>
                      ) : null}
                      {item.title ? (
                        <h3 className="mt-1 text-base font-semibold text-neutral-900">{item.title}</h3>
                      ) : null}
                      {item.bullets?.length ? (
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-700">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {item.note ? (
                        <p className="mt-3 text-sm font-medium text-neutral-600">{item.note}</p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
