"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

function ServiceIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    cabinet: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3zm0 9h18M12 3v18M9 7.5h.01M15 7.5h.01M9 16.5h.01M15 16.5h.01" />
      </svg>
    ),
    renovation: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    deck: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M12 2l10 10H2L12 2zM4.5 12v10M19.5 12v10M12 12v10M7.5 12v10M16.5 12v10" />
      </svg>
    ),
    repair: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a2.004 2.004 0 001.5 1.5l3.276-3.276c.256.565.398 1.192.398 1.852z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  };

  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
      {iconMap[icon] || iconMap.repair}
    </div>
  );
}

export default function Services() {
  const headingRef = useSplitTextReveal({ type: "words", stagger: 0.05 });

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Services
          </p>
          <h2
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className="font-heading text-3xl tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            What We Do
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-warm-gray">
            From custom cabinetry to structural repairs, every project receives
            the same commitment to quality, punctuality, and honest pricing.
          </p>
        </div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              custom={i}
              className="group rounded-xl border border-cream-dark/50 bg-cream/50 p-6 transition-all hover:border-accent/20 hover:bg-white hover:shadow-lg"
            >
              <ServiceIcon icon={service.icon} />
              <h3 className="mt-5 font-heading text-xl text-charcoal">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                {service.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-warm-gray"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
