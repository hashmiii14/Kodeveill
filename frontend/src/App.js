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
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-900">
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

      <main id="main-content" tabIndex="-1" className="w-full max-w-full overflow-x-hidden outline-none">
        {/* 1. BLUE HERO */}
        <Hero />

        {/* 2. WHITE WHO WE ARE */}
        <WhoWeAre />

        {/* 3. BLUE SERVICES */}
        <Services />

        {/* 4. WHITE FEATURED PORTFOLIO (Displays ALL 11 projects in split layout) */}
        <Portfolio />

        {/* 5. BLUE WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 6. WHITE OUR PROCESS */}
        <Process />

        {/* 7. BLUE PRICING & COMPARISON (Starter ₹9,999 & Business ₹24,999) */}
        <Pricing />

        {/* 8. WHITE TESTIMONIALS */}
        <Testimonials />

        {/* 9. DEEP BLUE FINAL CTA & CONTACT */}
        <CTA />
        <Contact />
      </main>

      {/* DARK BLUE FOOTER */}
      <Footer />
      <FloatingActions />
      <Toaster position="bottom-right" richColors theme="dark" />
    </div>
  );
}

export default App;
