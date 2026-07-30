// Central content for the Kodeveill landing page (frontend-only, no backend).
import {
  Palette, Layout, Briefcase, Gauge, RefreshCw, Search, Wrench,
  Smartphone, MonitorSmartphone, LayoutDashboard, Rocket, Zap, Lock,
  MessageSquare, Code, Target, ShieldCheck
} from "lucide-react";


export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Process", id: "process" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];



export const STATS = [
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Responsive" },
  { value: 100, suffix: "%", label: "SEO Friendly" },
  { value: 99, suffix: "+", label: "Speed Score", note: "Fast Loading" },
];

export const SERVICES = [
  { icon: Layout, title: "Website Design", desc: "Pixel-perfect, brand-aligned interfaces designed to convert visitors into paying customers." },
  { icon: Briefcase, title: "Business Websites", desc: "Credible, professional websites that establish trust and win clients for your business." },
  { icon: MonitorSmartphone, title: "Landing Pages", desc: "High-converting landing pages engineered around a single, focused call to action." },
  { icon: Palette, title: "Portfolio Websites", desc: "Elegant portfolios that showcase your work and turn browsers into inbound leads." },
  { icon: LayoutDashboard, title: "ERP Dashboards", desc: "Clean, data-rich dashboards that make complex business operations effortless to manage." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Transform outdated websites into modern, fast, conversion-focused digital experiences." },
  { icon: Smartphone, title: "Responsive Design", desc: "Flawless experiences across desktop, tablet, and mobile — every pixel, every device." },
  { icon: Gauge, title: "Speed Optimization", desc: "Lightning-fast load times that improve rankings, retention, and conversion rates." },
  { icon: Search, title: "SEO Ready Websites", desc: "Semantic, search-optimized builds that help your business get found on Google." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing updates, security, and support that keep your site healthy and current." },
];

export const REASONS = [
  { title: "Premium UI", desc: "Interfaces crafted to the standard of the world's best product teams." },
  { title: "Responsive Design", desc: "Every layout adapts beautifully from 4K monitors to small phones." },
  { title: "Fast Delivery", desc: "Efficient process and clear milestones get you live, quickly." },
  { title: "SEO Optimized", desc: "Built to rank with clean markup and performance-first architecture." },
  { title: "Clean Code", desc: "Maintainable, component-based code that scales with your business." },
  { title: "Affordable Pricing", desc: "Agency-grade quality at pricing that respects your budget." },
  { title: "Performance Optimized", desc: "Optimized assets and lazy loading for near-instant page loads." },
  { title: "Secure Development", desc: "Modern best practices that keep your website and users safe." },
  { title: "Modern Technologies", desc: "The latest, proven web stack — never bloated, never outdated." },
  { title: "Lifetime Guidance", desc: "We stay in your corner long after launch, whenever you need us." },
];

export const PORTFOLIO = [
  {
    name: "Faiz Dental Clinic",
    category: "Healthcare Website",
    desc: "Modern dental clinic website designed to build patient trust and drive appointment bookings.",
    url: "https://faizdentalclinic.netlify.app/",
    image: "/portfolio/faiz-dental.jpg",
    accent: "#06B6D4",
    caseStudy: {
      summary: "The clinic needed an online presence that felt as trustworthy as their in-chair care. We built a conversion-focused site that turns local searches into booked appointments.",
      challenge: "No website, low online visibility, and enquiries scattered across phone calls.",
      solution: "A fast, SEO-friendly single-page site with clear services, doctor credibility, embedded maps and one-tap booking CTAs.",
      results: [
        { value: "2×", label: "Appointment enquiries" },
        { value: "0.9s", label: "Load time" },
        { value: "100%", label: "Mobile responsive" },
      ],
    },
  },
  {
    name: "Pearl Root Dental Clinic",
    category: "Healthcare Website",
    desc: "Premium dental clinic website with a refined, calming brand experience.",
    url: "https://pearlrootdentalclinic.netlify.app/",
    image: "/portfolio/pearl-root.jpg",
    accent: "#4F46E5",
    caseStudy: {
      summary: "A premium dental brand wanted a website that reassured nervous patients while positioning them as the area's high-end choice.",
      challenge: "Communicating premium care without feeling clinical or intimidating.",
      solution: "A calm, spacious layout with soft visuals, trust signals, and a frictionless booking journey.",
      results: [
        { value: "+55%", label: "Consultation requests" },
        { value: "98+", label: "Performance score" },
        { value: "1.1s", label: "Load time" },
      ],
    },
  },
  {
    name: "Vision Classes",
    category: "Education Website",
    desc: "Coaching institute website built to attract students and showcase results.",
    url: "https://visionclassess.netlify.app/",
    image: "/portfolio/vision-classes.jpg",
    accent: "#7C3AED",
    caseStudy: {
      summary: "A growing coaching institute needed a credible digital home to attract students and highlight their toppers and courses.",
      challenge: "Standing out in a crowded local coaching market.",
      solution: "A results-driven site featuring courses, faculty, student achievements and an easy enquiry flow.",
      results: [
        { value: "+70%", label: "Admission enquiries" },
        { value: "3", label: "Weeks to launch" },
        { value: "100%", label: "SEO ready" },
      ],
    },
  },
  {
    name: "Unlimited Car Rental",
    category: "Car Rental Website",
    desc: "Modern vehicle rental website with an intuitive, conversion-focused booking flow.",
    url: "https://unlimitedcarrental.netlify.app/",
    image: "/portfolio/unlimited-car-rental.jpg",
    accent: "#06B6D4",
    caseStudy: {
      summary: "A local rental business wanted an online booking experience that matched modern travel expectations.",
      challenge: "Manual, phone-only bookings limited growth and reach.",
      solution: "A sleek fleet showcase with self-drive/driver options and a clear, mobile-first booking flow.",
      results: [
        { value: "+60%", label: "Online bookings" },
        { value: "0.8s", label: "Load time" },
        { value: "100%", label: "Mobile first" },
      ],
    },
  },
  {
  name: "VYU Industries",
  category: "Industrial Manufacturing Website",
  desc: "A modern corporate website showcasing industrial products, company expertise, and a professional business presence.",
  url: "https://v-yu-industriespvt.netlify.app/",
  image: "/portfolio/V-YU-INDUSTRIES.png",
  accent: "#8B5E3C",
  caseStudy: {
    summary:
      "Developed a responsive corporate website for VYU Industries to strengthen its online presence and showcase its manufacturing capabilities.",
    challenge:
      "The company needed a professional digital platform to present its products, services, and brand credibility while making it easy for potential clients to connect.",
    solution:
      "Designed and developed a clean, responsive website with a modern UI, structured product sections, company information, and clear contact options for improved user experience.",
    results: [
      { value: "100%", label: "Responsive Design" },
      { value: "0.9s", label: "Fast Load Time" },
      { value: "+50%", label: "Better Online Presence" },
    ],
  },
},
  {
    name: "Orizer ERP",
    category: "ERP Software",
    desc: "Business ERP dashboard that turns complex operations into a clean, usable interface.",
    url: "https://orizer.netlify.app/",
    image: "/portfolio/orizer-erp.jpg",
    accent: "#4F46E5",
    caseStudy: {
      summary: "A decade-old ERP product needed a modern, intuitive interface that operators could actually enjoy using every day.",
      challenge: "Dense, complex workflows crammed into dated, hard-to-use screens.",
      solution: "A clean, data-rich dashboard with clear hierarchy, modern UI patterns and responsive layouts.",
      results: [
        { value: "-40%", label: "Training time" },
        { value: "10+", label: "Modules unified" },
        { value: "Daily", label: "Team usage" },
      ],
    },
  },
  {
    name: "Luxe Interiors Design",
    category: "Interior Design Website",
    desc: "Luxury interior design company website with an elegant, editorial aesthetic.",
    url: "https://luxeinteriorsdesign.netlify.app/",
    image: "/portfolio/luxe-interiors.jpg",
    accent: "#7C3AED",
    caseStudy: {
      summary: "A luxury interiors studio needed a website as refined as their work to attract high-value clients.",
      challenge: "Translating physical luxury into a digital-first impression.",
      solution: "An editorial, gallery-led experience with elegant typography and immersive project storytelling.",
      results: [
        { value: "+45%", label: "Premium leads" },
        { value: "97+", label: "Design polish" },
        { value: "100%", label: "Responsive" },
      ],
    },
  },
];

export const PROCESS = [
  { step: "01", title: "Requirement Discussion", desc: "We listen closely to understand your goals, audience, and vision." },
  { step: "02", title: "Planning", desc: "We map out structure, features, and strategy for maximum impact." },
  { step: "03", title: "UI Design", desc: "We craft a premium, on-brand design that reflects your business." },
  { step: "04", title: "Development", desc: "We build fast, responsive, clean code that performs everywhere." },
  { step: "05", title: "Testing", desc: "We test rigorously across devices, browsers, and real scenarios." },
  { step: "06", title: "Launch", desc: "We deploy your site and make sure it goes live flawlessly." },
];

export const TESTIMONIALS = [
  { name: "Dr. Adil Zafar", company: "Faiz Dental Clinic", initials: "AZ", quote: "Kodeveill delivered a genuinely professional design and had it live faster than I expected. Communication was effortless throughout — they understood exactly what my clinic needed. Highly recommended." },
  { name: "Anwarul Haque", company: "Orizer ERP", initials: "AH", quote: "They turned our complex requirements into an excellent, modern ERP interface. The responsive development and attention to detail were outstanding — truly professional work from start to finish." },
  { name: "Ritika Sharma", company: "Vision Classes", initials: "RS", quote: "The team understood exactly what we needed. Our coaching institute finally has a website that matches the quality of our teaching." },
];

export const FAQS = [
  { q: "How long does a website take?", a: "Most business websites and landing pages are delivered within 1–3 weeks, depending on scope and content readiness. We share a clear timeline before we begin so you always know what to expect." },
  { q: "Can you redesign websites?", a: "Absolutely. Website redesign is one of our core services. We modernize outdated sites into fast, responsive, conversion-focused experiences while preserving your brand identity." },
  { q: "Will my website be responsive?", a: "Every website we build is fully responsive and mobile-first. Your site will look and perform beautifully on desktops, tablets, and phones without exception." },
  { q: "Is SEO included?", a: "Yes. We build with clean, semantic markup, optimized performance, and SEO best practices so your website is ready to be discovered on search engines." },
  { q: "Do you provide support?", a: "We offer ongoing maintenance and lifetime guidance. Whether it's updates, fixes, or advice, we stay in your corner long after your website goes live." },
];

export const CONTACT = {
  company: "Kodeveill",
  email: "contact.kodeveil@gmail.com",
  phone: "+91 85950 18458",
  phoneRaw: "+918595018458",
  whatsapp: "https://wa.me/918595018458",
};


export const SOCIALS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "GitHub", href: "#", icon: "github" },
  { label: "Behance", href: "#", icon: "behance" },
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter Website",
    price: "₹1,999",
    badge: "Starter",
    isPopular: false,
    desc: "Perfect for portfolios, freelancers, and small businesses.",
    features: [
      "Up to 3 Pages",
      "Responsive Design",
      "Contact Form",
      "WhatsApp Button",
      "Basic SEO",
      "Fast Delivery (2–3 Days)",
      "One-Time Payment",
    ],
    notIncluded: ["Domain", "Hosting", "Maintenance"],
    buttonText: "Get Started",
    whatsappLink: "https://wa.me/918595018458?text=Hi%2C%20I%27m%20interested%20in%20the%20Starter%20Website%20%28%E2%82%B91%2C999%29%20plan.%20Please%20share%20the%20next%20steps.",
  },
  {
    id: "business",
    name: "Business Website",
    price: "₹5,999",
    badge: "Most Popular",
    isPopular: true,
    desc: "Everything you need to launch your business online.",
    features: [
      "Up to 5 Pages",
      "Free .com Domain (1 Year)",
      "Hosting Included (1 Year)",
      "Responsive Design",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO",
      "1 Year Maintenance Included",
    ],
    renewalNote: "Renewal: ₹999/year",
    buttonText: "Choose Plan",
    whatsappLink: "https://wa.me/918595018458?text=Hi%2C%20I%27m%20interested%20in%20the%20Business%20Website%20%28%E2%82%B95%2C999%29%20plan.%20Please%20share%20the%20next%20steps.",
  },
];

export const PRICING_COMPARISON = [
  { feature: "Pages", starter: "3", business: "5" },
  { feature: "Domain", starter: false, business: true },
  { feature: "Hosting", starter: false, business: true },
  { feature: "Maintenance", starter: false, business: "1 Year" },
  { feature: "SEO", starter: "Basic", business: "Basic" },
  { feature: "Delivery", starter: "2–3 Days", business: "5–7 Days" },
];

export const CUSTOM_QUOTE_WHATSAPP = "https://wa.me/918595018458?text=Hi%2C%20I%20need%20a%20custom%20website.%20I%27d%20like%20to%20discuss%20my%20project%20and%20get%20a%20quote.";

export const WHY_CHOOSE_ME = [
  { icon: Palette, title: "Modern UI Design", desc: "Pixel-perfect layouts crafted with high-end aesthetic precision." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless viewports optimized for desktop, tablet, and mobile devices." },
  { icon: Zap, title: "Fast Loading Performance", desc: "Optimized code & assets engineered for lightning speed." },
  { icon: Lock, title: "Secure SSL", desc: "Encrypted data protection and HTTPS configuration standard." },
  { icon: Search, title: "SEO Friendly", desc: "Clean semantic HTML structure to rank high on search engines." },
  { icon: MessageSquare, title: "WhatsApp Integration", desc: "Instant click-to-chat triggers for maximum customer leads." },
  { icon: Code, title: "Clean & Maintainable Code", desc: "Component-driven React architecture built to last." },
  { icon: Target, title: "Built for Business Growth", desc: "Conversion-first design elements engineered to turn visitors into buyers." },
];


