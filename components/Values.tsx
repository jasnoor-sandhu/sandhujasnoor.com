const VALUE_WORDS = ["Rigorous", "Curious", "Reliable", "Well tested"];

export default function Values() {
  return (
    <section id="values">
      <p className="section-label reveal">What I believe in</p>
      <div className="values-words">
        {VALUE_WORDS.map((word) => (
          <div className="value-word-row reveal" key={word}>
            <span className="value-word" data-text={word}>
              {word}
            </span>
          </div>
        ))}
      </div>
      <div className="values-body reveal">
        <p>
          I care about getting the fundamentals right — correctness first,
          performance second, and never shipping something I haven&apos;t
          actually tested. Good engineering is boring in the best way.
        </p>
        <p>
          I like working close to the metal — kernels, emulation runtimes,
          RTL — but I stay curious about the layers above and below. Every
          internship and role has been a chance to learn a new stack from
          the ground up.
        </p>
      </div>
    </section>
  );
}
