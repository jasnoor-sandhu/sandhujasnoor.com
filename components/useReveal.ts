"use client";

import { useEffect } from "react";

/**
 * Observes all elements with the `.reveal` class and adds `.visible`
 * once they scroll into view, staggering siblings that intersect together.
 * Mirrors the original vanilla-JS IntersectionObserver behavior.
 */
export function useReveal() {
  useEffect(() => {
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 60);
            revObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revObs.observe(el));
    return () => revObs.disconnect();
  }, []);
}

/**
 * Observes all `.value-word-row` elements and adds `.filled` once visible,
 * triggering the clip-path text fill animation.
 */
export function useValuesFill() {
  useEffect(() => {
    const valObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("filled"), i * 120);
            valObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".value-word-row")
      .forEach((el) => valObs.observe(el));
    return () => valObs.disconnect();
  }, []);
}
