# Kodeveill Landing Page — PRD

## Problem Statement
Frontend-only premium landing page for Kodeveill, a web design agency.
No backend/DB/auth. Dark theme, glassmorphism, conversion-focused, Netlify-ready.
Tagline: "Websites That Turn Visitors Into Customers."

## Stack
React (CRA) + Tailwind + framer-motion + lenis + sonner. Backend intentionally unused.

## Personas
- Business owners seeking a premium, high-converting website.
- Agencies/founders evaluating Kodeveill's work and booking a consultation.

## Core Requirements (static)
Sticky navbar, hero (kinetic masked reveal + mockup), trust counters, 10 services,
why-choose-us (10 reasons), 6 portfolio projects (external live links, new tab),
6-step process, 3 testimonials, FAQ accordion, CTA banner, contact (simulated form +
email/call/WhatsApp), footer. SEO meta + OG + Twitter + JSON-LD + favicon.

## Implemented (2026-07-26)
- Full single-page site, all sections above.
- Lenis smooth scroll, cursor glow, scroll progress, back-to-top, loading screen.
- Animated counters, scroll reveals, marquee, floating UI.
- Contact form: frontend-only simulation with validation + success toast.
- SEO in public/index.html; netlify.toml + README for deployment.
- Tested via testing_agent: frontend 100% pass, no bugs.

## Backlog / Next
- P1: Real form delivery (EmailJS / Formspree — client-side only) if user wants actual emails.
- P2: Real portfolio preview screenshots replacing placeholders.
- P2: Blog/case-study section for SEO.

## Iteration 2 (2026-07-26) — Enhancements
- FIXED: portfolio images now real bundled screenshots (public/portfolio/*.jpg, 1200x800, lazy-loaded, hover zoom).
- Added per-project Case Studies (challenge/solution + 3 result metrics) in a dialog.
- Added floating WhatsApp + Call action buttons (right side, glass + pulse).
- Enlarged & auto-trimmed logo (navbar/footer) for clear visibility.
- Updated testimonials: Dr. Adil Zafar (Faiz Dental), Anwarul Haque (Orizer ERP), Ritika Sharma (Vision Classes).
- UI polish: gradient glows behind sections, refined portfolio cards/shadows.
- Contact form: kept as frontend-only SIMULATION (user did not provide Formspree/EmailJS creds).
- Tested via testing_agent iteration_2: frontend 100% pass.
