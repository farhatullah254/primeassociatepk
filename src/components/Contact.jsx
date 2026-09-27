import { useState } from 'react'
import { Clock, Mail, MapPin, Navigation, Phone, Send, Smartphone } from 'lucide-react'
import { CONTACT, SERVICES, whatsappLink } from '../data'
import WhatsAppIcon from './WhatsAppIcon'

const CHANNELS = [
  { icon: Smartphone, label: 'Mobile', value: CONTACT.mobile, href: CONTACT.mobileHref },
  { icon: WhatsAppIcon, label: 'WhatsApp', value: CONTACT.mobile, href: whatsappLink(), external: true },
  { icon: Phone, label: 'Office landline', value: CONTACT.landline, href: CONTACT.landlineHref },
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
]

function RouteMap() {
  return (
    <figure className="rounded-2xl bg-ink-900 p-5 text-white">
      <figcaption className="flex items-center justify-between gap-3">
        <span className="text-sm font-bold">Route on Kutchery Road</span>
        <span className="urdu text-sm text-sky-200" lang="ur">
          دفتر کا راستہ
        </span>
      </figcaption>
      <svg viewBox="0 0 640 200" className="mt-3 w-full" role="img" aria-labelledby="route-desc">
        <desc id="route-desc">
          Prime Associates is on Kutchery Road, just past Qadir Ali Hospital and west of Ghora Chowk. Coming from
          Bail Chowk, pass the General Bus Stand and Ghora Chowk, then continue past Qadir Ali Hospital.
        </desc>
        <rect x="10" y="84" width="620" height="44" rx="8" fill="#334155" />
        <line x1="20" y1="106" x2="620" y2="106" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="18 16" />
        <rect x="290" y="128" width="30" height="72" fill="#334155" />
        <line x1="305" y1="134" x2="305" y2="200" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="10 8" />
        <text x="325" y="188" fill="#cbd5e1" fontSize="12">DHQ Link Road</text>
        <text x="320" y="74" fill="#fcd34d" fontSize="15" fontWeight="700" textAnchor="middle">Kutchery Road</text>

        <g fill="#f87171">
          <path d="M60 58c-9 0-15 7-15 15 0 11 15 24 15 24s15-13 15-24c0-8-6-15-15-15Z" fill="#29a9e1" />
          <circle cx="60" cy="72" r="5" fill="#fff" />
          <path d="M150 58c-9 0-15 7-15 15 0 11 15 24 15 24s15-13 15-24c0-8-6-15-15-15Z" />
          <circle cx="150" cy="72" r="5" fill="#fff" />
          <path d="M305 80c-8 0-13 6-13 13 0 10 13 21 13 21s13-11 13-21c0-7-5-13-13-13Z" />
          <circle cx="305" cy="93" r="4" fill="#fff" />
          <path d="M440 132c-9 0-15 7-15 15 0 11 15 24 15 24s15-13 15-24c0-8-6-15-15-15Z" />
          <circle cx="440" cy="146" r="5" fill="#fff" />
          <path d="M590 58c-9 0-15 7-15 15 0 11 15 24 15 24s15-13 15-24c0-8-6-15-15-15Z" />
          <circle cx="590" cy="72" r="5" fill="#fff" />
        </g>
        <text x="60" y="42" fill="#7dd3fc" fontSize="13" fontWeight="800" textAnchor="middle">Prime Associates</text>
        <text x="150" y="30" fill="#e2e8f0" fontSize="12" textAnchor="middle">Qadir Ali</text>
        <text x="150" y="46" fill="#e2e8f0" fontSize="12" textAnchor="middle">Hospital</text>
        <text x="305" y="152" fill="#fcd34d" fontSize="13" fontWeight="700" textAnchor="end" dx="-18">Ghora Chowk</text>
        <text x="468" y="160" fill="#e2e8f0" fontSize="12">General Bus Stand</text>
        <text x="590" y="42" fill="#e2e8f0" fontSize="12" textAnchor="middle">Bail Chowk</text>
        <path d="M560 106h-60m-6 0 12-8m-12 8 12 8" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </figure>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const lines = [
      'Assalam o Alaikum Prime Associates,',
      form.name && `Name: ${form.name}`,
      form.service && `Service: ${form.service}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean)
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow border-brand/15 bg-brand/5 text-brand">Contact &amp; Location</p>
          <h2 id="contact-title" className="section-title mt-4">
            Visit our office or message us today
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Most matters start with a quick WhatsApp message. You can also call us or visit the office.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="min-w-0 space-y-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {CHANNELS.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-brand/40 hover:shadow-md"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {label}
                      </span>
                      <span className="block font-bold break-all text-ink-900">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a href={CONTACT.mobileHref} className="btn-primary w-full !py-4 text-base">
              <Phone className="size-5" aria-hidden="true" />
              Call Us Now · {CONTACT.mobile}
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Office hours</p>
                <p className="font-bold text-ink-900">{CONTACT.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Office address</p>
                <address className="font-bold not-italic text-ink-900">{CONTACT.address}</address>
                <p className="urdu text-base text-slate-600" lang="ur">
                  {CONTACT.addressUrdu}
                </p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-600"
                >
                  <Navigation className="size-4" aria-hidden="true" /> Get directions
                </a>
              </div>
            </div>

            <RouteMap />
          </div>

          <div className="min-w-0 space-y-6">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
              aria-labelledby="form-title"
            >
              <h3 id="form-title" className="text-xl font-bold">
                Send an enquiry on WhatsApp
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Fill this in and WhatsApp opens with your message ready to send.
              </p>
              <div className="mt-6 grid gap-4">
                <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-slate-800">
                  Your name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={set('name')}
                    required
                    className="w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </label>
                <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-slate-800">
                  Service needed
                  <select
                    name="service"
                    value={form.service}
                    onChange={set('service')}
                    className="w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                    <option>Other / not sure</option>
                  </select>
                </label>
                <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-slate-800">
                  How can we help?
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    className="w-full min-w-0 resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </label>
                <button type="submit" className="btn-wa mt-2 w-full !py-3.5 text-base">
                  <Send className="size-5" aria-hidden="true" />
                  Send on WhatsApp
                </button>
              </div>
            </form>

            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <iframe
                title="Map showing Ghora Chowk, Layyah"
                src={CONTACT.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
