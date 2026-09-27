import { whatsappLink } from '../data'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Prime Associates on WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 sm:right-6 sm:bottom-6"
    >
      <span className="pointer-events-none hidden rounded-xl bg-white px-3.5 py-2 text-sm font-semibold text-ink-900 shadow-lg ring-1 ring-slate-200 transition group-hover:translate-x-0 group-hover:opacity-100 sm:block sm:translate-x-2 sm:opacity-0">
        Chat on WhatsApp
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-wa text-white shadow-xl shadow-black/25 transition group-hover:scale-105 sm:size-16">
        <span className="wa-ping absolute inset-0 rounded-full bg-wa" aria-hidden="true" />
        <WhatsAppIcon className="relative size-8 sm:size-9" />
      </span>
    </a>
  )
}
