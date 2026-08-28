"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#projects", label: "Projects" },
  { href: "#values", label: "Values" },
  { href: "#background", label: "Background" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const handleScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 250) current = s.id;
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">
          <span className="logo-short">JS</span>
          <span className="logo-full">Jasnoor Sandhu</span>
        </a>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${activeId === item.href.slice(1) ? " active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          className={`nav-burger${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`nav-mobile-link${activeId === item.href.slice(1) ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
