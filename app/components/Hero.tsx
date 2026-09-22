'use client'

import Link from 'next/link'

export default function Hero({ siteSettings }: { siteSettings?: any }) {
  const subheadline = siteSettings?.description || 'Certified career counseling for students in classes 8–12, guiding them from confusion to clarity in choosing subjects, streams, and career paths.'

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-20">
      <div className="container text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
          Helping Students Find Their Way <br/>
          <span className="text-purple-600">— One Clear Decision at a Time</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {subheadline}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all">
            Book a Free Discovery Session
          </Link>
        </div>
      </div>
    </section>
  )
}
