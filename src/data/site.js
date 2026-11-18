export const nav = [
  { label: 'Home', to: '/', type: 'route' },
  { label: 'About', id: 'about', type: 'section' },
  { label: 'Services', id: 'services', type: 'section' },
  { label: 'Process', id: 'process', type: 'section' },
  { label: 'Work', id: 'work', type: 'section' },
  { label: 'Future Scopes', to: '/future-scopes', type: 'route', highlight: true },
  { label: 'Reviews', id: 'reviews', type: 'section' },
  { label: 'FAQ', id: 'faq', type: 'section' }
]

export const contact = {
  phonePrimary: '+91 91447 16600',
  phonePrimaryRaw: '+919144716600',
  phoneSecondary: '+91 73788 52436',
  phoneSecondaryRaw: '+917378852436',
  whatsapp: 'https://wa.me/919144716600', // WhatsApp number: change HERE only (used everywhere)
  email: 'webbiezinfotech@gmail.com',
  // numbers shown in the footer only (next to the email)
  footerPhones: [
    { label: '+91 82258 07724', raw: '+918225807724' },
    { label: '+91 91098 02436', raw: '+919109802436' }
  ],
  site: 'https://webbiezinfotech.in'
}

export const socials = [
  { label: 'WhatsApp', href: contact.whatsapp, tone: '#25D366' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/webbiez-infotech-816b123b6', tone: '#0077B7' },
  { label: 'Instagram', href: 'https://www.instagram.com/webbiez_infotech/?hl=en', tone: '#833AB4' },
  { label: 'Email', href: 'mailto:webbiezinfotech@gmail.com', tone: '#EA4335' }
]

export const stats = [
  { label: 'AI products in active build', note: 'Launching soon' },
  { value: 7, suffix: '', label: 'Delivery services', note: 'AI-led, end to end' },
  { value: 24, suffix: '/7', label: 'Automation uptime target', note: 'Agents never sleep' },
  { value: 8, suffix: '+', label: 'Technologies in our stack', note: 'React · Node · Python · Flutter' }
]

export const founders = [
  {
    name: 'Aarti Nathani',
    initials: 'AN',
    role: 'Co-Founder',
    exp: '5+ years in IT',
    accent: '#833AB4',
    summary:
      'Leads design and product thinking at Webbiez. Aarti turns messy ideas into clean, usable interfaces and makes sure every product feels simple for the people using it.'
  },
  {
    name: 'Nitya Khilwani',
    initials: 'NK',
    role: 'Co-Founder',
    exp: '5+ years in IT',
    accent: '#2DD4BF',
    summary:
      'Drives delivery and automation at Webbiez. Nitya shapes how projects are planned, built and shipped, keeping timelines honest and the technology dependable.'
  }
]

export const serviceIndex = [
  { key: 'ai', title: 'AI Automation & Agents' },
  { key: 'web', title: 'Web Development' },
  { key: 'ux', title: 'UI/UX Designing' },
  { key: 'seo', title: 'SEO & Digital Marketing' },
  { key: 'brand', title: 'Branding & Creativity' },
  { key: 'ecom', title: 'E-Commerce & Business Portals' },
  { key: 'pr', title: 'PR (Public Relations)' },
  { key: 'app', title: 'Mobile App Development' }
]

export const techStack = [
  'LLM Agents', 'OpenAI', 'RAG Pipelines', 'React.js', 'Node.js', 'Python',
  'Flutter', 'MongoDB', 'MySQL', 'Figma', 'Vector Databases', 'Voice AI'
]

export const process = [
  {
    step: '01',
    title: 'Discover',
    text: 'We start with a detailed consultation to map your goals, audience and success metrics — then identify which parts of your workflow an AI agent should own, and which still need a human.'
  },
  {
    step: '02',
    title: 'Design',
    text: 'Wireframes move into high-fidelity UI in Figma, and agent behaviour is mapped as explicit flows: inputs, tools, guardrails and escalation paths. You review real screens and real logic — not vague promises.'
  },
  {
    step: '03',
    title: 'Build',
    text: 'Clean, component-driven engineering in React.js, Node.js, Python, PHP or Flutter, with LLM orchestration, retrieval pipelines and integrations wired in. Responsive, accessible and built for performance from the first commit.'
  },
  {
    step: '04',
    title: 'Deliver',
    text: 'Testing across devices, prompt and output evaluation, performance tuning, SEO groundwork and a guided handover — including admin training where a backend panel or agent dashboard is involved.'
  },
  {
    step: '05',
    title: 'Automate & grow',
    text: 'Post-launch monitoring of agent accuracy, security patches and continuous tuning. We keep improving the automation as your data grows, so output quality compounds instead of drifting.'
  }
]

export const portfolio = {
  /* Projects shown in the Work section (slider). `url` adds a "Visit live site" button.
     Mockups are picked by `id` in src/components/ProjectMocks.jsx.
     NOTE: the Aaruu and Blockchain descriptions are general (based on the sites' titles) —
     refine their summary / highlights with real details when you like. */
  projects: [
    {
      id: 'wholesale',
      no: '01',
      name: 'Wholesale Partner Platform',
      tag: 'E-Commerce · B2B Portal',
      accent: '#2DD4BF',
      summary:
        'A comprehensive e-commerce platform for wholesale stationery supplies. A full-featured storefront paired with a complete admin panel for inventory management, order processing and customer management — engineered for bulk ordering with a seamless shopping experience.',
      stack: ['React.js', 'PHP', 'Admin Panel', 'Backend Integration'],
      highlights: [
        'Bulk / wholesale ordering flow with quantity-tier logic',
        'Admin panel for inventory, orders and customers',
        'Responsive storefront optimised for high SKU volume',
        'Secure backend integration and data handling'
      ]
    },
    {
      id: 'ecommerce',
      no: '02',
      name: 'E-Commerce & Social Media Management',
      tag: 'E-Commerce · Social Media Management',
      accent: '#FCB045',
      summary:
        'A client e-commerce website designed and developed end to end, paired with ongoing social media management so the storefront and the brand voice stayed in sync — a premium finish that works flawlessly across devices.',
      stack: ['React.js', 'UI/UX Design', 'Social Media'],
      highlights: [
        'Design and development handled by one team',
        'Premium, responsive storefront on every device',
        'Social content aligned with the store’s brand',
        'Smooth performance from browse to checkout'
      ]
    },
    {
      id: 'devfolio',
      no: '03',
      name: 'Pooja Dhameja — Developer Portfolio',
      tag: 'Portfolio · Full-Stack Developer',
      accent: '#5EEAD4',
      url: 'https://pooja-portfolio.webbiezinfotech.in',
      summary:
        'A personal portfolio website for a full-stack developer — an animated landing, selected work, an experience journey, a skills stack, a downloadable resume and a contact form, all in a clean, responsive interface.',
      stack: ['Portfolio Website', 'Animated UI', 'Responsive UI'],
      highlights: [
        'Animated hero with a clear introduction and call to action',
        'Selected work, journey and skills in one scrolling story',
        'Downloadable resume and direct contact options',
        'Contact form that goes straight to the inbox'
      ]
    },
    {
      id: 'designfolio',
      no: '04',
      name: 'Aarti Nathani — UI/UX Designer Portfolio',
      tag: 'Portfolio · UI/UX Designer',
      accent: '#833AB4',
      url: 'https://aaruuportfolio.netlify.app',
      summary:
        'A portfolio website for a UI/UX designer, built to present design work, process and skills in a clean, visual-first layout that works across devices.',
      stack: ['Portfolio Website', 'UI/UX Showcase', 'Responsive UI'],
      highlights: [
        'Visual-first layout that lets the design work lead',
        'Clear structure from introduction to contact',
        'Consistent typography, colour and spacing',
        'Responsive across phone, tablet and desktop'
      ]
    },
    {
      id: 'blockchain',
      no: '05',
      name: 'Blockchain Web App',
      tag: 'Web3 · React Application',
      accent: '#38BDF8',
      url: 'https://blockchain.webbiezinfotech.in',
      summary:
        'A React-based blockchain and web3 web application — a crypto-focused interface built as a modern single-page app.',
      stack: ['React.js', 'Web3', 'Blockchain'],
      highlights: [
        'Modern single-page React application',
        'Crypto and web3 focused interface',
        'Clean, responsive front end',
        'Built for dashboards and on-chain data views'
      ]
    },
    {
      id: 'ai',
      no: '06',
      name: 'AI Automation Product Suite',
      tag: 'AI · In active build',
      accent: '#FD1D1D',
      summary:
        'Our own suite of AI products, currently in active build and launching soon — an AI graphics generator, AI website generation, an AI sales CRM and an AI calling chatbot.',
      stack: ['LLM Agents', 'Voice AI', 'React.js', 'Python'],
      highlights: [
        'AI Graphics Generator for on-brand creatives',
        'AI Website Generation from a short brief',
        'AI Sales CRM with lead scoring and follow-ups',
        'AI Calling Chatbot for inbound and outbound calls'
      ],
      cta: { label: 'See what’s launching', to: '/future-scopes' }
    }
  ],
  capabilities: [
    { icon: 'bot', title: 'AI automation & agents', text: 'Custom agents that handle repetitive work — content, catalogues, follow-ups, reporting — with human review where it matters.' },
    { icon: 'globe', title: 'Corporate & business websites', text: 'Fast, responsive marketing sites that present your brand credibly and convert visitors into enquiries.' },
    { icon: 'cart', title: 'E-commerce storefronts', text: 'Product catalogues, carts, payments and admin control for retail and wholesale models.' },
    { icon: 'dashboard', title: 'Business portals & dashboards', text: 'Role-based internal tools and reporting interfaces that replace spreadsheet chaos.' },
    { icon: 'phone', title: 'Mobile applications', text: 'Cross-platform Flutter apps that carry your product into your customers’ pockets.' },
    { icon: 'palette', title: 'Brand identity systems', text: 'Logos, colour systems, typography and social kits — a consistent voice everywhere you appear.' }
  ]
}

export const testimonials = [
  {
    quote:
      'We worked with Webbiez Infotech for our e-commerce website and social media management. From design to development, everything was handled professionally. The final product looked premium and worked flawlessly across devices. I highly recommend them for any web development or social media management needs.',
    name: 'Niraj Bhojwani',
    role: 'E-commerce Business',
    source: 'Client testimonial'
  },
  {
    quote:
      'Our clients love the creativity, timely delivery and professionalism of Webbiez Infotech. They appreciate how we turn ideas into impactful digital solutions that boost growth, visibility and business success.',
    name: 'Client feedback',
    role: 'Across projects delivered',
    source: 'Client sentiment'
  }
]

export const faqs = [
  {
    q: 'What services do you provide?',
    a: 'We are an AI automation company first: we build AI agents, AI website generation, AI graphics engines, sales CRM automation, AI voice calling agents and others. Alongside that we provide web development, mobile app development, UI/UX design, SEO, branding, e-commerce solutions and PR services.'
  },
  {
    q: 'What exactly does “AI automation” mean for my business?',
    a: 'It means identifying the repetitive, rule-driven work inside your business — generating pages, producing creatives, logging and chasing leads, answering calls — and handing it to software that runs continuously. You keep the decisions; the agents handle the volume.'
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on complexity. Simple websites take 1-3 weeks, while complex applications and custom AI automation can take 2–6 months. We provide detailed timelines during consultation.'
  },
  {
    q: 'Do you offer ongoing support after project completion?',
    a: 'Yes, we provide comprehensive maintenance and support packages including updates, security patches, performance monitoring, agent accuracy tuning and technical assistance.'
  },
  {
    q: 'What technologies do you use for development?',
    a: 'We use modern technologies including React.js, Node.js, Python, PHP, Flutter, MongoDB, MySQL, vector databases and LLM orchestration frameworks, plus UI/UX tools like Figma and Adobe Creative Suite.'
  },
  {
    q: 'Can you help with existing projects?',
    a: 'Absolutely! We can audit, improve and maintain existing projects, and retrofit automation into systems you already run. We work with various frameworks and can integrate with your current stack.'
  },
  {
    q: 'Is my business data safe with AI automation?',
    a: 'Secure foundations come first: scoped data access, role-based permissions and clear rules about what leaves your systems. We agree data-handling boundaries in writing before any agent goes live.'
  },
  {
    q: 'What is your pricing structure?',
    a: 'Our pricing is project-based and depends on scope, complexity and timeline. AI automation products launching soon will follow subscription plans; custom work is quoted after we understand your requirements.'
  }
]
