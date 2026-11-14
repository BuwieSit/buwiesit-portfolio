# Buhawie Santos — Editorial Portfolio

Personal portfolio for **Buhawie "Buwie" Santos** — Frontend Web Developer, UI/UX Designer, and professional event cinematographer based in Rizal, Philippines.

The site is designed around a **Warm Editorial & Cinematic** aesthetic: warm linen and deep espresso sections, Bebas Neue display titles, and a visual language drawn from printed editorial magazines and analog cinema — not a generic SaaS template.

---

## Live Site

> https://buhawiesit.vercel.app/

---

## Tech Stack

| Layer | Tools |
| :--- | :--- |
| Framework | Next.js 16 / React 19 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Email | Resend (contact form) |
| Icons | Lucide React |
| Fonts | Bebas Neue, Times New Roman MT, Poppins |
| Deployment | Vercel |

---

## Page Sections

The site is a single-page app with 7 sections that alternate between light linen (`#EFEAE2`) and deep espresso (`#2A1F14`):

| Section ID | Background | Content |
| :--- | :--- | :--- |
| `#home` | Light Linen | Hero masthead, editorial dateline, social links, CTAs, auto-scrolling project reel |
| `#about` | Deep Espresso | Bio, photo, interactive Disciplines panel (Frontend / Video / UI·UX tabs) |
| `#tech-stack` | Deep Espresso | 4-column architecture pipeline with SVG connectors and icon popup tooltips |
| `#experience` | Deep Espresso | Work experience timeline, Education & Certifications grid |
| `#projects` | Light Linen | Website Projects carousel — 4 entries |
| `#video-projects` | Light Linen | Films & Video Edits carousel — 6 YouTube entries |
| `#contacts` | Deep Espresso | Contact form + direct email and social links |

The floating header nav links **5 sections**: Home, About, Experience, Projects, Contacts. `#tech-stack` and `#video-projects` are reached by scrolling.

---

## Project Structure

```
app/
  page.tsx          # All page sections and their data
  actions.ts        # Server action — contact form email via Resend (honeypot, rate-limit, validation)
  globals.css       # Design tokens, color system, comic-* interaction classes
  layout.tsx        # Font setup, root layout, persistent footer

components/
  Header.tsx        # Fixed floating nav — section-tracking, logo inversion, mobile drawer
  Carousel.tsx      # Keyboard-accessible 3-up carousel with dot indicators
  WebsiteCard.tsx   # Web project card — full-bleed mockup, tags, role, live-site link
  VideoCard.tsx     # YouTube facade — thumbnail + play button; loads iframe on click only
  ProjectReelCard.tsx  # Read-only hero reel poster card (no pointer events)
  TestimonialCarousel.tsx  # CSS marquee strip — tilted track, dual ticker ribbons

api/
  resend.ts         # Resend SDK wrapper — HTML email template using editor-* palette

public/
  websites/         # Project mockup screenshots
  icons/            # Tech stack and social icons
  skills/           # Skill grid icons
  editor_logo/      # Logo variants (light/dark, with/without bg) and profile photo
  fonts/            # Times New Roman MT .otf file
  BUHAWIE_SANTOS_RESUME.pdf  # Resume — linked in header nav and mobile drawer
```

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

The contact form requires a [Resend](https://resend.com) API key. Create a `.env.local` file at the project root:

```
RESEND_API_KEY=your_resend_api_key_here
```

Without this key the contact form returns an error. All other sections render without it.

---

## Design Notes

The full color system, typography rules, section rhythm, component inventory, interaction system, and contact form implementation details are documented in [`AGENTS.md`](./AGENTS.md).

**Read `AGENTS.md` before modifying any layout, color, section ID, or nav item.** The floating header's dark/light switching and the section-tracking depend on specific IDs and the `darkSections` array in `components/Header.tsx` staying in sync.
