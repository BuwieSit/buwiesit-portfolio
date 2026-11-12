# DESIGN.md — The Editorial & Comic Motion Design System

> **Portfolio of Buhawie "Buwie" Santos**  
> *Frontend Web Developer & Event Cinematographer*  
> **Visual Identity:** Warm Editorial & Cinematic with Cartoony / Comic Tactile Micro-Interactions

---

## 1. Creative Ethos & Dual Identity

This portfolio synthesizes two distinct creative worlds:
1. **Warm Analog Cinema & Editorial Print:** Roasted espresso (`#2A1F14`), warm parchment linen (`#EFEAE2`), burnished bronze (`#8B6F4E`), and soft sand (`#C9B896`) paired with bold cinematic headers (*Bebas Neue*), literary editorial accents (*Times New Roman MT*), and clean modern copy (*Poppins*).
2. **Comic & Cartoony Tactile Motion:** Instead of stiff corporate transitions, interactive elements feature playful, cartoony spring physics—inspired by classic comic animation (squash & stretch, overshoot, anticipation, and rotational kicks).

---

## 2. The Signature Comic Animation Architecture

### 2.1 The Physics Model: Spring Overshoot & Squash
Standard web transitions use linear or generic ease-in-out curves. The **Comic Motion System** employs an exaggerated spring curve:

```css
cubic-bezier(0.34, 1.56, 0.64, 1)
```

- **Anticipation & Overshoot:** Elements scale past their resting size (up to `118%` to `135%`), tilt slightly (`-12°` to `+6°`), and settle back dynamically into position.
- **Squash & Stretch on Press (`:active`):** Buttons instantly squash to `scale(0.92 - 0.95)`, delivering tactile feedback akin to a physical button or comic sound effect (*"POP!"* / *"CLICK!"*).
- **Zero Layout Shift (Ghost Text Principle):** For morphing or popping texts (like the header nav), an invisible ghost element retains natural resting dimensions so siblings never jitter.

---

### 2.2 Core Keyframe Specifications

Defined in [`app/globals.css`](file:///E:/BuhawiePortfolio/editor-portfolio/app/globals.css):

#### A. Comic Icon Pop (`comicIconPop` / `comicIconKick`)
Triggers when an interactable element is hovered or focused. The icon pops up from a mini scale with a quick counter-clockwise tilt, overshoots with a clockwise snap, and settles cleanly at `0°`:

```css
@keyframes comicIconPop {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-12deg);
  }
  45% {
    opacity: 1;
    transform: scale(1.32) rotate(6deg);
  }
  70% {
    transform: scale(1.04) rotate(-2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1.1) rotate(0deg);
  }
}

@keyframes comicIconKick {
  0% { transform: scale(1) rotate(0deg); }
  35% { transform: scale(1.35) rotate(-12deg); }
  70% { transform: scale(0.95) rotate(5deg); }
  85% { transform: scale(1.12) rotate(-2deg); }
  100% { transform: scale(1.08) rotate(0deg); }
}
```

#### B. Comic Word Burst (`comicWordPop`)
Used when text appears dynamically alongside an icon on hover, expanding outward with an energetic rotation:

```css
@keyframes comicWordPop {
  0%, 35% {
    opacity: 0;
    max-width: 0;
    transform: scale(0) translateX(-6px) rotate(-6deg);
    margin-left: 0;
  }
  40% {
    opacity: 1;
  }
  75% {
    opacity: 1;
    max-width: 140px;
    transform: scale(1.2) translateX(0) rotate(3deg);
    margin-left: 6px;
  }
  100% {
    opacity: 1;
    max-width: 140px;
    transform: scale(1) translateX(0) rotate(0deg);
    margin-left: 6px;
  }
}
```

#### C. Comic Button Spring Bounce (`comicBounce`)
Applies a playful squash-and-stretch wobble to buttons and pills on hover:

```css
@keyframes comicBounce {
  0% { transform: scale(1) translateY(0); }
  30% { transform: scale(1.06) translateY(-3px) rotate(-1.5deg); }
  60% { transform: scale(0.98) translateY(-1px) rotate(1deg); }
  85% { transform: scale(1.03) translateY(-2px) rotate(-0.5deg); }
  100% { transform: scale(1.02) translateY(-2px) rotate(0deg); }
}
```

---

## 3. Systematic Component Implementation

### 3.1 Primary & Secondary Buttons (`.comic-btn`)
- **Hover:** Lifts with `-translate-y-1` and expands to `scale-[1.03]`, accompanied by a warm drop shadow bloom.
- **Active / Press:** Quick tactile squash (`active:scale-[0.95] active:translate-y-0`).
- **Inner Icon:** Springs with `.comic-icon` (`group-hover:scale-125 group-hover:-rotate-12`).

```html
<!-- Example Primary Action Button -->
<button className="comic-btn group bg-editor-primary text-editor-bg px-6 py-3.5 rounded-xl font-bold flex items-center gap-2">
  <span className="comic-text">Start a Project</span>
  <Send className="comic-icon w-4 h-4" />
</button>
```

### 3.2 Social Pills & Badges (`.comic-pill`)
- **Hover:** Tilts by `-2deg`, scales to `106%`, and highlights with a warm sand/surface glow.
- **Icon:** Bounces with a rotational snap.
- **Text:** Slight tracking expansion.

### 3.3 Carousel Navigation Controls (`components/Carousel.tsx`)
- **Arrow Buttons:** On hover, arrows scale to `115%` with a rotational kick (`hover:rotate-6` or `hover:-rotate-6`), making slide navigation feel tactile and rewarding.
- **Active State:** Squashes to `scale-90`.

### 3.4 Media & Video Cards (`components/VideoCard.tsx`)
- **Play Button:** Center circle scales from `scale-100` to `scale-120` with a spring bounce on card hover, while the play icon scales up playfully.
- **Watch Film Badge:** Pops with a subtle overshoot.

### 3.5 Form Elements & Submit Triggers
- **Inputs:** Focused inputs gain an espresso/sand focus ring with an instant spring border pop (`focus:scale-[1.01]`).
- **Submit Button:** Send icon tilts forward like a launched paper plane when hovered.

### 3.6 Tech Stack Comic Distorted Logo Popups (`.comic-distort-bubble`)
- **Trigger:** Hover or keyboard focus (`:hover`, `:focus-visible`) on any technical skill badge that has an associated icon.
- **Anchor Base:** The editorial text pill anchors the interaction without layout jitter (Zero Layout Shift principle).
- **Comic Distortion Physics (`@keyframes comicDistortPop`):**
  - **Anticipation:** Element starts squashed and counter-clockwise tilted at `scale(0.2) rotate(-16deg) skewX(-10deg)`.
  - **Overshoot Launch:** Springs dynamically upward past resting scale with `scale(1.24, 0.88) rotate(8deg) skewX(6deg)`.
  - **Squash Recoil & Settle:** Bounces back through `scale(0.94, 1.08) rotate(-4deg)` and settles into an energetic cartoon tilt (`rotate(-2deg) skewX(-1deg)`).
- **Secondary Icon Wobble (`@keyframes comicIconWobble`):** The internal logo spins dynamically in counter-rotation (`rotate(14deg)` to `rotate(-10deg)` to `0deg`), creating an animated cel cartoon pop.
- **Visual Styling:**
  - Solid linen card background (`bg-editor-bg` / `#EFEAE2`) guaranteeing optimal contrast for transparent, dark, or multi-colored brand logos.
  - Bold roasted espresso outline (`border-2 border-editor-primary`).
  - Cel-shaded burnished bronze drop shadow (`shadow-[3px_3px_0px_#8B6F4E]`).
  - Comic speech-bubble pointer anchored directly to the text base.
- **Skills without Icons:** Left unadorned as clean, static editorial text pills without interactive popups ("leave it be").

---

## 4. Design System Tokens & Color Harmony

All comic interactions strictly utilize the warm editorial palette defined in [`app/globals.css`](file:///E:/BuhawiePortfolio/editor-portfolio/app/globals.css):

| Token | Hex | Role in Comic Micro-Interactions |
| :--- | :--- | :--- |
| `--color-editor-bg` | `#EFEAE2` | Warm linen background; pill text and bright highlights |
| `--color-editor-primary` | `#2A1F14` | Roasted espresso; primary buttons, dark shadows, dark text |
| `--color-editor-accent` | `#8B6F4E` | Burnished bronze; hover border kicks and badge highlights |
| `--color-editor-surface` | `#C9B896` | Warm sand; tactile badge backgrounds and comic glow rings |
| `--color-editor-border` | `#CEC9C5` | Soft stone dividers and subtle button borders |

---

## 5. Accessibility & Motion Sensitivity

To respect users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 6. Pre-Flight Checklist for Adding New Interactables

When adding or refactoring any button, link, or card:
- [ ] Does it have springy overshoot on hover (`cubic-bezier(0.34, 1.56, 0.64, 1)` or `comic-btn`)?
- [ ] Does it have tactile squash on active press (`active:scale-95`)?
- [ ] Do inner icons have rotational pop (`comic-icon` / `-rotate-12`)?
- [ ] Is layout shift prevented (zero layout jitter)?
- [ ] Are colors mapped strictly to `editor-*` tokens?

---

## 7. Anti-AI Slop Manifesto & De-Slop Architecture

> [!IMPORTANT]
> **STATUS: SPECIFICATION & DESIGN BLUEPRINT ONLY — DO NOT IMPLEMENT YET.**  
> This section identifies the three hallmark patterns of generic "AI Design Slop" currently lingering in the codebase and provides the exact human-editorial replacements to be enacted in upcoming refactors.

Generic AI code generation tools (v0, bolt, standard LLM prompts) converge on the same predictable, sterile visual clichés when building modern websites. To preserve Buwie's unique identity as an authentic editorial storyteller and event cinematographer, we must methodically dismantle these patterns.

---

### 7.1 The Three Core AI Design Slop Patterns to Purge

```
[ AI SLOP PATTERN ]                    [ THE EDITORIAL HUMAN SOLUTION ]
1. "Eyebrows" everywhere           ->  Pure Typographic Scale & Content Pacing
2. Hairline White / Frosted Borders ->  Tonal Background Contrast & Clean Dividers
3. Translucent Square Glass Cards  ->  Unboxed Content, Magazine Grids & Solid Planes
```

---

### 7.2 Pattern 1: Eyebrows (Micro-Label & Subtitle Syndrome)

#### What It Is in AI Slop:
- A compulsive habit of inserting a tiny, uppercase, ultra-tracked subtitle or pill directly above every single heading on the site.
- Examples currently in the site:
  - `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ...">AVAILABLE FOR DEVELOPMENT...</div>`
  - `<span className="font-times-new italic text-editor-surface tracking-widest uppercase text-xs">The Creator Behind the Work</span>`
  - `<span className="font-times-new italic text-editor-surface tracking-widest uppercase text-xs">Curated Deployments & Interactive Systems</span>`
  - `<span className="font-times-new italic text-editor-accent tracking-widest uppercase text-xs">— Selected Film Slates & Interactive Web Deployments —</span>`
  - `<span className="font-times-new italic text-editor-surface tracking-widest uppercase text-xs">Commercial & Intern Experience</span>`
- Usually accompanied by green/bronze pulsing animated dots (`animate-pulse w-2 h-2 rounded-full`) or decorative em-dashes (`— ... —`).

#### Why It Harms the Design:
- It functions as a crutch: the AI does not trust the headline typography to announce itself, so it adds a meta-label explaining what the headline is about to say.
- It adds cognitive noise and visual clutter, diluting the commanding impact of *Bebas Neue* display headings.
- It screams "2024 AI B2B SaaS template" rather than a bespoke editorial monograph.

#### The De-Slop Remedy:
- **Eradicate all non-functional eyebrow tags.**
- Let the primary display heading (*Bebas Neue*, `text-5xl` to `text-8xl`) lead with confidence.
- Follow the heading immediately with grounded, high-clarity copy or let section contrast (Linen vs. Espresso) set the scene.
- Keep categorization badges *strictly* where they classify actual artifacts (e.g. "Wedding SDE" or "Administrative System" inside project carousels), never as generic section meta-commentary.

---

### 7.3 Pattern 2: Hairline White Borders (`border-white/*`, `border-surface/20-30`)

#### What It Is in AI Slop:
- Wrapping virtually every block, tag, pill, card, input, and timeline item in a 1px hairline border (e.g. `border border-editor-surface/20`, `border border-editor-surface/30`, `border-white/10`).
- Often paired with frosted glass (`backdrop-blur-sm`, `bg-editor-bg/5`).

#### Why It Harms the Design:
- Creates an over-outlined "wireframe cage" effect across the page.
- It flattens visual hierarchy: when *everything* has an outline, *nothing* stands out.
- It simulates cheap web3/crypto or sci-fi UI instead of warm analog print. Real editorial publications never put 1px strokes around every block of body text.

#### The De-Slop Remedy:
- **Drop the outlines.** Define space through negative margin, typographic scale, and tonal background color shifts.
- If separation is required, use single, ultra-subtle editorial hair-rules (horizontal hairline dividers like classic print columns: `border-b border-editor-primary/10`) rather than 4-sided boxed enclosures.
- Reserve structural borders only for tactile form inputs and interactive button edges where accessibility demands clear boundaries.

---

### 7.4 Pattern 3: Transparent Square Containers with Shadows ("The Glass Card Maze")

#### What It Is in AI Slop:
- Encasing every cluster of information in translucent rounded boxes with heavy drop shadows:
  ```html
  <!-- AI Slop Container Cliché -->
  <div className="bg-editor-bg/5 border border-editor-surface/20 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-sm">
    <!-- Content trapped in a glass box -->
  </div>
  ```
- Stacking boxes inside boxes: A section contains a large translucent box, which contains three sub-translucent boxes (`bg-editor-surface/10 border border-editor-surface/20`), which contain pills with borders and shadows.
- Muddy, diffuse drop-shadows (`shadow-2xl`, `shadow-black/40`) applied to semi-transparent backgrounds, which creates an ungrounded, muddy smudge rather than authentic depth.

#### Why It Harms the Design:
- It turns an editorial portfolio into an admin analytics dashboard.
- It restricts typography from flowing naturally across the viewport.
- Frosted glass cards on top of solid espresso backgrounds fail to evoke either analog film or print editorial.

#### The De-Slop Remedy:
- **Unbox the content:** Let paragraphs, portraits, and milestones sit directly on the section canvas (`#about`, `#experience`, `#contacts`).
- **Editorial Asymmetry & White Space:** Instead of putting text in a box, align it alongside strong typographic anchors, generous padding, and authentic print margins.
- **Solid Planes over Frosted Glass:** If grouping is visually mandatory, use a solid tonal fill with zero transparency and zero blur (e.g., solid roasted espresso `#2A1F14` or solid warm sand `#C9B896/20`), grounded with crisp tactile edges.
- **Kill Diffuse Shadows:** Eliminate `shadow-2xl` and floating blurs. Embrace flat, grounded editorial contrast.

---

## 8. Section-by-Section De-Slop Blueprint (Future Execution Plan)

### 8.1 Section 1: Hero (`#home`)
- [ ] **Remove Eyebrow Pill:** Delete the `"AVAILABLE FOR DEVELOPMENT & FILM PROJECTS"` pulsing pill.
- [ ] **Streamline Top Masthead:** Keep the editorial issue line clean without unnecessary decorative tags.
- [ ] **Clean Reel Header:** Remove the eyebrow `"— Selected Film Slates & Interactive Web Deployments —"`. Let the marquee reel sit confidently beneath the CTAs with a clean rule.

### 8.2 Section 2: About (`#about`)
- [ ] **Remove Section Eyebrow:** Delete `"The Creator Behind the Work"`. Lead boldly with `"ABOUT BUWIE"`.
- [ ] **Dismantle Glass Container Box:** Remove the overarching `bg-editor-bg/5 border border-editor-surface/20 rounded-3xl shadow-2xl backdrop-blur-sm` wrapper.
- [ ] **Unbox the Bio Layout:** Let the darkroom portrait and narrative story breathe side-by-side as an editorial double-page spread directly on the espresso background.
- [ ] **De-Box the Three Pillar Badges:** Replace the three boxed cards (`bg-editor-surface/10 border`) with a clean typographic column list separated by subtle horizontal rules.
- [ ] **De-Box Tech Stack Grid:** Remove boxed container cards for skill categories; use an open editorial columnar directory layout.

### 8.3 Section 3: Experience & Education (`#experience`)
- [ ] **Remove Eyebrow Subtitles:** Delete `"Commercial & Intern Experience"` and `"Academic Background & Qualifications"`.
- [ ] **Dismantle Heavy Card Wrappers:** Transform work experience items from boxed glass cards into an elegant, unboxed editorial editorial timeline.
- [ ] **Remove White Hairline Borders:** Remove `border border-editor-surface/25` from individual milestone entries.
- [ ] **Unbox Academic Credentials:** Display education and certifications with clean typographic rhythm and rule lines rather than boxed cards.

### 8.4 Section 4: Website & Video Projects (`#projects` & `#video-projects`)
- [ ] **Remove Section Eyebrows:** Delete `"Curated Deployments & Interactive Systems"` and `"Cinematography & Post-Production"`.
- [ ] **Direct Focus to Carousel:** Let the display titles `"WEBSITE PROJECTS"` and `"FILMS & VIDEO EDITS"` command the stage directly above the project carousels.

### 8.5 Section 5: Contacts (`#contacts`)
- [ ] **Remove Eyebrow Subtitle:** Delete `"Let's Build or Film Together"`.
- [ ] **Dismantle Outer Glass Box:** Remove the massive outer container box (`bg-editor-bg/5 border border-editor-surface/30 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl backdrop-blur-sm`).
- [ ] **Open 2-Column Split:** Present the direct contact information and the inquiry form directly on the espresso canvas, separated by clear architectural spacing.
- [ ] **Ground Form Inputs:** Maintain crisp, high-contrast input fields without diffuse glass effects.
