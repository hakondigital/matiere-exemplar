"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const headingRef = useSplitTextReveal({ type: "words", stagger: 0.05 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // GSAP-driven progress line animation on scroll
  useEffect(() => {
    if (!timelineRef.current || !progressRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            How It Works
          </p>
          <h2
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className="font-heading text-3xl tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            Our Process
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-warm-gray">
            From initial enquiry to final walkthrough, every step is handled
            with care, communication, and respect for your time.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mx-auto max-w-3xl">
          {/* Progress line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-cream-dark md:left-1/2 md:-translate-x-px">
            <div
              ref={progressRef}
              className="h-full w-full origin-top bg-accent"
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                custom={i}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number dot */}
                <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-accent text-sm font-bold text-white md:left-1/2">
                  {step.step}
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <h3 className="font-heading text-xl text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                    {step.description}
                  </p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
