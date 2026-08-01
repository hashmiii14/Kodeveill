import { FAQS } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => (
  <section id="faq" className="relative bg-white py-20 sm:py-28">
    <div className="container-x">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:h-fit">
          <span className="section-label">FAQ</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#111827] sm:text-5xl">
            Questions? <span className="text-gradient">Answered.</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know before we start building your website.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="mb-3 rounded-2xl border border-gray-200 bg-white px-5 shadow-xs transition-all duration-200 hover:border-blue-300"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-[#111827] hover:no-underline focus-visible:outline-none">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-gray-600 pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

