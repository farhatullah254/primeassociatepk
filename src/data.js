import {
  Building,
  ClipboardCheck,
  Copyright,
  FileExclamationPoint,
  FileText,
  Gavel,
  Handshake,
  HardHat,
  House,
  Landmark,
  Receipt,
  Users,
} from 'lucide-react'

export const SITE_URL = 'https://primeassociatepk.com'

export const CONTACT = {
  mobile: '0300-8247073',
  mobileHref: 'tel:+923008247073',
  landline: '0606-415073',
  landlineHref: 'tel:+92606415073',
  email: 'primeassociates73@gmail.com',
  address: 'Near Qadir Ali Hospital, Ghora Chowk, Layyah',
  addressUrdu: 'نزد قادر علی ہسپتال، گھوڑا چوک، لیہ',
  hours: '8:00 AM – 6:00 PM',
  facebook: 'https://www.facebook.com/08layyah',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Qadir+Ali+Hospital+Ghora+Chowk+Layyah',
  mapsEmbed:
    'https://www.google.com/maps?q=Ghora+Chowk,+Layyah,+Punjab,+Pakistan&z=16&output=embed',
}

export const whatsappLink = (text = 'Assalam o Alaikum, I need help with a tax / legal matter.') =>
  `https://wa.me/923008247073?text=${encodeURIComponent(text)}`

export const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'Why Us' },
  { href: '#team', label: 'Team' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export const SERVICES = [
  {
    icon: FileText,
    title: 'Income Tax Returns & NTN',
    urdu: 'انکم ٹیکس گوشوارے، رجسٹریشن (NTN)',
    text: 'NTN registration on FBR IRIS, annual income tax returns and wealth statements for salaried people, traders, landlords and professionals. We also get you onto the Active Taxpayers List (ATL).',
    tag: 'Tax',
  },
  {
    icon: Receipt,
    title: 'Sales Tax Registration & Returns',
    urdu: 'سیل ٹیکس گوشوارے، رجسٹریشن',
    text: 'STRN registration with FBR, monthly sales tax returns, annexures and record keeping for manufacturers, distributors, wholesalers and retailers.',
    tag: 'Tax',
  },
  {
    icon: Landmark,
    title: 'PRA Registration & Returns',
    urdu: 'PRA رجسٹریشن، گوشوارے',
    text: 'Punjab Revenue Authority registration and monthly returns for sales tax on services, including restaurants, contractors, consultants and other service providers.',
    tag: 'Tax',
  },
  {
    icon: House,
    title: 'Property Tax Challans 236C, 236K, 236A',
    urdu: 'نجی سکول ایجوکیشن اور تمام محکمہ کے چالان',    text: 'Advance tax challans for property sales (236C), property purchases (236K) and auctions (236A), plus private school education challans and other departmental challans. We check your ATL status first, because non-filers pay up to 18.5%.',
    tag: 'Tax',
  },
  {
    icon: FileExclamationPoint,
    title: 'FBR Notices & Tax Litigation',
    urdu: 'ایف بی آر نوٹس اور اپیلیں',
    text: 'Replies to FBR notices, amended assessments, and representation in appeals before the Commissioner (Appeals), the Appellate Tribunal and the Lahore High Court.',
    tag: 'Legal',
  },
  {
    icon: Building,
    title: 'Company Registration (SECP)',
    urdu: 'کمپنی رجسٹریشن (SECP)',
    text: 'Name reservation and incorporation of single-member and private limited companies on SECP, with ongoing corporate compliance and annual filings.',
    tag: 'Corporate',
  },
  {
    icon: Handshake,
    title: 'Firm Registration & Partnership Deed (AOP)',
    urdu: 'فرم رجسٹریشن، پارٹنرشپ ڈیڈ (AOP)',
    text: 'Partnership deeds drafted and firms registered with the Registrar of Firms, then registered with FBR as an Association of Persons (AOP).',
    tag: 'Corporate',
  },
  {
    icon: Users,
    title: 'NGO, Trust & Society Registration',
    urdu: 'NGO رجسٹریشن، ٹرسٹ، سوسائٹی رجسٹریشن',
    text: 'Registration of NGOs, trusts and societies, including constitution and trust deeds, bylaws, and tax registration once registered.',
    tag: 'Corporate',
  },
  {
    icon: Copyright,
    title: 'Trademark & Copyright',
    urdu: 'ٹریڈ مارک، کاپی رائٹ',
    text: 'Trademark search, filing and follow-up with IPO Pakistan so your brand name and logo are protected. We also handle copyright registration for your work.',
    tag: 'Corporate',
  },
  {
    icon: HardHat,
    title: 'PEC Registration',
    urdu: 'PEC رجسٹریشن',
    text: 'Pakistan Engineering Council licences for constructors and operators, along with renewals and the tax documents the application needs.',
    tag: 'Corporate',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit Reports',
    urdu: 'آڈٹ رپورٹ',
    text: 'Audit reports and financial statements for companies, NGOs, trusts and firms, prepared for regulators, banks and tenders.',
    tag: 'Corporate',
  },
  {
    icon: Gavel,
    title: 'Criminal Law',
    urdu: 'فوجداری مقدمات',
    text: 'Criminal cases handled by Islah-ud-Din Dogar, Advocate High Court, who has 15 years of courtroom experience. He handles bail matters, trial defence, and appeals and revisions.',
    tag: 'Legal',
  },
]

export const TEAM = [
  {
    name: 'Salman Mahmood',
    role: 'Tax Consultant & Advocate High Court',
    img: '/images/salman-mahmood-avatar.webp',
    creds: ['BS (Hons)', 'LLB', '8+ years in tax & corporate law'],
    bio: 'Salman guides businesses and individuals through complex income tax and sales tax matters. He turns the rules into a clear plan that keeps you compliant and claims every lawful saving. He has represented clients before the Federal Board of Revenue, appellate tribunals and the Lahore High Court. He also drafts and negotiates shareholder agreements and service contracts for local startups.',
    focus: ['Income & sales tax', 'FBR notices & appeals', 'SECP & corporate', 'Contracts & agreements'],
    social: { type: 'facebook', href: 'https://www.facebook.com/salman.buzdar.5' },
  },
  {
    name: 'Islah-ud-Din Dogar',
    role: 'Advocate High Court, Criminal Law',
    img: '/images/islah-ud-din-dogar-avatar.webp',
    creds: ['Advocate High Court', '15 years in practice', 'Criminal law expert'],
    bio: 'Islah-ud-Din has 15 years of courtroom and advisory experience across civil, family, corporate and criminal law. He leads the firm’s criminal practice and represents clients from bail through trial to appeal in the High Court. At every stage, he tells clients plainly where their case stands.',
    focus: ['Bail matters', 'Trial defence', 'Appeals & revisions', 'Civil & family matters'],
    social: {
      type: 'linkedin',
      href: 'https://www.linkedin.com/in/islahud-din-dogar-advocate-115182195/',
    },
  },
]

export const STEPS = [
  {
    title: 'Message or call',
    text: 'Send us a WhatsApp message on 0300-8247073 or call. Tell us briefly what you need.',
  },
  {
    title: 'Share documents',
    text: 'We send you a checklist. Send clear photos on WhatsApp or bring the originals to our office.',
  },
  {
    title: 'We prepare & file',
    text: 'Your case is prepared and filed on the relevant portal (FBR IRIS, PRA, SECP or IPO) or in court.',
  },
  {
    title: 'You get proof',
    text: 'You receive the acknowledgement, certificate or order, and we remind you before your next deadline.',
  },
]

export const FAQS = [
  {
    q: 'What do I need for NTN registration?',
    a: 'For an individual NTN you need your CNIC, a mobile number registered in your own name, and an email address. If you run a business, we also need the business name, its address and a recent utility bill.',
  },
  {
    q: 'When is the Tax Year 2026 income tax return due?',
    a: 'Tax Year 2026 covers income earned from 1 July 2025 to 30 June 2026. FBR has set 30 September 2026 as the last date for salaried individuals, other individuals and AOPs. Companies with a June year-end have until 31 December 2026. Late filing can bring penalties under section 182, removal from the Active Taxpayers List (ATL) and higher withholding tax.',
  },
  {
    q: 'What are the 236C and 236K property tax rates for 2026-27?',
    a: 'The Finance Act 2026 set flat rates for people on the ATL, whatever the property value. The seller pays 2.75% under 236C and the buyer pays 1.25% under 236K. For non-filers, the seller pays 11.5%, and the buyer pays 10.5% up to Rs 50 million, 14.5% up to Rs 100 million and 18.5% above that. There is no longer a separate late-filer rate, so make sure you are on the ATL before the deal.',
  },
  {
    q: 'What happens if I am not a filer?',
    a: 'Non-filers pay roughly double withholding tax, or more, on property, vehicles, bank profit and many services. The law now also lets FBR restrict large purchases of property and vehicles by people who have not filed or cannot show where the money came from (section 114C). Filing your return, with a wealth statement that covers your assets, protects you from both.',
  },
  {
    q: 'Can you register a private limited company?',
    a: 'Yes. We reserve the name and incorporate the company on SECP as a single-member or private limited company. We then register it with FBR and handle its annual compliance.',
  },
  {
    q: 'I received a notice from FBR. What should I do?',
    a: 'Do not ignore it, because notices have strict reply deadlines. Send us a photo on WhatsApp and we will explain what it means. We then draft the reply and, if needed, represent you in appeal.',
  },
  {
    q: 'Do you only handle tax work?',
    a: 'No. Alongside tax and corporate services, our criminal law practice is led by Islah-ud-Din Dogar, Advocate High Court. He handles bail matters, trial defence, and appeals.',
  },
  {
    q: 'Can I send my documents on WhatsApp?',
    a: 'Yes. Most clients start on WhatsApp. Send clear photos or PDFs and we will tell you if anything is missing. Some matters still need originals or your signature at the office.',
  },
]
