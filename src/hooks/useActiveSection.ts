"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks } from "@/lib/data";

/**
 * Tracks which section is currently in view and returns its id (for scroll spy).
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 120;

    for (let i = navLinks.length - 1; i >= 0; i--) {
      const href = navLinks[i].href;
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(id);
        return;
      }
    }
    setActiveSection("home");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
}
