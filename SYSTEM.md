# SYSTEM.md — Full System Documentation
## Buhawie Santos Editorial Portfolio

> **For Developers & AI Agents:** This document is the canonical technical reference for this codebase.
> Read `AGENTS.md` first for design philosophy and guardrails, then consult this file for implementation details.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Dependencies](#2-tech-stack--dependencies)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Typography System](#5-typography-system)
6. [Section Architecture (Page Layout)](#6-section-architecture-page-layout)
7. [Components Reference](#7-components-reference)
   - [Header.tsx](#headertsx)
   - [Carousel.tsx](#carouseltsx)
   - [TestimonialCarousel.tsx](#testimonialcarouseltsx)
   - [WebsiteCard.tsx](#websitecardtsx)
   - [VideoCard.tsx](#videocardtsx)
   - [ProjectReelCard.tsx](#projectreelcardtsx) *(new)*
8. [Pages & App Router](#8-pages--app-router)
   - [layout.tsx](#layouttsx)
   - [page.tsx](#pagetsx)
9. [Server Actions & Email Integration](#9-server-actions--email-integration)
10. [Static Assets & Public Directory](#10-static-assets--public-directory)
11. [Environment Variables](#11-environment-variables)
12. [Next.js Configuration](#12-nextjs-configuration)
13. [CSS & Animation Details](#13-css--animation-details)
14. [Comic Motion Utility Classes](#14-comic-motion-utility-classes) *(new)*
15. [Data Structures (Hardcoded Content)](#15-data-structures-hardcoded-content)
16. [Navigation & Section Tracking](#16-navigation--section-tracking)
17. [SEO & Metadata](#17-seo--metadata)
18. [Reference Documents](#18-reference-documents) *(new)*
19. [Deployment](#19-deployment)
20. [Developer Checklist](#20-developer-checklist)

---

## 1. Project Overview

**Site:** [https://buhawiesit.vercel.app/](https://buhawiesit.vercel.app/)  
**Owner:** Buhawie "Buwie" Santos  
**Purpose:** Personal portfolio showcasing dual expertise as a Frontend Web Developer and Professional Video Editor/Cinematographer.  
**Aesthetic:** Warm Editorial & Cinematic — inspired by printed magazines, film storyboards, and analog cinema. Not a generic SaaS template.  
**Framework:** Next.js 16 (App Router) with React 19 + TypeScript + Tailwind CSS v4.  

---

## 2. Tech Stack & Dependencies

### Production Dependencies

| Package | Version | Purpose |
| :--- | :--- | :--- |
| `next` | `^16.2.9` | App Router, SSR, image optimization, server actions |
| `react` | `19.2.4` | UI rendering |
| `react-dom` | `19.2.4` | DOM bindings |
| `lucide-react` | `^1.31.0` | Icon set used throughout all components |
| `resend` | `^6.14.0` | Transactional email API for the contact form |

### Dev Dependencies

| Package | Version | Purpose |
| :--- | :--- | :--- |
| `tailwindcss` | `^4` | Utility-first CSS framework |
| `@tailwindcss/postcss` | `^4` | PostCSS integration for Tailwind v4 |
| `typescript` | `^5` | Type checking |
| `@types/react` | `^19` | React type definitions |
| `@types/react-dom` | `^19` | React DOM type definitions |
| `@types/node` | `^20` | Node type definitions |
| `eslint` | `^9` | Linting |
| `eslint-config-next` | `16.2.9` | Next.js ESLint rules |

### NPM Scripts

```bash
npm run dev       # Start local dev server (Next.js dev mode)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## 3. Project Structure

```
editor-portfolio/
├── app/
│   ├── actions.ts          # Next.js Server Action — Resend email handler
│   ├── favicon.ico         # Site favicon
│   ├── globals.css         # Global styles, Tailwind @theme tokens, CSS animations, comic utility classes
│   ├── layout.tsx          # Root layout: font loading, metadata, Header, Footer
│   └── page.tsx            # Main page — all sections rendered here (single page)
├── api/
│   └── resend.ts           # Legacy Resend test file (not used in production routing)
├── components/
│   ├── Carousel.tsx            # Interactive 3-up carousel for project cards
│   ├── Header.tsx              # Fixed floating nav with section-aware color inversion
│   ├── ProjectReelCard.tsx     # Lightweight image+title card used in the hero marquee reel ⭐ NEW
│   ├── TestimonialCarousel.tsx # Auto-scrolling horizontal marquee reel
│   ├── VideoCard.tsx           # YouTube embed card with lazy-loading thumbnail facade
│   └── WebsiteCard.tsx         # Web project card with mockup image, tags, and live link
├── public/
│   ├── BUHAWIE_SANTOS_RESUME.pdf   # Resume download (primary CTA target)
│   ├── resume.pdf                  # Secondary/legacy resume file
│   ├── editor_logo/
│   │   ├── buwie_pic.jpg           # Portrait photo used in About section
│   │   ├── dark.png                # Logo (dark variant, with background)
│   │   ├── dark_nobg.png           # Logo (dark, transparent bg) — used on LIGHT sections
│   │   ├── light.png               # Logo (light variant, with background)
│   │   └── light_nobg.png          # Logo (light, transparent bg) — used on DARK sections
│   ├── fonts/
│   │   └── TimesNewRomanMtRegular.otf  # Local custom font file
│   ├── icons/
│   │   ├── github.png / github.webp
│   │   ├── gmail.png / gmail.webp
│   │   └── linkedin.png / linkedin.webp
│   ├── skills/              # Skill/tool icon images (adobexd, figma, react, etc.)
│   └── websites/
│       ├── ibajay.png       # Mockup screenshot — Ibajay Aklan project
│       ├── oasis.png        # Mockup screenshot — OASIS capstone project
│       ├── tahak.png        # Mockup screenshot — TAHAK tourism platform
│       └── vendor.png       # Mockup screenshot — Vendor registration portal
├── AGENTS.md                # Design philosophy & guardrails (READ FIRST)
├── DESIGN.md                # Comic motion design system spec & de-slop blueprint (NEW)
├── README.md                # Default Next.js bootstrapped README
├── SYSTEM.md                # This file — full technical documentation
├── portfolio_update_instructions.md  # Content expansion spec / update guide
├── next.config.ts           # Next.js config (remote image patterns for YouTube)
├── postcss.config.mjs       # PostCSS config for Tailwind v4
├── eslint.config.mjs        # ESLint flat config
├── tsconfig.json            # TypeScript compiler options
├── package.json             # Dependencies & scripts
└── .env.local               # Environment variables (gitignored — never commit)
```

---

## 4. Design System

Defined in `app/globals.css` under the `@theme` block. All tokens are available as Tailwind utility classes prefixed with `editor-`.

### Color Tokens

| CSS Variable | Tailwind Class | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `--color-editor-bg` | `bg-editor-bg`, `text-editor-bg` | `#EFEAE2` | Warm linen — light section backgrounds, default body bg |
| `--color-editor-primary` | `bg-editor-primary`, `text-editor-primary` | `#2A1F14` | Deep espresso — dark section backgrounds, primary dark text |
| `--color-editor-accent` | `bg-editor-accent`, `text-editor-accent` | `#8B6F4E` | Burnished bronze — accent labels, borders, hover highlights |
| `--color-editor-surface` | `bg-editor-surface`, `text-editor-surface` | `#C9B896` | Warm sand — pills, muted badges, card borders, secondary text |
| `--color-editor-border` | `border-editor-border` | `#CEC9C5` | Soft stone — section dividers, subtle borders |

### Color Usage Rules

- **Light sections** (Hero, Projects): `bg-editor-bg`, text `text-editor-primary`
- **Dark sections** (About, Experience, Contacts): `bg-editor-primary`, text `text-editor-bg`
- **Accents & labels**: always `text-editor-accent` or `text-editor-surface`
- **Card/badge backgrounds on dark sections**: `bg-editor-surface/10` to `bg-editor-surface/20`
- **Card/badge backgrounds on light sections**: `bg-editor-surface/20` to `bg-editor-surface/40`
- ❌ Never introduce `#000000`, cold zinc/slate, or neon colors.

### Other Theme Tokens

```css
--text-title-size: 2rem;
--text-detail-size: 0.8rem;
--font-editor-title: var(--font-bebas);
```

---

## 5. Typography System

Configured in `app/layout.tsx` and exposed as CSS variables + Tailwind classes.

### Font 1: Bebas Neue

| Property | Value |
| :--- | :--- |
| Source | Google Fonts (`next/font/google`) |
| CSS variable | `--font-bebas` |
| Tailwind class | `font-bebas` / `font-editor-title` |
| Weights loaded | `400` |
| Usage | `h1`, `h2`, `h3` section headings, display titles |
| Tone | Bold, cinematic, vintage movie poster |

### Font 2: Times New Roman MT Regular

| Property | Value |
| :--- | :--- |
| Source | Local `.otf` file at `public/fonts/TimesNewRomanMtRegular.otf` |
| CSS variable | `--font-times-mt` |
| Tailwind class | `font-times-new` |
| Weights loaded | `400` normal |
| Fallback | `Times New Roman` |
| Usage | Italic editorial labels, section subtitles, decorative text |
| Tone | Classic editorial print, refined elegance |

### Font 3: Poppins

| Property | Value |
| :--- | :--- |
| Source | Google Fonts (`next/font/google`) |
| CSS variable | `--font-poppins` |
| Tailwind class | `font-poppins` |
| Weights loaded | `400`, `500`, `600`, `700` |
| Usage | Body copy, buttons, badges, nav items, inputs, card text |
| Tone | Clean, modern, accessible, readable |

### Font Loading (layout.tsx)

```tsx
// All three fonts are loaded at root layout and injected as CSS variables
// on the <html> element via className:
<html className={`${poppins.variable} ${timesNewRomanMt.variable} ${bebas.variable}`}>
```

---

## 6. Section Architecture (Page Layout)

The portfolio is a **single-page application** with all sections rendered in `app/page.tsx`. Sections deliberately alternate between light and dark backgrounds.

| # | Section ID | Background | Tailwind BG Class | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `#home` | Light Linen | `bg-editor-bg` (default body) | Hero masthead, name, CTAs, marquee reel |
| 2 | `#about` | Deep Espresso | `bg-editor-primary` | Bio, portrait, skill categories grid |
| 3 | `#experience` | Deep Espresso | `bg-editor-primary` | Work experience timeline, education, certifications |
| 4 | `#projects` | Light Linen | `bg-editor-bg` (default body) | Website Projects carousel |
| 4b | `#video-projects` | Light Linen | `bg-editor-bg` (default body) | Video Films & Edits carousel |
| 5 | `#contacts` | Deep Espresso | `bg-editor-primary` | Contact info + contact form |

> ⚠️ **Critical:** The `Header.tsx` scroll tracker uses the section IDs `home`, `about`, `experience`, `projects`, and `contacts` to determine logo/nav color inversion. Never rename or remove these IDs.

### Section `scroll-mt` Values
All dark sections use `scroll-mt-20 sm:scroll-mt-28` to account for the fixed floating header height when navigating via anchor links.

---

## 7. Components Reference

---

### `Header.tsx`

**Path:** `components/Header.tsx`  
**Type:** `'use client'` — Client Component  
**Position:** Fixed, `z-[500]`, centered top of viewport.

#### Behavior

The header is a floating pill-style navigation bar that **dynamically inverts its color scheme** based on which section is currently in the viewport.

**Tracked sections (in scroll order):**
```
home → about → experience → projects → contacts
```

**Dark sections** (trigger light logo + light nav pill):
- `about`, `experience`, `contacts`

**Light sections** (trigger dark logo + dark nav pill):
- `home`, `projects`

#### Logo Inversion Logic

Two `<Image>` components are stacked absolutely on top of each other:
- `dark_nobg.png` — visible on **light** sections (`opacity-100` when `!isDarkSection`)
- `light_nobg.png` — visible on **dark** sections (`opacity-100` when `isDarkSection`)

Transitions use `transition-opacity duration-500 ease-in-out`.

#### Scroll Detection

```tsx
useEffect(() => {
  const handleScroll = () => {
    const headerOffset = 120; // px from top
    // Loops through sections array, checks getBoundingClientRect().top <= headerOffset
    // Sets activeSection and isDarkSection accordingly
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
}, []);
```

#### Nav Items

| ID | Icon | Text | Href |
| :--- | :--- | :--- | :--- |
| 1 | `<Home />` | Home | `#home` |
| 2 | `<User />` | About | `#about` |
| 3 | `<Briefcase />` | Experience | `#experience` |
| 4 | `<Library />` | Projects | `#projects` |
| 5 | `<Send />` | Contacts | `#contacts` |

#### Comic Hover Interaction

Nav items use a custom CSS animation (`comicIconPop` + `comicWordPop`) defined in `globals.css`:
- At rest: text label visible.
- On hover: text fades/scales away, then an icon pops in (spring scale + rotate), followed by the text word bursting in beside it.
- Triggered via `.group:hover .animate-comic-icon` and `.group:hover .animate-comic-word` selectors.

#### Active State Indicator
An underline pill (`h-0.5 w-3/4 rounded-full`) renders absolutely below the active nav item, colored to match the current section theme, with a soft glow `box-shadow`.

#### Resume CTA in Header
A quick "Resume" button sits to the right of the nav pill, also color-inverting with the section. Downloads `BUHAWIE_SANTOS_RESUME.pdf`.

---

### `Carousel.tsx`

**Path:** `components/Carousel.tsx`  
**Type:** `'use client'` — Client Component

#### Props

```ts
interface CarouselItem {
  id?: string | number;
  content: ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  ariaLabel?: string; // default: "Featured Projects Carousel"
}
```

#### Behavior

A **3-up fan carousel** (center card full size, left/right cards dimmed and scaled back):

| Position | Scale | Opacity | Z-Index | Transform |
| :--- | :--- | :--- | :--- | :--- |
| Center (active) | `scale-100` | `opacity-100` | `z-20` | none |
| Left neighbor | `scale-85` | `opacity-35` / `sm:opacity-50` | `z-10` | `-translate-x-{12/36/52/60}` |
| Right neighbor | `scale-85` | `opacity-35` / `sm:opacity-50` | `z-10` | `translate-x-{12/36/52/60}` |
| All others | `scale-70` | `opacity-0` | `z-0` | none |

Clicking a side card sets it as active. Left/right arrow buttons also navigate. Keyboard: `ArrowLeft` / `ArrowRight` on the focused section element.

**Slide Indicators:** Dot pills below the carousel — active dot expands horizontally (`w-7 sm:w-9`) in `bg-editor-accent`.

**Container height:** `h-[260px] sm:h-[360px] md:h-[440px] lg:h-[480px]`  
**Card dimensions:** `w-[92%] sm:w-[85%] md:w-[700px] max-w-[760px] aspect-video`

#### Accessibility
- `role="region"`, `aria-roledescription="carousel"`, `aria-label` prop
- `tabIndex={0}` on section with keyboard handler
- `focus-visible:ring-2 focus-visible:ring-editor-accent` on nav buttons
- `aria-label` on each nav button ("Previous project" / "Next project" / "Go to slide N")

---

### `TestimonialCarousel.tsx`

**Path:** `components/TestimonialCarousel.tsx`  
**Type:** `'use client'` — Client Component

#### Props

```ts
interface ReelItem {
  id?: string | number;
  content: ReactNode;
}

interface TestimonialCarouselProps {
  items: ReelItem[];
  speed?: 'slow' | 'normal' | 'fast'; // default: 'normal'
}
```

#### Behavior

A **horizontal auto-scrolling marquee** (infinite loop). Items are **duplicated** internally to create the seamless loop effect. Pauses on `group-hover` via `[animation-play-state:paused]`.

**Speed durations (CSS animation):**

| Speed | Duration |
| :--- | :--- |
| `fast` | 22s linear infinite |
| `normal` | 45s linear infinite |
| `slow` | 70s linear infinite |

Animation defined inline via `<style jsx global>` with `@keyframes marquee` (translateX 0% → -50%).

**Edge fade:** Left and right gradient overlays (`from-editor-bg to-transparent`) blend card edges into the section background.

**Card size:** `w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-video`

**Usage in page.tsx:**
```tsx
// combinedProjects = [...websiteProjects, ...videoProjects]
<TestimonialCarousel items={combinedProjects} speed="normal" />
```
Rendered at the bottom of the Hero section as a "Film Slates & Deployments" reel.

---

### `WebsiteCard.tsx`

**Path:** `components/WebsiteCard.tsx`  
**Type:** `'use client'` — Client Component  
**Wrapper:** `<Link>` — clicking the entire card opens the live site in a new tab.

#### Props

```ts
interface ProjectCardProps {
  type: string;        // e.g., "Capstone Thesis", "International Competition"
  title: string;       // Project name
  description: string; // 1–2 sentence engineering summary
  link: string;        // Live URL (opens in new tab)
  mockupImg?: string;  // Path to screenshot in /public/websites/
  tags?: string[];     // Tech stack tags shown as badges
  role?: string;       // Developer's role on this project
  tagline?: string;    // Short italic subtitle (font-times-new)
}
```

#### Visual Layers (bottom to top via z-index)

1. **Background image** (`z-0`): Full-bleed mockup screenshot, `object-cover object-top`, scales up `group-hover:scale-105`.
2. **Gradient overlay** (`z-[1]`): `from-editor-primary via-editor-primary/75 to-editor-primary/25` — readable bottom, transparent top.
3. **Top bar** (`z-10`): `type` badge (left) + "Live Site" pill with `<ExternalLink>` icon (right).
4. **Spacer:** Lets image be visible in the middle.
5. **Bottom content** (`z-10`): tech `tags` → italic `tagline` → bold `title` → `role` label → `description` text.

Font sizes on title and description use `clamp()` via inline `style` with container query units (`cqw`), requiring `@container` context (the `relative @container` class on the wrapper div).

---

### `VideoCard.tsx`

**Path:** `components/VideoCard.tsx`  
**Type:** `'use client'` — Client Component

#### Props

```ts
interface VideoCardProps {
  embedUrl: string;    // Full YouTube embed URL, e.g. "https://www.youtube.com/embed/{videoId}?si=..."
  title: string;       // Film title
  description: string; // 1–2 sentence description
  category?: string;   // e.g., "Wedding SDE", "Project Teaser" (default: "Cinematography")
}
```

#### Lazy-Load Facade Pattern

**Before click (facade/poster):**
- Extracts `videoId` from `embedUrl` via regex: `/\/embed\/([a-zA-Z0-9_-]+)/`
- Renders `https://img.youtube.com/vi/{videoId}/hqdefault.jpg` as the poster image via `next/image` (requires `unoptimized` since domain is remote)
- Play button centered over the poster
- Keyboard accessible: `role="button"`, `tabIndex={0}`, `onKeyDown` (Enter/Space triggers play)

**After click (active player):**
- Mounts `<iframe>` with `autoplay=1` appended to the URL
- Full-bleed iframe with `allowFullScreen`
- Background: `bg-editor-primary` (matches dark cinematic aesthetic)

**Visual Layers (facade state):**
1. YouTube thumbnail poster image (`z-0`)
2. Cinematic vignette gradient (`z-[1]`): `from-editor-primary via-editor-primary/60 to-editor-primary/30`
3. Top bar (`z-10`): `category` badge + "Watch Film" pill
4. Center (`z-10`): Circular play button (`bg-editor-surface/95`)
5. Bottom (`z-10`): `title` + `description`

**Remote image domains** allowed in `next.config.ts`:
- `img.youtube.com` (thumbnails)
- `i.ytimg.com` (alternative YouTube CDN)

---

### `ProjectReelCard.tsx`

**Path:** `components/ProjectReelCard.tsx`  
**Type:** `'use client'` — Client Component  
**Wrapper:** `<Link>` — clicking the card scrolls the user to the target section.  
**Purpose:** Lightweight minimal card used exclusively inside the `TestimonialCarousel` hero marquee reel. Intentionally simpler than `WebsiteCard`/`VideoCard` — only shows a poster image, category pill, and project title.

#### Props

```ts
interface ProjectReelCardProps {
  title: string;         // Project name shown at the bottom
  category: string;      // Badge label shown at the top (e.g., "Wedding SDE")
  imageSrc: string;      // Local path (e.g., "/websites/oasis.png") or remote URL (YouTube thumbnail)
  targetHref?: string;   // Anchor to navigate to on click (default: "#projects")
}
```

#### Visual Layers (bottom to top)

1. **Full-bleed poster image** (`z-0`): `object-cover object-center`, scales on `group-hover:scale-108`. `unoptimized` is set automatically when `imageSrc` starts with `http` (remote YouTube thumbnails).
2. **Editorial vignette gradient** (`z-[1]`): `from-editor-primary via-editor-primary/55 to-editor-primary/25`.
3. **Content** (`z-10`): top-left `category` badge pill (`.comic-pill`) + bottom `title` text (`.comic-text`).

#### Design Notes
- Uses `.comic-pill` on the category badge and `.comic-text` on the title for consistent spring motion.
- `border-editor-accent/70` on hover border — slightly warmer than the default `border-editor-surface/30`.
- Intentionally has **no description, no tech tags, no live link indicator** — purely a teaser thumbnail that drives clicks to the full carousel sections.

---

## 8. Pages & App Router

### `layout.tsx`

**Path:** `app/layout.tsx`  
**Type:** Server Component (no `'use client'`)

Responsibilities:
- Loads all three fonts and injects CSS variables onto `<html>`
- Sets `<Metadata>` for SEO and Open Graph
- Renders `<Header />` (fixed, above main content)
- Renders `<main>` with `bg-editor-bg flex-1`
- Renders `<footer>` with espresso background, nav links, and copyright

**Footer structure:**
- Left: Logo name ("Buhawie Santos") + subtitle ("Frontend Developer · Cinematographer")
- Center: Anchor links to all 5 sections
- Right: Copyright `© 2026 Buhawie Santos. Editorial Craft & Code.`

---

### `page.tsx`

**Path:** `app/page.tsx`  
**Type:** `'use client'` — Client Component (required for `useState`, `handleSendEmail`)

This is the **entire single-page portfolio**. It is one large component (`Home`) that contains all section JSX.

#### Local State

| State | Type | Purpose |
| :--- | :--- | :--- |
| `clientEmail` | `string` | Controlled input — sender's email address |
| `clientSubject` | `string` | Controlled input — message subject |
| `isSending` | `boolean` | Disables submit button while email is in flight |
| `statusMessage` | `string` | Success/error feedback shown below the form |

> **Changed from previous version:** `copiedEmail` state and the "Copy Email" button have been removed. The hero section no longer has a clipboard copy shortcut — social links are the primary quick-contact method. `FileDown`, `Check`, `Copy`, `Briefcase`, `Calendar`, `CheckCircle2`, `Sparkles` (some) Lucide icons also removed from imports.

#### Handlers

**`handleSubmit`:** Calls the server action `handleSendEmail(clientEmail, clientSubject)`. Resets form on success, shows error message on failure.

#### Hardcoded Data Arrays (defined inside the component)

- `contacts` — 2 items: LinkedIn, GitHub
- `skillCategories` — 6 items (see Section 15)
- `workExperience` — 4 items (see Section 15)
- `education` — 2 items (see Section 15)
- `certifications` — 2 items (see Section 15)
- `videoProjects` — 6 items, each wrapping a `<VideoCard />`
- `websiteProjects` — 4 items, each wrapping a `<WebsiteCard />`
- `heroReelProjects` — 10 items, each wrapping a `<ProjectReelCard />` *(new — replaces `combinedProjects`)*

> **Changed from previous version:** The hero marquee now uses `heroReelProjects` (using `ProjectReelCard`) instead of `combinedProjects` (which used raw `WebsiteCard`/`VideoCard` instances). This gives the reel a uniform lightweight thumbnail look optimized for small marquee card sizes.

---

## 9. Server Actions & Email Integration

### `app/actions.ts`

**Type:** Next.js Server Action (`'use server'`)  
**Library:** `resend` npm package

```ts
export async function handleSendEmail(clientEmail: string, clientSubject: string)
```

**Flow:**
1. Validates both fields are non-empty.
2. Calls `resend.emails.send(...)` with:
   - `from`: `'BuwieSit Client <onboarding@resend.dev>'` (Resend sandbox sender)
   - `to`: `'santosbuhawie28@gmail.com'`
   - `replyTo`: the visitor's submitted email
   - `subject`: the visitor's submitted subject
   - `html`: simple notification template with sender's email and subject
3. Returns `{ success: true }` or `{ error: string }`.

**Environment variable required:** `RESEND_API_KEY` (stored in `.env.local`, never committed).

### `api/resend.ts`

This file is a **legacy test/scratch file**. It is **not used** in any active routing or server action. It fires immediately on import (no export), which makes it a standalone script. Do not import or rely on this file; use `app/actions.ts` instead.

---

## 10. Static Assets & Public Directory

All assets in `public/` are served at the root URL path.

| Asset Path | URL | Notes |
| :--- | :--- | :--- |
| `public/BUHAWIE_SANTOS_RESUME.pdf` | `/BUHAWIE_SANTOS_RESUME.pdf` | Primary resume download — used by Hero CTA & Header button |
| `public/resume.pdf` | `/resume.pdf` | Legacy/secondary resume file |
| `public/editor_logo/buwie_pic.jpg` | `/editor_logo/buwie_pic.jpg` | Portrait photo in About section |
| `public/editor_logo/dark_nobg.png` | `/editor_logo/dark_nobg.png` | Logo shown on **light** sections |
| `public/editor_logo/light_nobg.png` | `/editor_logo/light_nobg.png` | Logo shown on **dark** sections |
| `public/icons/linkedin.png` | `/icons/linkedin.png` | LinkedIn icon in contacts list |
| `public/icons/github.png` | `/icons/github.png` | GitHub icon in contacts list |
| `public/icons/gmail.png` | `/icons/gmail.png` | Gmail icon (available, not currently rendered as `<Image>`) |
| `public/websites/oasis.png` | `/websites/oasis.png` | OASIS project mockup |
| `public/websites/tahak.png` | `/websites/tahak.png` | TAHAK project mockup |
| `public/websites/ibajay.png` | `/websites/ibajay.png` | Ibajay Aklan mockup |
| `public/websites/vendor.png` | `/websites/vendor.png` | Vendor portal mockup |
| `public/fonts/TimesNewRomanMtRegular.otf` | (loaded via `next/font/local` only) | Custom font, not served as a raw URL |

---

## 11. Environment Variables

| Variable | File | Required | Notes |
| :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | `.env.local` | Yes | Resend API key for sending emails. Never commit this file. |

`.env.local` is listed in `.gitignore` under `.env*` glob pattern.

---

## 12. Next.js Configuration

**Path:** `next.config.ts`

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '/**' },
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/**' },
    ],
  },
};
```

**Why these domains:** `VideoCard.tsx` fetches YouTube thumbnail images from `img.youtube.com` for the lazy-load facade. These must be whitelisted for `next/image` to optimize and serve them.

No other remote image domains are configured. All project mockup images are local (`/websites/*.png`).

---

## 13. CSS & Animation Details

**Path:** `app/globals.css`

### Tailwind v4 Setup

```css
@import "tailwindcss";
```

Tailwind v4 uses `@theme` and `@theme inline` blocks instead of a `tailwind.config.js` file. All custom tokens (colors, fonts) are defined here.

### Global Reset

```css
* { scroll-behavior: smooth; }
body { background: var(--background); color: var(--foreground); font-family: var(--font-poppins); }
```

### Comic Navigation Animations

Four keyframe animations form the Comic Motion System defined in `globals.css`:

**`comicIconPop`** — applied via `.animate-comic-icon` (nav hover):
- Starts: `opacity-0`, `scale(0.3)`, `rotate(-12deg)`
- Overshoots to `scale(1.32)` with wobble
- Settles at `scale(1.1) rotate(0deg)`
- Duration: `0.35s` with `cubic-bezier(0.34, 1.56, 0.64, 1)` (spring-like)

**`comicWordPop`** — applied via `.animate-comic-word` (nav hover):
- Starts: `opacity-0`, `max-width: 0`, collapsed
- Expands to `max-width: 140px` with overshoot scale `1.2`
- Settles at `scale(1)` with `margin-left: 6px`
- Duration: `0.45s` with same spring cubic-bezier

**`comicBounce`** — applied via `.comic-btn:hover`:
- Squash-and-stretch lift: `scale(1.06) translateY(-3px) rotate(-1.5deg)` → overshoots back
- Settles at `scale(1.02) translateY(-2px) rotate(0deg)`
- Used for all primary/secondary buttons and pills

**`comicIconKick`** — applied via `.comic-icon` on group hover / `.comic-btn:hover`:
- Quick rotational kick: `scale(1.35) rotate(-14deg)` → `scale(0.95) rotate(6deg)` → settles `scale(1.1) rotate(0deg)`
- Duration: `0.35s` spring cubic-bezier

**Trigger classes (nav-specific):**
```css
.group:hover .animate-comic-icon { animation: comicIconPop 0.35s ... }
.group:hover .animate-comic-word { animation: comicWordPop 0.45s ... }
```

### Tailwind CSS v4 Marquee Animation

The `TestimonialCarousel` uses an inline `<style jsx global>` block to define:
```css
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
```
Applied as: `animate-[marquee_45s_linear_infinite]` (Tailwind v4 arbitrary animation syntax).

---

## 14. Comic Motion Utility Classes

**Path:** `app/globals.css` (bottom section)

A reusable utility class system that applies the Comic Motion physics (spring overshoot, squash-on-press, rotational kicks) consistently across all interactive elements site-wide. All transitions use `cubic-bezier(0.34, 1.56, 0.64, 1)` as the spring curve.

### `.comic-btn`
For primary and secondary action buttons.

| State | Transform |
| :--- | :--- |
| default | `scale(1) translateY(0)` |
| `:hover` | `scale(1.04) translateY(-2px)` |
| `:active` | `scale(0.95) translateY(0)` |

Transitions: `transform 0.3s spring`, `background-color 0.25s ease`, `border-color 0.25s ease`, `box-shadow 0.3s spring`.  
`will-change: transform` set for GPU compositing.

### `.comic-icon`
For icons nested inside `.comic-btn` or `.group` wrappers. On hover, fires `comicIconKick` animation.

### `.comic-text`
For text spans inside `.comic-btn` or `.group` wrappers. On hover, scales to `scale(1.03)`.

### `.comic-pill`
For social links, badge pills, and contact row items.

| State | Transform |
| :--- | :--- |
| default | `scale(1) rotate(0) translateY(0)` |
| `:hover` | `scale(1.06) rotate(-1.5deg) translateY(-1px)` |
| `:active` | `scale(0.95) rotate(0deg) translateY(0)` |

### Usage Pattern

```tsx
// Button with comic spring + icon kick + text scale
<button className="comic-btn group ...">
  <span className="comic-text">Start a Project</span>
  <Send className="comic-icon w-4 h-4" />
</button>

// Social pill with hover tilt
<Link className="comic-pill group ...">
  <Image className="comic-icon ..." />
  <span className="comic-text ...">LinkedIn</span>
</Link>
```

---

## 15. Data Structures (Hardcoded Content)

All content data is hardcoded as typed arrays directly inside `app/page.tsx`. There is no CMS or external data source.

### `contacts`

```ts
[
  { id: 1, platform: "LinkedIn", icon: "/icons/linkedin.png", text: "Buhawie Santos", link: "https://www.linkedin.com/in/buhawie-santos-04403232b/" },
  { id: 2, platform: "GitHub",   icon: "/icons/github.png",   text: "BuwieSit",        link: "https://github.com/BuwieSit" }
]
```

### `skillCategories` (6 items)

| Title | Icon | Skills |
| :--- | :--- | :--- |
| Frontend Engineering | `<Code2 />` | React, Next.js, Tailwind CSS, Sass/SCSS, JavaScript (ES6+) |
| Backend & Database | `<Database />` | Python, Supabase, PostgreSQL, SQL |
| APIs & Data Fetching | `<Layers />` | RESTful APIs, Axios, TanStack Query, Postman |
| CMS & Web Platforms | `<Globe />` | WordPress, Elementor, Advanced Custom Fields (ACF) |
| Version Control & Methodology | `<Terminal />` | Git, GitHub, GitLab, Agile / Scrum, SRS Documentation |
| UI/UX & Multimedia | `<Film />` | Figma, Adobe XD, Adobe Illustrator, Lucidchart, Miro, Video Editing |

### `workExperience` (4 items)

| ID | Company | Role | Duration |
| :--- | :--- | :--- | :--- |
| `zynappse` | Zynappse Corporation | Web Developer Intern | Feb 2026 – Apr 2026 |
| `exaweb` | ExaWeb Corporation | Web Developer Intern | Jul 2025 – Aug 2025 |
| `freelance-film` | Freelance Creative | Lead Video Editor & Event Cinematographer | 2023 – Present |
| `freelance-dev` | Freelance Client Projects | Frontend Web Developer & UI Designer | 2024 – Present |

### `education` (2 items)

| Institution | Campus | Degree | Year | Honor |
| :--- | :--- | :--- | :--- | :--- |
| Polytechnic University of the Philippines | Sta. Mesa, Manila | Diploma in Information Technology | Class of 2026 | GWA: 1.34 |
| Systems Technology Institute | STI College Ortigas-Cainta | Mobile App and Web Development (MAWD) | Graduated 2023 | — |

### `certifications` (2 items)

| Title | Field |
| :--- | :--- |
| TESDA National Certificate II (NC II) | Computer Systems Servicing |
| TESDA National Certificate III (NC III) | Visual Graphics Design |

### `websiteProjects` (4 items)

| ID | Title | Type | Link | Mockup |
| :--- | :--- | :--- | :--- | :--- |
| `web-1` | OASIS: OJT Administration & Information System | Capstone Thesis | https://oasis-webapp-p21y.vercel.app/ | `/websites/oasis.png` |
| `web-2` | TAHAK: Wellness Tourism Booking Platform | International Competition | https://tahakver2.vercel.app/ | `/websites/tahak.png` |
| `web-3` | Ibajay Aklan Official Web Platform | Municipality Portal | https://ibajayaklan.vercel.app/ | `/websites/ibajay.png` |
| `web-4` | Market Vendor Registration & Records Portal | Administrative System | https://team2-web.vercel.app/market_vendor/landingPage.html | `/websites/vendor.png` |

### `videoProjects` (6 items)

| ID | Title | Category | YouTube Embed ID |
| :--- | :--- | :--- | :--- |
| `video-1` | Wedding SDE (Same Day Edit) | Wedding SDE | `VJffXfBqQF4` |
| `video-2` | Capstone Project Cinematic Teaser | Project Teaser | `wJFLJMs7fls` |
| `video-3` | Anime-Inspired Wedding Film | Creative Wedding | `-yE81PG0o1U` |
| `video-4` | Save the Date Cinematic Edit | Save The Date | `omgqVTdsSRg` |
| `video-5` | School Organization Music Video | Music Video | `-z8U2AdQpEE` |
| `video-6` | Debutant Save the Date Film | Debut Film | `n81224VWB5Q` |

### `heroReelProjects` (10 items) — NEW

Used exclusively by `TestimonialCarousel` in the hero section. Each item wraps a `<ProjectReelCard />`. Mixes both website mockups and YouTube thumbnails for a diverse visual reel.

| ID | Title | Category | Image Source | Target |
| :--- | :--- | :--- | :--- | :--- |
| `hero-oasis` | OASIS: OJT Administration & Information System | Administrative System | `/websites/oasis.png` | `#projects` |
| `hero-sde` | Wedding SDE (Same Day Edit) | Wedding SDE | YouTube: `VJffXfBqQF4` | `#video-projects` |
| `hero-tahak` | TAHAK: Wellness Tourism Booking Platform | Booking Platform | `/websites/tahak.png` | `#projects` |
| `hero-teaser` | Capstone Project Cinematic Teaser | Project Teaser | YouTube: `wJFLJMs7fls` | `#video-projects` |
| `hero-vendor` | Market Vendor Registration & Records Portal | Administrative System | `/websites/vendor.png` | `#projects` |
| `hero-anime` | Anime-Inspired Wedding Film | Creative Wedding | YouTube: `-yE81PG0o1U` | `#video-projects` |
| `hero-ibajay` | Ibajay Aklan Official Web Platform | Municipality Portal | `/websites/ibajay.png` | `#projects` |
| `hero-std` | Save the Date Cinematic Edit | Save The Date | YouTube: `omgqVTdsSRg` | `#video-projects` |
| `hero-music` | School Organization Music Video | Music Video | YouTube: `-z8U2AdQpEE` | `#video-projects` |
| `hero-debut` | Debutant Save the Date Film | Debut Film | YouTube: `n81224VWB5Q` | `#video-projects` |

---

## 16. Navigation & Section Tracking

The header's `useEffect` scroll listener iterates `['home', 'about', 'experience', 'projects', 'contacts']` in order and finds which section's `getBoundingClientRect().top` is ≤ 120px (the `headerOffset`) while `bottom > headerOffset`.

The first matching section becomes `activeSection`. If no section matches (page is scrolled past all), the last set value persists.

`isDarkSection` is `true` when `activeSection` is in `['about', 'experience', 'contacts']`.

**Important:** The `#video-projects` section does not have a corresponding nav item — it is visually part of the Projects area. The nav `Projects` link scrolls to `#projects` (website carousel), and `#video-projects` follows immediately after.

---

## 17. SEO & Metadata

Configured in `app/layout.tsx` via Next.js `Metadata` API:

```ts
export const metadata: Metadata = {
  title: "Buhawie Santos | Web Developer & Frontend Engineer",
  description: "Portfolio of Buhawie Santos, IT graduate skilled in React, Next.js, Python, Tailwind CSS, and full-stack web application development.",
  openGraph: {
    title: "Buhawie Santos - Web Developer Portfolio",
    description: "Explore web projects, technical skills, and software development experience by Buhawie Santos.",
    url: "https://buhawiesit.vercel.app/",
    siteName: "Buhawie Santos Portfolio",
    locale: "en_US",
    type: "website",
  },
};
```

No `og:image` is currently configured. Adding one would significantly improve social share previews.

---

## 18. Reference Documents

The workspace contains several governance and planning documents. Here is what each one is for:

| File | Purpose | Status |
| :--- | :--- | :--- |
| `AGENTS.md` | **Design guardrails** — mandatory reading before any code change. Defines the Warm Editorial/Cinematic identity, color rules, typography rules, section rhythm, and prohibited AI anti-patterns. | Active |
| `SYSTEM.md` | **This file** — full technical documentation: components, APIs, data structures, CSS, deployment. | Active |
| `DESIGN.md` | **Motion design spec & de-slop blueprint** — documents the Comic Motion System (spring physics, keyframes, utility classes), and lays out a section-by-section plan to remove remaining AI-slop patterns (eyebrows, glass cards, hairline borders). Contains future execution tasks marked as blueprints. | Active (some sections are spec/future work) |
| `portfolio_update_instructions.md` | Original content expansion spec written before major updates — describes resume content, work experience data, skill categories, and SEO tags to implement. Most items are now implemented. | Historical reference |
| `README.md` | Default Next.js bootstrapped README. Contains generic setup instructions. | Boilerplate only |

### Key Points from `DESIGN.md`

`DESIGN.md` documents the **Comic Motion Design System** — the physics model (spring overshoot `cubic-bezier(0.34, 1.56, 0.64, 1)`, squash-on-press, rotational kicks) used throughout the site. It also defines a **De-Slop Architecture** blueprint identifying three AI-generated anti-patterns to eliminate:

1. **"Eyebrow" labels** — micro-label pills above every heading. Partially executed: eyebrows removed from About, Experience, Projects, and Contacts section headers. Hero masthead and reel label eyebrows also removed.
2. **Hairline white borders everywhere** — excessive `border-editor-surface/20` boxing around every element. Partially executed: glass card wrappers removed from About bio, Experience timeline, and Contacts section.
3. **Transparent glass card containers** — `backdrop-blur-sm bg-editor-bg/5 rounded-3xl shadow-2xl` wrappers. Partially executed: About, Experience, and Contacts sections now render content directly on the espresso canvas.

> See `DESIGN.md` sections 7–8 for the full section-by-section execution plan and remaining items.

---

## 19. Deployment

**Platform:** Vercel  
**Production URL:** https://buhawiesit.vercel.app/  
**Branch strategy:** Assumed `main` / `master` → auto-deploy on push.

**Required Vercel Environment Variable:**
- `RESEND_API_KEY` — must be set in the Vercel project settings dashboard under Environment Variables for the email contact form to work in production.

**Build command:** `next build`  
**Output directory:** `.next` (auto-detected by Vercel)

---

## 20. Developer Checklist

Before making any changes, run through this checklist:

### Design Guardrails
- [ ] Is the change using only `editor-*` color tokens? No raw hex codes, no cold colors, no neons.
- [ ] Are the three font families (`font-bebas`, `font-times-new`, `font-poppins`) preserved in their correct roles?
- [ ] Does the light/dark section alternation remain intact?
- [ ] Is the floating header's section-tracking unbroken (all 5 section IDs preserved)?

### Technical Checks
- [ ] If adding a new remote image domain, has it been added to `next.config.ts` → `images.remotePatterns`?
- [ ] If adding a new section with an ID, has it been added to both the `sections` array in `Header.tsx` and determined whether it is a `darkSections` entry?
- [ ] Is `RESEND_API_KEY` set in `.env.local` locally and in Vercel for production?
- [ ] Are new components typed with explicit TypeScript interfaces?
- [ ] Do interactive elements have proper ARIA labels and keyboard handlers?

### Content Updates
- [ ] New project data → add to `websiteProjects` or `videoProjects` arrays in `page.tsx`, **and** add a corresponding entry to `heroReelProjects` using `<ProjectReelCard />`.
- [ ] New skill → add to the appropriate category in `skillCategories`.
- [ ] New work experience → add to `workExperience` array with `id`, `company`, `role`, `duration`, `badges`, `achievements`.
- [ ] Resume PDF updated → replace `public/BUHAWIE_SANTOS_RESUME.pdf` (keep the filename).

### Comic Motion
- [ ] Any new interactive element (button, link, pill) uses `.comic-btn`, `.comic-pill`, or `.comic-icon`/`.comic-text` as appropriate.
- [ ] No raw `transition-all` without the spring cubic-bezier on elements that should feel tactile.
- [ ] Active/press state uses `active:scale-[0.95]` or `.comic-btn:active`.

### De-Slop Compliance
- [ ] No new eyebrow labels above section headings (plain `<h2 font-bebas>` leads directly).
- [ ] No new `backdrop-blur-sm bg-editor-bg/5 rounded-3xl shadow-2xl` glass card wrappers around prose sections.
- [ ] No new 4-sided hairline borders boxing content blocks — use horizontal rule dividers (`border-b border-editor-surface/15`) or open spacing instead.

---

*Last documented: 2026 — updated after full codebase re-scan at `e:\BuhawiePortfolio\editor-portfolio`.*
