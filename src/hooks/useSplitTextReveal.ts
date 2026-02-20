"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook that splits heading text and animates words/lines on scroll using GSAP + SplitType.
 */
export function useSplitTextReveal(
  options: {
    type?: "words" | "lines" | "chars";
    stagger?: number;
    duration?: number;
    triggerStart?: string;
    once?: boolean;
  } = {}
) {
  const ref = useRef<HTMLElement>(null);

  const {
    type = "words",
    stagger = 0.04,
    duration = 0.8,
    triggerStart = "top 85%",
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Small delay so fonts are loaded
    const timeout = setTimeout(() => {
      const split = new SplitType(el, { types: type });
      const targets =
        type === "words"
          ? split.words
          : type === "lines"
          ? split.lines
          : split.chars;

      if (!targets || targets.length === 0) return;

      gsap.set(targets, { y: 40, opacity: 0 });

      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [type, stagger, duration, triggerStart, once]);

  return ref;
}
