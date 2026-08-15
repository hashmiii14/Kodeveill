import React, { lazy, Suspense } from "react";
import "@/App.css";

import { ThemeProvider } from "@/context/ThemeContext";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActions } from "@/components/FloatingActions";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Hero } from "@/sections/Hero";

// Lazy-load non-critical sections below the fold for minimal initial bundle size & sub-second FCP
const WhoWeAre = lazy(() => import("@/sections/WhoWeAre").then((m) => ({ default: m.WhoWeAre })));
const Services = lazy(() => import("@/sections/Services").then((m) => ({ default: m.Services })));
const Portfolio = lazy(() => import("@/sections/Portfolio").then((m) => ({ default: m.Portfolio })));
const WhyChooseUs = lazy(() => import("@/sections/WhyChooseUs").then((m) => ({ default: m.WhyChooseUs })));
const Process = lazy(() => import("@/sections/Process").then((m) => ({ default: m.Process })));
const Pricing = lazy(() => import("@/sections/Pricing").then((m) => ({ default: m.Pricing })));
const Testimonials = lazy(() => import("@/sections/Testimonials").then((m) => ({ default: m.Testimonials })));
const CTA = lazy(() => import("@/sections/CTA").then((m) => ({ default: m.CTA })));
const Contact = lazy(() => import("@/sections/Contact").then((m) => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import("@/sections/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy })));
const Footer = lazy(() => import("@/sections/Footer").then((m) => ({ default: m.Footer })));

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-700 dark:selection:bg-blue-500/30 dark:selection:text-white transition-colors duration-300">
        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:shadow-xl"
        >
          Skip to main content
        </a>

        <CursorGlow />
        <ScrollProgress />
        <Navbar />

        <main id="main-content" tabIndex="-1" className="w-full max-w-full overflow-x-hidden outline-none bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
          {/* 1. HERO (Eagerly loaded for immediate FCP) */}
          <Hero />

          {/* Lazy Loaded Sections below fold */}
          <Suspense fallback={<div className="min-h-[200px] w-full bg-slate-50 dark:bg-[#0B0F19]" />}>
            {/* 2. WHO WE ARE & SERVICES */}
            <WhoWeAre />
            <Services />

            {/* 3. WHY CHOOSE US, PROCESS & PRICING */}
            <WhyChooseUs />
            <Process />
            <Pricing />

            {/* 4. FEATURED PORTFOLIO */}
            <Portfolio />

            {/* 5. TESTIMONIALS, CTA, CONTACT & PRIVACY */}
            <Testimonials />
            <CTA />
            <Contact />
            <PrivacyPolicy />

            {/* FOOTER */}
            <Footer />
          </Suspense>
        </main>

        <FloatingActions />
        <Toaster position="bottom-right" richColors />
      </div>
    </ThemeProvider>
  );
}

export default App;

