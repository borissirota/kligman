import { useState } from 'react'
import { site } from '../data/siteContent'

const initial = { name: '', email: '', phone: '', message: '', consent: false }

export function ContactForm() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  function update(e) {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.consent) return
    const body = [
      `Name: ${form.name}`,
      `E-Mail: ${form.email}`,
      `Telefon: ${form.phone}`,
      '',
      form.message,
    ].join('\n')
    const to = site.contact.email
    const subject = encodeURIComponent(`Anfrage Tennis – ${form.name || 'Website'}`)
    window.location.href = `mailto:${to}?subject=${subject}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8"
      noValidate
    >
      <div className="sm:col-span-2">
        <label htmlFor="cf-name" className="block text-sm font-medium text-neutral-800">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={update}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm focus:border-emerald-800 focus:outline-none focus:ring-1 focus:ring-emerald-800"
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="block text-sm font-medium text-neutral-800">
          E-Mail
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={update}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm focus:border-emerald-800 focus:outline-none focus:ring-1 focus:ring-emerald-800"
        />
      </div>
      <div>
        <label htmlFor="cf-phone" className="block text-sm font-medium text-neutral-800">
          Telefon
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={update}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm focus:border-emerald-800 focus:outline-none focus:ring-1 focus:ring-emerald-800"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="block text-sm font-medium text-neutral-800">
          Nachricht
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={update}
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm focus:border-emerald-800 focus:outline-none focus:ring-1 focus:ring-emerald-800"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="flex cursor-pointer gap-3 text-sm text-neutral-700">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={update}
            className="mt-0.5 size-4 rounded border-neutral-300 text-emerald-800 focus:ring-emerald-800"
          />
          <span>
            Ich habe die{' '}
            <a href="/datenschutz" className="text-emerald-900 underline-offset-2 hover:underline">
              Datenschutzhinweise
            </a>{' '}
            zur Kenntnis genommen.
          </span>
        </label>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={!form.consent}
          className="w-full rounded-md bg-[#4169E1] px-5 py-3 text-sm font-medium text-white hover:bg-[#3557c7] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          Nachricht senden
        </button>
      </div>
      {sent && (
        <p className="sm:col-span-2 rounded-md border border-emerald-900/20 bg-emerald-50/80 px-4 py-3 text-sm text-neutral-800">
          Vielen Dank. Ihr E-Mail-Programm sollte eine Nachricht an{' '}
          <a href={`mailto:${site.contact.email}`} className="font-medium text-emerald-900">
            {site.contact.email}
          </a>{' '}
          öffnen – falls nicht, erreichen Sie uns telefonisch (Tel.{' '}
          <a href={`tel:${site.contact.phoneTel}`} className="font-medium text-emerald-900">
            {site.contact.phoneDisplay}
          </a>
          , Mobil{' '}
          <a href={`tel:${site.contact.mobileTel}`} className="font-medium text-emerald-900">
            {site.contact.mobileDisplay}
          </a>
          ).
        </p>
      )}
    </form>
  )
}
