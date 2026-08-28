"use client";

import ProjectLayout from "@/components/projects/ProjectLayout";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "outcomes", label: "Outcomes" },
  { id: "details", label: "Project details" },
];

const OUTCOMES = [
  { stat: "+20%", label: "Spectral efficiency improvement" },
  { stat: "+30%", label: "BER improvement at low SNR" },
  { stat: "OFDM → OTFS", label: "Waveform transition studied" },
  { stat: "MATLAB", label: "Simulation environment" },
];

const PROJECT_DETAILS = [
  { label: "Timeline", value: "January – March 2024" },
  { label: "Role", value: "Researcher" },
  { label: "Focus", value: "Mobile broadband & IoT applications" },
  { label: "Tools", value: "MATLAB" },
  {
    label: "Code",
    value: "github.com/jasnoor-sandhu/OTFS-OFDM · OTFS-PYNQ-FPGA",
  },
];

export default function OtfsWaveformDesignProject() {
  return (
    <ProjectLayout
      sections={SECTIONS}
      title="OTFS Waveform Design"
      subtitle="Investigating OFDM → OTFS for next-generation wireless communication"
      meta={[
        { label: "Role", value: "Researcher" },
        { label: "Focus", value: "Wireless Communication" },
        { label: "Timeline", value: "Jan – Mar 2024" },
        { label: "Tools", value: "MATLAB" },
      ]}
    >
      <section className="cs-section" id="overview">
        <p className="cs-eyebrow reveal">Overview</p>
        <h2 className="cs-heading reveal">
          Beyond OFDM: designing for{" "}
          <span className="cs-highlight">high-mobility channels</span>
        </h2>
        <p className="cs-lead reveal">
          OFDM struggles in high-Doppler, high-mobility environments — the
          exact conditions that next-generation wireless systems (mobile
          broadband, IoT, vehicular networks) increasingly need to handle
          well.
        </p>
        <div className="cs-body reveal">
          <p>
            I investigated Orthogonal Time Frequency Space (OTFS) modulation
            as an alternative to OFDM, focused on understanding how
            modulating data in the delay-Doppler domain instead of the
            time-frequency domain changes robustness and spectral efficiency.
          </p>
        </div>
      </section>

      <section className="cs-section" id="approach">
        <p className="cs-eyebrow reveal">Approach</p>
        <h2 className="cs-heading reveal">
          Simulating <span className="cs-highlight">BER performance</span>{" "}
          across SNR conditions
        </h2>
        <p className="cs-lead reveal">
          To compare the two waveforms fairly, I built simulations that swept
          signal-to-noise ratio conditions and measured bit-error-rate (BER)
          performance for both schemes.
        </p>
        <p className="cs-flow reveal">
          Waveform modeling → channel simulation → BER sweep across SNR →
          spectral efficiency comparison
        </p>
        <div className="cs-body reveal">
          <p>
            This UG project (Part 1 of my bachelor&apos;s thesis work) laid
            the groundwork in MATLAB before extending the simulation to
            hardware-adjacent implementations on FPGA.
          </p>
        </div>
      </section>

      <section className="cs-section" id="outcomes">
        <p className="cs-eyebrow reveal">Outcomes</p>
        <h2 className="cs-heading reveal">
          Measurable gains in <span className="cs-highlight">low-SNR</span>{" "}
          conditions
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
            The OTFS approach demonstrated a 20% improvement in spectral
            efficiency and a 30% improvement in BER performance under
            low-SNR scenarios — reinforcing why OTFS is being explored for
            mobile broadband and IoT use cases where reliability under
            mobility matters most.
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
