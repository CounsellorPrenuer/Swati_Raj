import About from '../components/About'
import Contact from '../components/Contact'
import {getFounder} from '@/lib/sanity.client'

export default async function AboutPage() {
  const founder = await getFounder()

  return (
    <main>
      <About founder={founder} />
      <Contact />
    </main>
  )
}
