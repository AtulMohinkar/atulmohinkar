import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, Users } from "lucide-react";
import Section, { Reveal } from "./Section";
import { githubFallback, profile, projects, topLanguages } from "../../data/profile";

/** Deterministic pseudo-random contribution calendar placeholder. */
function useCalendar() {
  return useMemo(
    () =>
      Array.from({ length: 26 * 7 }, (_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        return Math.floor((seed / 233280) * 5);
      }),
    [],
  );
}

const levelColor = [
  "rgba(148,163,184,0.14)",
  "rgba(37,99,235,0.35)",
  "rgba(37,99,235,0.55)",
  "rgba(124,58,237,0.7)",
  "rgba(6,182,212,0.9)",
];

export default function GithubDashboard() {
  const [user, setUser] = useState(githubFallback);
  const calendar = useCalendar();

  // Live GitHub profile stats, falling back to static data on error/rate limit.
  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${profile.githubUsername}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("gh"))))
      .then((data) => {
        if (!cancelled) setUser({ ...githubFallback, ...data });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section
      id="github"
      eyebrow="GitHub"
      icon={<Github size={14} />}
      title="I build in public"
      subtitle="Live profile stats pulled from the GitHub API, with pinned work and language breakdown."
    >
      <div className="gh-grid">
        <Reveal>
          <div className="glass gh-profile card-hover">
            <div className="gh-avatar" aria-hidden="true">
              {user.avatar_url ? (
                <img src={user.avatar_url} alt="" width={84} height={84} loading="lazy" />
              ) : (
                <Github size={32} />
              )}
            </div>
            <h3>@{user.login}</h3>
            <p className="section-sub" style={{ fontSize: "0.88rem" }}>
              {user.bio || githubFallback.bio}
            </p>
            <div className="gh-stats">
              <div className="glass stat">
                <strong>{user.public_repos}</strong>
                <span>Repos</span>
              </div>
              <div className="glass stat">
                <strong>{user.followers}</strong>
                <span>Followers</span>
              </div>
              <div className="glass stat">
                <strong>{user.following}</strong>
                <span>Following</span>
              </div>
            </div>
            <a
              className="btn btn-ghost btn-block"
              style={{ marginTop: "1.2rem" }}
              href={user.html_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Users size={16} /> View profile
            </a>
          </div>
        </Reveal>

        <div style={{ display: "grid", gap: "1.25rem" }}>
          <Reveal delay={0.08}>
            <div className="glass pad">
              <h3 style={{ fontSize: "1rem" }}>Contribution calendar</h3>
              <p className="section-sub" style={{ fontSize: "0.84rem", marginTop: "0.35rem" }}>
                Placeholder visualisation — 6 months of activity.
              </p>
              <div className="calendar" aria-hidden="true">
                {calendar.map((level, i) => (
                  <motion.span
                    key={i}
                    className="cal-cell"
                    style={{ background: levelColor[level] }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (i % 40) * 0.006 }}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="glass pad">
              <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>Top languages</h3>
              {topLanguages.map((lang) => (
                <div className="lang-row" key={lang.name}>
                  <div className="skill-label">
                    <span>{lang.name}</span>
                    <span>{lang.percent}%</span>
                  </div>
                  <div className="bar">
                    <motion.div
                      className="bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass pad">
              <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>Pinned repositories</h3>
              <div className="grid grid-2">
                {projects.slice(0, 4).map((p) => (
                  <a
                    key={p.id}
                    className="glass fact card-hover"
                    href={p.code}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>{p.title.split(" — ")[0]}</span>
                    <strong style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                      <Star size={14} /> {p.metrics[0].value}
                    </strong>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
