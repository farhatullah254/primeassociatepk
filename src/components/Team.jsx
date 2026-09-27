import { Calculator, Check, GraduationCap } from 'lucide-react'
import { ASSOCIATE, TEAM } from '../data'
import { FacebookIcon, LinkedInIcon } from './SocialIcons'

const SOCIAL = {
  facebook: { Icon: FacebookIcon, label: 'Facebook', cls: 'hover:bg-[#1877F2]' },
  linkedin: { Icon: LinkedInIcon, label: 'LinkedIn', cls: 'hover:bg-[#0A66C2]' },
}

function SocialLink({ name, type, href }) {
  const { Icon, label, cls } = SOCIAL[type]
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on ${label}`}
      title={`${name} on ${label}`}
      className={`grid size-11 place-items-center rounded-xl bg-white/10 text-white transition ${cls}`}
    >
      <Icon className="size-5" />
    </a>
  )
}

export default function Team() {
  return (
    <section id="team" className="section bg-ink-900 text-slate-200" aria-labelledby="team-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow border-sky-300/30 bg-sky-300/10 text-sky-200">Meet the Team</p>
          <h2 id="team-title" className="section-title mt-4 !text-white">
            Advocates who take personal charge of your file
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            When you call Prime Associates, you speak directly to the lawyers who will handle your matter.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-ink-800/60"
            >
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={m.img}
                    alt={`${m.name}, ${m.role}`}
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                    className="size-20 shrink-0 rounded-full object-cover ring-2 ring-sky-300/60 ring-offset-4 ring-offset-ink-800 sm:size-24"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold !text-white sm:text-2xl">{m.name}</h3>
                    <p className="mt-1 font-semibold text-sky-300">{m.role}</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Credentials">
                  {m.creds.map((c) => (
                    <li
                      key={c}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-100"
                    >
                      <GraduationCap className="size-3.5" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{m.bio}</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-slate-200">
                  {m.focus.map((f) => (
                    <li key={f} className="flex items-start gap-1.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                {m.social && (
                  <div className="mt-6">
                    <SocialLink name={m.name} {...m.social} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <article className="mt-8 flex flex-col gap-5 rounded-3xl border border-sky-300/20 bg-gradient-to-br from-ink-800/80 to-brand/40 p-6 sm:p-7 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex items-center gap-4 lg:w-80 lg:shrink-0">
            {ASSOCIATE.logo ? (
              <img
                src={ASSOCIATE.logo}
                alt={`${ASSOCIATE.name} logo`}
                width="96"
                height="96"
                loading="lazy"
                className="size-16 shrink-0 rounded-2xl bg-white object-contain p-2 sm:size-20"
              />
            ) : (
              <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white text-brand shadow-lg sm:size-20">
                <Calculator className="size-8 sm:size-9" aria-hidden="true" />
              </span>
            )}
            <div className="min-w-0">
              <h3 className="text-xl font-extrabold !text-white sm:text-2xl">{ASSOCIATE.name}</h3>
              <p className="mt-1 text-sm font-semibold text-sky-300">{ASSOCIATE.role}</p>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] leading-relaxed text-slate-300">{ASSOCIATE.text}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ASSOCIATE.focus.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-100"
                >
                  <Check className="size-3.5 text-sky-300" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
