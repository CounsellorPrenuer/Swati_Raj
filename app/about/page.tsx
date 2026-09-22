import About from '../components/About'
import Contact from '../components/Contact'
import {getFounder, getSiteSettings} from '@/lib/sanity.client'

export default async function AboutPage() {
  const [siteSettings, founder] = await Promise.all([
    getSiteSettings(),
    getFounder(),
  ])

  return (
    <main>
      <About founder={founder} />
      <Contact siteSettings={siteSettings} />
    </main>
  )
}
