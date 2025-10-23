# Timeless Brookfields - Corporate Housing Website

Premium furnished corporate housing website for downtown Westport, Connecticut.

## 🏡 About

Timeless Brookfields offers executive-style furnished corporate housing in a historic 1886 building, completely renovated in 2025. Located in the heart of downtown Westport, our property provides modern luxury with all-inclusive convenience for business professionals, healthcare workers, and corporate relocations.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
timeless/
├── src/
│   ├── assets/
│   │   └── images/          # Property photos (14 images)
│   ├── components/
│   │   ├── Layout.jsx       # Main layout with nav/footer
│   │   ├── Logo.jsx         # Timeless Brookfields logo
│   │   ├── Navigation.jsx   # Responsive navigation
│   │   └── Footer.jsx       # Site footer
│   ├── pages/
│   │   ├── HomePage.jsx     # Landing page
│   │   ├── PropertiesPage.jsx
│   │   ├── LocationPage.jsx # Downtown Westport highlights
│   │   ├── AboutPage.jsx    # Company story
│   │   ├── CorporatePage.jsx # For HR/relocation managers
│   │   ├── ContactPage.jsx  # Inquiry form
│   │   ├── TenantPortalPage.jsx # Placeholder for future
│   │   └── NotFoundPage.jsx
│   ├── App.jsx              # React Router setup
│   ├── index.css            # Tailwind CSS + custom styles
│   └── main.jsx             # App entry point
├── DEPLOYMENT_GUIDE.md      # Vercel deployment instructions
├── TIMELESS_BROOKFIELDS_PRP.md  # Complete project requirements
└── package.json
```

## 🎨 Design System

### Colors
- **Primary Gold:** `#d4af37` (subtle accents)
- **White:** `#FFFFFF` (70% of design)
- **Cream:** `#FAFAF8` (backgrounds)
- **Charcoal:** `#333333` (text)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

## 📄 Pages

1. **Home** - Hero, property cards, amenities, location highlight
2. **Properties** - 3 executive residences (1BR + 2 x 2BR)
3. **Location** - Downtown Westport highlights
4. **About** - Company story and commitment
5. **Corporate Housing** - For HR departments
6. **Contact** - Inquiry form
7. **Tenant Portal** - Placeholder for future features

## 🏢 Property Details

### Units
- **Unit 2A:** 2BR, 950 sq ft (Available November 2025)
- **Unit 1:** 2BR, 950 sq ft (Available December 2025)
- **Unit 2B:** 1BR, 650 sq ft (Occupied until January 2026)

### Key Features
- All utilities included
- Premium Samsung & LG appliances
- In-unit washer/dryer
- Smart home technology
- 5 min to Metro-North, 10 min to beach

## 📞 Contact

- **Phone:** (747) 224-7827
- **Email:** timelessbrookfields@gmail.com
- **Location:** Downtown Westport, CT

## 🛠️ Tech Stack

- React 19.1.0 + Vite 6.3.5
- Tailwind CSS 3.3.0
- React Router DOM 7.6.0
- Heroicons 2.2.0

## 🚢 Deployment

See `DEPLOYMENT_GUIDE.md` for complete Vercel deployment instructions.

Quick deploy:
1. Push to GitHub
2. Connect to Vercel
3. Deploy! (auto-detects Vite)

## 📝 Key Documents

- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `TIMELESS_BROOKFIELDS_PRP.md` - Full project requirements

---

**Status:** ✅ Ready for deployment
**Last Updated:** October 2025
