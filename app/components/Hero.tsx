'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

export default function Hero({ founder }: { siteSettings?: any; founder?: any }) {
  
  const description = 'Certified career counseling for students in classes 8–12, guiding them from confusion to clarity in choosing subjects, streams, and career paths.'
  const founderName = founder?.name || 'Swati Raj'
  const founderHeadline = founder?.headline || 'Career & Admission Guidance Specialist'

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Helping Students Find Their Way — <br/><span className="text-gradient">One Clear Decision at a Time</span>
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

          {/* Right Side - Image Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden p-4">
              {founder?.image ? (
                <Image
                  src={urlFor(founder.image).width(700).height(700).url()}
                  alt={founderName}
                  width={700}
                  height={700}
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">👩‍🏫</div>
                  <p className="text-gray-700 font-semibold">{founderName}</p>
                  <p className="text-gray-600 text-sm">{founderHeadline}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
