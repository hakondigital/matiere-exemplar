"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function About() {
  const headingRef = useSplitTextReveal({ type: "words", stagger: 0.05 });

  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-cream-dark">
              <Image
                src="/images/seb-portrait.jpg"
                alt="Sebastien, founder of Matiere, working in his workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent block */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl border-2 border-accent/20" />
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent"
            >
              About
            </motion.p>

            <h2
              ref={headingRef as React.RefObject<HTMLHeadingElement>}
              className="font-heading text-3xl tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
            >
              Meet Seb
            </h2>

            <motion.div variants={slideInRight} className="mt-6 space-y-4">
              <p className="text-lg leading-relaxed text-warm-gray">
                Originally from Marseille, France, Sebastien brings a European
                eye for precision and craftsmanship to every project he takes on.
                Now based in Balgowlah on Sydney&apos;s Northern Beaches, he
                combines that meticulous attention to detail with the practical,
                get-it-done spirit of Australian trades.
              </p>
              <p className="text-lg leading-relaxed text-warm-gray">
                With over fifteen years of experience in residential and light
                commercial carpentry, Seb has built a reputation for outstanding
                workmanship, honest pricing, and clear communication from start
                to finish. Whether it&apos;s a custom kitchen fit-out, a
                structural repair, or a simple shelf install, the standard of
                care is always the same.
              </p>
              <p className="text-lg leading-relaxed text-warm-gray">
                Many clients come through referrals and return for repeat work —
                a reflection of the trust and quality that Matiere delivers on
                every job.
              </p>
            </motion.div>

            {/* Key attributes */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {[
                { label: "Quality Craftsmanship", icon: "◆" },
                { label: "Attention to Detail", icon: "◆" },
                { label: "Clear Communication", icon: "◆" },
                { label: "On-Time Delivery", icon: "◆" },
                { label: "Fair Pricing", icon: "◆" },
                { label: "Repeat Clients", icon: "◆" },
              ].map((attr) => (
                <div key={attr.label} className="flex items-center gap-2">
                  <span className="text-xs text-accent">{attr.icon}</span>
                  <span className="text-sm font-medium text-charcoal">
                    {attr.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
