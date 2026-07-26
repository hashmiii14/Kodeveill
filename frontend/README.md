# Kodeveill — Premium Website Design Agency (Landing Page)

A premium, frontend-only, dark-themed marketing landing page for **Kodeveill**.
No backend, no database, no authentication — 100% static and Netlify-ready.

## Tech
- React + Tailwind CSS
- framer-motion (scroll reveals, micro-interactions, kinetic hero)
- lenis (smooth momentum scrolling)
- sonner (toast notifications)

## Sections
Sticky navbar · Hero (masked line reveal + laptop mockup + floating UI) · Trust counters + marquee ·
Services (10) · Why Choose Us (numbered manifesto) · Portfolio (6 live projects) · Process timeline ·
Testimonials · FAQ accordion · CTA banner · Contact (simulated form + email/call/WhatsApp) · Footer.

## Notes
- The contact form is a **simulation only** — it prevents page reload and shows a success message. No email is sent.
- Replace the logo/preview placeholders in `src/assets/` as needed.

## Develop
```bash
yarn install
yarn start
```

## Build & Deploy (Netlify)
```bash
yarn build      # outputs to /build
```
Drag-and-drop the `build/` folder into Netlify, or connect the repo (config in `netlify.toml`).
