import { ArrowRight, BadgeCheck, Clock, Gavel, MapPin, Phone, Scale } from 'lucide-react'
import { CONTACT, whatsappLink } from '../data'
import WhatsAppIcon from './WhatsAppIcon'

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
              className="aspect-[5/6] w-full rounded-2xl object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-ink-950/85 p-4 backdrop-blur-md">
              <p className="text-base font-bold text-white">Salman Mahmood</p>
              <p className="text-sm text-sky-200">Tax Consultant &amp; Advocate High Court</p>
            </div>
          </div>

          <div className="absolute -left-4 top-8 hidden rounded-2xl bg-white p-4 text-ink-900 shadow-xl sm:flex sm:items-center sm:gap-3 lg:-left-10">
            <span className="grid size-10 place-items-center rounded-xl bg-sky/15 text-brand">
              <Scale className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold">FBR · Tribunals · LHC</span>
              <span className="block text-xs text-slate-600">Tax representation</span>
            </span>
          </div>

          <div className="absolute -right-3 top-1/2 hidden rounded-2xl bg-white p-4 text-ink-900 shadow-xl sm:flex sm:items-center sm:gap-3 lg:-right-6">
            <span className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
              <Gavel className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold">Criminal Law</span>
              <span className="block text-xs text-slate-600">Bail, trial &amp; appeals</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container-x mt-16">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {[
            ['Since 2012', 'Serving Layyah & beyond'],
            ['2 Advocates', 'Of the High Court on the team'],
            ['12 services', 'Tax, corporate & legal'],
            ['FBR · PRA · SECP', 'Registrations & returns filed'],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink-900/80 px-5 py-6">
              <dt className="sr-only">{v}</dt>
              <dd>
                <span className="flex items-center gap-2 text-xl font-extrabold text-white sm:text-2xl">
                  <BadgeCheck className="size-5 shrink-0 text-sky-300" aria-hidden="true" />
                  {k}
                </span>
                <span className="mt-1 block text-sm text-slate-300">{v}</span>
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
