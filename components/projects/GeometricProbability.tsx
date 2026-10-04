"use client";

import ProjectLayout from "@/components/projects/ProjectLayout";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "gallery", label: "Gallery" },
  { id: "details", label: "Project details" },
];

const OUTCOMES = [
  { stat: "8-fold", label: "Symmetry reduction used in the derivation" },
  { stat: "2", label: "Random points modeled (R and B)" },
  { stat: "Closed-form", label: "Double integral expressing the answer" },
  { stat: "Geometric", label: "Locus + sector + intersection reasoning" },
];

const PROJECT_DETAILS = [
  { label: "Timeline", value: "Nov 2024 problem · solved 2026" },
  { label: "Role", value: "Problem solver" },
  { label: "Domain", value: "Geometric probability" },
  { label: "Tools", value: "Mathematical derivation, GeoGebra-style diagrams" },
];

export default function GeometricProbabilityProject() {
  return (
    <ProjectLayout
      sections={SECTIONS}
      title="Geometric Probability: The Equidistant Point Puzzle"
      subtitle="A full derivation and visualization of a two-random-points probability problem"
      meta={[
        { label: "Role", value: "Problem solver" },
        { label: "Domain", value: "Probability · Geometry" },
        { label: "Timeline", value: "Nov 2024" },
        { label: "Tools", value: "Math · Diagrams · Animation" },
      ]}
    >
      <section className="cs-section" id="overview">
        <p className="cs-eyebrow reveal">Overview</p>
        <h2 className="cs-heading reveal">
          Two random points, <span className="cs-highlight">one elegant question</span>
        </h2>
        <p className="cs-lead reveal">
          Two points, red (R) and blue (B), are chosen uniformly at random
          inside a unit square. What is the probability that a point exists
          on the side of the square closest to B that is equidistant from
          both R and B?
        </p>
        <div className="cs-body reveal">
          <p>
            Rather than reaching for simulation, I worked through a full
            geometric derivation: identifying the locus of valid positions
            for R, computing the relevant sector and intersection areas, and
            reducing the final expectation to a closed-form integral using
            the square&apos;s eight-fold symmetry.
          </p>
        </div>
      </section>

      <section className="cs-section" id="approach">
        <p className="cs-eyebrow reveal">Approach</p>
        <h2 className="cs-heading reveal">
          From <span className="cs-highlight">locus</span> to{" "}
          <span className="cs-highlight">expected area</span>
        </h2>
        <p className="cs-lead reveal">
          For any point Q on the side of the square closest to B, the locus of
          valid positions for R is an arc centered at Q. Sweeping Q across the
          whole side traces out the full region where R can exist for an
          equidistant point to be possible.
        </p>
        <p className="cs-flow reveal">
          Locus of R per Q → sweep Q along the nearest side → sector +
          intersection area → expectation over B → 8-fold symmetry reduction
        </p>
        <div className="cs-body reveal">
          <p>
            The probability that such a point Q exists, conditioned on B,
            turns out to equal the area of the valid region for R (since both
            points are uniform on the square). Averaging that area over all
            positions of B — and exploiting the square&apos;s diagonal and
            axis symmetries to only integrate over one of eight equivalent
            regions — produces a compact double integral for the final
            answer.
          </p>
        </div>
      </section>

      <section className="cs-section" id="gallery">
        <p className="cs-eyebrow reveal">Gallery</p>
        <h2 className="cs-heading reveal">
          Visualizing the <span className="cs-highlight">locus and sweep</span>
        </h2>
        <div className="cs-image reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/geometric-probability/locus.png"
            alt="Locus of point R for a fixed point Q on the square's side"
          />
        </div>
        <div className="cs-image reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/geometric-probability/sweep.gif"
            alt="Animation of Q sweeping along the side of the square"
          />
        </div>
        <div className="cs-image reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/geometric-probability/area.png"
            alt="Sector and intersection areas used in the area calculation"
          />
        </div>
      </section>

      <section className="cs-section" id="outcomes-stats">
        <div className="cs-outcomes-grid reveal">
          {OUTCOMES.map((o) => (
            <div className="cs-outcome" key={o.label}>
              <p className="cs-outcome-stat">{o.stat}</p>
              <p className="cs-outcome-label">{o.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-section" id="details">
        <p className="section-label reveal">Project details</p>
        <div className="cs-details-grid reveal">
          {PROJECT_DETAILS.map((d) => (
            <div key={d.label}>
              <p className="skill-group-label">{d.label}</p>
              <p className="cs-meta-value">{d.value}</p>
            </div>
          ))}
        </div>
      </section>
    </ProjectLayout>
  );
}
