"use client";

import ProjectLayout from "@/components/projects/ProjectLayout";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "gallery", label: "Gallery" },
  { id: "details", label: "Project details" },
];

const OUTCOMES = [
  { stat: "SDL3", label: "Rendering engine" },
  { stat: "C / C++", label: "Implementation language" },
  { stat: "Multi-agent", label: "Colored knight simulation" },
  { stat: "Numberphile", label: "Mathematical inspiration" },
];

const PROJECT_DETAILS = [
  { label: "Timeline", value: "Aug 2026" },
  { label: "Role", value: "Designer & Developer" },
  { label: "Platform", value: "Native desktop (SDL3 framebuffer)" },
  { label: "Tools", value: "SDL3, pkg-config, Make" },
  { label: "Inspiration", value: "Numberphile — \"Red & Black Knights\"" },
];

export default function KnightsOnBoardProject() {
  return (
    <ProjectLayout
      sections={SECTIONS}
      title="Knights on a Board"
      subtitle="An SDL3 framebuffer simulation of the Numberphile \u201cRed & Black Knights\u201d puzzle"
      meta={[
        { label: "Role", value: "Designer & Developer" },
        { label: "Platform", value: "SDL3 / Native" },
        { label: "Timeline", value: "Aug 2026" },
        { label: "Tools", value: "C/C++ · Make" },
      ]}
    >
      <section className="cs-section" id="overview">
        <p className="cs-eyebrow reveal">Overview</p>
        <h2 className="cs-heading reveal">
          Visualizing a <span className="cs-highlight">knight-movement</span> puzzle
          in real time
        </h2>
        <p className="cs-lead reveal">
          After watching Numberphile&apos;s video on the &quot;Red &amp; Black
          Knights&quot; problem, I built a native SDL3 framebuffer demo to
          watch the pattern emerge directly rather than just reason about it
          on paper.
        </p>
        <div className="cs-body reveal">
          <p>
            The program renders a large canvas where multiple colored
            knight-like agents move according to evolving directional rules,
            redrawing the framebuffer every step. It&apos;s a small, focused
            systems-graphics project: no game engine, just a raw pixel
            buffer, SDL3, and a Makefile.
          </p>
        </div>
      </section>

      <section className="cs-section" id="approach">
        <p className="cs-eyebrow reveal">Approach</p>
        <h2 className="cs-heading reveal">
          A <span className="cs-highlight">raw framebuffer</span>, driven by
          simple rules
        </h2>
        <p className="cs-lead reveal">
          Each agent on the board moves and changes direction based on
          conditions inspired by the original puzzle, and the resulting
          pattern is written out frame by frame.
        </p>
        <p className="cs-flow reveal">
          Canvas init → agent movement rules → framebuffer redraw → image
          export to Output/
        </p>
        <div className="cs-body reveal">
          <p>
            Building directly against SDL3 (rather than a higher-level
            framework) kept the project close to the metal — useful for
            understanding how pixel buffers, textures, and render loops fit
            together in a minimal native application.
          </p>
        </div>
      </section>

      <section className="cs-section" id="gallery">
        <p className="cs-eyebrow reveal">Gallery</p>
        <h2 className="cs-heading reveal">
          Pattern evolution <span className="cs-highlight">across runs</span>
        </h2>
        <div className="cs-gallery-stack">
          <div className="cs-gallery-item reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/knights-on-board/stage-1.jpg" alt="Early simulation state" />
          </div>
          <div className="cs-gallery-item reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/knights-on-board/stage-2.jpg" alt="Mid simulation state" />
          </div>
          <div className="cs-gallery-item reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/knights-on-board/stage-3.jpg" alt="Later simulation state" />
          </div>
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
