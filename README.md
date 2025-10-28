# S&Z Trading International - Website Rebuild

**Week 1 Implementation: Project Setup, Hero, Nav & Footer**

A modern, production-ready logistics website built with Next.js 15, TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
# or
npm install

# Run development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

---

## ✅ Week 1 Deliverables Checklist

- ✅ Next.js 15 project initialized with TypeScript
- ✅ Tailwind CSS configured with custom brand colors
- ✅ Shadcn/ui components integrated
- ✅ Custom fonts loaded (Inter + Plus Jakarta Sans)
- ✅ Responsive Header with sticky behavior
- ✅ Mobile hamburger menu with animations
- ✅ Hero section with gradient background
- ✅ Floating stats cards with animations
- ✅ Professional footer with 4 columns
- ✅ All components TypeScript strict mode
- ✅ Fast load times (<1s on localhost)
- ✅ Build validation passed
- ✅ ESLint validation passed

---

## 🎨 Features Implemented

### Header Component
- **Sticky Navigation**: Changes style on scroll (transparent → white with shadow)
- **Responsive Design**: Desktop navigation + mobile hamburger menu
- **Smooth Animations**: Framer Motion transitions
- **Contact CTA**: Phone link + "Get Quote" button
- **Brand Logo**: S&Z Trading with custom colors

### Hero Section
- **Animated Content**: Staggered fade-in animations
- **Gradient Background**: Professional slate-blue gradient
- **Grid Pattern**: Subtle background pattern
- **Feature Badges**: On-time delivery, competitive pricing, 25+ countries
- **Dual CTAs**: Request Quote + Call Now buttons
- **Floating Stats Cards**: 15,000+ Deliveries, 98% On-Time Rate
- **Scroll Indicator**: Animated mouse scroll prompt

### Footer Component
- **4-Column Layout**: Company info, Services, Company links, Contact
- **Brand Colors**: Consistent with header
- **Hover Effects**: Orange highlight on links
- **Dynamic Year**: Copyright with current year
- **Legal Links**: Privacy Policy, Terms of Service

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.5.6 | React framework with App Router |
| React | 19.2.0 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Tailwind CSS | 3.4.18 | Utility-first CSS |
| Framer Motion | 11.18.2 | Animations |
| Lucide React | 0.454.0 | Icon library |
| Shadcn/ui | Latest | Component library |

---

## 🎨 Brand Colors

```css
/* Deep Professional Blue */
--brand-blue: #1e40af;

/* Energy/Action Orange */
--brand-orange: #f97316;

/* Neutral Gray */
--brand-gray: #475569;
```

---

## 📁 Project Structure

```
szitrans-rebuild/
├── app/
│   ├── globals.css           # Global styles + Tailwind
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Homepage
├── components/
│   ├── layout/
│   │   ├── header.tsx        # Sticky header
│   │   └── footer.tsx        # Footer
│   ├── sections/
│   │   └── hero.tsx          # Hero section
│   └── ui/
│       └── button.tsx        # Shadcn button
├── lib/
│   └── utils.ts              # Utility functions (cn, formatPhone, etc.)
├── public/
│   └── images/               # Static images (add your assets here)
├── components.json           # Shadcn/ui config
├── tailwind.config.ts        # Tailwind + brand colors
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

---

## 🎯 Next Steps (Week 2-3)

**Week 2: Services, Stats & Trust Indicators**
- Services grid with icons
- Animated stats counter
- Client testimonials carousel
- Trust badges section

**Week 3: Contact Form & Final Polish**
- Contact form with validation
- Interactive map
- Additional pages (About, Services detail)
- Performance optimization
- SEO enhancements

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment

1. Build the project: `pnpm build`
2. Upload the `.next`, `public`, and `package.json` to your server
3. Run: `pnpm start`

---

## 📝 Customization Guide

### Change Brand Colors

Edit `tailwind.config.ts`:

```typescript
brand: {
  blue: "#YOUR_BLUE",
  orange: "#YOUR_ORANGE",
  gray: "#YOUR_GRAY",
}
```

### Change Contact Info

Update these files:
- `components/layout/header.tsx` - Phone number in header
- `components/layout/footer.tsx` - All contact details
- `components/sections/hero.tsx` - Hero CTAs

### Add Images

1. Place images in `public/images/`
2. Use Next.js Image component:

```tsx
import Image from "next/image";

<Image
  src="/images/truck.jpg"
  alt="Transport truck"
  width={800}
  height={600}
/>
```

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Try build again
pnpm build
```

### Type Errors

```bash
# Regenerate TypeScript definitions
pnpm build
```

---

## 📄 License

© 2024 S&Z Trading International Limited. All rights reserved.

---

## 🤝 Support

For questions or issues:
- Email: info@szitrans.com
- Phone: +44 123 456 7890

---

**Built with ❤️ by Droid (Factory AI)**
