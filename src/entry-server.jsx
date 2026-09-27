import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { CONTACT, FAQS, SERVICES, TEAM } from './data'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export function schema() {
  const business = {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'AccountingService'],
    name: 'Prime Associates Tax, Legal & Corporate Consultants',
    alternateName: 'Prime Associates Layyah',
    description:
      'Tax, legal and corporate consultants in Layyah led by Advocates High Court: NTN, income tax, sales tax, PRA, SECP, NGO, trademark, PEC, audit reports and criminal law.',
    image: '/og-image.jpg',
    logo: '/images/logo.webp',
    telephone: '+92-300-8247073',
    email: CONTACT.email,
    foundingDate: '2012',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Qadir Ali Hospital, Ghora Chowk, Kutchery Road',
      addressLocality: 'Layyah',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    areaServed: ['Layyah', 'Punjab', 'Pakistan'],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+92-300-8247073', contactType: 'customer service', availableLanguage: ['en', 'ur'] },
      { '@type': 'ContactPoint', telephone: '+92-606-415073', contactType: 'customer service' },
    ],
    sameAs: [CONTACT.facebook],
    employee: TEAM.map((m) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role,
      ...(m.social ? { sameAs: [m.social.href] } : {}),
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.text },
      })),
    },
  }
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return [business, faq]
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`)
    .join('\n    ')
}
