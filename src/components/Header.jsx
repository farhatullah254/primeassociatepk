import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { CONTACT, NAV } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Prime Associates, back to top">
          <img
            src="/images/logo.webp"
            alt="Prime Associates Tax Consultants"
            width="223"
            height="220"
            className="h-12 w-auto lg:h-14"
          />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-lg px-3 py-2 text-[15px] font-medium text-slate-700 transition hover:bg-slate-100 hover:text-brand"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.mobileHref}
            className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex"
            aria-label={`Call us now on ${CONTACT.mobile}`}
          >
            <Phone className="size-4" aria-hidden="true" />
            <span>
              Call Us Now <span className="hidden font-medium text-white/80 xl:inline">· {CONTACT.mobile}</span>
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-xl text-ink-900 hover:bg-slate-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[28rem]' : 'max-h-0 border-t-0'
        }`}
      >
        <nav aria-label="Mobile" className="container-x py-3">
          <ul className="grid gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={CONTACT.mobileHref} className="btn-primary mt-3 w-full sm:hidden">
            <Phone className="size-4" aria-hidden="true" />
            Call Us Now · {CONTACT.mobile}
          </a>
        </nav>
      </div>
    </header>
  )
}
