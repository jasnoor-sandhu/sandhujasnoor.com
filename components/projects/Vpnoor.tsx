"use client";

import ProjectLayout from "@/components/projects/ProjectLayout";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "outcomes", label: "Outcomes" },
  { id: "details", label: "Project details" },
];

const OUTCOMES = [
  { stat: "3", label: "Degradation presets" },
  { stat: "FFmpeg", label: "Encoding/processing pipeline" },
  { stat: "CLI + interactive", label: "Usage modes" },
  { stat: "Python 3", label: "Implementation" },
];

const PROJECT_DETAILS = [
  { label: "Timeline", value: "2026" },
  { label: "Role", value: "Designer & Implementer" },
  { label: "Platform", value: "Command-line (macOS)" },
  { label: "Tools", value: "Python 3, FFmpeg, ffprobe" },
  {
    label: "Presets",
    value: "\"2005 digital camera\" · \"corrupted digital\" · \"absolutely destroyed\"",
  },
];

export default function VpnoorProject() {
  return (
    <ProjectLayout
      sections={SECTIONS}
      title="VPNOOR"
      subtitle="A Python/FFmpeg tool for turning clean footage into deliberately lo-fi, degraded video"
      meta={[
        { label: "Role", value: "Designer & Implementer" },
        { label: "Platform", value: "CLI / FFmpeg" },
        { label: "Timeline", value: "2026" },
        { label: "Tools", value: "Python · FFmpeg" },
      ]}
    >
      <section className="cs-section" id="overview">
        <p className="cs-eyebrow reveal">Overview</p>
        <h2 className="cs-heading reveal">
          Turning clean footage into{" "}
          <span className="cs-highlight">intentional lo-fi chaos</span>
        </h2>
        <p className="cs-lead reveal">
          VPNOOR is a command-line tool that takes crisp Fujifilm X-M5
          1920×1080 footage and deliberately degrades it into one of three
          distinct retro/glitch looks using FFmpeg.
        </p>
        <div className="cs-body reveal">
          <p>
            It&apos;s a creative-coding project at heart — the goal isn&apos;t
            technical precision, it&apos;s character. Where most video
            pipelines fight to preserve quality, VPNOOR is built to
            intentionally destroy it in controlled, repeatable ways: bitrate
            starvation, repeated low-resolution re-encoding, noise injection,
            frame-rate changes, and chroma/color manipulation.
          </p>
        </div>
      </section>

      <section className="cs-section" id="approach">
        <p className="cs-eyebrow reveal">Approach</p>
        <h2 className="cs-heading reveal">
          Three presets, <span className="cs-highlight">three distinct eras</span>{" "}
          of bad video
        </h2>
        <p className="cs-lead reveal">
          Each preset chains a different sequence of FFmpeg passes — chosen
          and tuned by ear/eye rather than derived from a formula — to land on
          a specific aesthetic.
        </p>
        <p className="cs-flow reveal">
          Input validation (ffprobe) → preset selection → chained FFmpeg
          passes (scale / bitrate / noise / color) → temp workspace → final
          MP4 export
        </p>
        <div className="cs-body reveal">
          <p>
            <strong>2005 digital camera</strong> emulates the soft,
            low-bitrate look of early-2000s consumer camcorders.{" "}
            <strong>Corrupted digital</strong> pushes further into
            compression artifacts and signal noise. <strong>Absolutely
            destroyed</strong> uses the most aggressive, fastest encoding
            presets to maximize degradation. The tool can be run
            non-interactively with a preset argument, or interactively, where
            it prompts you to choose a look.
          </p>
        </div>
      </section>

      <section className="cs-section" id="outcomes">
        <p className="cs-eyebrow reveal">Outcomes</p>
        <h2 className="cs-heading reveal">
          A small, <span className="cs-highlight">opinionated</span> creative
          tool
        </h2>
        <div className="cs-outcomes-grid reveal">
          {OUTCOMES.map((o) => (
            <div className="cs-outcome" key={o.label}>
              <p className="cs-outcome-stat">{o.stat}</p>
              <p className="cs-outcome-label">{o.label}</p>
            </div>
          ))}
        </div>
        <div className="cs-image reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projects/vpnoor/icon.jpg" alt="VPNOOR app icon concept" />
        </div>
        <div className="cs-body reveal">
          <p>
            The result is a lightweight utility that pairs cleanly with
            personal photography/video work — a fast way to explore how much
            character &quot;imperfect&quot; footage can add to a project.
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
