"use client";

import { useEffect, useState } from "react";

export type CaseStudySection = { id: string; label: string };

export default function CaseStudySideNav({ sections }: { sections: CaseStudySection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      const anchorY = window.innerHeight * 0.35;
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= anchorY) {
          current = s.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <nav className="cs-side-nav" aria-label="Project sections">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={s.id === active ? "active" : undefined}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
