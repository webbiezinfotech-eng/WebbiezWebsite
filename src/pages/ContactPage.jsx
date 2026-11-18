import Contact from '../components/Contact.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function ContactPage() {
  useDocumentTitle(
    'Contact Us | Webbiez Infotech',
    'Contact Webbiez Infotech to discuss your AI automation, web, mobile or design project. We reply within one business day.'
  )
  return (
    <div className="pt-16 sm:pt-20">
      <Contact />
    </div>
  )
}
