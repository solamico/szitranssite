# S&Z Trading International Website

Modern Next.js 15 logistics website rebuild focusing on frontend excellence, lead generation, and conversion optimization. No backend complexity—pure static site with form-to-email contact flows.

## Core Commands

• Install dependencies: `pnpm install`
• Start dev server: `pnpm dev` (runs on http://localhost:3000)
• Type-check: `pnpm tsc --noEmit`
• Lint code: `pnpm lint`
• Build production: `pnpm build`
• Preview production build: `pnpm start`
• Deploy to Vercel: `vercel` or `vercel --prod`

All development happens locally. No database, no API keys required for core functionality.

## Project Structure

```
szitrans-rebuild/
├── app/
│   ├── (marketing)/          # Public pages group
│   │   ├── page.tsx           # Homepage
│   │   ├── services/          # Services pages
│   │   ├── about/             # About page
│   │   └── contact/           # Contact page
│   ├── layout.tsx             # Root layout with fonts
│   └── globals.css            # Global Tailwind styles
├── components/
│   ├── layout/                # Header, Footer, Navigation
│   ├── sections/              # Page sections (Hero, Services, etc.)
│   └── ui/                    # Shadcn/ui base components
├── lib/
│   └── utils.ts               # Helper functions (cn, formatters)
├── public/
│   └── images/                # Static images (fleet, logos)
└── tailwind.config.ts         # Tailwind customization
```

## Architecture Overview

**Stack**: Next.js 15 (App Router) + React 18 + TypeScript + Tailwind CSS + Shadcn/ui + Framer Motion

**Routing**: File-based routing in `app/` directory. All pages are statically generated (no SSR needed).

**State Management**: React hooks only—no Zustand/Redux needed for this scope.

**Forms**: React Hook Form + Zod validation. Forms submit to email via EmailJS or simple mailto: links.

**Animations**: Framer Motion for all animations (hero, scroll effects, hover states).

**Styling**: Tailwind utility classes. Custom brand colors defined in `tailwind.config.ts`.

**No Database**: Purely static site. No auth, no API routes, no backend logic.

## Development Patterns & Constraints

### Coding Style

• TypeScript strict mode enabled
• Use `"use client"` directive only when hooks/animations required (Framer Motion, useState, etc.)
• Server components by default for better performance
• Functional components with TypeScript interfaces for props
• Use `cn()` utility from `lib/utils.ts` for conditional classNames
• Prefer named exports over default exports for components
• 100-character line limit, 2-space indentation
• Use Lucide React for all icons (already installed)

### Component Patterns

• **Layout components** (`components/layout/`): Header, Footer—used in root layout
• **Section components** (`components/sections/`): Hero, Services, Testimonials—used in pages
• **UI components** (`components/ui/`): Shadcn/ui primitives—imported and customized

### Brand Colors (Tailwind Config)

• `brand-blue`: #1e40af (primary navy)
• `brand-orange`: #f97316 (CTA/accent orange)
• `brand-gray`: #475569 (text gray)

### Fonts

• Body: Inter (Google Fonts, variable)
• Display/Headings: Plus Jakarta Sans (Google Fonts, weights 400-800)

### Animation Guidelines

• Use Framer Motion `motion` components for animations
• Hero section: fade-in, slide-up on load
• Scroll animations: fade-in when elements enter viewport (`useInView` hook)
• Hover effects: lift cards with scale transform + shadow
• Keep animations subtle (0.3-0.6s duration)
• No complex GSAP needed—Framer Motion handles everything

### Responsive Design

• Mobile-first approach
• Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
• Header collapses to hamburger menu on `md` and below
• Hero switches to single-column layout on `lg` and below
• Test on: iPhone 12 (390px), iPad (768px), Desktop (1440px)

### SEO Requirements

• All pages must have proper `<title>` and `<meta description>`
• Use semantic HTML5 (nav, main, section, article, footer)
• Images need `alt` attributes
• Internal links use Next.js `<Link>` component
• Schema.org markup for LocalBusiness (add later)

## Git Workflow

1. **Branch naming**: `feature/hero-section`, `fix/mobile-nav`, `content/services-page`
2. **Commits**: Conventional commits (`feat:`, `fix:`, `style:`, `refactor:`)
3. **Before committing**: Run `pnpm lint` and fix errors
4. **PR checklist**: 
   - Build passes (`pnpm build`)
   - No TypeScript errors
   - Tested on mobile viewport
   - Screenshots for UI changes

## Required Evidence for Completion

Each feature/component is considered done when:

✅ **Functionality**: Component renders without errors, all interactions work
✅ **Responsive**: Tested at mobile (390px), tablet (768px), desktop (1440px)
✅ **Accessibility**: Keyboard navigable, proper ARIA labels, color contrast meets WCAG AA
✅ **Performance**: No layout shift (CLS), images optimized, animations 60fps
✅ **Type-safe**: No TypeScript errors, proper prop interfaces
✅ **Visual proof**: Screenshot or screen recording showing component in action

## External Services & Environment Variables

### Current Setup (No API Keys Required)

• Hosting: Vercel (free tier, automatic deployments from GitHub)
• Forms: mailto: links or EmailJS free tier (100 emails/month)
• Images: Local in `public/images/` or Unsplash embed URLs
• Analytics: Google Analytics (optional, add later)

### Future Additions (Phase 2+)

• Email service: Resend API (`RESEND_API_KEY`) for branded transactional emails
• CMS: MDX files for blog posts (no database)
• Contact forms: Web3Forms or FormSubmit for better spam protection

## Conventions & Patterns

### File Naming

• Components: `kebab-case.tsx` (e.g., `hero-section.tsx`)
• Pages: Next.js conventions (`page.tsx`, `layout.tsx`)
• Utils: `kebab-case.ts` (e.g., `format-phone.ts`)

### Component Structure

```typescript
"use client"; // Only if using hooks/Framer Motion

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function HeroSection({ title, subtitle, className }: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-screen", className)}>
      {/* Component content */}
    </section>
  );
}
```

### Import Order

1. React/Next.js imports
2. Third-party libraries (Framer Motion, Lucide)
3. Internal components (UI, sections)
4. Utils and helpers
5. Types/interfaces

### Contact Information (Replace with Real Data)

• Phone: +44 123 456 7890 (placeholder—update in all components)
• Email: info@szitrans.com
• Company: S&Z Trading International Limited
• Established: 2022

## Gotchas & Common Issues

### Framer Motion + Server Components

❌ **Problem**: "use client" directive missing when using Framer Motion
✅ **Solution**: Add `"use client"` at top of file for any component using `motion` or React hooks

### Image Optimization

❌ **Problem**: Large images cause slow page loads
✅ **Solution**: Use Next.js `<Image>` component with proper width/height. Convert to WebP format.

### Tailwind Purging

❌ **Problem**: Dynamic classNames don't work (e.g., `text-${color}-500`)
✅ **Solution**: Use full class names or use `cn()` with predefined classes

### Mobile Navigation

❌ **Problem**: Menu doesn't close after clicking link
✅ **Solution**: Call `setIsOpen(false)` in mobile link onClick handlers

### Build Errors

❌ **Problem**: "Module not found" during build
✅ **Solution**: Check import paths use `@/` alias correctly. Restart dev server.

### Vercel Deployment

❌ **Problem**: Build succeeds locally but fails on Vercel
✅ **Solution**: Ensure all dependencies are in `package.json`, not just devDependencies

## Performance Targets

• **Lighthouse Score**: 95+ (all categories)
• **FCP**: < 1.5s
• **LCP**: < 2.5s
• **CLS**: < 0.1
• **Mobile Score**: 90+
• **Bundle Size**: < 200KB initial JS load

## Testing Checklist

### Before Each Commit

- [ ] Run `pnpm lint` (no errors)
- [ ] Run `pnpm build` (successful)
- [ ] Test on Chrome mobile device emulator (390px width)
- [ ] Check console for errors/warnings
- [ ] Verify all links work
- [ ] Check images load properly

### Before Production Deploy

- [ ] All placeholder content replaced with real content
- [ ] Contact info (phone/email) updated throughout
- [ ] Meta tags and SEO content added
- [ ] Favicon and logo added
- [ ] Test contact form submissions
- [ ] Cross-browser test (Chrome, Safari, Firefox)
- [ ] Mobile device test (real iPhone/Android)
- [ ] Accessibility audit with Lighthouse
- [ ] Performance audit with Lighthouse

## Week-by-Week Implementation Plan

### Week 1 (COMPLETED)
✅ Project setup
✅ Header component with sticky behavior
✅ Footer component
✅ Hero section with animations

### Week 2 (NEXT)
- [ ] Services grid component (6 cards, hover effects)
- [ ] About page layout and content
- [ ] Contact page with form

### Week 3
- [ ] Testimonials carousel
- [ ] Stats counter with animation
- [ ] "Why Choose Us" section
- [ ] Mobile responsiveness refinement

### Week 4
- [ ] Add real content and images
- [ ] SEO optimization (meta tags, schema)
- [ ] Final bug fixes and polish
- [ ] Deploy to production

## Key Design Decisions

**Why Next.js 15?** SEO optimization, built-in routing, image optimization, zero config.

**Why no database?** Overkill for lead-gen site. Forms to email is sufficient.

**Why Framer Motion over GSAP?** React-native, smaller bundle, easier to maintain.

**Why Shadcn/ui over MUI?** Full ownership of components, better customization, smaller bundle.

**Why Tailwind?** Faster development, consistent design system, purged CSS = tiny bundles.

**Why TypeScript?** Catches 90% of bugs before runtime, better DX with autocomplete.

## Support & Resources

• Next.js Docs: https://nextjs.org/docs
• Tailwind Docs: https://tailwindcss.com/docs
• Framer Motion: https://www.framer.com/motion/
• Shadcn/ui: https://ui.shadcn.com/
• Lucide Icons: https://lucide.dev/

---

**Last Updated**: Week 1 completed (Oct 28, 2025)
**Current Status**: Hero, Header, Footer complete. Ready for Week 2 (Services grid).
**Next Task**: Build services grid component with 6 interactive cards.