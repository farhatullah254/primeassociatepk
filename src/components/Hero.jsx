import { ArrowRight, CalendarCheck, Clock, FileCheck, Gavel, Landmark, LayoutGrid, MapPin, Phone, Scale } from 'lucide-react'
import { CONTACT, whatsappLink } from '../data'
import WhatsAppIcon from './WhatsAppIcon'

const BADGES = [
  {
    icon: Scale,
    title: 'FBR · Tribunals · LHC',
    text: 'Tax representation',
    mobile: ['Tax Litigation', 'FBR, tribunals & LHC'],
    pos: '-left-4 top-8 lg:-left-10',
  },
  {
    icon: Gavel,
    title: 'Criminal Law',
    text: 'Bail, trial & appeals',
    mobile: ['Criminal Law', 'Bail, trial & appeals'],
    pos: '-right-3 top-1/2 lg:-right-6',
  },
]

const STATS = [
  { icon: CalendarCheck, value: 'Since 2012', label: 'Serving Layyah & beyond' },
  { icon: Landmark, value: 'High Court', label: 'Team of Advocates' },
  { icon: LayoutGrid, value: '12 Services', label: 'Tax, corporate & legal' },
  { icon: FileCheck, value: 'FBR · SECP', label: 'Plus PRA & IPO filings' },
]

const HIGHLIGHTS = ['NTN & Income Tax', 'Sales Tax & PRA', 'SECP Company', 'NGO & Trust', 'Trademark', 'Criminal Law']

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink-900 pt-28 pb-20 text-white sm:pt-32 lg:pt-36 lg:pb-28"
    >
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-10rem] -z-10 size-[36rem] rounded-full bg-brand-600/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-12rem] left-[-8rem] -z-10 size-[28rem] rounded-full bg-sky/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow border-sky-300/30 bg-sky-300/10 text-sky-200">
            <MapPin className="size-3.5" aria-hidden="true" />
            Ghora Chowk, Layyah
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] !text-white sm:text-5xl lg:text-6xl">
            Tax, Legal &amp; Corporate <span className="text-sky-300">Consultants</span> in Layyah
          </h1>

          <p className="urdu mt-4 text-lg text-sky-100/90 sm:text-2xl" lang="ur">
            پرائم ایسوسی ایٹس ٹیکس لیگل اینڈ کارپوریٹ کنسلٹنٹس
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">
            One office for NTN and income tax returns, sales tax and PRA, SECP company and NGO registration,
            trademarks, audit reports and criminal cases, led by{' '}
            <strong className="font-semibold text-white">Advocates of the High Court</strong>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-wa !px-6 !py-3.5 text-base">
              <WhatsAppIcon className="size-5" />
              WhatsApp Us
            </a>
            <a href={CONTACT.mobileHref} className="btn-ghost-dark !px-6 !py-3.5 text-base">
              <Phone className="size-5" aria-hidden="true" />
              <span>
                Call Us Now <span className="font-medium text-slate-300">· {CONTACT.mobile}</span>
              </span>
            </a>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-slate-300">
            <Clock className="size-4 text-sky-300" aria-hidden="true" />
            Office hours: {CONTACT.hours}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Key services">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-100"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40 backdrop-blur">
            <img
              src="/images/salman-mahmood.webp"
              alt="Salman Mahmood, Tax Consultant and Advocate High Court, at the Prime Associates office"
              width="600"
              height="720"
              fetchPriority="high"
              className="aspect-[4/3] w-full rounded-2xl object-cover object-[center_28%] sm:aspect-[5/6] sm:object-center"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-ink-950/85 px-4 py-3 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:rounded-2xl sm:p-4">
              <p className="text-[15px] font-bold text-white sm:text-base">Salman Mahmood</p>
              <p className="text-[13px] text-sky-200 sm:text-sm">Tax Consultant &amp; Advocate High Court</p>
            </div>
          </div>

          <ul className="mt-3 grid grid-cols-2 gap-3 sm:hidden">
            {BADGES.map(({ icon: Icon, mobile: [title, text] }) => (
              <li key={title} className="flex items-start gap-2.5 rounded-xl bg-white p-3 text-ink-900 shadow-lg">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] leading-tight font-bold">{title}</span>
                  <span className="mt-0.5 block text-xs leading-tight text-slate-600">{text}</span>
                </span>
              </li>
            ))}
          </ul>

          {BADGES.map(({ icon: Icon, title, text, pos }) => (
            <div
              key={title}
              className={`absolute hidden rounded-2xl bg-white p-4 text-ink-900 shadow-xl sm:flex sm:items-center sm:gap-3 ${pos}`}
            >
              <span className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold">{title}</span>
                <span className="block text-xs text-slate-600">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-x mt-12 sm:mt-16">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex flex-col bg-ink-900/85 px-4 py-5 sm:px-6 sm:py-6">
              <Icon className="size-5 text-sky-300 sm:size-6" aria-hidden="true" />
              <dt className="order-last mt-1 text-[13px] leading-snug text-slate-300 sm:text-sm">{label}</dt>
              <dd className="mt-3 text-lg leading-tight font-extrabold whitespace-nowrap text-white sm:text-xl lg:text-2xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="#services"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 hover:text-white"
        >
          Explore all services <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
