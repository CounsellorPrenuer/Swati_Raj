'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

export default function About({ founder }: { founder?: any }) {
  const founderName = founder?.name || 'Swati Raj'
  const founderHeadline = founder?.headline || 'Blending educational expertise with personalized guidance'
  const shortBio = founder?.shortBio || 'With 20+ years of experience guiding students through India\'s most demanding curricula, Swati Raj has helped hundreds find clarity in their academic and career choices.'
  const longBio = founder?.longBio?.length ? null : 'Her philosophy: When your inner clarity aligns with your academic path, your success becomes inevitable.'

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="hidden md:flex">
            <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center overflow-hidden p-4">
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
                  <div className="text-8xl mb-4">👩‍🏫</div>
                </div>
              )}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase">Meet the Founder</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">{founderName}</h2>
            <p className="text-lg text-gray-700 font-semibold mb-6">{founderHeadline}</p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {shortBio}
            </p>

            {longBio && <p className="text-gray-700 mb-8 leading-relaxed">{longBio}</p>}

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h4 className="font-semibold text-gray-900">20+ Years in Education</h4>
                  <p className="text-gray-600">Cambridge, IGCSE, and CBSE Expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Career & Admission Guidance</h4>
                  <p className="text-gray-600">Certified Career Counselor</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">👨‍👩‍👧‍👦</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Parent & Educator Perspective</h4>
                  <p className="text-gray-600">Understands both viewpoints</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🌟</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hundreds of Students Guided</h4>
                  <p className="text-gray-600">Consistent track record of success</p>
                </div>
              </div>
            </div>

            <button className="btn-primary">Schedule a Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}
