// Central content for the KodeVeil landing page (Deep Blue + Pure White Theme).
import {
  Palette, Layout, Briefcase, Gauge, RefreshCw, Search, Wrench,
  Smartphone, MonitorSmartphone, LayoutDashboard, Rocket, Zap, Lock,
  MessageSquare, Code, Target, ShieldCheck, CheckCircle2, Cpu, Globe,
  Headphones, Sparkles, Layers, Shield, Award, Users, FileCheck, Layers3
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Who We Are", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Why Us", id: "why-us" },
  { label: "Process", id: "process" },
  { label: "Pricing", id: "pricing" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export const WHO_WE_ARE = {
  subtitle: "WHO WE ARE",
  title: "Engineering Digital Excellence for Ambitious Brands",
  story: "KodeVeil was founded with a singular mission: to eliminate slow, generic, template-driven websites that hold businesses back. We believe your digital presence should be as refined, capable, and ambitious as your real-world business.",
  mission: "We combine modern frontend architecture, sub-second web speed, custom UI/UX design, and conversion strategy to craft digital experiences that build trust and generate high-value inbound leads.",
  points: [
    { title: "Bespoke Engineering", desc: "No generic templates or bloated builders. Every line of code is handcrafted for speed, security, and scalability." },
    { title: "Conversion First", desc: "Strategic user experience flows engineered specifically to turn site visitors into paying clients." },
    { title: "Sub-Second Performance", desc: "Optimized static & dynamic asset delivery targeting 95+ Google Lighthouse speed scores." },
    { title: "Complete Transparency", desc: "Fixed pricing, clear deliverables, fast timelines, and 100% full ownership of your digital assets." },
  ],
  stats: [
    { value: "50+", label: "Delivered Websites" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "< 1s", label: "Avg Page Speed" },
  ]
};

export const SERVICES = [
  { icon: Palette, title: "Portfolio Websites", desc: "Editorial, gallery-led experiences that showcase your craftsmanship and turn browsers into high-value inbound leads." },
  { icon: Briefcase, title: "Business Websites", desc: "Credible, high-end digital homes that position your company as the undisputed leader in your industry." },
  { icon: MonitorSmartphone, title: "Landing Pages", desc: "Performance-driven landing pages designed around a single, focused call-to-action for maximum conversion ROI." },
  { icon: Layout, title: "UI/UX Design", desc: "Pixel-perfect, brand-aligned interfaces engineered for intuitive navigation and aesthetic luxury." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Transform outdated, slow websites into modern, hyper-fast, high-converting digital platforms." },
  { icon: Search, title: "SEO Optimization", desc: "Semantic HTML5 markup, schema data, and search-optimized structure so Google ranks your business high." },
  { icon: Wrench, title: "Website Maintenance", desc: "Continuous security updates, high-speed CDN hosting, uptime monitoring, and priority technical support." },
];

export const PORTFOLIO = [
  {
    name: "Oud Arábia — Luxury Perfumes",
    category: "Luxury E-Commerce Website",
    desc: "A luxury e-commerce experience for rare oud, attars, and Arabian perfumes crafted with timeless elegance.",
    url: "https://oudperfumes.vercel.app/",
    image: "/portfolio/oud-arabia.jpg",
    accent: "#1D4ED8",
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
    name: "Powerhouse Gym",
    category: "Fitness & Luxury Club Website",
    desc: "Premier 24/7 luxury fitness club website with VIP trial bookings, BMI calculator, and high-energy branding.",
    url: "https://powerhousegym-1.netlify.app/",
    image: "/portfolio/powerhouse-gym.jpg",
    accent: "#2563EB",
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
    name: "The Urban Café",
    category: "Restaurant & Café Website",
    desc: "Premium Indian café website serving artisanal coffee, gourmet food, and a vibrant dining experience.",
    url: "https://urbancafe-1.netlify.app/",
    image: "/portfolio/urban-cafe.jpg",
    accent: "#1E3A8A",
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
    accent: "#2563EB",
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
  {
    name: "Faiz Dental Clinic",
    category: "Healthcare Website",
    desc: "Modern dental clinic website designed to build patient trust and drive appointment bookings.",
    url: "https://faizdentalclinic.netlify.app/",
    image: "/portfolio/faiz-dental.jpg",
    accent: "#2563EB",
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
    accent: "#1E40AF",
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
    accent: "#1D4ED8",
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
    accent: "#2563EB",
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
    accent: "#1E3A8A",
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
    accent: "#2563EB",
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
    name: "Luxe Interiors Design",
    category: "Interior Design Website",
    desc: "Luxury interior design company website with an elegant, editorial aesthetic.",
    url: "https://luxeinteriorsdesign.netlify.app/",
    image: "/portfolio/luxe-interiors.jpg",
    accent: "#1D4ED8",
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
];

export const REASONS = [
  { icon: Zap, title: "Fast Performance", desc: "Sub-second load times built with modern static & dynamic web rendering." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect viewports meticulously tuned for every smartphone & display." },
  { icon: Search, title: "SEO Optimized", desc: "Clean semantic markup and structured schema data to dominate Google rankings." },
  { icon: Palette, title: "Modern UI", desc: "Distinctive, high-end aesthetic interfaces that elevate your brand above competitors." },
  { icon: Lock, title: "Secure Development", desc: "Bank-grade SSL encryption and secure modern best practices." },
  { icon: Layers, title: "Easy Scalability", desc: "Modular, component-based code architecture built to grow with your enterprise." },
  { icon: Headphones, title: "Reliable Support", desc: "Direct access to lead engineers for continuous updates and maintenance." },
  { icon: Code, title: "Clean Code", desc: "Production-grade, clean, maintainable React & Next.js code bases." },
];

export const PROCESS = [
  { step: "01", title: "Discover", desc: "We align on your business goals, target audience, and key conversion metrics." },
  { step: "02", title: "Plan", desc: "We map out user flows, page architecture, content strategy, and technical scope." },
  { step: "03", title: "Design", desc: "We design a high-end, brand-tailored prototype before writing a single line of code." },
  { step: "04", title: "Develop", desc: "We build fast, clean, component-driven code using modern React & Next.js frameworks." },
  { step: "05", title: "Launch", desc: "We deploy your project to high-speed CDN hosting with zero downtime." },
  { step: "06", title: "Support", desc: "We remain in your corner for ongoing security, performance tuning, and updates." },
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
      "Bespoke Mobile-First Responsive UI",
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
  { feature: "SEO & Speed Tuning", starter: "Standard SEO", business: "Advanced (95+ Score)" },
  { feature: "Delivery Timeline", starter: "3–5 Days", business: "7–10 Days" },
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
