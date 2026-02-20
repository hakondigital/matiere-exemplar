"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animate } from "animejs";
import { faqs } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-cream-dark/50">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-accent"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-medium text-charcoal md:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-dark/50 text-warm-gray"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-warm-gray md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingRef = useSplitTextReveal({ type: "words", stagger: 0.05 });

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    // Anime.js micro-interaction on toggle
    if (typeof window !== "undefined") {
      animate(`.faq-item-${index}`, {
        translateX: [0, 4, 0],
        duration: 300,
        ease: "outElastic(1, .6)",
      });
    }
  };

  return (
    <section id="faq" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            FAQ
          </p>
          <h2
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className="font-heading text-3xl tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-warm-gray">
            Common questions about working with Matiere.
          </p>
        </div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className={`faq-item-${i}`}
            >
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
