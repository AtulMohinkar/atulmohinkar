import { GraduationCap } from "lucide-react";
import Section, { Reveal } from "./Section";
import { education } from "../../data/profile";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      icon={<GraduationCap size={14} />}
      title="Academic background"
      subtitle="Computer engineering fundamentals that back up the practical work."
    >
      <div className="timeline">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 0.07}>
            <article className="glass tl-item card-hover">
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-head">
                <div>
                  <h3>{item.degree}</h3>
                  <p className="tl-org">{item.school}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="chip chip-accent">{item.score}</span>
                  <p className="tl-period">{item.period}</p>
                </div>
              </div>
              <div className="tag-row" style={{ marginTop: "0.9rem" }}>
                {item.courses.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
