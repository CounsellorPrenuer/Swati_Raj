import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Services from './components/Services'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import {getPackages, getServices, getSiteSettings, getTestimonials} from '@/lib/sanity.client'

export default async function Home() {
  const [siteSettings, services, packages, testimonials] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getPackages(),
    getTestimonials(),
  ])

  return (
    <main>
      <Hero siteSettings={siteSettings} />
      <Welcome />
      <Services services={services} />
      <Packages packages={packages} />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </main>
  )
}
