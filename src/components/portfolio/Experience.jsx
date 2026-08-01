import { Briefcase } from "lucide-react";
import Section, { Reveal } from "./Section";
import { experience } from "../../data/profile";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      icon={<Briefcase size={14} />}
      title="Internships, freelance and team work"
      subtitle="Real deadlines, real code review, real users — the closest a fresher gets to production."
    >
      <div className="timeline">
        {experience.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <article className="glass tl-item card-hover">
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-head">
                <div>
                  <h3>{item.title}</h3>
                  <p className="tl-org">{item.org}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="chip chip-accent">{item.type}</span>
                  <p className="tl-period">{item.period}</p>
                </div>
              </div>
              <ul>
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
