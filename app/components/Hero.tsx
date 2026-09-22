'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

export default function Hero({ siteSettings }: { siteSettings?: any }) {
  const headlineParts = ['Helping Students Find Their Way', '— One Clear Decision at a Time']
  const description = 'Certified career counseling for students in classes 8–12, guiding them from confusion to clarity in choosing subjects, streams, and career paths.'

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {headlineParts[0]} <br/><span className="text-gradient">{headlineParts[1]}</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Book a Free Discovery Session</button>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-gradient">20+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">1000+</div>
                <p className="text-gray-600">Students Guided</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">100%</div>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-96 flex items-center justify-center p-4">
              {siteSettings?.logo ? (
                <Image
                  src={urlFor(siteSettings.logo).width(800).url()}
                  alt="SWAPATH Logo"
                  width={800}
                  height={800}
                  className="w-full h-auto max-w-md object-contain"
                />
              ) : (
                <div className="text-center text-gray-500">
                  <div className="text-4xl font-bold text-gradient">SWAPATH</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
