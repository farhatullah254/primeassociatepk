import { Briefcase, CircleCheck, Languages, Scale, ShieldCheck, Smartphone } from 'lucide-react'

const POINTS = [
  {
    icon: Scale,
    title: 'Run by lawyers',
    text: 'Your file is prepared by Advocates of the High Court. If a filing turns into a notice or an appeal, the same team represents you.',
  },
  {
    icon: Briefcase,
    title: 'Tax, corporate and criminal in one office',
    text: 'You don’t need separate consultants for your returns, your company and your court case.',
  },
  {
    icon: Smartphone,
    title: 'Start on WhatsApp',
    text: 'Send photos of your documents and get a checklist back, without repeated trips to the office.',
  },
  {
    icon: Languages,
    title: 'Plain Urdu and English',
    text: 'We explain what the law requires and what it will cost before any work starts.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidential',
    text: 'Your CNIC, financial records and case details stay private and are used only for your matter.',
  },
  {
    icon: CircleCheck,
    title: 'Deadline reminders',
    text: 'We remind you before return dates and renewals, so you avoid penalties and stay on the Active Taxpayers List.',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow border-brand/15 bg-brand/5 text-brand">Why Prime Associates</p>
          <h2 id="about-title" className="section-title mt-4">
            A Layyah firm that knows both the tax code and the courtroom
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Since 2012, Prime Associates has provided tax, legal and corporate services from Kutchery Road, near
            Ghora Chowk in Layyah. Our team of chartered accountants and corporate, civil and criminal lawyers handles
            compliance from start to finish for salaried people, traders, contractors, schools, NGOs and growing
            companies.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Because the firm is led by practising advocates, you get more than form-filling. Our advice considers
            what happens if the department questions your return, and we can represent you when it does. Our work
            follows the Finance Act 2026 and FBR’s latest rate card.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
            {[
              ['2012', 'Serving clients since'],
              ['15 yrs', 'Courtroom experience'],
              ['8+ yrs', 'Tax & corporate law'],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="text-sm text-slate-500">{v}</dt>
                <dd className="mt-1 text-2xl font-extrabold text-brand">{k}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-2xl border border-slate-200 p-5">
              <Icon className="size-6 text-sky" aria-hidden="true" strokeWidth={2.2} />
              <h3 className="mt-3 text-base font-bold">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
