import React, { lazy, Suspense } from "react";
import "@/App.css";

import { ThemeProvider } from "@/context/ThemeContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActions } from "@/components/FloatingActions";
import { KodeveilBot } from "@/components/KodeveilBot";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Hero } from "@/sections/Hero";
import { SocialProof } from "@/sections/SocialProof";

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

import { Routes, Route } from "react-router-dom";

// Admin Panel lazy loaded
const AdminPanel = lazy(() => import("@/admin/AdminPanel"));

const LandingPage = () => (
  <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#f5f5f7] dark:bg-[#0D0E12] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-indigo-500/15 selection:text-indigo-900 dark:selection:bg-indigo-500/30 dark:selection:text-white transition-colors duration-300">
    {/* Accessibility Skip Link */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-xl focus:shadow-xl"
    >
      Skip to main content
    </a>

    {/* --- AMBIENT DARK MODE GLOW --- */}
    <div className="pointer-events-none fixed inset-0 z-0 hidden dark:block">
      <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-950/20 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-slate-900/20 blur-[150px]" />
    </div>

    <ScrollProgress />
    <Navbar />

    <main id="main-content" tabIndex="-1" className="w-full max-w-full overflow-x-hidden outline-none relative z-10 transition-colors duration-300">
      <Hero />
      <SocialProof />
      <Suspense fallback={<div className="min-h-[200px] w-full bg-[#f5f5f7] dark:bg-[#0D0E12]" />}>
        <WhoWeAre />
        <Services />
        <WhyChooseUs />
        <Process />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
        <PrivacyPolicy />
        <Footer />
      </Suspense>
    </main>

    <FloatingActions />
    <KodeveilBot />
    <Toaster position="bottom-right" richColors />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen bg-[#0D0E12]" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/*" element={<AdminPanel />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
