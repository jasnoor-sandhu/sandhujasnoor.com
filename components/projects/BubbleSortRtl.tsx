"use client";

import ProjectLayout from "@/components/projects/ProjectLayout";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "outcomes", label: "Outcomes" },
  { id: "details", label: "Project details" },
];

const PROJECT_DETAILS = [
  { label: "Timeline", value: "August 2023" },
  { label: "Role", value: "Designer" },
  { label: "Language", value: "Verilog" },
  { label: "Tools", value: "Xilinx Vivado" },
  { label: "Code", value: "github.com/jasnoor-sandhu/Bubblesort_vhdl" },
];

export default function BubbleSortRtlProject() {
  return (
    <ProjectLayout
      sections={SECTIONS}
      title="Bubble Sort in RTL"
      subtitle="A foundational RTL implementation of the Bubble Sort algorithm"
      meta={[
        { label: "Role", value: "Designer" },
        { label: "Language", value: "Verilog" },
        { label: "Timeline", value: "Aug 2023" },
        { label: "Tools", value: "Vivado" },
      ]}
    >
      <section className="cs-section" id="overview">
        <p className="cs-eyebrow reveal">Overview</p>
        <h2 className="cs-heading reveal">
          Translating a <span className="cs-highlight">software algorithm</span>{" "}
          into hardware
        </h2>
        <p className="cs-lead reveal">
          Bubble Sort is a simple algorithm to reason about in software, but
          implementing it in RTL forces you to think explicitly about state,
          timing, and data movement between registers — there&apos;s no
          implicit call stack or loop to lean on.
        </p>
        <div className="cs-body reveal">
          <p>
            This was one of my earliest RTL projects: I created a data flow
            model and a state diagram for the Bubble Sort algorithm, then
            implemented and simulated it in Verilog using Vivado.
          </p>
        </div>
      </section>

      <section className="cs-section" id="approach">
        <p className="cs-eyebrow reveal">Approach</p>
        <h2 className="cs-heading reveal">
          State machines, <span className="cs-highlight">not loops</span>
        </h2>
        <p className="cs-lead reveal">
          The core challenge was re-expressing the nested-loop compare-and-swap
          logic of Bubble Sort as an explicit finite state machine driving
          register updates on each clock cycle.
        </p>
        <p className="cs-flow reveal">
          Data flow modeling → state diagram design → Verilog implementation →
          simulation &amp; waveform verification in Vivado
        </p>
        <div className="cs-body reveal">
          <p>
            Working through this project built my foundational understanding
            of sorting algorithms translated to hardware, RTL design
            discipline, and how to verify correctness through simulation
            rather than just reading code.
          </p>
        </div>
      </section>

      <section className="cs-section" id="outcomes">
        <p className="cs-eyebrow reveal">Outcomes</p>
        <h2 className="cs-heading reveal">
          A grounding in <span className="cs-highlight">RTL fundamentals</span>
        </h2>
        <div className="cs-body reveal">
          <p>
            This project was a stepping stone toward the more advanced FPGA
            and IP-design work I&apos;ve done since (like the Goldschmidt
            Division IP) — it&apos;s where I first got comfortable thinking
            in registers, clocks, and state transitions instead of
            sequential code.
          </p>
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
