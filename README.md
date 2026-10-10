# Saravanan V — Professional Developer Portfolio

A modern, responsive, performance-optimized personal developer portfolio built from scratch with React, TypeScript, Vite, Tailwind CSS, React Router, Lucide Icons, and Framer Motion.

Designed specifically for technical recruiters, engineering leaders, and collaborators seeking talent across **Data Engineering & Analytics**, **Python & SQL Development**, **Power BI & Business Intelligence**, **Generative AI / LLM Workflows**, and **Cloud Automation**.

---

## 🚀 Live Capabilities & Features

- **Dark-First Modern UI**: Inspired by premier developer tools with persistent theme toggling (respecting system preferences and `localStorage`).
- **Showcase of Exactly Three Verified Projects**:
  1. **Wholesale Ledger** *(Featured)*: Decoupled distribution and ledger management system (React + Vite, FastAPI, PostgreSQL, JWT, ACID atomic order transactions) with 3 verified local screenshots and interactive architecture diagram.
  2. **Customer Churn Prediction — Telecom**: End-to-end ML classification pipeline (Scikit-learn Logistic Regression & Random Forest, 7,043 customers, 0.842 ROC-AUC, 78.3% recall, SQL KPI queries) with real Power BI dashboard reports.
  3. **Secure Data Wiping System**: Capstone data sanitization engine implementing 3-pass and 7-pass cryptographically random overwrites, system directory safety guards (`is_path_allowed`), and automated ReportLab PDF audit certificates.
- **Dedicated Route Hierarchy**:
  - `/` — Homepage with Hero, Bio, Skills, Featured Projects, Experience, Education, and Contact.
  - `/about` — Biography, core focus areas, academic scores, and language proficiencies.
  - `/projects` — Filterable project catalog (All, Full Stack, Data Analytics, Python & Security).
  - `/projects/:slug` — Dedicated project detail view with architecture breakdowns, interactive screenshot lightbox preview, and roadmap.
  - `/experience` — Internship timeline detailing Generative AI (SystemTron) and Full Stack Web Development (ThinkBright EdTech LLP).
  - `/certifications` — Filterable and searchable catalog of all 16 professional certifications (AWS Cloud, Linux, Python/Flask, UiPath RPA, Spring Boot).
  - `/contact` — Accessible contact channel with real-time input validation and mailto email drafting.
  - `/*` — Custom 404 page with quick navigation back to home or projects.
- **Zero Fabricated Content**: Strictly adheres to verified credentials, real project evidence, and honest development statuses.
- **Resume Integration**: Linked directly to `Saravanan_V_Resume.pdf` with graceful handling.

---

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with TypeScript (strict mode)
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS 3 with PostCSS and custom color palettes
- **Routing**: React Router DOM (v6) with automatic scroll-to-top on route navigation
- **Animations**: Framer Motion with reduced-motion accessibility support
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono

---

## 📂 Project Structure

```text
project/
├── public/
│   ├── favicon.svg                           # Custom SV monogram favicon
│   ├── Saravanan_V_Resume.pdf                # Verified candidate resume
│   └── images/
│       ├── profile/
│       │   ├── saravanan.jpg                 # Professional portrait (1:1 square crop)
│       │   └── saravanan-portrait.jpg        # Professional portrait (3:4 aspect)
│       └── projects/
│           ├── wholesale-ledger/             # 3 verified screenshots
│           │   ├── screenshot-1.png          # Products & Inventory Management
│           │   ├── screenshot-2.png          # Wholesale Ledger Dashboard
│           │   └── screenshot-3.png          # Secure Authentication Portal
│           └── telco-churn/                  # Verified Power BI dashboard screenshots
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                        # Fixed header, theme toggle, mobile menu, resume CTA
│   │   ├── Footer.tsx                        # Brand tagline, quick links, dynamic year, back-to-top
│   │   ├── Hero.tsx                          # Hero section with interactive data-pipeline visual
│   │   ├── SectionHeading.tsx                # Reusable section title and badge
│   │   ├── SkillCard.tsx                     # Categorized skill cards (no misleading percentage bars)
│   │   ├── ExperienceCard.tsx                # Internship timeline cards
│   │   ├── ProjectCard.tsx                   # Responsive card with featured styling
│   │   ├── CertificationCard.tsx             # Topic-badged credential cards
│   │   ├── ContactSection.tsx                # Two-column contact info and validated form
│   │   ├── LightboxModal.tsx                 # Full-screen accessible image zoom modal
│   │   └── WholesaleArchitectureDiagram.tsx  # 3-tier system architecture & atomic transaction diagram
│   ├── context/
│   │   └── ThemeContext.tsx                  # Light / Dark theme persistence via localStorage
│   ├── data/
│   │   ├── profile.ts                        # Centralized candidate info, contact channels, bio
│   │   ├── skills.ts                         # Grouped technical competencies
│   │   ├── experience.ts                     # SystemTron and ThinkBright internship details
│   │   ├── projects.ts                       # The 3 portfolio projects (single source of truth)
│   │   ├── education.ts                      # B.E. CSE (CGPA 8.3) and HSC (65%)
│   │   └── certifications.ts                 # 16 verified certifications
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetails.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx                               # Router configuration
│   ├── main.tsx                              # Application entry point
│   └── index.css                             # Tailwind directives and custom scrollbar
├── index.html                                # SEO meta tags, Open Graph, fonts
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 💻 Local Development Setup (Windows & PowerShell)

Open PowerShell in the project directory (`c:\Users\acer\Documents\project`):

### 1. Install Dependencies
```powershell
npm install
```

### 2. Start the Local Development Server
```powershell
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
To perform strict TypeScript verification and generate optimized production assets:
```powershell
npm run build
```
The bundled files will be written to the `dist/` directory.

### 4. Preview the Production Build Locally
```powershell
npm run preview
```

---

## ⚙ Customization & Maintenance Guide

### How to Update Personal Information & Contact Details
Edit `src/data/profile.ts`:
- Update `name`, `headline`, `location`, `email`, `phone`, `linkedin`, or `github`.
- The values will immediately propagate across the Hero, Navigation, About page, Contact section, and Footer.

### How to Update Skills & Focus Areas
- Edit `src/data/skills.ts` to add or categorize technical skills.
- Edit `profileData.focusAreas` in `src/data/profile.ts` to adjust the highlight badges.

### How to Update or Add Portfolio Projects
All project data is strictly centralized in `src/data/projects.ts`:
- Each project item includes `id`, `slug`, `title`, `category`, `filterCategory`, `shortDescription`, `fullDescription`, `problemStatement`, `goals`, `status`, `technologies`, `features`, `screenshots`, `metrics`, and roadmap items (`futureImprovements`).
- Adding, updating, or filtering projects in `projects.ts` automatically updates the Projects page (`/projects`), the Home page featured section, and the Project Detail route (`/projects/:slug`).
- To add a GitHub repository or Live Demo URL once deployed, populate `githubUrl` or `liveDemoUrl`. Empty strings automatically hide non-functional buttons.

### How to Add Certification Details
Edit `src/data/certifications.ts`:
- Add entries with `title`, `issuer`, `date`, `category`, and optional `details`.
- Set `featuredHome: true` if you would like it highlighted on the homepage in addition to the searchable `/certifications` catalog.

### How to Update the Resume PDF
1. Place your latest resume file into `public/Saravanan_V_Resume.pdf`.
2. In `src/data/profile.ts`, confirm `hasResumePdf: true` and `resumeUrl: "/Saravanan_V_Resume.pdf"`.
3. The "Download Resume" buttons in both the Navigation bar and Hero section will automatically download this file.

### How to Replace or Add Project Screenshots
1. Save high-resolution PNG or WEBP images into `public/images/projects/<project-slug>/`.
2. Reference the image path in `src/data/projects.ts` under the respective project's `screenshots` array with a descriptive `caption` and `alt` text.
3. Users clicking the screenshot on the project detail page will be able to inspect it in high resolution via the lightbox modal.

### How to Configure Contact Form Delivery (Email Service)
The contact form currently validates user inputs and generates a pre-formatted email draft via `mailto:` to `saravananv0004@gmail.com`.
If you wish to integrate an automated transactional email provider (such as EmailJS, Resend, Formspree, or Web3Forms):
1. Create an account with the provider and obtain your public API key or endpoint.
2. In `src/components/ContactSection.tsx`, replace the `mailto:` redirection in `handleSubmit` with your API fetch call (e.g. `await fetch("https://api.resend.com/emails", ...)`).
3. Always store private API keys securely in an environment variable (`.env`) and never commit secret keys to a public repository.

---

## 🔒 Security & Privacy Notice
- No passwords, JWT secrets, database connection strings, or personal access tokens are stored in the codebase.
- The `.gitignore` file excludes `.env`, `node_modules`, and local build artifacts (`dist`).
#   p o r t f o l i o  
 