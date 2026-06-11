# Swapath Website - Setup & Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
cd swapath-website
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=w0ll7f1u
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=skkjr03MJYT0netmDRXETimzawU6wprwBDA1yRuzh5JMXRHjgFId11Oqp11e4oUfXa652NiCcs1Bg3rfxC3IaXjfGhtceewu7WbbExl4bufgyYVAVYjV7fpisVmuFd7K9hETf7ZKqlW3KDNZ1jkh7IntnCn0DMtGeand8BHxVRBo4Gv3Bf3A
```

### 3. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### 4. Set Up Sanity Studio
```bash
npm run studio
```
Visit http://localhost:3333 to manage content

## Initial Content Setup

### Step 1: Create Site Settings
In Sanity Studio:
1. Go to Content → Site Settings
2. Enter:
   - Site Title: SWAPATH - FIND YOUR WAY
   - Description: Career Guidance & Admission Guidance
   - Domain: FindSwapath.com
   - Email: swatiraj72@gmail.com
   - Phone: +91 6583672097
   - Upload logo from Google Drive link

### Step 2: Create Founder Profile
1. New Document → Founder
2. Fill in:
   - Name: Swati Raj
   - Headline: Blending educational expertise with personalized guidance
   - Short Bio: 20+ years of experience...
   - Long Bio: Detailed biography text
   - Quote: Your signature quote
   - Credentials: Add 4 credentials
   - Stats: Add key numbers

### Step 3: Add Services
Create 6 service documents:
1. Career Guidance
2. Admission Guidance
3. Curriculum Navigation
4. Personal Branding
5. International Opportunities
6. Parent Counseling

### Step 4: Add Packages
Create package documents:
- Discover Mentoria (₹5,500)
- Discover Plus+ Mentoria (₹15,000) - Mark as Popular
- Custom packages for individual services

### Step 5: Add Testimonials
Add at least 4 testimonials with:
- Author name and role
- Quote text
- Rating (1-5 stars)
- Category (career/admission/general)

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Option 2: Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy

### Option 3: Self-Hosted (AWS, DigitalOcean, etc.)
```bash
npm run build
npm start
```

## Important Notes

✅ All content is fetched from Sanity in real-time  
✅ Changes in Sanity studio automatically appear on website  
✅ No need to rebuild website when updating content  
✅ Images are stored in Sanity and delivered via CDN  
✅ Website is fully responsive and SEO optimized  

## Troubleshooting

**Content not appearing?**
- Check Sanity API token in .env.local
- Verify dataset name is "production"
- Clear browser cache and rebuild

**Build errors?**
- Delete node_modules and package-lock.json
- Run `npm install` again
- Ensure Node.js version is 16+

**Styling issues?**
- Make sure Tailwind CSS is imported in globals.css
- Clear Next.js cache: `rm -rf .next`

## Support

For issues or questions:
- Email: swatiraj72@gmail.com
- Phone: +91 6583672097
- LinkedIn: www.linkedin.com/in/swati-raj26
