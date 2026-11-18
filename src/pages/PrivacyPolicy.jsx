import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { contact } from '../data/site.js'

const UPDATED = '21 October 2026'

const sections = [
  {
    h: 'Who we are',
    p: [
      'Webbiez Infotech (“we”, “us”, “our”) is an IT company in India providing AI automation, web, mobile and design services. This policy explains what personal information we collect through webbiezinfotech.in, why we collect it, and the choices you have.'
    ]
  },
  {
    h: 'Information we collect',
    p: ['We only collect what you choose to send us, plus basic technical data that every website receives.'],
    list: [
      'Contact form: your name, email address, phone number (optional), the service you are interested in, and your message.',
      'Early Access form: your name, email address, phone number, business name, the products you are interested in, and any note you add.',
      'Technical data: your IP address, browser type, device and the pages requested, recorded in routine hosting logs. We do not use advertising trackers or analytics cookies on this website.'
    ]
  },
  {
    h: 'How we use your information',
    list: [
      'To reply to your enquiry and prepare a quote or proposal.',
      'To share updates about the AI products you asked to hear about.',
      'To keep a record of our communication with you.',
      'To keep the website secure and working properly.'
    ],
    p: ['We do not sell or rent your personal information.']
  },
  {
    h: 'Who processes your information',
    p: [
      'Form submissions are delivered to our business email through Web3Forms, a third-party form-handling service. Fonts on this site are loaded from Google Fonts, so your browser contacts Google’s servers when a page loads. Our website is served by a hosting provider that keeps standard server logs.',
      'Links to WhatsApp, phone, email, LinkedIn, Instagram or any client project take you outside this site, and those services’ own privacy policies apply from that point.'
    ]
  },
  {
    h: 'Cookies',
    p: [
      'We do not set advertising or analytics cookies. Third-party services we rely on, such as Google Fonts, may process technical data as described in their own policies.'
    ]
  },
  {
    h: 'How long we keep it',
    p: [
      'We keep enquiry details for as long as needed to respond to you. If you become a client, we keep the information for the duration of the project and for as long as accounts and legal obligations require. You can ask us to delete your enquiry at any time.'
    ]
  },
  {
    h: 'Your rights',
    p: [
      'Under India’s Digital Personal Data Protection Act, 2023 and related rules, you may ask to access, correct or erase your personal data, withdraw your consent, or raise a grievance. Email us at the address below and we will respond within a reasonable time.'
    ]
  },
  {
    h: 'Security',
    p: [
      'We limit access to enquiry data to the people who need it and use reputable service providers. No internet service is completely secure, so please do not send passwords or sensitive financial details through our forms.'
    ]
  },
  {
    h: 'Children',
    p: ['This website is not directed at children under 18, and we do not knowingly collect their personal data.']
  },
  {
    h: 'Changes to this policy',
    p: ['If we change this policy, we will update the date at the top of this page.']
  }
]

export default function PrivacyPolicy() {
  useDocumentTitle(
    'Privacy Policy | Webbiez Infotech',
    'How Webbiez Infotech collects, uses and protects the personal information you share through webbiezinfotech.in.'
  )

  return (
    <section className="pb-20 pt-28 sm:pb-24 sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-[13px] font-medium text-brand-300 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-[13px] text-brand-100/50">Last updated: {UPDATED}</p>
        <p className="mt-6 text-[16px] leading-relaxed text-brand-100/75">
          Your privacy matters to us. This page explains what we collect, why, and the choices you have.
        </p>

        {sections.map((s, i) => (
          <div key={s.h} className="mt-10">
            <h2 className="font-display text-xl font-semibold text-white">
              {i + 1}. {s.h}
            </h2>
            {s.p && s.p.slice(0, 1).map((t) => (
              <p key={t} className="mt-3 text-[15px] leading-relaxed text-brand-100/70">{t}</p>
            ))}
            {s.list && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-brand-100/70 marker:text-brand-400">
                {s.list.map((t) => <li key={t}>{t}</li>)}
              </ul>
            )}
            {s.p && s.p.slice(1).map((t) => (
              <p key={t} className="mt-3 text-[15px] leading-relaxed text-brand-100/70">{t}</p>
            ))}
          </div>
        ))}

        <div className="mt-12 border-t border-white/10 pt-6 text-[14px] leading-relaxed text-brand-100/60">
          <p>
            Questions or requests about your data? Email{' '}
            <a className="text-brand-300 underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
