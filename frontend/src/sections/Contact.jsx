import { useState, useCallback } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CONTACT } from "@/data/content";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { submitEnquiry } from "@/admin/api";
import { Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const nameClean = form.name.replace(/<[^>]*>?/gm, "").trim();
    const emailClean = form.email.trim();
    const messageClean = form.message.replace(/<[^>]*>?/gm, "").trim();

    if (!nameClean || !emailClean || !messageClean) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailClean)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await submitEnquiry({
        name: nameClean,
        email: emailClean,
        business: form.business.trim() || "N/A",
        phone: form.phone.trim() || "N/A",
        message: messageClean,
      });
      
      setSubmitted(true);
      toast.success("Thank you! Your message has been received.", {
        description: "We'll get back to you within one business day.",
        duration: 5000,
      });
      setForm({ name: "", email: "", business: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      toast.error("Failed to submit. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const quickActions = [
    { label: "Email", icon: Mail, href: `mailto:${CONTACT.email}`, testid: "contact-email-btn" },
    { label: "Call", icon: Phone, href: `tel:${CONTACT.phoneRaw}`, testid: "contact-call-btn" },
    { label: "WhatsApp", icon: MessageCircle, href: CONTACT.whatsapp, external: true, testid: "contact-whatsapp-btn" },
  ];

  return (
    <section
      id="contact"
      className="relative bg-zinc-50/50 dark:bg-transparent py-20 sm:py-28 border-t border-zinc-200 dark:border-white/10 overflow-hidden transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeading
            overline="Get In Touch"
            title="Let's build something"
            titleAccent="amazing."
            description="Tell us about your project goals. We usually respond within one business day."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Info */}
          <Reveal>
            <div className="flex h-full flex-col justify-between kv-card p-7">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-900 dark:text-white">Software Solutions</p>
                <p className="mt-1 font-display text-2xl font-bold text-zinc-900 dark:text-white">{CONTACT.company}</p>

                <div className="mt-8 space-y-4 text-sm font-medium">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    aria-label={`Email ${CONTACT.email}`}
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:text-white transition-colors"
                    data-testid="contact-email-link"
                  >
                    <Mail className="h-4 w-4 text-zinc-900 dark:text-white" /> {CONTACT.email}
                  </a>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    aria-label={`Call ${CONTACT.phone}`}
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:text-white transition-colors"
                    data-testid="contact-phone-link"
                  >
                    <Phone className="h-4 w-4 text-zinc-900 dark:text-white" /> {CONTACT.phone}
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
                      className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-white py-4 text-xs font-medium text-zinc-600 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-400 dark:border-zinc-500 hover:text-zinc-900 dark:text-white dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-300 dark:border-zinc-600"
                    >
                      <Icon className="h-4 w-4 text-zinc-900 dark:text-white" />
                      {a.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="kv-card p-7" data-testid="contact-form" noValidate aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                {FIELDS.map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {f.label}{f.required && <span className="text-zinc-900 dark:text-white" aria-hidden="true"> *</span>}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      data-testid={`contact-input-${f.name}`}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-slate-800 dark:border-slate-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Message<span className="text-zinc-900 dark:text-white" aria-hidden="true"> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals..."
                    data-testid="contact-input-message"
                    className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-slate-800 dark:border-slate-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 hover:bg-slate-900 dark:bg-slate-200 text-white py-3.5 text-sm font-semibold shadow-md transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {submitted ? (
                    <motion.span key="done" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Message Received
                    </motion.span>
                  ) : loading ? (
                    <motion.span key="loading" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span key="send" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    role="alert"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 flex items-center gap-3 overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400"
                    data-testid="contact-success"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    Thank you! We'll get back to you soon.
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
