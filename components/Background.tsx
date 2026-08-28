"use client";

import { useEffect, useRef } from "react";

const TIMELINE_ENTRIES = [
  {
    company: "Siemens EDA",
    title: "Hardware Intern → Software Engineer, TBX (TestBench-Express)",
    meta: "Summer 2024 – Present, Noida, India",
    desc: "Progressed from a summer Hardware Intern to a full-time engineer in Siemens' R&D division, working on the stability and runtime of the Veloce emulation platform.",
    highlights: [
      "Maintain and improve TBX-IPC (Inter-Process Communication), the core communication layer of the platform",
      "Shipped 'tbx-session-id', a project that materially improved Veloce platform stability",
      "Work on Questa and its runtime aspects alongside IPC responsibilities",
      "As an intern: revamped a faulty flip-flop detection utility, adding progress reports, flop filtering, and waveform visualisation — cutting analysis time by 50%",
      "Built strong familiarity with OS, kernel, and emulation runtime internals through this work",
    ],
  },
  {
    company: "EPFL — LAP (Prof. Paolo Ienne)",
    title: "Summer Research Intern",
    meta: "Summer 2025, Lausanne, Switzerland",
    desc: "Worked on the Dynamatic High-Level Synthesis compiler, improving buffer placement for dataflow circuits.",
    highlights: [
      "Improved the buffer placement algorithm focusing on MILP-based scheduling for dataflow circuits",
      "Identified and corrected missing throughput constraints, improving accuracy of buffer insertion",
    ],
  },
  {
    company: "Victoria University",
    title: "Research Intern",
    meta: "Summer 2023, Melbourne, Australia",
    desc: "Worked on ROS2-based navigation and mapping for the Turtlebot4 platform in a Linux/Raspberry Pi environment.",
    highlights: [
      "Modified ROS2 packages for Turtlebot4 navigation and mapping",
      "Gained proficiency working with Raspberry Pi 4 in Linux environments",
      "Organized a live demonstration of Turtlebot4 for 40+ students at the university",
    ],
  },
];

const SKILL_GROUPS = [
  {
    label: "Programming Languages",
    items: ["C/C++", "Python", "Verilog / SystemVerilog", "Linux Shell", "Perl"],
  },
  {
    label: "Familiar With",
    items: ["OOPS", "Linux", "Data Structures"],
  },
  {
    label: "Software & Tools",
    items: ["MATLAB", "Xilinx Vivado / Vitis", "Proteus"],
  },
  {
    label: "Interests",
    items: ["RTL & Digital Design", "FPGA", "ASIC"],
  },
];

export default function Background() {
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const bgSection = sectionRef.current;
    const fillEl = fillRef.current;
    const dotEl = dotRef.current;
    if (!bgSection || !fillEl || !dotEl) return;

    const entryCount = entryRefs.current.length;

    let targetProgress = 0;
    let currentProgress = 0;
    let ticking = false;

    const revealEntries = (anchorY: number) => {
      entryRefs.current.forEach((entry) => {
        if (entry && entry.getBoundingClientRect().top <= anchorY) {
          entry.classList.add("tl-visible");
        }
      });
    };

    // Progress is measured in "entries passed", not raw scroll pixels.
    // Entries vary a lot in height (some have several bullet highlights,
    // some have none), so a pixel-based ratio spends most of its
    // range crawling through the tallest entry and barely moves for
    // the rest — this instead gives each entry an equal 1/entryCount
    // share of the track as the scroll anchor line crosses it.
    const computeTarget = () => {
      const winH = window.innerHeight;
      const anchorY = winH * 0.35;
      let index = 0;
      entryRefs.current.forEach((entry) => {
        if (!entry) return;
        const rect = entry.getBoundingClientRect();
        index += Math.max(0, Math.min(1, (anchorY - rect.top) / rect.height));
      });
      targetProgress = Math.max(0, Math.min(1, index / entryCount));
      revealEntries(anchorY);
    };

    const applyProgress = (progress: number) => {
      const pct = (progress * 100).toFixed(2);
      fillEl.style.height = pct + "%";
      dotEl.style.top = pct + "%";
    };

    // Ease the on-screen progress toward the scroll-derived target each
    // frame instead of snapping to it, so the fill/dot glide smoothly.
    const animate = () => {
      currentProgress += (targetProgress - currentProgress) * 0.12;
      if (Math.abs(targetProgress - currentProgress) < 0.001) {
        currentProgress = targetProgress;
        ticking = false;
      }
      applyProgress(currentProgress);
      if (ticking) requestAnimationFrame(animate);
    };

    const onScrollOrResize = () => {
      computeTarget();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(animate);
      }
    };

    computeTarget();
    currentProgress = targetProgress;
    applyProgress(currentProgress);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ticking = false;
    };
  }, []);

  return (
    <section id="background" ref={sectionRef}>
      <p className="section-label reveal">Background</p>

      <div className="timeline-container">
        <div className="timeline-track">
          <div className="timeline-track-bg" />
          <div className="timeline-track-fill" ref={fillRef} />
          <div className="timeline-track-dot" ref={dotRef} />
        </div>

        <div className="timeline-entries">
          {TIMELINE_ENTRIES.map((entry, i) => (
            <div
              className="timeline-entry"
              key={entry.company}
              ref={(el) => {
                entryRefs.current[i] = el;
              }}
            >
              <p className="tl-company">{entry.company}</p>
              <h3 className="tl-title">{entry.title}</h3>
              <p className="tl-meta">{entry.meta}</p>
              <p className="tl-desc">{entry.desc}</p>
              {entry.highlights.length > 0 && (
                <div className="tl-highlights">
                  {entry.highlights.map((h) => (
                    <p className="tl-highlight" key={h}>
                      {h}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="skills-section reveal">
        <p className="section-label" style={{ marginBottom: "2rem" }}>
          Skills
        </p>
        <div className="skills-groups">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="skill-group-label">{group.label}</p>
              <div className="skill-group-items">
                {group.items.map((item) => (
                  <span className="skill-item" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="edu-row reveal">
        <div className="edu-logo">IIT</div>
        <div>
          <p className="edu-label">Education</p>
          <p className="edu-title">
            B.Tech in Electronics &amp; Communication Engineering (minor in
            Computer Science Engineering)
          </p>
          <p className="edu-sub">
            Indian Institute of Technology (BHU), Varanasi · 2021 – 2025
          </p>
          <p
            className="edu-sub"
            style={{ marginTop: "0.35rem", color: "rgba(255,255,255,0.28)" }}
          >
            CGPA 9.50/10 · Department Rank 3/146
          </p>
        </div>
      </div>
    </section>
  );
}
