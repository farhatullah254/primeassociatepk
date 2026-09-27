import CallBand from './components/CallBand'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Process from './components/Process'
import Services from './components/Services'
import Team from './components/Team'
import WhatsAppFloat from './components/WhatsAppFloat'
import WhyUs from './components/WhyUs'

export default function App() {
  return (
    <>
      <a
        href="#services"
        className="sr-only z-50 rounded-lg bg-white px-4 py-2 font-semibold text-brand focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Team />
        <Process />
        <CallBand />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
