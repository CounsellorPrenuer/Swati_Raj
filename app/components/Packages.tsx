'use client'

import {useMemo, useState} from 'react'

type PackageItem = {
  title: string
  subtitle?: string
  price: string | number
  isPopular?: boolean
  category?: string
  features?: string[]
  description?: string
  order?: number
}

const fallbackPackages: Record<string, PackageItem[]> = {
  '8-9': [
    {
      title: 'Discover',
      subtitle: 'Mentoria',
      price: '5,500',
      isPopular: false,
      category: '8-9',
      features: [
        'Psychometric assessment to measure your interests',
        "1 career counselling session with Mentoria's expert career coaches",
        'Lifetime access to Knowledge Gateway',
        'Invites to live webinars by industry experts',
      ],
    },
    {
      title: 'Discover Plus+',
      subtitle: 'Mentoria',
      price: '15,000',
      isPopular: true,
      category: '8-9',
      features: [
        'Psychometric assessments to measure your interests, personality and abilities',
        "8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation",
        'Lifetime access to Knowledge Gateway',
        'Invites to live webinars by industry experts',
        'Customised reports after each session with education pathways',
        'Guidance on studying abroad',
        'CV building during internships/graduation',
      ],
    },
  ],
  '10-12': [
    {
      title: 'Achieve Online',
      subtitle: 'Mentoria',
      price: '5,999',
      isPopular: false,
      category: '10-12',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '1 career counselling session',
        'Lifetime access to Knowledge Gateway',
        'Pre-recorded webinars by industry experts',
      ],
    },
    {
      title: 'Achieve Plus+',
      subtitle: 'Mentoria',
      price: '10,599',
      isPopular: true,
      category: '10-12',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '4 career counselling sessions',
        'Lifetime access to Knowledge Gateway',
        'Attend live webinars by industry experts',
        'Customised reports after each session with education pathways',
        'Guidance on studying abroad',
        'CV reviews during internships/graduation',
      ],
    },
  ],
  college: [
    {
      title: 'Ascend Online',
      subtitle: 'Mentoria',
      price: '6,499',
      isPopular: false,
      category: 'college',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '1 career counselling session',
        'Lifetime access to Knowledge Gateway',
        'Pre-recorded webinars by industry experts',
      ],
    },
    {
      title: 'Ascend Plus+',
      subtitle: 'Mentoria',
      price: '10,599',
      isPopular: true,
      category: 'college',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '3 career counselling sessions',
        'Lifetime access to Knowledge Gateway',
        'Attend live webinars by industry experts',
        'Customised reports after each session with information on certificate/online courses',
        'Guidance on studying abroad',
        'CV reviews for job application',
      ],
    },
  ],
  professionals: [
    {
      title: 'Ascend Online',
      subtitle: 'Mentoria',
      price: '6,499',
      isPopular: false,
      category: 'professionals',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '1 career counselling session',
        'Lifetime access to Knowledge Gateway',
        'Pre-recorded webinars by industry experts',
      ],
    },
    {
      title: 'Ascend Plus+',
      subtitle: 'Mentoria',
      price: '10,599',
      isPopular: true,
      category: 'professionals',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '3 career counselling sessions',
        'Lifetime access to Knowledge Gateway',
        'Attend live webinars by industry experts',
        'Customised reports after each session with information on certificate/online courses',
        'Guidance on studying abroad',
        'CV reviews for job application',
      ],
    },
  ],
}

const customFallbackPackages: PackageItem[] = [
  {
    title: 'Career Report',
    price: '1,500',
    description:
      'Get a detailed report of your psychometric assessment for a scientific analysis of your interests.',
    category: 'custom',
  },
  {
    title: 'Career Report + Career Counselling',
    price: '3,000',
    description:
      "Connect with India's top career coaches to analyse your psychometric report and shortlist career paths.",
    category: 'custom',
  },
  {
    title: 'Knowledge Gateway + Career Helpline Access',
    price: '100',
    description:
      "Unlock holistic information on career paths and get direct access to Mentoria's experts.",
    category: 'custom',
  },
  {
    title: 'One-to-One Session with a Career Expert',
    price: '3,500',
    description:
      'Resolve your career queries through a one-on-one session with an expert from your field.',
    category: 'custom',
  },
  {
    title: 'College Admission Planning',
    price: '3,000',
    description:
      'Get recommendations on college options in India and abroad, organised in a resourceful planner.',
    category: 'custom',
  },
  {
    title: 'Exam Stress Management',
    price: '1,000',
    description:
      'Get expert guidance on tackling exam stress and planning your study schedule.',
    category: 'custom',
  },
  {
    title: 'College Admissions Planner - 100 (CAP-100)',
    price: '199',
    description:
      'Get an expert-curated list of top 100 colleges ranked into tiers based on cut-offs.',
    category: 'custom',
  },
]

const categoryMap = [
  {key: '8-9', label: '8-9 STUDENTS'},
  {key: '10-12', label: '10-12 STUDENTS'},
  {key: 'college', label: 'COLLEGE GRADUATES'},
  {key: 'professionals', label: 'WORKING PROFESSIONALS'},
]

export default function Packages({ packages }: { packages?: PackageItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState('8-9')

  const groupedPackages = useMemo(() => {
    if (!packages?.length) {
      return fallbackPackages
    }

    const result: Record<string, PackageItem[]> = { '8-9': [], '10-12': [], college: [], professionals: [] }
    packages.forEach((pkg) => {
      const category = pkg.category || 'custom'
      if (category in result) {
        result[category].push(pkg)
      }
    })

    return result
  }, [packages])

  const activePackages = groupedPackages[selectedCategory]?.length
    ? groupedPackages[selectedCategory]
    : fallbackPackages[selectedCategory]

  const customPackages = packages?.length
    ? packages.filter((pkg) => pkg.category === 'custom')
    : customFallbackPackages

  return (
    <section id="packages" className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container">
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase">Target Audience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-purple-900">Who I Help</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering students and parents with clarity at crucial academic junctures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages?.filter(p => p.category === 'who-i-help')?.sort((a: any, b: any) => a.order - b.order).map((pkg: any, index: number) => (
              <div key={pkg._id || index} className="bg-white rounded-2xl overflow-hidden shadow-lg p-8 card-hover">
                <h3 className="text-2xl font-bold text-purple-900 mb-3">{pkg.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-purple-900">How It Works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A brief preview of the structured process to help you find your way.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages?.filter(p => p.category === 'how-it-works')?.sort((a: any, b: any) => a.order - b.order).map((step: any, index: number) => (
              <div key={step._id || index} className="bg-white p-6 rounded-xl border-t-4 border-purple-500 shadow-md">
                <h4 className="text-lg font-bold text-purple-900 mb-2">{step.title}</h4>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-700 italic text-sm mb-6">(See "About Founder" section for more on my background and approach.)</p>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-purple-900">Mentoria Packages</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Choose the right Mentoria plan for your career growth</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryMap.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.key
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activePackages.map((pkg, index) => (
            <div
              key={`${pkg.title}-${index}`}
              className={`rounded-2xl overflow-hidden shadow-lg card-hover ${
                pkg.isPopular ? 'ring-2 ring-purple-400 md:scale-105 relative' : 'bg-white'
              }`}
              style={pkg.isPopular ? {backgroundColor: '#f5f0ff'} : {}}
            >
              {pkg.isPopular && (
                <div className="bg-green-500 text-white py-2 px-4 text-center font-semibold text-sm inline-block absolute top-4 right-4 rounded-full">
                  ★ Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-1">{pkg.title}</h3>
                <p className="text-gray-600 mb-6">{pkg.subtitle || 'Mentoria'}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">₹{pkg.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-6 font-semibold">Features:</p>
                <ul className="space-y-3 mb-8">
                  {(pkg.features || []).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-bold transition-all ${
                    pkg.isPopular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center mb-4 text-purple-900">Want To Customise Your Mentorship Plan?</h3>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            If you want to subscribe to specific services from Mentoria that resolve your career challenges, you can choose one or more of the following:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customPackages.map((pkg, index) => (
              <div key={`${pkg.title}-${index}`} className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
                <h4 className="text-lg font-bold text-purple-900 mb-2">{pkg.title}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-purple-600">₹{pkg.price}</span>
                </div>
                <p className="text-gray-700 text-sm mb-6">{pkg.description}</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-all">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
