import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { UIUXDesign } from '@/components/sections/UIUXDesign'
import { WebsiteDevelopment } from '@/components/sections/WebsiteDevelopment'
import { TeamSection } from '@/components/sections/TeamSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { CallToAction } from '@/components/sections/CallToAction'
import { FAQSection } from '@/components/sections/FAQSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <UIUXDesign />
      <WebsiteDevelopment />
      <TeamSection />
      <PortfolioSection />
      <CallToAction />
      <FAQSection />
    </>
  )
}
