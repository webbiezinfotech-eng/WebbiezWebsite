import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { contact, legal } from '../data/site.js'

const privacy = [
  ['Who we are', [
    'Webbiez Infotech ("we", "us") is an IT company that provides AI automation, web, mobile and design services in India. This policy explains what personal information we collect through webbiezinfotech.in and how we handle it.'
  ]],
  ['Information we collect', [
    'When you use the Contact form or the Early Access form, we collect the details you type in: your name, email address, phone number (if you give one), the services or products you are interested in, and your message.',
    'Our hosting provider and your browser exchange technical data such as IP address, browser type and pages requested. This is recorded in routine server logs. We do not run advertising trackers or analytics cookies on this website.'
  ]],
  ['How we use it', [
    'We use your details only to reply to your enquiry, prepare a quote or proposal, share updates about products you asked to hear about, and keep a record of our communication. We do not sell your information.'
  ]],
  ['Who processes it', [
    'Form submissions are delivered to our business email through Web3Forms, a form-handling service. Fonts on this site are loaded from Google Fonts, which means your browser contacts Google servers when a page loads. If you tap a WhatsApp, phone, email or social link, you leave this site and the third party\u2019s own policy applies.'
  ]],
  ['How long we keep it', [
    'We keep enquiry details for as long as needed to respond and, if you become a client, for the period needed for the project, accounts and legal obligations. You can ask us to delete your enquiry at any time.'
  ]],
  ['Your rights', [
    'Under India\u2019s Digital Personal Data Protection Act, 2023 and related rules, you may ask to access, correct or erase your personal data, withdraw consent, or raise a grievance. Write to us at the email below and we will respond within a reasonable time.'
  ]],
  ['Security', [
    'We limit access to enquiry data to the people who need it and use reputable providers. No internet service is completely secure, so please do not send passwords or sensitive financial details through the forms.'
  ]],
  ['Children', ['This website is not directed at children under 18, and we do not knowingly collect their data.']],
  ['Changes to this policy', ['If we change this policy we will update the date at the top of this page.']]
]

const terms = [
  ['About these terms', [
    'By using webbiezinfotech.in you agree to these terms. If you do not agree, please do not use the site.'
  ]],
  ['Our services', [
    'Descriptions on this website are general. The scope, price, timeline and deliverables of any project are set out in a written proposal or agreement that both sides accept before work starts. If that agreement differs from this website, the agreement applies.'
  ]],
  ['Products that are launching soon', [
    'AI products shown as "launching soon" or "in build" are under development. Features, pricing and dates may change, and signing up for early access does not create an obligation for either side.'
  ]],
  ['Project previews', ['Previews of our work on this site are illustrative unless a live site link is given. Client names and quotes are shown with the client\u2019s consent.']],
  ['AI-generated output', [
    'Output from AI systems can contain mistakes. Where we build AI features for you, you are responsible for reviewing output before relying on it for legal, financial, medical or other important decisions.'
  ]],
  ['Intellectual property', [
    'The Webbiez Infotech name, logo and the content of this site belong to us. For client projects, ownership of the final deliverables passes to the client on full payment, unless the agreement says otherwise. We keep ownership of our pre-existing tools, libraries and know-how.'
  ]],
  ['Acceptable use', ['Do not misuse the site, attempt to disrupt it, submit false or unlawful content through the forms, or use it to send spam.']],
  ['Limitation of liability', [
    'The website is provided as is. To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of this website. Liability for project work is governed by the written agreement for that project.'
  ]],
  ['Third-party links', ['Links to other sites are provided for convenience. We do not control and are not responsible for their content.']],
  ['Governing law', ['These terms are governed by the laws of India. Disputes fall under the jurisdiction of the competent courts in India.']],
  ['Contact', [`Questions about these terms can be sent to ${contact.email}.`]]
]

function Page({ title, intro, sections }) {
  useDocumentTitle(`${title} | Webbiez Infotech`)
  return (
    <section className="pb-20 pt-28 sm:pb-24 sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-[13px] text-brand-100/50">Last updated: {legal.updated}</p>
        <p className="mt-6 text-[16px] leading-relaxed text-brand-100/75">{intro}</p>
        {sections.map(([h, ps], i) => (
          <div key={h} className="mt-10">
            <h2 className="font-display text-xl font-semibold text-white">{i + 1}. {h}</h2>
            {ps.map((p) => (
              <p key={p} className="mt-3 text-[15px] leading-relaxed text-brand-100/70">{p}</p>
            ))}
          </div>
        ))}
        <p className="mt-12 border-t border-white/10 pt-6 text-[14px] text-brand-100/60">
          Contact: <a className="text-brand-300 underline" href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </div>
    </section>
  )
}

export const PrivacyPolicy = () => (
  <Page title="Privacy Policy" intro="Your privacy matters to us. This page explains what we collect, why, and the choices you have." sections={privacy} />
)
export const Terms = () => (
  <Page title="Terms and Conditions" intro="These terms apply to your use of this website and to enquiries you send us." sections={terms} />
)
