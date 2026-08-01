import { Award, BadgeCheck, Trophy } from "lucide-react";
import Section, { Reveal } from "./Section";
import { achievements, certifications } from "../../data/profile";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      icon={<BadgeCheck size={14} />}
      title="Verified learning"
      subtitle="Courses and certifications completed alongside my degree."
    >
      <div className="grid grid-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.05}>
            <article className="glass cert-card card-hover">
              <span className="cert-icon" aria-hidden="true">
                <BadgeCheck size={20} />
              </span>
              <div>
                <h3>{cert.name}</h3>
                <p>
                  {cert.issuer} · {cert.year}
                </p>
                <p className="cert-id">ID: {cert.id}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      icon={<Trophy size={14} />}
      title="Wins worth mentioning"
      subtitle="Hackathons, competitive programming, open source and departmental awards."
    >
      <div className="grid grid-3">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <article className="glass ach-card card-hover">
              <span className="cert-icon" aria-hidden="true">
                <Award size={20} />
              </span>
              <div>
                <span className="chip chip-accent">{item.tag}</span>
                <h3 style={{ marginTop: "0.5rem" }}>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
