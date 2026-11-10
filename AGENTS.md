# AGENTS.md — Design Principles & Refactoring Guardrails

> **MANDATORY READING FOR ALL AI AGENTS & DEVELOPERS:**  
> Read this document completely before proposing, designing, or implementing any code changes in this repository.  
> This portfolio has an intentional, handcrafted editorial identity. **Do not flatten it into "AI Slop".**

---

## 1. Core Identity & Creative Ethos

- **Creator:** Buhawie "Buwie" Santos
- **Dual Craft:** Frontend Web Developer & Professional Video Editor (Cinematography, Wedding SDEs, Event Films, UI/UX).
- **Aesthetic Direction:** **Warm Editorial & Cinematic**.  
  This is *not* a generic Silicon Valley software engineer portfolio. It draws inspiration from printed editorial magazines, film storyboards, warm analog cinema, and structured typography.
- **The Core Rule:** Any improvement must amplify Buwie's distinct dual identity. Do not turn this site into a cookie-cutter SaaS template or an over-animated AI tech demo.

---

## 2. Color System & Design Tokens

Defined in [`app/globals.css`](file:///E:/BuhawiePortfolio/editor-portfolio/app/globals.css):

| Token Name | Hex Code | Visual Role |
| :--- | :--- | :--- |
| `--color-editor-bg` | `#EFEAE2` | Warm linen / parchment paper (Light background) |
| `--color-editor-primary` | `#2A1F14` | Deep roasted espresso / rich coffee charcoal (Dark background & primary light-mode text) |
| `--color-editor-accent` | `#8B6F4E` | Warm burnished bronze / vintage leather (Accents, badges, borders, highlights) |
| `--color-editor-surface` | `#C9B896` | Warm sand / craft paper tint (Pills, muted badges, card borders, secondary glows) |
| `--color-editor-border` | `#CEC9C5` | Soft stone border (Dividers, subtle structure) |

### Strict Color Rules:
- ❌ **NEVER** introduce cold zinc/slate (`#0f172a`, `#18181b`) or pitch-black (`#000000`) unless matching deliberate media players.
- ❌ **NEVER** introduce electric neon colors (cyan, magenta, bright purple, electric blue).
- ✅ **ALWAYS** use the semantic `editor-*` palette for new elements, borders, shadows, and text.

---

## 3. Typography Architecture

Configured in [`app/layout.tsx`](file:///E:/BuhawiePortfolio/editor-portfolio/app/layout.tsx) and [`app/globals.css`](file:///E:/BuhawiePortfolio/editor-portfolio/app/globals.css):

1. **`Bebas Neue` (`font-bebas` / `font-editor-title`):**
   - **Usage:** Big, cinematic display titles (`h1`, section headings).
   - **Tone:** Bold, cinematic, vintage movie poster energy.
2. **`Times New Roman MT` (`font-times-new` / `--font-times-mt`):**
   - **Usage:** Editorial italics, section labels, decorative subtitles, literary accents.
   - **Tone:** Classic editorial publication, refined print elegance.
3. **`Poppins` (`font-poppins`):**
   - **Usage:** Body copy, buttons, badges, navigation items, cards, inputs.
   - **Tone:** Clean, modern, accessible, highly readable.

### Strict Typography Rules:
- ❌ Do **not** replace these font pairings with generic system fonts or default Inter/Geist.
- ❌ Do **not** apply comic, futuristic cyberpunk, or sci-fi display fonts.

---

## 4. Rhythm & Section Contrast Architecture

The portfolio deliberately alternates between light linen and deep espresso sections:

```
[ Section 1: #home ]      -> Light Linen (#EFEAE2) with warm glow & Bebas title
[ Section 2: #about ]     -> Deep Espresso (#2A1F14) with warm sand accents & inset glow
[ Section 3: #projects ]  -> Light Linen (#EFEAE2) with Website & Video carousels
[ Section 4: #contacts ]  -> Deep Espresso (#2A1F14) with split contact card & form
```

### The Inverting Navigation System:
- Defined in [`components/Header.tsx`](file:///E:/BuhawiePortfolio/editor-portfolio/components/Header.tsx).
- Automatically tracks the viewport position across sections (`home`, `about`, `projects`, `contacts`).
- Seamlessly swaps the logo (`light_nobg.png` vs `dark_nobg.png`) and the floating nav pill between dark/light styling.
- ⚠️ **Preserve all section IDs** (`#home`, `#about`, `#projects`, `#contacts`). Renaming or removing these IDs breaks header color transitions.

---

## 5. What Defines "AI Slop" (Strictly Prohibited)

When tasked with "improving" or "redesigning" this portfolio, avoid these common AI generated anti-patterns:

1. **The "Purple Mesh Gradient" Trap:**  
   Do not add generic indigo/violet/fuchsia background blurs or iridescent gradient text.
2. **The "Glassmorphism Overkill":**  
   Do not slap heavy frosted glass (`backdrop-blur-xl bg-white/10 border-white/20`) on every single div. Glass is used sparingly in existing cards.
3. **Gratuitous Physics & Mouse Stunts:**  
   Do not add distracting 3D parallax tilt effects, magnetic cursor balls, canvas particle meshes, or spring physics that degrade mobile performance.
4. **Corporate AI Buzzwords:**  
   Do not replace Buwie's genuine student/creator voice with inflated corporate jargon (e.g. *"Architecting synergized digital paradigms"*). Keep copy grounded, humble, and authentic.
5. **Component Library Flattening:**  
   Do not blindly paste raw, unstyled components from generic UI libraries without tailoring their border radii, typography, and palette to the `editor-*` aesthetic.

---

## 6. Safe & High-Impact Areas for Improvement

You **can** make tasteful, high-value improvements that respect the original design:

- **Refined Micro-Interactions:** Subtle hover states, smooth CSS transitions, tactile button press feedback (`active:scale-[0.98]`).
- **Responsive Layout Polish:** Tuning padding, font sizes (`clamp(...)`), and flex/grid gaps for intermediate tablet and mobile viewport widths.
- **Card Presentation:** Enhancing [`components/WebsiteCard.tsx`](file:///E:/BuhawiePortfolio/editor-portfolio/components/WebsiteCard.tsx) and [`components/VideoCard.tsx`](file:///E:/BuhawiePortfolio/editor-portfolio/components/VideoCard.tsx) with crisp tech-stack tags, subtle view-live links, or better aspect-ratio handling.
- **Accessibility & Semantics:** Valid ARIA attributes, semantic headings (`h1` -> `h2` -> `h3`), keyboard navigability in [`components/Carousel.tsx`](file:///E:/BuhawiePortfolio/editor-portfolio/components/Carousel.tsx), and contrast ratios.
- **Performance & Asset Loading:** Clean image sizing, Next.js image optimization (`sizes`, `priority`), and YouTube embed lazy-loading/facades to preserve PageSpeed.
- **Form UX:** Polished validation, clear error/success states, and accessible focus rings matching the espresso/surface palette.

---

## 7. Pre-Flight Checklist Before Writing Code

Before writing or editing code for any redesign task:

- [ ] Does this change retain the **Warm Editorial / Cinematic** visual tone?
- [ ] Are all colors mapped to the existing `editor-*` variables?
- [ ] Are the original typography pairings (`font-bebas`, `font-times-new`, `font-poppins`) preserved?
- [ ] Does the alternating Light / Dark section rhythm still work cleanly?
- [ ] Is the floating header's section-tracking in [`components/Header.tsx`](file:///E:/BuhawiePortfolio/editor-portfolio/components/Header.tsx) unbroken?
- [ ] Does the change feel like it was crafted by a human designer with taste, rather than generated by a generic template?
