import { Header } from '../components/Header'
import { TennisSchoolSection } from '../components/TennisSchoolSection'
import { TrainingOfferSection } from '../components/TrainingOfferSection'
import { Summer2026Section } from '../components/Summer2026Section'
import { RegistrationSection } from '../components/RegistrationSection'
import { AnfahrtSection } from '../components/AnfahrtSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <TennisSchoolSection />
        <TrainingOfferSection />
        <Summer2026Section />
        <RegistrationSection />
        <AnfahrtSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
