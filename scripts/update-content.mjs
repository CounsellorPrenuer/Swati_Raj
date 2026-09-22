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

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function main() {
  console.log('Uploading image...')
  const imagePath = 'C:/Users/Mihika/.gemini/antigravity/brain/0885376a-1292-462a-8d55-a0a6d0e89d41/.user_uploaded/media_1790088390526.png'
  let imageAsset = null
  if (fs.existsSync(imagePath)) {
    imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
      filename: 'founder-photo.png'
    })
    console.log('Image uploaded:', imageAsset._id)
  } else {
    console.log('Image not found, skipping upload')
  }

  const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'SWAPATH — Find Your Way',
    description: 'Helping Students Find Their Way — One Clear Decision at a Time\n\nCertified career counseling for students in classes 8–12, guiding them from confusion to clarity in choosing subjects, streams, and career paths.',
    brandColor: '#8a2be2',
    email: 'swatiswain@yahoo.com',
    phone: '+65 8367 2097',
    domain: 'FindSwapath.com',
  }

  const longBioText = `My path into career counseling didn't start in a counseling office — it started in the classroom.
I've spent more than 15 years teaching Mathematics and leading academic teams, including as Vice-Principal at Pragathi Central School (Hyderabad), where I counseled and guided hundreds of students through subject choices, exam stress, and academic planning. I currently teach Pre-University and Secondary students at Yuva Bharathi International School, Singapore, working across both the Cambridge IGCSE and CBSE curricula.
Alongside teaching, I've worked as a Resource Person with Oxford University Press, training teachers across India on activity-based learning and Vedic Mathematics — work that deepened my understanding of how students think, learn, and build confidence.
This blend of classroom experience, curriculum development, and academic leadership is what shapes my approach to career counseling today: practical, grounded, and centered on the student in front of me — not a generic checklist.

My Approach:
I combine structured assessment tools with real academic insight to help students:
• Understand their genuine interests, strengths, and learning style
• Make informed, confident decisions about streams, subjects, and future paths
• Overcome subject-specific anxiety (especially around Mathematics)
• Build a realistic, achievable plan — not just a list of possibilities
I work closely with both students and parents, because I've seen — from the Vice-Principal's office to the classroom — that the best decisions happen when everyone is on the same page.`

  const founder = {
    _id: 'founder',
    _type: 'founder',
    name: 'Swati Raj',
    headline: 'Certified Career Counsellor',
    shortBio: 'Hi, I\'m Swati Raj — the founder of Swapath. I\'m a Certified Career Counsellor, specializing in guiding students from classes 8th through 12th, with over a decade of hands-on experience in education across India and Singapore. I believe career guidance shouldn\'t feel like a lecture — it should feel like a conversation that helps a student find their own way, which is exactly what "Swapath" means.',
    longBio: longBioText.split('\n').map((text, i) => ({
      _type: 'block',
      _key: `block-${i}`,
      style: 'normal',
      children: [{ _type: 'span', _key: `span-${i}`, text: text, marks: [] }]
    })),
    quote: 'A single conversation can bring clarity.',
    credentials: [
      { _key: 'cred1', title: 'Certified Career Counsellor (for students, classes 8th–12th) — Mentoria, 2026', icon: 'award' },
      { _key: 'cred2', title: 'Certificate of Completion, Focus on Assessment: Cambridge IGCSE Mathematics — Cambridge Assessment International Education, 2026', icon: 'award' },
      { _key: 'cred3', title: 'Master\'s in Mathematics — Utkal University, Bhubaneswar, India', icon: 'book' },
      { _key: 'cred4', title: 'Bachelor\'s in Education (Mathematics & English) — ICFAI College of Education, Hyderabad, India', icon: 'book' },
      { _key: 'cred5', title: '15+ years of experience across teaching, academic leadership, curriculum development, and teacher training', icon: 'briefcase' },
      { _key: 'cred6', title: 'Qualified CTET (Central Teacher Eligibility Test), CBSE', icon: 'award' },
      { _key: 'cred7', title: 'Published researcher: work on math-related anxiety and abstract thinking presented at the Asian Cognitive Behaviour Therapy Conference and NAOP (IIT Kharagpur)', icon: 'book' }
    ]
  }

  if (imageAsset) {
    founder.image = {
      _type: 'image',
      asset: { _type: 'reference', _ref: imageAsset._id }
    }
  }

  const services = [
    {
      _id: 'service-1',
      _type: 'service',
      title: 'Student-Focused',
      slug: { _type: 'slug', current: 'student-focused' },
      description: 'Specialized in guiding students from classes 8th to 12th through crucial academic and career decisions.',
      icon: '🎯',
      order: 1
    },
    {
      _id: 'service-2',
      _type: 'service',
      title: 'Educator\'s Insight',
      slug: { _type: 'slug', current: 'educators-insight' },
      description: 'Years of classroom and leadership experience mean I understand real academic pressures, not just theoretical career models.',
      icon: '🎓',
      order: 2
    },
    {
      _id: 'service-3',
      _type: 'service',
      title: 'Certified & Structured',
      slug: { _type: 'slug', current: 'certified-structured' },
      description: 'A certified career counselor using proven assessment tools to match interests, aptitude, and personality to the right path.',
      icon: '📋',
      order: 3
    },
    {
      _id: 'service-4',
      _type: 'service',
      title: 'Judgment-Free Guidance',
      slug: { _type: 'slug', current: 'judgment-free-guidance' },
      description: 'A calm, supportive space for students to explore doubts and ambitions without pressure.',
      icon: '🤝',
      order: 4
    }
  ]

  const packages = [
    {
      _id: 'pkg-who-1',
      _type: 'package',
      title: 'Class 8–10 Students',
      slug: { _type: 'slug', current: 'class-8-10-students' },
      description: 'Choosing their stream (Science, Commerce, Humanities) with confidence.',
      category: 'who-i-help',
      price: 0,
      duration: 'Guidance',
      features: [],
      isPopular: false,
      cta: 'Learn More',
      order: 1
    },
    {
      _id: 'pkg-who-2',
      _type: 'package',
      title: 'Class 11–12 Students',
      slug: { _type: 'slug', current: 'class-11-12-students' },
      description: 'Narrowing down courses, colleges, and career directions.',
      category: 'who-i-help',
      price: 0,
      duration: 'Guidance',
      features: [],
      isPopular: false,
      cta: 'Learn More',
      order: 2
    },
    {
      _id: 'pkg-who-3',
      _type: 'package',
      title: 'Parents',
      slug: { _type: 'slug', current: 'parents' },
      description: 'Seeking clarity on how to support their child\'s academic and career choices.',
      category: 'who-i-help',
      price: 0,
      duration: 'Guidance',
      features: [],
      isPopular: false,
      cta: 'Learn More',
      order: 3
    },
    {
      _id: 'pkg-who-4',
      _type: 'package',
      title: 'Students Facing Exam Stress',
      slug: { _type: 'slug', current: 'students-facing-exam-stress' },
      description: 'Or subject-related anxiety, including math-specific fear and confidence-building.',
      category: 'who-i-help',
      price: 0,
      duration: 'Guidance',
      features: [],
      isPopular: false,
      cta: 'Learn More',
      order: 4
    },
    {
      _id: 'pkg-how-1',
      _type: 'package',
      title: '1. Discovery Call',
      slug: { _type: 'slug', current: '1-discovery-call' },
      description: 'A short conversation to understand the student\'s situation and concerns.',
      category: 'how-it-works',
      price: 0,
      duration: 'Step 1',
      features: [],
      isPopular: false,
      cta: 'Learn More',
      order: 5
    },
    {
      _id: 'pkg-how-2',
      _type: 'package',
      title: '2. Assessment',
      slug: { _type: 'slug', current: '2-assessment' },
      description: 'Aptitude, interest, and personality mapping using structured tools.',
      category: 'how-it-works',
      price: 0,
      duration: 'Step 2',
      features: [],
      isPopular: false,
      cta: 'Learn More',
      order: 6
    },
    {
      _id: 'pkg-how-3',
      _type: 'package',
      title: '3. Guidance Session',
      slug: { _type: 'slug', current: '3-guidance-session' },
      description: 'A detailed discussion of options, strengths, and realistic paths forward.',
      category: 'how-it-works',
      price: 0,
      duration: 'Step 3',
      features: [],
      isPopular: true,
      cta: 'Learn More',
      order: 7
    },
    {
      _id: 'pkg-how-4',
      _type: 'package',
      title: '4. Personalized Roadmap',
      slug: { _type: 'slug', current: '4-personalized-roadmap' },
      description: 'A clear plan covering stream/subject choice, skill-building, and next steps.',
      category: 'how-it-works',
      price: 0,
      duration: 'Step 4',
      features: [],
      isPopular: false,
      cta: 'Learn More',
      order: 8
    }
  ]

  const testimonials = [
    {
      _id: 'testimonial-1',
      _type: 'testimonial',
      quote: 'Swathi ma\'am has been my go-to mentor for one-to-one career counselling ever since my university days — through internships and now into my full-time role. In our sessions, she\'s helped me understand the realities of the corporate world, the importance of professional ethics, and how to weigh the pros and cons of different opportunities before making a decision. Her advice is always honest, thoughtful, and practical, and I\'ve never once hesitated to open up to her about my career aspirations and the paths ahead of me. Even now, she checks in regularly to see how I\'m doing, encourages me to seize the right opportunities, and guides me toward informed decisions. This one-on-one mentorship has been truly vital to my professional growth, and I\'m deeply grateful to have her as my career counsellor and trusted advisor.',
      author: 'Nitilaksha',
      role: 'Mentee',
      rating: 5,
      category: 'career',
      order: 1
    },
    {
      _id: 'testimonial-2',
      _type: 'testimonial',
      quote: 'Hello I\'m Ridhima Khuntia and I took a psychometric test at Mentoria where Swati ma\'am was my counsellor. The psychometric test with her guidance gave me a clearer perspective on the career options that could suit me. The questions she asked me helped me know myself better. At a stage where I was a little confused about my future career choices she patiently guided me and helped me understand my strengths, interests and abilities. Her friendly approach helped me become more aware of the various opportunities that could be suitable for my interests and abilities. Overall the counselling session helped me get more clarity about my career options.',
      author: 'Ridhima Khuntia',
      role: 'Student',
      rating: 5,
      category: 'career',
      order: 2
    }
  ]

  console.log('Replacing documents...')
  await client.createOrReplace(siteSettings)
  await client.createOrReplace(founder)
  
  

  await Promise.all(services.map(s => client.createOrReplace(s)))
  await Promise.all(packages.map(p => client.createOrReplace(p)))
  await Promise.all(testimonials.map(t => client.createOrReplace(t)))

  console.log('Done.')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

