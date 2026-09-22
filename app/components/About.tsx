'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

export default function About({ founder }: { founder?: any }) {
  const founderName = founder?.name || 'Swati Raj'
  
  const shortBio = founder?.shortBio || ''
  
  const longBioParagraphs = founder?.longBio?.map((block: any) => 
    block.children?.map((child: any) => child.text).join('')
  ).filter(Boolean) || []

  return (
    <section className="section-padding bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase">About Swapath — and About Me</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Meet {founderName}</h1>
          <p className="text-xl text-gray-700 italic max-w-3xl mx-auto">
            {founder?.quote || 'A single conversation can bring clarity.'}
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Image */}
          <div className="md:col-span-5 relative">
            <div className="sticky top-24 rounded-2xl overflow-hidden shadow-xl bg-purple-50">
              {founder?.image ? (
                <Image
                  src={urlFor(founder.image).width(800).height(1000).url()}
                  alt={founderName}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center text-gray-400">
                  No Image Available
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-7">
            <div className="prose prose-lg text-gray-700">
              <p className="font-semibold text-xl text-gray-900 mb-6">{shortBio}</p>
              
              {longBioParagraphs.map((para: string, idx: number) => {
                if (para.startsWith('My Approach:')) {
                  return (
                    <div key={idx} className="mt-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">My Approach</h3>
                    </div>
                  )
                }
                if (para.startsWith('•')) {
                  return <li key={idx} className="ml-4 mb-2">{para.replace('•', '').trim()}</li>
                }
                return <p key={idx} className="mb-4 leading-relaxed">{para}</p>
              })}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Credentials & Background</h3>
              <ul className="space-y-4">
                {(founder?.credentials || []).map((cred: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                    <span className="text-2xl">{cred.icon === 'award' ? '🏆' : cred.icon === 'briefcase' ? '💼' : '📚'}</span>
                    <span className="text-gray-800 font-medium">{cred.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
