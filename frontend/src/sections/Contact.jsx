import { useState, useCallback } from "react";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/data/content";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Your full name", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
  { name: "business", label: "Business Name", type: "text", placeholder: "Your company", required: false },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 00000 00000", required: false },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    const nameClean = form.name.replace(/<[^>]*>?/gm, "").trim();
    const emailClean = form.email.trim();
    const messageClean = form.message.replace(/<[^>]*>?/gm, "").trim();

    if (!nameClean || !emailClean || !messageClean) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailClean);
    if (!emailOk) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Thank you! Your message has been received.", {
        description: "We'll get back to you soon.",
        duration: 5000,
      });
      setForm({ name: "", email: "", business: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 400);
  };

  const quickActions = [
    { label: "Email", icon: Mail, href: `mailto:${CONTACT.email}`, testid: "contact-email-btn" },
    { label: "Call", icon: Phone, href: `tel:${CONTACT.phoneRaw}`, testid: "contact-call-btn" },
    { label: "WhatsApp", icon: MessageCircle, href: CONTACT.whatsapp, external: true, testid: "contact-whatsapp-btn" },
  ];

  return (
    <section id="contact" className="relative bg-[#F8FAFC] py-20 sm:py-28 border-t border-gray-200/80">
      {/* Subtle radial gradient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="container-x relative">

        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Get In Touch</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#111827] sm:text-5xl">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Tell us about your project. We usually reply within one business day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact info */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Company</p>
                <p className="mt-1 font-display text-2xl font-bold text-[#111827]">{CONTACT.company}</p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    aria-label={`Send email to ${CONTACT.email}`}
                    className="flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-600"
                    data-testid="contact-email-link"
                  >
                    <Mail className="h-5 w-5 text-blue-600" aria-hidden="true" /> {CONTACT.email}
                  </a>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    aria-label={`Call phone number ${CONTACT.phone}`}
                    className="flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-600"
                    data-testid="contact-phone-link"
                  >
                    <Phone className="h-5 w-5 text-blue-600" aria-hidden="true" /> {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {quickActions.map((a) => {
                  const Icon = a.icon;
                  return (
                    <a
                      key={a.label}
                      href={a.href}
                      data-testid={a.testid}
                      aria-label={`Contact via ${a.label}`}
                      {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 py-4 text-xs font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                      {a.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm" data-testid="contact-form" noValidate aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                {FIELDS.map((f) => (
                  <div key={f.name} className={f.name === "message" ? "sm:col-span-2" : ""}>
                    <label htmlFor={f.name} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-600">
                      {f.label}{f.required && <span className="text-blue-600" aria-hidden="true"> *</span>}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      aria-required={f.required}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      data-testid={`contact-input-${f.name}`}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-gray-400 outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Message<span className="text-blue-600" aria-hidden="true"> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals..."
                    data-testid="contact-input-message"
                    className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-gray-400 outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                className="btn-primary mt-6 w-full group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {submitted ? (
                    <motion.span key="done" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Message Received
                    </motion.span>
                  ) : (
                    <motion.span key="send" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 flex items-center gap-3 overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                    data-testid="contact-success"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                    Thank you! Your message has been received. We'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

