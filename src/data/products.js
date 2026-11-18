import { Palette, LayoutTemplate, TrendingUp, PhoneCall } from 'lucide-react'

export const products = [
  {
    id: 'ai-graphics-generator',
    icon: Palette,
    name: 'AI Graphics Generator',
    short: 'Design engine',
    tag: 'AI Graphics Generator Model',
    status: 'In development',
    eta: 'Launching soon',
    accent: 'from-[#833AB4] via-[#FD1D1D] to-[#FCB045]',
    dot: '#833AB4',
    pitch:
      'A generative design engine that produces on-brand creatives — social posts, ad variants, banners and product visuals — from a single prompt and your brand kit.',
    description:
      'Instead of briefing a designer for every post, you describe the campaign and the model composes it: correct aspect ratios, your logo, your palette, your typography. It generates variants in batches, learns what performs, and keeps every output inside your brand guidelines.',
    features: [
      'Text-to-design generation from a single prompt',
      'Brand-kit locking — palette, fonts, logo placement',
      'Batch variants for A/B testing at campaign scale',
      'Auto-resize across Instagram, LinkedIn, web and print',
      'Style presets that stay consistent across a whole campaign',
      'Export to PNG, JPG and editable layered files'
    ],
    useCases: ['Social media teams', 'D2C brands', 'Agencies', 'Real estate & retail listings'],
    metric: { k: 'Output speed', v: 'Prompt → ready creative' }
  },
  {
    id: 'ai-website-generator',
    icon: LayoutTemplate,
    name: 'AI Website Generation',
    short: 'Site builder',
    tag: 'AI Automation for Website Generation',
    status: 'In development',
    eta: 'Launching soon',
    accent: 'from-[#1E8975] via-[#2DD4BF] to-[#99F6E4]',
    dot: '#1E8975',
    pitch:
      'Describe your business and the automation assembles a complete, responsive, SEO-ready website — structure, copy, sections and styling — then keeps it updated for you.',
    description:
      'The generator turns a short brief into a deployed site: it proposes the information architecture, writes section copy, lays out pages responsively and wires the basics — contact forms, metadata, sitemap. You refine by editing content, not by rebuilding from zero, and the automation handles ongoing page additions.',
    features: [
      'Brief-to-site generation with full page structure',
      'Responsive layouts generated for mobile, tablet and desktop',
      'SEO-ready output — metadata, headings, sitemap',
      'Section and page regeneration without breaking the design',
      'Form, WhatsApp and enquiry wiring out of the box',
      'One-click export of clean React + Tailwind source'
    ],
    useCases: ['Startups & SMEs', 'Personal brands', 'Local businesses', 'Landing page campaigns'],
    metric: { k: 'From idea to live', v: 'Hours, not weeks' }
  },
  {
    id: 'ai-sales-crm',
    icon: TrendingUp,
    name: 'AI Sales CRM for Business',
    short: 'Revenue agent',
    tag: 'Sales CRM for Business',
    status: 'In development',
    eta: 'Launching soon',
    accent: 'from-[#1E8975] via-[#2DD4BF] to-[#FCB045]',
    dot: '#FCB045',
    pitch:
      'A CRM where the pipeline runs itself — leads captured, scored, followed up and reported on by automation, so nothing goes cold in someone’s inbox.',
    description:
      'Most CRMs are databases people forget to update. This one acts: it ingests leads from your website, ads, WhatsApp and calls, scores them, drafts and sends follow-ups on schedule, nudges your team when a deal stalls, and produces the daily summary you would otherwise assemble by hand.',
    features: [
      'Automated lead capture from web, ads, WhatsApp and calls',
      'AI lead scoring and prioritisation',
      'Drafted and scheduled follow-up sequences',
      'Deal-stage tracking with stall alerts',
      'Conversation summaries and next-step suggestions',
      'Dashboard reporting with pipeline forecasts'
    ],
    useCases: ['Sales teams', 'Real estate', 'Education & coaching', 'Service businesses'],
    metric: { k: 'Follow-up coverage', v: 'Every lead, every time' }
  },
  {
    id: 'ai-calling-agent',
    icon: PhoneCall,
    name: 'AI Chatbot & Calling Automation',
    short: 'Voice agent',
    tag: 'AI Chatbot for Calling Automation',
    status: 'In development',
    eta: 'Launching soon',
    accent: 'from-[#07191B] via-[#1E8975] to-[#2DD4BF]',
    dot: '#2DD4BF',
    pitch:
      'A conversational agent that answers, qualifies and follows up on calls and chats in natural language — handling the volume your team cannot.',
    description:
      'The agent picks up every call and message, understands intent, answers common questions from your knowledge base, qualifies the caller, books appointments straight into your calendar and hands over to a human with a full summary when it matters. Every conversation is transcribed, tagged and searchable.',
    features: [
      'Natural-language voice and chat conversations',
      'Knowledge-base answers trained on your business',
      'Lead qualification and intent detection',
      'Appointment booking with calendar sync',
      'Warm handover to a human with call summary',
      'Full transcripts, tagging and conversation analytics'
    ],
    useCases: ['Clinics & front desks', 'Real estate enquiries', 'Support helplines', 'High-volume lead intake'],
    metric: { k: 'Availability', v: '24 / 7, no missed calls' }
  }
]

export const roadmap = [
  {
    phase: 'Phase 01',
    title: 'Private beta',
    text: 'Invite-only access with a small group of clients. We tune prompts, guardrails and output quality against real business data.',
    state: 'Now'
  },
  {
    phase: 'Phase 02',
    title: 'Public launch',
    text: 'Subscription plans go live, self-serve onboarding and documentation, plus the first integration marketplace.',
    state: 'Next'
  },
  {
    phase: 'Phase 03',
    title: 'Automation suite',
    text: 'The four products connect into one automation layer — graphics, sites, CRM and voice agents sharing a single brand and data context.',
    state: 'Later'
  }
]
