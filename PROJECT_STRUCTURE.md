# Project Structure Overview

## Directory Layout

```
swapath-website/
│
├── app/                              # Next.js app directory
│   ├── components/                   # Reusable React components
│   │   ├── Navbar.tsx               # Navigation bar with mobile menu
│   │   ├── Hero.tsx                 # Landing hero section
│   │   ├── About.tsx                # Founder bio section
│   │   ├── Services.tsx             # Services showcase (6 services)
│   │   ├── Packages.tsx             # Mentoria & custom packages
│   │   ├── Testimonials.tsx         # Success stories section
│   │   ├── Contact.tsx              # Contact form & info
│   │   └── Footer.tsx               # Footer with links
│   │
│   ├── (pages)/                      # Route groups for pages
│   │
│   ├── layout.tsx                   # Root layout wrapper
│   ├── page.tsx                     # Homepage (/)
│   └── globals.css                  # Global Tailwind styles
│
├── lib/
│   └── sanity.client.ts             # Sanity client + query functions
│
├── sanity/                          # Sanity configuration
│   ├── sanity.config.ts             # Sanity project config
│   ├── sanity.json                  # Sanity CLI config
│   └── schemas/                     # Content type schemas
│       ├── index.ts                 # Schema exports
│       ├── siteSettings.ts          # Global settings schema
│       ├── founder.ts               # Founder profile schema
│       ├── service.ts               # Services schema
│       ├── package.ts               # Packages schema
│       └── testimonial.ts           # Testimonials schema
│
├── public/                          # Static assets
│
├── Configuration Files
│   ├── package.json                 # Dependencies & scripts
│   ├── next.config.js               # Next.js configuration
│   ├── tailwind.config.js           # Tailwind CSS config
│   ├── postcss.config.js            # PostCSS config
│   ├── tsconfig.json                # TypeScript config
│   ├── .eslintrc.json               # ESLint config
│   ├── .gitignore                   # Git ignore rules
│   ├── .npmrc                       # NPM configuration
│   └── .env.local                   # Environment variables
│
└── Documentation
    ├── README.md                    # Main project documentation
    ├── SETUP.md                     # Setup & initial content guide
    ├── DEPLOYMENT.md                # Deployment instructions
    └── PROJECT_STRUCTURE.md         # This file
```

## Content Schema Relationships

```
Site Settings (Global)
    └── Main configuration for the entire site

Founder Profile
    └── About Founder page content

Services (Multiple)
    ├── Career Guidance
    ├── Admission Guidance
    ├── Curriculum Navigation
    ├── Personal Branding
    ├── International Opportunities
    └── Parent Counseling

Packages (Multiple)
    ├── Discover Mentoria (₹5,500)
    ├── Discover Plus+ Mentoria (₹15,000) - Popular
    └── Custom Packages (7 options)

Testimonials (Multiple)
    ├── Career Guidance testimonials
    ├── Admission Guidance testimonials
    └── General testimonials
```

## Component Architecture

### Client-Side Components
- All components in `app/components/` are client-side (use 'use client')
- Handle interactivity (forms, navigation, etc.)
- Fetch data from Sanity as needed

### Server-Side Components
- `app/layout.tsx` - Root layout
- `app/page.tsx` - Homepage with component imports

### Data Flow
```
Sanity CMS
    ↓
lib/sanity.client.ts (Query functions)
    ↓
React Components (render with fetched data)
    ↓
User Browser
```

## Key Features

### Navigation Structure
- Home (Hero) → About Founder → Services → Packages → Testimonials → Contact

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints (sm, md, lg, xl)
- Hamburger menu on mobile

### SEO Optimization
- Meta tags in layout
- Semantic HTML
- Structured content

### Performance
- Next.js Image optimization ready
- Sanity CDN for fast image delivery
- Code splitting and lazy loading

## Important Files Explained

### `sanity.client.ts`
Contains all Sanity queries used across the app:
- `getSiteSettings()` - Global site info
- `getFounder()` - Founder profile
- `getServices()` - All services
- `getPackages()` - All packages
- `getTestimonials()` - All testimonials
- `urlFor()` - Image URL builder

### `globals.css`
Contains:
- Tailwind directives
- Custom utility classes (btn-primary, text-gradient, etc.)
- Global animations and transitions

### Schema Files
Each schema file exports a document type for Sanity:
- Defines fields, types, validation rules
- Enables content management UI in Sanity studio
- Validates data before publishing

## Styling Approach

Uses **Tailwind CSS** for all styling:
- Utility-first CSS framework
- Pre-defined color palette (blue, purple)
- Responsive design with breakpoints
- Custom CSS classes in globals.css for complex components

### Color Scheme
- Primary: Blue (#2563eb)
- Secondary: Purple (#9333ea)
- Gradients: Blue to Purple

## Development Workflow

1. **Edit Components** → `app/components/*.tsx`
2. **Update Content** → Sanity studio
3. **Modify Schemas** → `sanity/schemas/*.ts`
4. **Style Updates** → `app/globals.css` or inline Tailwind
5. **Test Locally** → `npm run dev`
6. **Deploy** → Push to GitHub → Vercel auto-deploys

## Database/CMS

**Sanity CMS** - Headless CMS
- Project: w0ll7f1u
- Dataset: production
- API: REST + Groovy Query Language (GROQ)
- Studio: https://w0ll7f1u.sanity.studio

All content is stored in Sanity and fetched via API calls, ensuring real-time updates without rebuilding the website.

## Deployment

**Recommended:** Vercel (automatic deployments from GitHub)
- Environment variables configured
- Preview deployments for testing
- Production deployments on git push
