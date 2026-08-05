import "@/App.css";

import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActions } from "@/components/FloatingActions";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

import { Hero } from "@/sections/Hero";
import { WhoWeAre } from "@/sections/WhoWeAre";
import { Services } from "@/sections/Services";
import { Portfolio } from "@/sections/Portfolio";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Process } from "@/sections/Process";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CTA } from "@/sections/CTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-900">
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

      <main id="main-content" tabIndex="-1" className="outline-none">
        {/* SECTION 1 — HERO (Deep Blue Gradient) */}
        <Hero />

        {/* SECTION 2 — WHO WE ARE (Pure White) */}
        <WhoWeAre />

        {/* SECTION 3 — SERVICES (Deep Blue) */}
        <Services />

        {/* SECTION 4 — FEATURED PORTFOLIO (Pure White) */}
        <Portfolio />

        {/* SECTION 5 — WHY CHOOSE KODEVEIL (Deep Blue) */}
        <WhyChooseUs />

        {/* SECTION 6 — OUR PROCESS (Pure White) */}
        <Process />

        {/* SECTION 7 — PRICING (Deep Blue: Starter ₹9,999 & Business ₹24,999) */}
        <Pricing />

        {/* SECTION 8 — TESTIMONIALS (Pure White) */}
        <Testimonials />

        {/* SECTION 9 — FINAL CTA & CONTACT (Deep Blue Gradient) */}
        <CTA />
        <Contact />
      </main>

      {/* FOOTER (Dark Deep Blue) */}
      <Footer />
      <FloatingActions />
      <Toaster position="bottom-right" richColors theme="dark" />
    </div>
  );
}

export default App;
