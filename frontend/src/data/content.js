// Central content for the KodeVeil landing page (frontend-only, no backend).
import {
  Palette, Layout, Briefcase, Gauge, RefreshCw, Search, Wrench,
  Smartphone, MonitorSmartphone, LayoutDashboard, Rocket, Zap, Lock,
  MessageSquare, Code, Target, ShieldCheck, CheckCircle2, Cpu, Globe,
  Headphones, Sparkles, Layers, Shield
} from "lucide-react";


export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Websites Delivered", note: "Handcrafted Worldwide" },
  { value: 98, suffix: "%", label: "Client Satisfaction", note: "5-Star Feedback" },
  { value: 24, suffix: "h", label: "Average Response", note: "Instant Support" },
  { value: 5.0, suffix: "★", label: "Client Rating", note: "Google & Direct Reviews" },
];

export const SERVICES = [
  { icon: Layout, title: "Custom Website Design", desc: "Pixel-perfect, brand-aligned interfaces engineered to convert browsers into high-value paying clients." },
  { icon: Briefcase, title: "Corporate & Business Websites", desc: "Credible, high-end digital homes that position your company as the undisputed leader in your industry." },
  { icon: MonitorSmartphone, title: "High-Converting Landing Pages", desc: "Performance-driven landing pages designed around a single, focused call-to-action for maximum ROI." },
  { icon: Palette, title: "Portfolio Websites", desc: "Editorial, gallery-led experiences that showcase your craftsmanship and turn visitors into inbound leads." },
  { icon: LayoutDashboard, title: "Custom Dashboards & Apps", desc: "Clean, data-rich web applications that make complex business workflows effortless to operate." },
  { icon: RefreshCw, title: "Complete Website Redesign", desc: "Transform slow, outdated websites into modern, hyper-fast, conversion-focused digital platforms." },
  { icon: Smartphone, title: "Fluid Mobile Experience", desc: "Flawless viewports engineered to look breathtaking across 4K monitors, laptops, and mobile screens." },
  { icon: Gauge, title: "Speed & Performance Engineering", desc: "Sub-second load speeds and 95+ Lighthouse scores to maximize rankings and conversion retention." },
  { icon: Search, title: "SEO-First Architecture", desc: "Semantic HTML5, schema markups, and search-optimized structures so Google ranks you on page 1." },
  { icon: Wrench, title: "1-Year Priority Maintenance", desc: "Continuous security updates, uptime monitoring, and dedicated technical support after launch." },
];

export const REASONS = [
  { icon: Zap, title: "⚡ Lightning Fast Speed", desc: "Sub-second load times built with modern static & dynamic web rendering." },
  { icon: Smartphone, title: "📱 Fully Responsive UI", desc: "Pixel-perfect viewports meticulously tuned for every smartphone & display." },
  { icon: Search, title: "🔍 Search Engine Ready", desc: "Clean semantic markup and structured schema data to dominate Google rankings." },
  { icon: Palette, title: "🎨 Modern Bespoke UI", desc: "Distinctive, high-end aesthetic interfaces that elevate your brand above competitors." },
  { icon: LayoutDashboard, title: "🛠 Effortless Management", desc: "Intuitive content structures and admin options designed for easy self-updates." },
  { icon: Rocket, title: "🚀 High Conversion Focus", desc: "Strategic UX flows and clear CTAs engineered specifically to generate leads." },
];

export const TECH_STACK = [
  { name: "React 19", category: "Frontend Core", desc: "Lightning fast UI component framework" },
  { name: "Next.js", category: "Fullstack / SSR", desc: "Production grade React framework for SEO" },
  { name: "Tailwind CSS", category: "Styling Engine", desc: "Utility-first styling for pixel precision" },
  { name: "Framer Motion", category: "Animations", desc: "Fluid 60fps micro-interactions" },
  { name: "Node.js & Express", category: "Backend APIs", desc: "Scalable server architectures" },
  { name: "TypeScript", category: "Type Safety", desc: "Robust, bug-free codebase" },
  { name: "Supabase & Firebase", category: "Database & Auth", desc: "Realtime data and secure user logins" },
  { name: "MongoDB", category: "NoSQL Data", desc: "Flexible document database storage" },
];

export const PORTFOLIO = [
  {
    name: "Oud Arábia — Luxury Perfumes",
    category: "Luxury E-Commerce Website",
    desc: "A luxury e-commerce experience for rare oud, attars, and Arabian perfumes crafted with timeless elegance.",
    url: "https://oudperfumes.vercel.app/",
    image: "/portfolio/oud-arabia.jpg",
    accent: "#D4AF37",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "E-Commerce"],
    caseStudy: {
      summary: "A high-end luxury fragrance maison needed an opulent digital storefront to showcase rare oud, attars, and limited reserve collections across India & the Gulf region.",
      challenge: "Capturing the rich heritage and exclusivity of artisanal Arabian perfumes in an immersive, high-converting digital experience.",
      solution: "Designed and built a sleek, dark-mode luxury e-commerce platform with dynamic collection showcases, multi-currency support, curated product galleries, and seamless cart management.",
      results: [
        { value: "0.7s", label: "Fast Page Load" },
        { value: "100%", label: "Responsive UI" },
        { value: "Multi-Currency", label: "INR & GCC Support" },
      ],
    },
  },
  {
    name: "Faiz Dental Clinic",
    category: "Healthcare Website",
    desc: "Modern dental clinic website designed to build patient trust and drive appointment bookings.",
    url: "https://faizdentalclinic.netlify.app/",
    image: "/portfolio/faiz-dental.jpg",
    accent: "#06B6D4",
    tags: ["React", "Tailwind CSS", "SEO", "Healthcare"],
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
    tags: ["React", "Tailwind CSS", "Smooth UX"],
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
    tags: ["React", "Education UI", "Lead Gen"],
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
    tags: ["React", "Booking Engine", "Mobile First"],
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
    tags: ["Corporate UI", "React", "Manufacturing"],
    caseStudy: {
      summary: "Developed a responsive corporate website for VYU Industries to strengthen its online presence and showcase its manufacturing capabilities.",
      challenge: "The company needed a professional digital platform to present its products, services, and brand credibility while making it easy for potential clients to connect.",
      solution: "Designed and developed a clean, responsive website with a modern UI, structured product sections, company information, and clear contact options for improved user experience.",
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
    tags: ["React", "Dashboard UI", "Complex Data"],
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
    name: "Powerhouse Gym",
    category: "Fitness & Luxury Club Website",
    desc: "Premier 24/7 luxury fitness club website with VIP trial bookings, BMI calculator, and high-energy branding.",
    url: "https://powerhousegym-1.netlify.app/",
    image: "/portfolio/powerhouse-gym.jpg",
    accent: "#F97316",
    tags: ["Dark Mode UI", "React", "Fitness"],
    caseStudy: {
      summary: "A premier 24/7 luxury fitness ecosystem needed a bold, high-converting digital platform to capture VIP trial leads and drive memberships.",
      challenge: "Standing out in a competitive luxury fitness market while streamlining membership signups and VIP trial claims.",
      solution: "A high-impact, dark-mode luxury fitness web experience equipped with clear CTAs, BMI calculator, trainer profiles, and 24/7 keycard access highlighting.",
      results: [
        { value: "+75%", label: "VIP trial signups" },
        { value: "0.8s", label: "Page speed" },
        { value: "100%", label: "Mobile optimized" },
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
    tags: ["Editorial UI", "React", "Luxury"],
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
  {
    name: "The Urban Café",
    category: "Restaurant & Café Website",
    desc: "Premium Indian café website serving artisanal coffee, gourmet food, and a vibrant dining experience.",
    url: "https://urbancafe-1.netlify.app/",
    image: "/portfolio/urban-cafe.jpg",
    accent: "#D97706",
    tags: ["Hospitality", "React", "Menu Showcase"],
    caseStudy: {
      summary: "A premium café needed an online presence to showcase their artisanal coffee, gourmet menu, and cozy atmosphere in Connaught Place.",
      challenge: "Differentiating in a competitive dining market and driving foot traffic and table reservations online.",
      solution: "A mouth-watering, highly responsive website featuring dynamic menu showcases, rich visual aesthetics, ambiance highlights, and seamless contact options.",
      results: [
        { value: "+85%", label: "Table Reservations" },
        { value: "0.8s", label: "Page Load Time" },
        { value: "100%", label: "Mobile Responsive" },
      ],
    },
  },
  {
    name: "Jamia Hamdard Memory Archive",
    category: "Digital Archive & Scrapbook",
    desc: "A handcrafted digital scrapbook documenting college life, squad memories, and journey at Jamia Hamdard.",
    url: "https://jamiahamdardmemories.vercel.app/",
    image: "/portfolio/jamia-hamdard.jpg",
    accent: "#10B981",
    tags: ["Next.js", "Media Vault", "Archive UI"],
    caseStudy: {
      summary: "A digital scrapbook and archive built to preserve college memories, media galleries, squad milestones, and student stories for Jamia Hamdard B.Tech CSE.",
      challenge: "Creating an engaging, timeless digital platform to archive student memories, photos, and interactive memory walls.",
      solution: "A modern Next.js website with smooth dark mode aesthetics, interactive media vault, quote wall, and student journey timelines.",
      results: [
        { value: "1,200+", label: "Chai Memories" },
        { value: "0.7s", label: "Page Speed" },
        { value: "100%", label: "Interactive Design" },
      ],
    },
  },
];

export const PROCESS = [
  { step: "01", title: "Discovery & Strategy", desc: "We align on your business goals, target audience, and key conversion metrics." },
  { step: "02", title: "UI/UX Design", desc: "We design a high-end, brand-tailored prototype before writing a single line of code." },
  { step: "03", title: "Development", desc: "We build fast, clean, component-driven code using modern React & Next.js frameworks." },
  { step: "04", title: "Testing & Speed Tuning", desc: "We stress-test across devices, tune 95+ Lighthouse speed, and optimize SEO." },
  { step: "05", title: "Launch & Support", desc: "We deploy your project to high-speed CDN hosting and remain in your corner for ongoing support." },
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter Website",
    price: "₹9,999",
    badge: "Essential",
    isPopular: false,
    desc: "Ideal for startups, portfolios, freelancers, and growing small businesses.",
    features: [
      "Up to 5 Custom Pages",
      "Free .com Domain & Hosting (1 Year)",
      "Bespoke Mobile-First Responsive Design",
      "Contact Form & WhatsApp Lead System",
      "On-Page SEO Optimization & Meta Setup",
      "Fast Delivery (3–5 Days)",
      "1 Month Free Support & Maintenance",
    ],
    notIncluded: ["E-Commerce Payment Gateway", "Custom Admin Dashboard"],
    buttonText: "Get Started Now",
    whatsappLink: "https://wa.me/918595018458?text=Hi%2C%20I%27m%20interested%20in%20the%20Starter%20Website%20%28%E2%82%B99%2C999%29%20plan.%20Please%20share%20the%20next%20steps.",
  },
  {
    id: "business",
    name: "Business Website",
    price: "₹24,999",
    badge: "Most Popular",
    isPopular: true,
    desc: "Complete enterprise solution for established businesses & e-commerce brands.",
    features: [
      "Up to 10+ Pages / E-Commerce Store",
      "Free Premium Domain & High-Speed Hosting (1 Year)",
      "Custom Dynamic UI & Micro-Animations",
      "Payment Gateway & Admin CMS Dashboard",
      "Advanced Technical SEO & 95+ Performance Score",
      "WhatsApp Business CRM & Lead Automation",
      "1 Year Priority Maintenance & VIP Support",
    ],
    renewalNote: "Annual Renewal: ₹2,499/year (Domain + Cloud Hosting + Backups)",
    buttonText: "Choose Business Plan",
    whatsappLink: "https://wa.me/918595018458?text=Hi%2C%20I%27m%20interested%20in%20the%20Business%20Website%20%28%E2%82%B924%2C999%29%20plan.%20Please%20share%20the%20next%20steps.",
  },
];

export const PRICING_COMPARISON = [
  { feature: "Custom Pages", starter: "Up to 5", business: "10+ / Unlimited" },
  { feature: "Domain & Hosting (1 Year)", starter: true, business: true },
  { feature: "Custom Admin CMS / Dashboard", starter: false, business: true },
  { feature: "Payment Gateway Integration", starter: false, business: true },
  { feature: "Maintenance & Support", starter: "1 Month", business: "1 Year Priority" },
  { feature: "SEO & Speed Tuning", starter: "Standard SEO", business: "Advanced 95+ Score" },
  { feature: "Delivery Timeline", starter: "3–5 Days", business: "7–10 Days" },
];

export const WHAT_YOU_GET = [
  { icon: Palette, title: "Custom UI/UX Design", desc: "Unique, handcrafted design tailored specifically to your brand identity." },
  { icon: Smartphone, title: "100% Mobile Responsive", desc: "Tested across mobile, tablet, and high-res desktop screens." },
  { icon: Search, title: "SEO-First Structure", desc: "Built with semantic tags and meta schemas so Google indexes you fast." },
  { icon: Gauge, title: "Sub-Second Fast Load", desc: "95+ Lighthouse performance score for higher retention and conversions." },
  { icon: LayoutDashboard, title: "Easy Admin Dashboard", desc: "Manage services, blogs, orders, or leads with zero coding knowledge." },
  { icon: MessageSquare, title: "WhatsApp Lead Integration", desc: "Direct 1-tap customer chat triggers that increase sales inquiries." },
  { icon: Lock, title: "SSL Security & HTTPS", desc: "Bank-grade encryption protecting your site data and visitor trust." },
  { icon: ShieldCheck, title: "Google Search Console Setup", desc: "Full indexing submission and analytics tracking built right in." },
  { icon: Headphones, title: "Dedicated After-Launch Support", desc: "Direct access to our lead engineers whenever you need updates." },
  { icon: CheckCircle2, title: "100% Ownership & Zero Lock-in", desc: "You own full rights to your domain, assets, code, and hosting." },
];

export const CONTACT = {
  company: "KodeVeil",
  email: "contact.kodeveil@gmail.com",
  phone: "+91 85950 18458",
  phoneRaw: "+918595018458",
  whatsapp: "https://wa.me/918595018458",
};

export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "GitHub", href: "https://github.com/hashmiii14/Kodeveill", icon: "github" },
];

export const FAQS = [
  {
    q: "Why are your plans priced at ₹9,999 and ₹24,999?",
    a: "Unlike generic agencies that hand you slow, bloated templates, KodeVeil builds bespoke, high-converting websites optimized for speed (95+ score), custom UI animations, mobile responsiveness, and SEO. Our pricing includes domain, hosting, WhatsApp integration, and dedicated post-launch support."
  },
  {
    q: "How long does it take to deliver a website?",
    a: "Our Starter Website (₹9,999) is delivered within 3–5 business days. Our Business Website & E-Commerce plan (₹24,999) takes approximately 7–10 business days."
  },
  {
    q: "Are domain and hosting included?",
    a: "Yes! Both plans come with 1 year of free .com domain registration and high-speed SSL cloud hosting."
  },
  {
    q: "Can I update content on my website easily?",
    a: "Absolutely. Our Business plan includes an intuitive CMS/Admin panel so you can add products, blogs, and images easily. For Starter plans, we handle updates for you during your support period."
  },
  {
    q: "What payment structure do you follow?",
    a: "We work on a standard 50% milestone deposit upfront to initiate strategy & design, with the remaining 50% paid upon final approval before live deployment."
  },
  {
    q: "Will my website be search engine optimized (SEO)?",
    a: "Yes, every website we engineer follows strict SEO standards including fast page load speeds, clean HTML5 semantics, meta tags, OpenGraph data, and Google Search Console indexing."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Adil Zafar",
    company: "Faiz Dental Clinic",
    initials: "AZ",
    quote: "KodeVeil delivered a genuinely professional design and had it live faster than I expected. Communication was effortless throughout — they understood exactly what my clinic needed. Highly recommended.",
    rating: 5
  },
  {
    name: "Mohd Saad",
    company: "Unlimited Car Rental",
    initials: "MS",
    quote: "Our online rental bookings jumped by 60% within weeks of launch. The mobile experience is buttery smooth and clients constantly compliment the layout.",
    rating: 5
  },
  {
    name: "Syed Rehan",
    company: "VYU Industries",
    initials: "SR",
    quote: "The corporate website transformed how international buyers perceive our manufacturing capabilities. Excellent design quality and top-notch speed.",
    rating: 5
  }
];
