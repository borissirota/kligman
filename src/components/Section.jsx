export function Section({ id, title, eyebrow, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-neutral-200/60 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-3xl lg:max-w-5xl">
        {(eyebrow || title) && (
          <header className="mb-8 sm:mb-10">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {title && <div className="section-accent" aria-hidden="true" />}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
