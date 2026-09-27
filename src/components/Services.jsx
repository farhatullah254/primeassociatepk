import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES, whatsappLink } from '../data'

const FILTERS = ['All', 'Tax', 'Corporate', 'Legal']

export default function Services() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? SERVICES : SERVICES.filter((s) => s.tag === filter)

  return (
    <section id="services" className="section bg-slate-50" aria-labelledby="services-title">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow border-brand/15 bg-brand/5 text-brand">Our Professional Services</p>
            <h2 id="services-title" className="section-title mt-4">
              Tax, corporate and legal work under one roof
            </h2>
            <p className="urdu mt-2 text-xl text-brand" lang="ur">
              ہماری پروفیشنل سروسز
            </p>
            <p className="mt-3 text-lg text-slate-600">
              From your first NTN to a registered company, a protected trademark or a case in court, we handle
              the paperwork, filing and follow-up.
            </p>
          </div>

          <div role="group" aria-label="Filter services" className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === f
                    ? 'bg-brand text-white shadow-md shadow-brand/20'
                    : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-brand/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(({ icon: Icon, title, urdu, text, tag }) => (
            <li
              key={title}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-600 text-white shadow-md shadow-brand/20">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  {tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="urdu mt-1 text-base text-slate-500" lang="ur">
                {urdu}
              </p>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">{text}</p>
              <a
                href={whatsappLink(`Assalam o Alaikum, I need help with: ${title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-600"
                aria-label={`Ask about ${title} on WhatsApp`}
              >
                Ask about this <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
