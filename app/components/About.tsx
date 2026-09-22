'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

export default function About({ founder }: { founder?: any }) {
  const founderName = founder?.name || 'Swati Raj'
  const founderHeadline = founder?.headline || 'Blending educational expertise with personalized guidance'
  const shortBio = founder?.shortBio || 'With 20+ years of experience guiding students through India\'s most demanding curricula, Swati Raj has helped hundreds find clarity in their academic and career choices.'
  const longBioParagraphs = founder?.longBio?.map((b: any) => b.children?.map((c: any) => c.text).join('')).filter(Boolean) || [];
  const credentials = founder?.credentials || [];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                <div className="text-center text-gray-500">
                  <div className="text-8xl mb-4">👩‍🏫</div>
                </div>
              )}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase">About Swapath — and About Me</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Meet {founderName}</h2>
            <p className="text-lg text-gray-700 font-semibold mb-6">{founderHeadline}</p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {shortBio}
            </p>

            {longBioParagraphs.map((para: string, idx: number) => (
              <p key={idx} className="text-gray-700 mb-4 leading-relaxed">{para}</p>
            ))}

            <div className="space-y-4 mb-8 mt-8">
              {credentials.length > 0 ? credentials.map((cred: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-3xl">{cred.icon === "award" ? "🏅" : cred.icon === "briefcase" ? "💼" : "📚"}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{cred.title}</h4>
                  </div>
                </div>
              )) : (
                <>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">👩‍🏫</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">20+ Years in Education</h4>
                      <p className="text-gray-600">Cambridge, IGCSE, and CBSE Expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Career & Admission Guidance</h4>
                      <p className="text-gray-600">Certified Career Counselor</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <p className="text-gray-700 font-semibold mb-6">If your child is standing at a crossroads — unsure about a stream, a subject, or what comes next — I'd love to help them find their way.</p>
            <button className="btn-primary">Book a Free Discovery Call →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
