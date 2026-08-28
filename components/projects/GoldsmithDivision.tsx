"use client";

import ProjectLayout from "@/components/projects/ProjectLayout";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "outcomes", label: "Outcomes" },
  { id: "details", label: "Project details" },
];

const OUTCOMES = [
  { stat: "6 cycles", label: "Floating-point division latency" },
  { stat: "99.99%", label: "Accuracy achieved" },
  { stat: "Pynq Z1", label: "FPGA board used for validation" },
  { stat: "AXI Stream", label: "Interface protocol" },
];

const PROJECT_DETAILS = [
  { label: "Timeline", value: "August 2024" },
  { label: "Role", value: "Designer & Implementer" },
  { label: "Platform", value: "Pynq Z1 FPGA board" },
  { label: "Tools", value: "Xilinx Vivado / Vitis, SystemVerilog" },
  {
    label: "Code",
    value: "github.com/jasnoor-sandhu/GoldSmithDiv",
  },
  {
    label: "Write-up",
    value: "jnoor.notion.site — Goldschmidt Division Algorithm",
  },
];

export default function GoldsmithDivisionProject() {
  return (
    <ProjectLayout
      sections={SECTIONS}
      title="Goldsmith Division Algorithm IP"
      subtitle="A hardware IP block for fast, high-accuracy floating-point division"
      meta={[
        { label: "Role", value: "Designer & Implementer" },
        { label: "Platform", value: "Pynq Z1 FPGA" },
        { label: "Timeline", value: "Aug 2024" },
        { label: "Tools", value: "Vivado · AXI Stream" },
      ]}
    >
      <section className="cs-section" id="overview">
        <p className="cs-eyebrow reveal">Overview</p>
        <h2 className="cs-heading reveal">
          A custom IP for <span className="cs-highlight">fast division</span>{" "}
          on FPGA
        </h2>
        <p className="cs-lead reveal">
          The Goldschmidt division algorithm computes division iteratively
          using multiplication, making it well suited to pipelined hardware
          implementations where a direct divider would be slow or resource
          heavy.
        </p>
        <div className="cs-body reveal">
          <p>
            I designed and implemented an IP block for the Goldschmidt
            Division Algorithm using an AXI Stream interface, so it could be
            dropped into a larger Vivado block design as a standard streaming
            component.
          </p>
          <p>
            The IP was integrated and tested end-to-end on a Pynq Z1 FPGA
            board, validating both the numerical approach and the hardware
            interface under real timing constraints.
          </p>
        </div>
      </section>

      <section className="cs-section" id="approach">
        <p className="cs-eyebrow reveal">Approach</p>
        <h2 className="cs-heading reveal">
          Iterative refinement, <span className="cs-highlight">pipelined</span>{" "}
          in hardware
        </h2>
        <p className="cs-lead reveal">
          Rather than a slow restoring/non-restoring division circuit, the
          Goldschmidt method converges to the quotient through repeated
          multiply-and-refine steps — a good fit for a pipelined datapath.
        </p>
        <p className="cs-flow reveal">
          Operand setup → iterative refinement → convergence check → AXI
          Stream output
        </p>
        <div className="cs-body reveal">
          <p>
            The design streams operands in and results out over AXI Stream,
            which made it straightforward to integrate as a block in a larger
            Vivado IP-integrator design rather than a bespoke point-to-point
            interface.
          </p>
        </div>
      </section>

      <section className="cs-section" id="outcomes">
        <p className="cs-eyebrow reveal">Outcomes</p>
        <h2 className="cs-heading reveal">
          <span className="cs-highlight">Fast and accurate</span> in hardware
        </h2>
        <div className="cs-outcomes-grid reveal">
          {OUTCOMES.map((o) => (
            <div className="cs-outcome" key={o.label}>
              <p className="cs-outcome-stat">{o.stat}</p>
              <p className="cs-outcome-label">{o.label}</p>
            </div>
          ))}
        </div>
        <div className="cs-body reveal">
          <p>
            The final implementation achieved floating-point division in just
            6 cycles with 99.99% accuracy — demonstrating that an iterative,
            multiplication-based approach can match dedicated divider
            hardware in both speed and precision on real FPGA fabric.
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
