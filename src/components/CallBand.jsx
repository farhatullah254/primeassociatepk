import { Clock, Phone } from 'lucide-react'
import { CONTACT, whatsappLink } from '../data'
import WhatsAppIcon from './WhatsAppIcon'

export default function CallBand() {
  return (
    <section aria-labelledby="call-title" className="pb-20 sm:pb-24">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-ink-900 px-6 py-12 text-center sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:text-left">
          <div
            className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-sky/25 blur-3xl"
            aria-hidden="true"
          />
          <div>
            <h2 id="call-title" className="text-3xl font-extrabold !text-white sm:text-4xl">
              Need help with a tax, corporate or legal matter?
            </h2>
            <p className="mt-3 flex items-center justify-center gap-2 text-lg text-slate-200 lg:justify-start">
              <Clock className="size-5 text-sky-300" aria-hidden="true" />
              Speak to an advocate today · Office hours {CONTACT.hours}
            </p>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <a href={CONTACT.mobileHref} className="btn bg-white !px-6 !py-4 text-base text-brand shadow-lg hover:bg-sky-50">
              <Phone className="size-5" aria-hidden="true" />
              <span>
                Call Us Now <span className="font-semibold text-slate-600">· {CONTACT.mobile}</span>
              </span>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-wa !px-6 !py-4 text-base">
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
