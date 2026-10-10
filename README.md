# Saravanan V — Developer Portfolio

A responsive, performance-focused personal portfolio built with React, TypeScript, Vite and Tailwind CSS. It highlights work in **Data Engineering & Analytics**, **Python & SQL**, **Power BI**, **Generative AI / LLM workflows** and **Cloud Automation**.

All content is based on verified credentials and real project evidence.

---

## Table of Contents

- [Features](#features)
- [Projects Showcased](#projects-showcased)
- [Tech Stack](#tech-stack)
- [Routes](#routes)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Security & Privacy](#security--privacy)

---

## Features

- **Dark-first UI** with a theme toggle that respects system preference and persists in `localStorage`
- **Filterable project catalog** with detail pages, screenshot lightbox and architecture diagram
- **Searchable certifications** catalog (16 certifications)
- **Contact form** with real-time validation and `mailto:` email drafting
- **Resume download** linked to `Saravanan_V_Resume.pdf`
- **Accessible animations** via Framer Motion, with reduced-motion support
- **Custom 404 page** with links back to Home and Projects

---

## Projects Showcased

| Project | Highlights |
|---|---|
| **Wholesale Ledger** (featured) | Decoupled distribution and ledger system. React + Vite, FastAPI, PostgreSQL, JWT auth, atomic (ACID) order transactions. Includes 3 screenshots and an interactive architecture diagram. |
| **Customer Churn Prediction — Telecom** | End-to-end ML pipeline using Scikit-learn (Logistic Regression, Random Forest) on 7,043 customers. 0.842 ROC-AUC, 78.3% recall, SQL KPI queries and Power BI dashboards. |
| **Secure Data Wiping System** | Capstone data sanitization tool with 3-pass and 7-pass random overwrites, system-directory safety guard (`is_path_allowed`) and ReportLab PDF audit certificates. |

---

## Tech Stack

| Area | Technology |
|---|---|
| Framework | React 18 + TypeScript (strict mode) |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3 + PostCSS |
| Routing | React Router DOM v6 (scroll-to-top on navigation) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter, JetBrains Mono |

---

## Routes

| Path | Description |
|---|---|
| `/` | Home: hero, bio, skills, featured projects, experience, education, contact |
| `/about` | Biography, focus areas, academic scores, languages |
| `/projects` | Project catalog filtered by All, Full Stack, Data Analytics, Python & Security |
| `/projects/:slug` | Project detail: architecture, screenshot lightbox, roadmap |
| `/experience` | Internships: Generative AI (SystemTron) and Full Stack Web Development (ThinkBright EdTech LLP) |
| `/certifications` | Searchable, filterable list of 16 certifications (AWS Cloud, Linux, Python/Flask, UiPath RPA, Spring Boot) |
| `/contact` | Validated contact form |
| `/*` | 404 page |

---

## Project Structure

```text
project/
├── public/
│   ├── favicon.svg
│   ├── Saravanan_V_Resume.pdf
│   └── images/
│       ├── profile/                 # Portrait photos (1:1 and 3:4)
│       └── projects/
│           ├── wholesale-ledger/    # 3 screenshots
│           └── telco-churn/         # Power BI dashboard screenshots
├── src/
│   ├── components/                  # Navbar, Footer, Hero, cards, LightboxModal, etc.
│   ├── context/
│   │   └── ThemeContext.tsx         # Light/dark theme persistence
│   ├── data/                        # Single source of truth for all content
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── education.ts
│   │   └── certifications.ts
│   ├── pages/                       # Home, About, Projects, ProjectDetails,
│   │                                # Experience, Certifications, Contact, NotFound
│   ├── App.tsx                      # Router configuration
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Tailwind directives, scrollbar styles
├── index.html                       # SEO meta tags, Open Graph, fonts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## Getting Started

**Prerequisite:** Node.js and npm installed.

```powershell
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Type-check and build for production (output in dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Customization Guide

All content lives in `src/data/`. Edit these files and the changes appear across the site.

### Personal info and contact details
Edit `src/data/profile.ts` (`name`, `headline`, `location`, `email`, `phone`, `linkedin`, `github`). Changes propagate to the Hero, Navbar, About page, Contact section and Footer.

### Skills and focus areas
- Skills: `src/data/skills.ts`
- Focus-area badges: `profileData.focusAreas` in `src/data/profile.ts`

### Projects
Edit `src/data/projects.ts`. Each project supports: `id`, `slug`, `title`, `category`, `filterCategory`, `shortDescription`, `fullDescription`, `problemStatement`, `goals`, `status`, `technologies`, `features`, `screenshots`, `metrics` and `futureImprovements`.

- Updates flow automatically to `/projects`, the Home featured section and `/projects/:slug`.
- Add `githubUrl` or `liveDemoUrl` when available. Empty strings hide the buttons.

### Certifications
Edit `src/data/certifications.ts`. Each entry takes `title`, `issuer`, `date`, `category` and optional `details`. Set `featuredHome: true` to also show it on the homepage.

### Resume PDF
1. Place the file at `public/Saravanan_V_Resume.pdf`.
2. In `src/data/profile.ts`, confirm `hasResumePdf: true` and `resumeUrl: "/Saravanan_V_Resume.pdf"`.

The Download Resume buttons in the Navbar and Hero use this file.

### Project screenshots
1. Save PNG or WEBP images to `public/images/projects/<project-slug>/`.
2. Add them to the project's `screenshots` array in `src/data/projects.ts` with a `caption` and `alt` text.

Screenshots open in the lightbox on the project detail page.

### Contact form delivery
The form currently validates input and opens a pre-filled `mailto:` draft to `saravananv0004@gmail.com`. To send email automatically (EmailJS, Resend, Formspree, Web3Forms, etc.):

1. Create an account with the provider and get your API key or endpoint.
2. In `src/components/ContactSection.tsx`, replace the `mailto:` redirect in `handleSubmit` with a `fetch` call to the provider.
3. Keep private keys in a `.env` file and never commit them.

---

## Security & Privacy

- No passwords, JWT secrets, database connection strings or access tokens are stored in the codebase.
- `.gitignore` excludes `.env`, `node_modules` and `dist`.
