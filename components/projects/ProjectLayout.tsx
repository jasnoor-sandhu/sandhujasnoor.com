"use client";

import Link from "next/link";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import CaseStudySideNav, {
  CaseStudySection,
} from "@/components/case-studies-shared/SideNav";
import { useReveal } from "@/components/useReveal";

export type ProjectMeta = { label: string; value: string };

export default function ProjectLayout({
  sections,
  title,
  subtitle,
  meta,
  children,
}: {
  sections: CaseStudySection[];
  title: string;
  subtitle: string;
  meta: ProjectMeta[];
  children: React.ReactNode;
}) {
  useReveal();

  return (
    <>
      <Cursor />
      <CaseStudySideNav sections={sections} />
      <nav className="cs-nav">
        <Link href="/#projects" className="cs-back">
          ← Back
        </Link>
        <Link href="/" className="nav-logo cs-nav-logo">
          <span className="logo-short">JS</span>
        </Link>
      </nav>

      <main className="cs-page">
        <header className="cs-hero">
          <p className="section-label reveal">Project</p>
          <h1 className="cs-hero-title reveal">{title}</h1>
          <p className="cs-hero-sub reveal">{subtitle}</p>

          <div className="cs-meta-grid reveal">
            {meta.map((m) => (
              <div key={m.label}>
                <p className="skill-group-label">{m.label}</p>
                <p className="cs-meta-value">{m.value}</p>
              </div>
            ))}
          </div>
        </header>

        {children}

        <div className="cs-footer-nav reveal">
          <Link href="/#projects" className="contact-link">
            Back to projects
            <span className="contact-link-arrow">↗</span>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
