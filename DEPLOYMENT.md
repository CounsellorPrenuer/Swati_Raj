# Next.js and Sanity Deployment Configuration

## Vercel Deployment

The simplest way to deploy your Next.js app is to use Vercel.

### Steps:
1. Push your code to GitHub
2. Go to https://vercel.com and sign up
3. Connect your GitHub repository
4. Set environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: w0ll7f1u
   - `NEXT_PUBLIC_SANITY_DATASET`: production
   - `NEXT_PUBLIC_SANITY_API_VERSION`: 2024-01-01
   - `SANITY_API_TOKEN`: (Your Sanity API token)
5. Deploy!

### After Deployment:
- Your site will be live at a Vercel URL
- You can custom domain (FindSwapath.com)
- Updates to Sanity content appear automatically

## Sanity Backend

Your Sanity studio is automatically deployed at:
- Project ID: w0ll7f1u
- URL: https://w0ll7f1u.sanity.studio

### To access Sanity Studio:
1. Go to https://w0ll7f1u.sanity.studio
2. Sign in with Sanity account
3. Manage all your content

## Environment Variables

Create `.env.local` in project root:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=w0ll7f1u
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

## Custom Domain Setup (FindSwapath.com)

1. **Update DNS Records:**
   - Add CNAME record pointing to Vercel nameservers
   - Or update A records with Vercel IPs

2. **In Vercel Dashboard:**
   - Go to Settings → Domains
   - Add your custom domain
   - Verify DNS records

3. **SSL Certificate:**
   - Automatically provisioned by Vercel

## Performance Optimization

- Next.js automatic code splitting
- Image optimization via next/image
- Sanity CDN for fast content delivery
- ISR (Incremental Static Regeneration) ready

## Monitoring

- Vercel Analytics
- Sanity API logs
- Performance metrics in Vercel dashboard

## Backup & Recovery

- Sanity automatically backs up all data
- Recovery available in Sanity dashboard
- Version history for all documents

## Support

For deployment issues:
- Vercel: https://vercel.com/support
- Sanity: https://www.sanity.io/support
- Contact: swatiraj72@gmail.com
