# SWAPATH - Career Guidance & Admission Guidance Website

A modern, Sanity CMS-controlled website for SWAPATH, a career and admission guidance service.

## Overview

This is a fully Sanity-managed website built with Next.js 14 and TypeScript, featuring:

- **Sanity CMS** - All content is managed through Sanity studio
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI** - Built with Tailwind CSS and custom components
- **SEO Optimized** - Metadata and structured content
- **Performance** - Server-side rendering with Next.js

## Navigation Structure

The website follows this navigation flow:
1. **Home** - Hero section with key statistics
2. **About Founder** - Detailed founder profile with credentials
3. **Services** - Six key service offerings
4. **Packages** - Mentoria packages and custom options
5. **Testimonials** - Success stories from students and professionals
6. **Contact Us** - Contact form and information

## Project Structure

```
swapath-website/
├── app/
│   ├── components/        # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Packages.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── (pages)/          # Page routes
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── lib/
│   └── sanity.client.ts  # Sanity client and queries
├── sanity/
│   ├── sanity.config.ts  # Sanity configuration
│   └── schemas/          # Content schemas
│       ├── siteSettings.ts
│       ├── founder.ts
│       ├── service.ts
│       ├── package.ts
│       └── testimonial.ts
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Sanity Schemas

The website uses the following Sanity content types:

### 1. Site Settings
- Site title, description, domain
- Brand colors
- Contact information
- Logo upload

### 2. Founder Profile
- Name, photo, headline
- Biography (short and long)
- Signature quote
- Credentials and expertise
- Key statistics

### 3. Services
- Title and description
- Detailed content
- Service image and icon
- Display order

### 4. Packages
- Title and price
- Duration and features
- Category (Mentoria, Admission, Custom)
- Popular flag
- Display order

### 5. Testimonials
- Quote, author name, role
- Author photo and rating
- Category (Career, Admission, General)
- Display order

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables - Create `.env.local` with:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=w0ll7f1u
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For Sanity Studio:
```bash
npm run studio
```

### Build & Deploy

Build for production:
```bash
npm run build
npm start
```

## Sanity Configuration

**Project ID:** w0ll7f1u  
**Dataset:** production  
**Editor Token:** Stored in `.env.local`

## Features

✅ Fully Sanity-controlled content  
✅ Responsive mobile-first design  
✅ Smooth navigation and scrolling  
✅ Contact form integration  
✅ SEO optimized  
✅ Fast performance  
✅ Modern UI with Tailwind CSS  
✅ TypeScript for type safety  

## Content Management

All content is managed through the Sanity studio. After updating content in Sanity, it automatically reflects on the live website through the fetch queries.

### Key Queries
- `getSiteSettings()` - Global site information
- `getFounder()` - Founder profile
- `getServices()` - Service listings
- `getPackages()` - All packages
- `getTestimonials()` - Testimonials by category

## Contact Information

- **Email:** swatiraj72@gmail.com / swatiswain@yahoo.com
- **Phone:** +91 6583672097 / +91 9848083431
- **LinkedIn:** www.linkedin.com/in/swati-raj26
- **Domain:** FindSwapath.com

## License

© 2024 SWAPATH. All Rights Reserved.

## Support

For support or inquiries, contact Swati Raj through the contact form on the website.
