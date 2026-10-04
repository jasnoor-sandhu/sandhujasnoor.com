"use client";

import { useEffect, useState } from "react";

type AudienceKey =
  | "anyone"
  | "recruiters"
  | "managers"
  | "researchers"
  | "engineers"
  | "students";

const AUDIENCE_TABS: { key: AudienceKey; label: string }[] = [
  { key: "recruiters", label: "Recruiters" },
  { key: "managers", label: "Hiring Managers" },
  { key: "researchers", label: "Researchers" },
  { key: "engineers", label: "Engineers" },
  { key: "students", label: "Students" },
  { key: "anyone", label: "For anyone" },
];

const HEADLINES: Record<AudienceKey, { h: React.ReactNode; s: string }> = {
  anyone: {
    h: (
      <>
        I build things that <em>work</em> — from silicon to systems software.
      </>
    ),
    s: "Electronics engineer at Siemens EDA, IIT (BHU) graduate, with hands-on experience across RTL design, FPGA, emulation runtimes, and inter-process communication.",
  },
  recruiters: {
    h: (
      <>
        IIT (BHU). Siemens EDA. EPFL. <em>Ready for the next challenge.</em>
      </>
    ),
    s: "Went from Hardware Intern to full-time engineer at Siemens EDA in a year. Dept. Rank 3/146, CGPA 9.50/10. B.Tech ECE major, CS minor.",
  },
  managers: {
    h: (
      <>
        I own hard, ambiguous problems — from <em>kernel-level IPC</em> to
        production stability.
      </>
    ),
    s: "Currently maintaining and improving TBX-IPC at Siemens EDA, shipping stability fixes used across the Veloce emulation platform.",
  },
  researchers: {
    h: (
      <>
        MILP scheduling, dataflow circuits, and <em>waveform design</em> —
        I like problems with real constraints.
      </>
    ),
    s: "Research experience spans HLS compiler scheduling at EPFL, OFDM→OTFS waveform design for next-gen wireless, and ROS2 robotics at Victoria University.",
  },
  engineers: {
    h: (
      <>
        C++, Verilog/SystemVerilog, Linux internals.{" "}
        <em>I speak your language.</em>
      </>
    ),
    s: "Comfortable across the stack — RTL and FPGA implementation, Linux shell/C++ tooling, OS and kernel fundamentals, and emulation runtime debugging.",
  },
  students: {
    h: (
      <>
        From JEE Advanced to Siemens EDA — <em>happy to talk shop.</em>
      </>
    ),
    s: "IIT (BHU) '25 grad who's been through the internship grind — Siemens, EPFL, Victoria University — always open to sharing what I learned.",
  },
};

export default function Hero() {
  const [active, setActive] = useState<AudienceKey>("anyone");
  const [displayed, setDisplayed] = useState<AudienceKey>("anyone");
  // Starts true so the headline/sub mount hidden, then reveals on first
  // paint — reusing the same fade transition as the audience-tab switch
  // for the entrance animation instead of a separate mechanism.
  const [fading, setFading] = useState(true);

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setFading(false));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  const handleSelect = (key: AudienceKey) => {
    if (key === active) return;
    setActive(key);
    setFading(true);
    setTimeout(() => {
      setDisplayed(key);
      setFading(false);
    }, 350);
  };

  const content = HEADLINES[displayed];

  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="audience-tabs">
          {AUDIENCE_TABS.map((tab) => (
            <button
              key={tab.key}
              className={`audience-tab${active === tab.key ? " active" : ""}`}
              onClick={() => handleSelect(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={`hero-headline${fading ? " fade-out" : ""}`}>
          {content.h}
        </div>
        <p className={`hero-sub${fading ? " fade-out" : ""}`}>{content.s}</p>
      </div>
    </section>
  );
}
