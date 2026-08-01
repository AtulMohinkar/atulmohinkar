import { motion } from "framer-motion";
import { Cpu, Database, Layers, Server, Users, Wrench } from "lucide-react";
import Section, { Reveal } from "./Section";
import { skillGroups } from "../../data/profile";

const icons = {
  Frontend: Layers,
  Backend: Server,
  Database: Database,
  "Tools & Deployment": Wrench,
  "Soft Skills": Users,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      icon={<Cpu size={14} />}
      title="The stack I build with"
      subtitle="Comfortable across the MERN stack, with the tooling and habits to ship and maintain real features."
    >
      <div className="grid grid-3">
        {skillGroups.map((group, gi) => {
          const Icon = icons[group.title] || Layers;
          return (
            <Reveal key={group.title} delay={gi * 0.07}>
              <article className="glass skill-card card-hover">
                <h3>
                  <Icon size={18} aria-hidden="true" /> {group.title}
                </h3>
                {group.items.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div
                      className="bar"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <motion.div
                        className="bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
