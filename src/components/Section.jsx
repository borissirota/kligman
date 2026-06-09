export function Section({ id, title, eyebrow, children, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-neutral-200/80 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-3xl lg:max-w-5xl">
        {(eyebrow || title) && (
          <header className="mb-8 sm:mb-10">
            {eyebrow && (
              <p className="text-sm font-medium tracking-wide text-emerald-800">{eyebrow}</p>
            )}
            {title && (
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
