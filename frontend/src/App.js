import "@/App.css";

import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActions } from "@/components/FloatingActions";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

import { Hero } from "@/sections/Hero";
import { Portfolio } from "@/sections/Portfolio";
import { Trust } from "@/sections/Trust";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { StatsCounter } from "@/components/StatsCounter";
import { Services } from "@/sections/Services";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/sections/Process";
import { Pricing } from "@/sections/Pricing";
import { WhatYouGet } from "@/components/WhatYouGet";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { CTA } from "@/sections/CTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-900">
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
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Projects Shown Immediately After Hero */}
        <Portfolio />

        {/* 3. Trust & Why Choose Us */}
        <Trust />
        <WhyChooseUs />

        {/* 4. Animated Stats Counter */}
        <StatsCounter />

        {/* 5. Services & Interactive Tech Stack */}
        <Services />
        <TechStack />

        {/* 6. Process Timeline */}
        <Process />

        {/* 7. Redesigned Premium Pricing (₹9,999 & ₹24,999) */}
        <Pricing />

        {/* 8. What You Get Deliverables Breakdown */}
        <WhatYouGet />

        {/* 9. Client Testimonials */}
        <Testimonials />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Final Call To Action & Inquiry Form */}
        <CTA />
        <Contact />
      </main>

      {/* 12. Enhanced Footer */}
      <Footer />
      <FloatingActions />
      <Toaster position="bottom-right" richColors theme="dark" />
    </div>
  );
}

export default App;
