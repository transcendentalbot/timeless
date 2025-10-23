# Timeless Brookfields - Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier) - Sign up at [vercel.com](https://vercel.com)

### Step 1: Push Code to GitHub

Your code is already in a git repository. Push it to GitHub:

```bash
# Create a new repository on GitHub (via github.com) named "timeless"
# Don't initialize with README, .gitignore, or license

# Then run these commands:
git add .
git commit -m "Initial commit - Timeless Brookfields website"
git branch -M main
git remote add origin https://github.com/transcendentalbot/timeless.git
git push -u origin main
```

### Step 2: Deploy to Vercel

**Option A: Via Vercel Dashboard (Easiest)**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import your `timeless` repository
4. Vercel will auto-detect Vite settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete
7. Done! Your site is live at `https://timeless-[random].vercel.app`

**Option B: Via Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from /timeless directory)
vercel

# Follow prompts:
# - Link to existing project? N
# - Project name? timeless-brookfields
# - Directory? ./
# - Override settings? N

# Deploy to production
vercel --prod
```

### Step 3: Connect Custom Domain

1. Purchase `timelessbrookfields.com` (GoDaddy, Namecheap, etc.)
2. In Vercel Dashboard:
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter `timelessbrookfields.com` and `www.timelessbrookfields.com`
3. Update DNS at your domain registrar:
   - Add **A Record**: `@` → `76.76.21.21`
   - Add **CNAME Record**: `www` → `cname.vercel-dns.com`
4. Wait 24-48 hours for DNS propagation
5. Vercel will auto-provision SSL certificate (HTTPS)

---

## 📧 Email Form Setup (Free Options)

The contact form currently logs to console. Choose one option:

### Option A: Formspree (Recommended - Easiest)

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a new form and get your form endpoint
3. Update `src/pages/ContactPage.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    setSubmitted(true);
  }
};
```

4. Redeploy: `git commit -am "Add Formspree integration" && git push`

### Option B: EmailJS (Free 200 emails/month)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install package: `npm install @emailjs/browser`
3. Follow EmailJS React integration guide
4. Update ContactPage.jsx with EmailJS send function

### Option C: Vercel Serverless Function (Advanced)

Create `api/contact.js` with email sending logic using SendGrid/Mailgun

---

## 🧪 Testing Before Deployment

### Local Testing
```bash
# Development server
npm run dev
# Visit http://localhost:5173

# Test production build locally
npm run build
npm run preview
```

### Checklist Before Going Live
- [ ] All pages load without errors
- [ ] Navigation links work correctly
- [ ] Contact form submits (check email integration)
- [ ] Images load properly
- [ ] Mobile responsive (test on phone or Chrome DevTools)
- [ ] Update email in Footer.jsx if needed
- [ ] Update phone number if needed

---

## 🔧 Environment Variables (Optional)

If you use email services that need API keys:

1. Create `.env` file (already in .gitignore):
```
VITE_FORMSPREE_ID=your_id_here
```

2. In Vercel Dashboard → Settings → Environment Variables
   - Add same variables
   - Redeploy for changes to take effect

---

## 📱 Post-Launch Checklist

### SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership
- [ ] Set up Google Analytics 4 (optional)

### Performance
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Check PageSpeed Insights
- [ ] Test on multiple devices

### Business Setup
- [ ] Set up `timelessbrookfields@gmail.com` professional signature
- [ ] Add email auto-responder for inquiries
- [ ] Create Google My Business listing (optional for corporate housing)

---

## 🆘 Troubleshooting

### Build Fails
- Check `package.json` has all dependencies
- Run `npm install` to ensure packages are installed
- Check for TypeScript/import errors

### Images Not Loading
- Ensure images are in `src/assets/images/`
- Import them correctly: `import image from '../assets/images/1.jpeg'`
- Check file extensions (`.jpeg` vs `.jpg`)

### 404 on Page Refresh
- Vercel handles this automatically with `vercel.json`
- If issues persist, create `public/_redirects`:
  ```
  /*    /index.html   200
  ```

### Form Not Sending Emails
- Check Formspree/EmailJS integration is correct
- Verify API keys in environment variables
- Check browser console for errors

---

## 📊 Analytics Setup (Optional)

### Google Analytics 4
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html` in `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔄 Making Updates After Launch

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
4. Vercel auto-deploys from GitHub (2-3 minutes)

---

## 💰 Cost Breakdown

### Free Tier (Recommended for Launch)
- **Hosting:** Vercel (FREE - 100GB bandwidth, unlimited projects)
- **Domain:** $10-15/year (timelessbrookfields.com)
- **Email Form:** Formspree FREE (50 submissions/month)
- **SSL Certificate:** Vercel (FREE - auto-provisioned)

**Total: ~$12/year** (just domain cost)

### If You Need More
- Formspree Pro: $10/month (unlimited forms)
- Vercel Pro: $20/month (if you exceed free tier bandwidth)
- Email hosting: Google Workspace $6/user/month

---

## 📞 Support

**Website Issues:**
- Vercel Support: https://vercel.com/support
- Vite Docs: https://vitejs.dev
- React Router: https://reactrouter.com

**Development Questions:**
- Review PRP document for feature specifications
- Check comments in source code

---

## 🎉 You're Ready to Launch!

Your professional, modern corporate housing website is built and ready to deploy. Follow the Vercel quick deploy steps above, and you'll be live in under 10 minutes!

**Live Site:** Will be at https://timelessbrookfields.com after domain connection

**Development Site:** Currently at http://localhost:5173

---

**Built with:** React + Vite + Tailwind CSS
**Deployment:** Vercel (recommended)
**Contact Form:** Formspree (recommended)
