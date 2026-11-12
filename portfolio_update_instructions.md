# Portfolio Website Content & Feature Expansion Specification

> **Purpose:** This document provides actionable context, structured content, and layout recommendations to align Buhawie Santos's portfolio website (`https://buhawiesit.vercel.app/`) with their resume data. Use this as a prompt or spec for an AI agent/developer updating the website code.

---

## 1. Global Call-To-Action (CTA) & Navigation Enhancements

### Hero / Header Section Updates
* **Resume Download Button:** Add a prominent primary CTA button labeled `Download Resume (PDF)` in the main Hero section and Header navigation.
  * **Link Target:** Direct link to `/BUHAWIE_SANTOS_RESUME.pdf` (or host asset path).
  * **Quick Copy Email:** Provide an interactive "Copy Email" button adjacent to social links: `santosbuhawie28@gmail.com`.

---

## 2. New Section: Work Experience

Add a dedicated `Work Experience` section with a timeline layout to showcase commercial and intern experience.

### Experience Item 1: Zynappse Corporation
* **Role:** Web Developer Intern
* **Company:** Zynappse Corporation
* **Duration:** February 2026 – April 2026
* **Tech Stack Badges:** `Next.js`, `React`, `Sass/SCSS`, `Flutter`, `Postman`, `REST API`, `GitLab`, `Adobe XD`, `Adobe Illustrator`
* **Key Achievements & Responsibilities:**
  * Migrated legacy React applications to **Next.js**, implementing Server-Side Rendering (SSR) and modular SCSS architecture for enhanced responsiveness and page performance.
  * Tested and validated RESTful API endpoints for a Flutter-based store clock-in application using **Postman**.
  * Managed code integration and resolution of Git merge conflicts in **GitLab** during sprint development cycles.
  * Designed website prototypes and vector UI assets using **Adobe XD** and **Adobe Illustrator**.

### Experience Item 2: ExaWeb Corporation
* **Role:** Web Developer Intern
* **Company:** ExaWeb Corporation
* **Duration:** July 2025 – August 2025
* **Tech Stack Badges:** `WordPress`, `Elementor`, `ACF/SCF`, `SEO`, `Lighthouse`, `PageSpeed Insights`, `Agile/Scrum`
* **Key Achievements & Responsibilities:**
  * Built and modernized client websites using **WordPress** and **Elementor**, configuring Advanced Custom Fields (ACF) and Secure Custom Fields (SCF) for tailored content management.
  * Conducted technical SEO audits, meta-data optimization, and performance refactoring using **PageSpeed Insights** and **Google Lighthouse**.
  * Participated in daily Agile standups and sprint planning sessions to prioritize web optimization tasks.

---

## 3. Enhanced Skills & Tech Stack Section

Re-architect the technical skills section into clean visual categories or grid cards so recruiters can scan tech tags quickly.

```json
{
  "skills": {
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Sass/SCSS", "JavaScript (ES6+)"],
    "Backend & Database": ["Python", "Supabase", "PostgreSQL", "SQL"],
    "APIs & Data Fetching": ["RESTful APIs", "Axios", "TanStack Query", "Postman"],
    "CMS & Web Platforms": ["WordPress", "Elementor", "Advanced Custom Fields (ACF)"],
    "Version Control & Methodology": ["Git", "GitHub", "GitLab", "Agile / Scrum", "SRS Documentation"],
    "UI/UX & Multimedia": ["Figma", "Adobe XD", "Adobe Illustrator", "Lucidchart", "Miro", "Video Editing"]
  }
}
```

---

## 4. Deep-Dive Enhancements for Projects

Update existing project modal or card descriptions to reflect the engineering depth described in the resume.

### Project 1: OASIS (OJT Administration, Support, and Information System)
* **Tagline:** Centralized web system for PUP ITech internship administration.
* **Role:** Full-Stack/Frontend Developer & System Analyst (Capstone Project)
* **Tech Stack:** `React`, `Tailwind CSS`, `Python`, `Axios`, `TanStack Query`, `PostgreSQL`, `Vercel`
* **Engineering Highlights:**
  * Modeled system workflows and produced comprehensive **SRS documentation**, Data Flow Diagrams (**DFDs**), Entity-Relationship Diagrams (**ERDs**), and sequence diagrams.
  * Built dynamic frontend components connected to asynchronous REST API endpoints via **TanStack Query** for cached data fetching and state management.

### Project 2: TAHAK (Wellness Tourism Booking Platform)
* **Tagline:** Single-page wellness tourism platform developed for a venture in Dolores, Quezon.
* **Role:** Web Application Developer
* **Tech Stack:** `React`, `Supabase`, `Tailwind CSS`, `Vercel`
* **Engineering Highlights:**
  * Architected a responsive single-page application (SPA) handling both tourist customer bookings and internal administrative dashboard controls.
  * Partnered with a multidisciplinary team (biology & tourism specialists) to translate an award-winning ecotourism pitch into an operational production build.

---

## 5. New Section: Education & Certifications

Create a concise grid or card block for academic honors and certifications.

### Academic Credentials
* **Polytechnic University of the Philippines (PUP Sta. Mesa)**
  * **Degree:** Diploma in Information Technology
  * **Graduation:** Class of 2026
  * **Academic Honor:** General Weighted Average (GWA): **1.34**
* **Systems Technology Institute (STI College Ortigas-Cainta)**
  * **Strand:** Mobile App and Web Development (MAWD) | 2023

### Certifications
* **TESDA National Certificate II (NC II)** – Computer Systems Servicing
* **TESDA National Certificate III (NC III)** – Visual Graphics Design

---

## 6. Recommended SEO & Open Graph Metadata

Update the root layout or HTML standard tags for optimal sharing preview:

```html
<title>Buhawie Santos | Web Developer & Frontend Engineer</title>
<meta name="description" content="Portfolio of Buhawie Santos, IT graduate skilled in React, Next.js, Python, Tailwind CSS, and full-stack web application development." />
<meta property="og:title" content="Buhawie Santos - Web Developer Portfolio" />
<meta property="og:description" content="Explore web projects, technical skills, and software development experience by Buhawie Santos." />
<meta property="og:url" content="https://buhawiesit.vercel.app/" />
```