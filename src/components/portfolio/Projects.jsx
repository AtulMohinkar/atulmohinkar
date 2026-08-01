import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, FolderGit2, Github, Search } from "lucide-react";
import Section, { Reveal } from "./Section";
import { projects } from "../../data/profile";

const categories = ["All", "Full Stack", "Frontend", "Backend"];

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const initials = project.title.slice(0, 2).toUpperCase();

  return (
    <Reveal delay={index * 0.06}>
      <article className="glass project-card card-hover">
        <div
          className={`project-cover cover-${project.accent}`}
          role="img"
          aria-label={`${project.title} cover`}
        >
          {initials}
        </div>
        <div className="project-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="tag-row">
            {project.stack.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="metrics">
            {project.metrics.map((m) => (
              <div className="metric" key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="disclosure"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            {open ? "Hide details" : "Features, challenges & role"}
            <ChevronDown
              size={15}
              style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .25s" }}
            />
          </button>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <ul className="detail-list">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                  <li>
                    <strong>Challenge:</strong> {project.challenges}
                  </li>
                  <li>
                    <strong>My role:</strong> {project.role}
                  </li>
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="project-links">
            <a
              className="btn btn-primary link-btn"
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
            <a
              className="btn btn-ghost link-btn"
              href={project.code}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github size={15} /> Code
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      icon={<FolderGit2 size={14} />}
      title="Things I have designed, built and broken"
      subtitle="Every project below was built end-to-end — including the parts that went wrong and what I learned fixing them."
    >
      <div className="filters" role="group" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={filter === cat ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="search-wrap">
        <Search size={16} aria-hidden="true" />
        <label className="skip-link" htmlFor="project-search">
          Search projects
        </label>
        <input
          id="project-search"
          className="input"
          type="search"
          placeholder="Search projects or tech…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {visible.length === 0 ? (
        <p className="empty-state">No projects match that search. Try another keyword.</p>
      ) : (
        <div className="grid grid-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}
    </Section>
  );
}
