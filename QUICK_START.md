# 🚀 SWAPATH Website - Quick Start Guide

## ⚡ 5-Minute Setup

### 1. Open Terminal in Project Directory
```bash
cd swapath-website
```

### 2. Install Dependencies (2 min)
```bash
npm install
```

### 3. Start Development Server (1 min)
```bash
npm run dev
```
- Website: http://localhost:3000
- Open browser and see your site live!

### 4. Open Sanity Studio (2 min)
```bash
npm run studio
```
- Studio: http://localhost:3333
- Start managing your content!

## 📝 First Steps in Sanity

1. **Create Site Settings**
   - Go to Content → Site Settings
   - Add your brand colors, contact info, logo

2. **Create Founder Profile**
   - New Document → Founder
   - Add your bio, credentials, photo

3. **Add Services** (6 total)
   - Services are pre-defined in the website components

4. **Add Packages**
   - Mentoria packages with prices and features

5. **Add Testimonials**
   - Success stories from students/professionals

## 🎨 Customize Look & Feel

### Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

### Text/Content
- Edit component files in `app/components/`
- All hardcoded content can be replaced with Sanity data

### Logo & Images
- Replace placeholder in `Hero.tsx`
- Upload via Sanity for content images

## 🔄 Typical Workflow

```
Edit in Sanity → Content updates automatically on website
↓
No rebuild needed → Changes live in seconds
↓
Perfect for content managers!
```

## 📤 Going Live

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Connect to Vercel
3. Set env variables
4. Done! ✅

### Option 2: Netlify
1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set publish dir: `.next`
4. Deploy!

### Option 3: Your Own Server
```bash
npm run build
npm start
```

## 🆘 Common Issues

**"Content not showing?"**
- Check `.env.local` has correct credentials
- Verify Sanity Studio is open and content is published
- Clear browser cache

**"Build errors?"**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node 16+

**"Styles broken?"**
- Clear Next.js cache: `rm -rf .next`
- Tailwind CSS needs to compile

## 📞 Contact Information

**Email:** swatiraj72@gmail.com / swatiswain@yahoo.com  
**Phone:** +91 6583672097 / +91 9848083431  
**LinkedIn:** www.linkedin.com/in/swati-raj26  
**Domain:** FindSwapath.com  

## 📚 Documentation Files

- **README.md** - Complete overview
- **SETUP.md** - Detailed setup instructions
- **DEPLOYMENT.md** - Deployment guide
- **PROJECT_STRUCTURE.md** - Architecture details
- **QUICK_START.md** - This file

## ✨ Key Features

✅ Fully Sanity-controlled content  
✅ Zero-config deployment to Vercel  
✅ Mobile-responsive design  
✅ SEO optimized  
✅ Fast & performant  
✅ TypeScript for safety  
✅ Modern UI with Tailwind  

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Visit http://localhost:3000
4. ✅ Open http://localhost:3333 for Sanity Studio
5. ✅ Start creating content!
6. ✅ Deploy when ready!

---

**That's it! Your website is ready to use!** 🎉
