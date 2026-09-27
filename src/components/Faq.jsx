import { ChevronDown } from 'lucide-react'
import { FAQS } from '../data'

export default function Faq() {
  return (
    <section id="faq" className="section bg-slate-50" aria-labelledby="faq-title">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow border-brand/15 bg-brand/5 text-brand">FAQ · Updated for 2026</p>
          <h2 id="faq-title" className="section-title mt-4">
            Common questions about tax and registration
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            These answers follow the Finance Act 2026 and FBR’s withholding tax rate card for Tax Year 2027. Rates
            change every budget, so message us to confirm what applies to you.
          </p>
        </div>

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group p-5 sm:p-6" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold text-ink-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                <h3 className="text-[inherit]">{f.q}</h3>
                <ChevronDown
                  className="mt-1 size-5 shrink-0 text-brand transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
