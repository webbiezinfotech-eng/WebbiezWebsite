import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import FutureTeaser from '../components/FutureTeaser.jsx'
import Process from '../components/Process.jsx'
import Work from '../components/Work.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Faq from '../components/Faq.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FutureTeaser />
      <Process />
      <Work />
      <CtaBand />
      <Testimonials />
      <Faq />
    </>
  )
}
