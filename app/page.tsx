import Hero from './components/Hero'
import Welcome from './components/Welcome'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import {getFounder, getPackages, getServices, getSiteSettings, getTestimonials} from '@/lib/sanity.client'

export default async function Home() {
  const [siteSettings, founder, services, packages, testimonials] = await Promise.all([
    getSiteSettings(),
    getFounder(),
    getServices(),
    getPackages(),
    getTestimonials(),
  ])

  return (
    <main>
      <Hero siteSettings={siteSettings} />
      <Welcome />
      <About founder={founder} />
      <Services services={services} />
      <Packages packages={packages} />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </main>
  )
}
