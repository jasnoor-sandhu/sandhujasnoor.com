export default function About() {
  return (
    <section id="about">
      <div className="about-body reveal">
        <p className="section-label">About</p>
        <h2 className="about-headline">
          An engineer who
          <br />
          <span className="flip-word" aria-label="builds, debugs, and ships">
            <span className="flip-word-inner">
              <span>builds,</span>
              <span>debugs,</span>
              <span>ships.</span>
            </span>
          </span>
        </h2>
        <p>
          I studied Electronics &amp; Communication Engineering at IIT (BHU),
          with a minor in Computer Science, and found myself drawn to the
          layer where hardware meets software — emulation runtimes, RTL, and
          the systems code that ties it all together.
        </p>
        <p>
          I&apos;ve worked across a Siemens EDA production platform,
          an EPFL compiler research lab, and a robotics lab at Victoria
          University — going from summer intern to full-time engineer along
          the way. I bring curiosity, attention to detail, and a habit of
          actually testing what I ship.
        </p>
        <p>Based in India. Open to interesting engineering problems.</p>
        <div className="status-dot">Open to new opportunities</div>
        <p className="build-cta">
          I&apos;d love to talk shop or work on something together,{" "}
          <a href="mailto:jas9noor@gmail.com" className="build-cta-link">
            Send Hi
          </a>
        </p>
      </div>
      <div className="contact-links reveal">
        <p className="section-label" style={{ marginBottom: "1rem" }}>
          Contact
        </p>
        <a href="mailto:jas9noor@gmail.com" className="contact-link">
          jas9noor@gmail.com
          <span className="contact-link-arrow">↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jasnoor-sandhu-a6184021a/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          LinkedIn
          <span className="contact-link-arrow">↗</span>
        </a>
        <a
          href="https://github.com/jasnoor-sandhu"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          GitHub
          <span className="contact-link-arrow">↗</span>
        </a>
        <a
          href="/Jasnoor_Sandhu_Detailed_CV.html"
          className="contact-link"
        >
          View Resume
          <span className="contact-link-arrow">↗</span>
        </a>
      </div>
    </section>
  );
}
