import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT, NAV, SERVICES, whatsappLink } from '../data'
import { FacebookIcon } from './SocialIcons'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-slate-300">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="inline-block rounded-2xl bg-white p-3">
            <img
              src="/images/logo.webp"
              alt="Prime Associates Tax Consultants"
              width="223"
              height="220"
              loading="lazy"
              className="h-20 w-auto"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-300">
            Prime Associates Tax, Legal &amp; Corporate Consultants in Layyah. We provide tax, legal and corporate
            solutions for individuals and businesses since 2012.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prime Associates on Facebook"
              className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-[#1877F2]"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prime Associates on WhatsApp"
              className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-wa-700"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold uppercase tracking-wider !text-white">Quick links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider !text-white">Popular services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider !text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
              <span>
                <a href={CONTACT.mobileHref} className="hover:text-white">
                  {CONTACT.mobile}
                </a>
                {' · '}
                <a href={CONTACT.landlineHref} className="hover:text-white">
                  {CONTACT.landline}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
              <span>Office hours: {CONTACT.hours}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-white">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Prime Associates, Layyah. All rights reserved.</p>
          <p>
            Information on this site is general guidance, not legal advice. Please contact us about your own case.
          </p>
        </div>
      </div>
    </footer>
  )
}
