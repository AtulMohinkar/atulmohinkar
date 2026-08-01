import { User } from "lucide-react";
import Section, { Reveal } from "./Section";
import { about } from "../../data/profile";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      icon={<User size={14} />}
      title="A fresher with a shipping habit"
      subtitle="Honest about experience, serious about craft — here's the short version of my story."
    >
      <div className="about-grid">
        <Reveal className="glass pad">
          <div className="about-block">
            <h3>Professional summary</h3>
            <p>{about.summary}</p>
          </div>
          <div className="about-block">
            <h3>My journey</h3>
            <p>{about.journey}</p>
          </div>
          <div className="about-block">
            <h3>Career objective</h3>
            <p>{about.objective}</p>
          </div>
        </Reveal>

        <div className="facts">
          {about.facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.06}>
              <div className="glass fact card-hover">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
