import fs from 'node:fs'
import path from 'node:path'
import { createClient } from '@sanity/client'

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return
  const content = fs.readFileSync(filePath, 'utf8')
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const equalsIndex = trimmed.indexOf('=')
    if (equalsIndex === -1) continue
    const key = trimmed.slice(0, equalsIndex).trim()
    const value = trimmed.slice(equalsIndex + 1).trim()
    if (!process.env[key]) process.env[key] = value
  }
}

const rootDir = path.resolve(process.cwd())
loadEnv(path.join(rootDir, '.env.local'))

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

if (!projectId || !token) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local')
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
  perspective: 'published',
})

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  title: 'SWAPATH - FIND YOUR WAY',
  description: 'Career Guidance & Admission Guidance',
  domain: 'FindSwapath.com',
  email: 'swatiraj72@gmail.com',
  phone: '6583672097',
}

const founder = {
  _id: 'founder',
  _type: 'founder',
  name: 'Swati Raj',
  headline: 'Career Guidance, Admission Guidance',
  shortBio:
    'Swati Raj has spent 20+ years guiding students through India\'s most demanding curricula: Cambridge, IGCSE, and CBSE. She has helped hundreds find clarity in their academic and career choices.',
  longBio: [
    {
      _type: 'block',
      _key: 'bio-1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'As a mother of two children now thriving in their own fields, she brings a dual perspective to every student she guides.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'bio-2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span-2',
          text: 'Her mission is to help students, parents, schools, and colleges make confident decisions with clarity and purpose.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ],
  quote: 'When your inner clarity aligns with your academic path, your success becomes inevitable.',
  credentials: [
    { _type: 'object', _key: 'cred-1', title: '20+ Years in Education', icon: 'award' },
    { _type: 'object', _key: 'cred-2', title: 'Career & Admission Guidance', icon: 'briefcase' },
    { _type: 'object', _key: 'cred-3', title: 'Parent & Educator Perspective', icon: 'users' },
    { _type: 'object', _key: 'cred-4', title: 'Hundreds of Students Guided', icon: 'star' },
  ],
  stats: [
    { _type: 'object', _key: 'stat-1', number: '20+', label: 'Years of Experience' },
    { _type: 'object', _key: 'stat-2', number: 'Hundreds', label: 'Students Guided' },
    { _type: 'object', _key: 'stat-3', number: '100%', label: 'Commitment to Clarity' },
  ],
}

const services = [
  {
    _id: 'service-career-guidance',
    _type: 'service',
    title: 'Career Guidance',
    slug: { _type: 'slug', current: 'career-guidance' },
    description: 'Personalized career counseling to help students and professionals discover their ideal career path.',
    icon: '🎯',
    order: 1,
  },
  {
    _id: 'service-admission-guidance',
    _type: 'service',
    title: 'Admission Guidance',
    slug: { _type: 'slug', current: 'admission-guidance' },
    description: 'Expert assistance in college selection, application strategy, and admission process.',
    icon: '📖',
    order: 2,
  },
  {
    _id: 'service-curriculum-navigation',
    _type: 'service',
    title: 'Curriculum Navigation',
    slug: { _type: 'slug', current: 'curriculum-navigation' },
    description: 'Guidance through Cambridge, IGCSE, and CBSE curricula with study strategies.',
    icon: '🧠',
    order: 3,
  },
  {
    _id: 'service-personal-branding',
    _type: 'service',
    title: 'Personal Branding',
    slug: { _type: 'slug', current: 'personal-branding' },
    description: 'Build your academic and professional profile to stand out to colleges and employers.',
    icon: '💼',
    order: 4,
  },
  {
    _id: 'service-international-opportunities',
    _type: 'service',
    title: 'International Opportunities',
    slug: { _type: 'slug', current: 'international-opportunities' },
    description: 'Guidance on studying abroad and international career pathways.',
    icon: '🌐',
    order: 5,
  },
  {
    _id: 'service-parent-counseling',
    _type: 'service',
    title: 'Parent Counseling',
    slug: { _type: 'slug', current: 'parent-counseling' },
    description: 'Support for parents to better understand and guide their children\'s academic journey.',
    icon: '👥',
    order: 6,
  },
]

const packages = [
  {
    _id: 'package-discover',
    _type: 'package',
    title: 'Discover',
    slug: { _type: 'slug', current: 'discover' },
    description: 'Foundational Mentoria plan for 8-9 students.',
    price: 5500,
    duration: '1 Session',
    features: [
      'Psychometric assessment to measure your interests',
      '1 career counselling session with Mentoria\'s expert career coaches',
      'Lifetime access to Knowledge Gateway',
      'Invites to live webinars by industry experts',
    ],
    isPopular: false,
    category: '8-9',
    cta: 'Book Now',
    order: 1,
  },
  {
    _id: 'package-discover-plus',
    _type: 'package',
    title: 'Discover Plus+',
    slug: { _type: 'slug', current: 'discover-plus' },
    description: 'Advanced Mentoria plan for 8-9 students.',
    price: 15000,
    duration: '8 Sessions',
    features: [
      'Psychometric assessments to measure your interests, personality and abilities',
      '8 career counselling sessions (1 every year) with Mentoria\'s expert career coaches until graduation',
      'Lifetime access to Knowledge Gateway',
      'Invites to live webinars by industry experts',
      'Customised reports after each session with education pathways',
      'Guidance on studying abroad',
      'CV building during internships/graduation',
    ],
    isPopular: true,
    category: '8-9',
    cta: 'Book Now',
    order: 2,
  },
  {
    _id: 'package-achieve-online',
    _type: 'package',
    title: 'Achieve Online',
    slug: { _type: 'slug', current: 'achieve-online' },
    description: 'Mentoria plan for 10-12 students.',
    price: 5999,
    duration: '1 Session',
    features: [
      'Psychometric assessment to measure your interests, personality and abilities',
      '1 career counselling session',
      'Lifetime access to Knowledge Gateway',
      'Pre-recorded webinars by industry experts',
    ],
    isPopular: false,
    category: '10-12',
    cta: 'Book Now',
    order: 3,
  },
  {
    _id: 'package-achieve-plus',
    _type: 'package',
    title: 'Achieve Plus+',
    slug: { _type: 'slug', current: 'achieve-plus' },
    description: 'Advanced Mentoria plan for 10-12 students.',
    price: 10599,
    duration: '4 Sessions',
    features: [
      'Psychometric assessment to measure your interests, personality and abilities',
      '4 career counselling sessions',
      'Lifetime access to Knowledge Gateway',
      'Attend live webinars by industry experts',
      'Customised reports after each session with education pathways',
      'Guidance on studying abroad',
      'CV reviews during internships/graduation',
    ],
    isPopular: true,
    category: '10-12',
    cta: 'Book Now',
    order: 4,
  },
  {
    _id: 'package-ascend-online',
    _type: 'package',
    title: 'Ascend Online',
    slug: { _type: 'slug', current: 'ascend-online' },
    description: 'Mentoria plan for college graduates.',
    price: 6499,
    duration: '1 Session',
    features: [
      'Psychometric assessment to measure your interests, personality and abilities',
      '1 career counselling session',
      'Lifetime access to Knowledge Gateway',
      'Pre-recorded webinars by industry experts',
    ],
    isPopular: false,
    category: 'college',
    cta: 'Book Now',
    order: 5,
  },
  {
    _id: 'package-ascend-plus',
    _type: 'package',
    title: 'Ascend Plus+',
    slug: { _type: 'slug', current: 'ascend-plus' },
    description: 'Advanced Mentoria plan for college graduates.',
    price: 10599,
    duration: '3 Sessions',
    features: [
      'Psychometric assessment to measure your interests, personality and abilities',
      '3 career counselling sessions',
      'Lifetime access to Knowledge Gateway',
      'Attend live webinars by industry experts',
      'Customised reports after each session with information on certificate/online courses',
      'Guidance on studying abroad',
      'CV reviews for job application',
    ],
    isPopular: true,
    category: 'college',
    cta: 'Book Now',
    order: 6,
  },
  {
    _id: 'package-ascend-online-prof',
    _type: 'package',
    title: 'Ascend Online',
    slug: { _type: 'slug', current: 'ascend-online-professional' },
    description: 'Mentoria plan for working professionals.',
    price: 6499,
    duration: '1 Session',
    features: [
      'Psychometric assessment to measure your interests, personality and abilities',
      '1 career counselling session',
      'Lifetime access to Knowledge Gateway',
      'Pre-recorded webinars by industry experts',
    ],
    isPopular: false,
    category: 'professionals',
    cta: 'Book Now',
    order: 7,
  },
  {
    _id: 'package-ascend-plus-prof',
    _type: 'package',
    title: 'Ascend Plus+',
    slug: { _type: 'slug', current: 'ascend-plus-professional' },
    description: 'Advanced Mentoria plan for working professionals.',
    price: 10599,
    duration: '3 Sessions',
    features: [
      'Psychometric assessment to measure your interests, personality and abilities',
      '3 career counselling sessions',
      'Lifetime access to Knowledge Gateway',
      'Attend live webinars by industry experts',
      'Customised reports after each session with information on certificate/online courses',
      'Guidance on studying abroad',
      'CV reviews for job application',
    ],
    isPopular: true,
    category: 'professionals',
    cta: 'Book Now',
    order: 8,
  },
  {
    _id: 'package-career-report',
    _type: 'package',
    title: 'Career Report',
    slug: { _type: 'slug', current: 'career-report' },
    description: 'Detailed psychometric report for scientific analysis of your interests.',
    price: 1500,
    duration: 'Report',
    features: [],
    isPopular: false,
    category: 'custom',
    cta: 'Buy Now',
    order: 9,
  },
  {
    _id: 'package-career-report-counselling',
    _type: 'package',
    title: 'Career Report + Career Counselling',
    slug: { _type: 'slug', current: 'career-report-career-counselling' },
    description: 'Psychometric report plus career coach review and shortlisting.',
    price: 3000,
    duration: 'Consultation',
    features: [],
    isPopular: false,
    category: 'custom',
    cta: 'Buy Now',
    order: 10,
  },
  {
    _id: 'package-knowledge-gateway',
    _type: 'package',
    title: 'Knowledge Gateway + Career Helpline Access',
    slug: { _type: 'slug', current: 'knowledge-gateway-career-helpline-access' },
    description: 'Holistic career information with direct access to experts.',
    price: 100,
    duration: 'Access',
    features: [],
    isPopular: false,
    category: 'custom',
    cta: 'Buy Now',
    order: 11,
  },
  {
    _id: 'package-one-to-one-session',
    _type: 'package',
    title: 'One-to-One Session with a Career Expert',
    slug: { _type: 'slug', current: 'one-to-one-session-with-a-career-expert' },
    description: 'One-on-one session with an expert from your chosen field.',
    price: 3500,
    duration: 'Session',
    features: [],
    isPopular: false,
    category: 'custom',
    cta: 'Buy Now',
    order: 12,
  },
  {
    _id: 'package-college-admission-planning',
    _type: 'package',
    title: 'College Admission Planning',
    slug: { _type: 'slug', current: 'college-admission-planning' },
    description: 'Unbiased recommendations and details on future college options.',
    price: 3000,
    duration: 'Planner',
    features: [],
    isPopular: false,
    category: 'custom',
    cta: 'Buy Now',
    order: 13,
  },
  {
    _id: 'package-exam-stress-management',
    _type: 'package',
    title: 'Exam Stress Management',
    slug: { _type: 'slug', current: 'exam-stress-management' },
    description: 'Expert guidance on tackling exam stress and planning your study schedule.',
    price: 1000,
    duration: 'Session',
    features: [],
    isPopular: false,
    category: 'custom',
    cta: 'Buy Now',
    order: 14,
  },
  {
    _id: 'package-cap-100',
    _type: 'package',
    title: 'College Admissions Planner - 100 (CAP-100)',
    slug: { _type: 'slug', current: 'college-admissions-planner-100-cap-100' },
    description: 'Expert-curated list of the top 100 colleges ranked into four tiers.',
    price: 199,
    duration: 'Planner',
    features: [],
    isPopular: false,
    category: 'custom',
    cta: 'Buy Now',
    order: 15,
  },
]

const testimonials = [
  {
    _id: 'testimonial-1',
    _type: 'testimonial',
    quote: 'Swati\'s guidance completely transformed my understanding of career options. She helped me explore paths beyond what everyone told me was the only option.',
    author: 'Arjun Patel',
    role: 'Student, Commerce Stream',
    rating: 5,
    category: 'career',
    order: 1,
  },
  {
    _id: 'testimonial-2',
    _type: 'testimonial',
    quote: 'As a parent, I was confused about how to support my daughter\'s academic journey. Swati\'s sessions gave me clarity on how to guide her without pressuring her.',
    author: 'Priya Sharma',
    role: 'Parent',
    rating: 5,
    category: 'general',
    order: 2,
  },
  {
    _id: 'testimonial-3',
    _type: 'testimonial',
    quote: 'The admission guidance I received was exceptional. Swati helped me understand not just which colleges were options, but which ones truly aligned with my goals.',
    author: 'Neha Kapoor',
    role: 'Student, CBSE Board',
    rating: 5,
    category: 'admission',
    order: 3,
  },
  {
    _id: 'testimonial-4',
    _type: 'testimonial',
    quote: 'Working with Swati on my career transition was life-changing. She helped me identify transferable skills I did not even know I had.',
    author: 'Vikram Singh',
    role: 'Career Changer, Professional',
    rating: 5,
    category: 'career',
    order: 4,
  },
]

async function main() {
  await client.createOrReplace(siteSettings)
  await client.createOrReplace(founder)
  await Promise.all(services.map((document) => client.createOrReplace(document)))
  await Promise.all(packages.map((document) => client.createOrReplace(document)))
  await Promise.all(testimonials.map((document) => client.createOrReplace(document)))
  console.log('Sanity seed completed successfully.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
