"use client";

import ProjectLayout from "@/components/projects/ProjectLayout";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "gallery", label: "Gallery" },
  { id: "details", label: "Project details" },
];

const OUTCOMES = [
  { stat: "8", label: "Convolution kernels implemented" },
  { stat: "C++17", label: "Core implementation" },
  { stat: "SDL3", label: "Real-time rendering" },
  { stat: "Live", label: "Keyboard-driven effect switching" },
];

const PROJECT_DETAILS = [
  { label: "Timeline", value: "2026" },
  { label: "Role", value: "Designer & Implementer" },
  { label: "Platform", value: "Native desktop (SDL3 framebuffer)" },
  { label: "Tools", value: "C++17, SDL3, SDL3_image, Make" },
  {
    label: "Effects",
    value: "Blur, Gaussian blur, emboss, Laplacian, Sobel, ridge, sharpen, invert",
  },
];

export default function ImgMixerProject() {
  return (
    <ProjectLayout
      sections={SECTIONS}
      title="ImgMixer"
      subtitle="A real-time image convolution playground built with C++ and SDL3"
      meta={[
        { label: "Role", value: "Designer & Implementer" },
        { label: "Platform", value: "SDL3 / Native" },
        { label: "Timeline", value: "2026" },
        { label: "Tools", value: "C++17 · SDL3_image" },
      ]}
    >
      <section className="cs-section" id="overview">
        <p className="cs-eyebrow reveal">Overview</p>
        <h2 className="cs-heading reveal">
          Convolution kernels, <span className="cs-highlight">applied live</span>
        </h2>
        <p className="cs-lead reveal">
          ImgMixer loads an image into a software framebuffer and lets you
          apply classic image-processing kernels in real time, watching the
          pixel buffer update as you switch effects.
        </p>
        <div className="cs-body reveal">
          <p>
            The project is built on SDL3 for windowing and rendering, with a
            custom <code>FRAME</code> abstraction for the pixel buffer and a{" "}
            <code>KERNEL</code> module that implements each convolution
            filter. Keyboard shortcuts toggle between blur, Gaussian blur,
            emboss, Laplacian, Sobel edge detection, ridge detection, sharpen,
            and color inversion — with the option to reset or save the
            current frame at any time.
          </p>
        </div>
      </section>

      <section className="cs-section" id="approach">
        <p className="cs-eyebrow reveal">Approach</p>
        <h2 className="cs-heading reveal">
          A <span className="cs-highlight">pixel buffer</span> and a kernel
          library
        </h2>
        <p className="cs-lead reveal">
          Rather than relying on an existing image-processing library, each
          convolution kernel is implemented directly against the raw frame
          buffer, giving full control over how the matrix is applied per
          pixel.
        </p>
        <p className="cs-flow reveal">
          Load image → framebuffer → convolution kernel pass → SDL texture
          update → optional save
        </p>
      </section>

      <section className="cs-section" id="gallery">
        <p className="cs-eyebrow reveal">Gallery</p>
        <h2 className="cs-heading reveal">
          Same source image, <span className="cs-highlight">different kernels</span>
        </h2>
        <div className="cs-gallery-stack">
          <div className="cs-gallery-item reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/imgmixer/original.jpg" alt="Original source image" />
          </div>
          <div className="cs-gallery-item reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/imgmixer/edge-detect.jpg" alt="Edge-detection convolution applied" />
          </div>
          <div className="cs-gallery-item reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/imgmixer/scan-glitch.jpg" alt="Scan-line glitch convolution applied" />
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
