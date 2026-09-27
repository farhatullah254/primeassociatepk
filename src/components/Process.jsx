import { STEPS } from '../data'

export default function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow border-brand/15 bg-brand/5 text-brand">How It Works</p>
          <h2 id="process-title" className="section-title mt-4">
            Four simple steps from first message to finished filing
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <span className="text-5xl font-extrabold text-sky/40" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-bold">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
