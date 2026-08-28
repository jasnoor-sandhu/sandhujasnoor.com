import Link from "next/link";

const PROJECTS = [
  {
    num: "01",
    tag: "IP Design / FPGA",
    year: "Aug 2024",
    name: "Goldsmith Division Algorithm IP",
    slug: "goldsmith-division",
    hoverTag: "IP Design · FPGA · AXI Stream · Aug 2024",
    role: "Designer & Implementer",
    desc: "Designed and implemented an IP block for the Goldsmith Division Algorithm on AXI Stream, achieving floating-point division in 6 cycles at 99.99% accuracy on a Pynq Z1 board.",
  },
  {
    num: "02",
    tag: "Wireless Comms / Research",
    year: "Jan – Mar 2024",
    name: "OTFS Waveform Design",
    slug: "otfs-waveform-design",
    hoverTag: "Signal Processing · Research · Jan–Mar 2024",
    role: "Researcher",
    desc: "Investigated the transition from OFDM to OTFS for next-generation wireless, improving spectral efficiency by 20% and BER performance by 30% in low-SNR conditions.",
  },
  {
    num: "03",
    tag: "RTL / Digital Design",
    year: "Aug 2023",
    name: "Bubble Sort in RTL",
    slug: "bubble-sort-rtl",
    hoverTag: "Verilog · RTL · Vivado · Aug 2023",
    role: "Designer",
    desc: "Built a data flow model and state diagram for the Bubble Sort algorithm in Verilog, a foundational project in RTL design and simulation with Vivado.",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label reveal">Selected projects</p>
      <div className="work-grid reveal">
        {PROJECTS.map((p) => (
          <Link
            href={`/projects/${p.slug}`}
            className="work-card"
            key={p.num}
            style={{ display: "block" }}
          >
            <div className="work-card-num">{p.num}</div>
            <div className="work-card-static">
              <span className="work-card-tag">{p.tag}</span>
              <span className="work-card-year">{p.year}</span>
            </div>
            <div className="work-card-title">
              <h3 className="work-card-name">{p.name}</h3>
            </div>
            <div className="work-card-hover">
              <p className="work-card-hover-tag">{p.hoverTag}</p>
              <p className="work-card-hover-name">{p.name}</p>
              <p className="work-card-hover-role">{p.role}</p>
              <p className="work-card-hover-desc">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
