"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import { fadeUp, staggerContainer, cardHover } from "@/lib/animations";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useSplitTextReveal({ type: "words", stagger: 0.05 });

  // GSAP scroll-triggered card animation
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".project-card");

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          delay: i % 3 * 0.1,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our Work
          </p>
          <h2
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className="font-heading text-3xl tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            Craftsmanship in Every Detail
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-warm-gray">
            A selection of recent projects showcasing our commitment to quality
            materials, precision joinery, and lasting results.
          </p>
        </div>

        {/* Project grid */}
        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.slice(0, -1).map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card group cursor-pointer overflow-hidden rounded-lg bg-white"
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg text-charcoal">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-warm-gray">
                  {project.subtitle}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent">
                  {project.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Last project centred below the grid */}
        {(() => {
          const lastProject = projects[projects.length - 1];
          return (
            <div className="mt-6 flex justify-center">
              <motion.article
                className="project-card group w-full max-w-sm cursor-pointer overflow-hidden rounded-lg bg-white sm:max-w-md lg:max-w-[calc(33.333%-1rem)]"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                onClick={() => setSelectedProject(lastProject)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                  <Image
                    src={lastProject.image}
                    alt={lastProject.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-charcoal">
                    {lastProject.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-warm-gray">
                    {lastProject.subtitle}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent">
                    {lastProject.location}
                  </p>
                </div>
              </motion.article>
            </div>
          );
        })()}
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-2xl"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-charcoal backdrop-blur-sm transition-colors hover:bg-white"
                aria-label="Close modal"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal image */}
              <div className="relative aspect-video bg-cream-dark">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal content */}
              <div className="p-6 lg:p-8">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
                  {selectedProject.location}
                </p>
                <h3 className="font-heading text-2xl text-charcoal">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-warm-gray">
                  {selectedProject.subtitle}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">
                      Challenge
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-warm-gray">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">
                      Solution
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-warm-gray">
                      {selectedProject.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">
                      Outcome
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-warm-gray">
                      {selectedProject.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
