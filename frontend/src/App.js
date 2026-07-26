import "@/App.css";

import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActions } from "@/components/FloatingActions";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

import { Hero } from "@/sections/Hero";
import { Trust } from "@/sections/Trust";
import { Services } from "@/sections/Services";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Portfolio } from "@/sections/Portfolio";
import { Process } from "@/sections/Process";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { CTA } from "@/sections/CTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-white">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-xl focus:shadow-xl"
      >
        Skip to main content
      </a>

      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main id="main-content" tabIndex="-1" className="outline-none">
        <Hero />
        <Trust />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
      <Toaster position="bottom-right" richColors theme="dark" />
    </div>
  );
}

export default App;




