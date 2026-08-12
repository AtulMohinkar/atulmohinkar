import { useEffect, useState } from "react";
import { Github, Star, Users } from "lucide-react";
import Section, { Reveal } from "./Section";
import { githubFallback, profile, projects } from "../../data/profile";

export default function GithubDashboard() {
  const [user, setUser] = useState(githubFallback);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${profile.githubUsername}`)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error("GitHub API error"))
      )
      .then((data) => {
        if (!cancelled) {
          setUser({ ...githubFallback, ...data });
        }
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
      subtitle="Live profile stats pulled from the GitHub API, with pinned work and contribution activity."
    >
      <div className="gh-grid">
        {/* PROFILE */}
        <Reveal>
          <div className="glass gh-profile card-hover">
            <div className="gh-avatar" aria-hidden="true">
              {user.avatar_url ? (
                <img
                  src={user.avatar_url}
                  alt=""
                  width={84}
                  height={84}
                  loading="lazy"
                />
              ) : (
                <Github size={32} />
              )}
            </div>

            <h3>@{user.login}</h3>

            <p className="section-sub gh-bio">
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
              <Users size={16} />
              View profile
            </a>
          </div>
        </Reveal>

        {/* CONTRIBUTIONS + PINNED REPOSITORIES */}
        <div className="gh-content">
          <Reveal delay={0.08}>
            <div className="glass pad gh-contribution-card">
              <h3 className="gh-card-title">GitHub Contributions</h3>

              <p className="section-sub gh-card-subtitle">
                My GitHub contribution activity.
              </p>

              <div className="gh-contributions">
                <img
                  src="https://ghchart.rshah.org/AtulMohinkar"
                  alt="Atul Mohinkar GitHub contribution graph"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="glass pad gh-repositories">
              <h3 className="gh-card-title">Pinned repositories</h3>

              <div className="gh-repo-grid">
                {projects.slice(0, 4).map((project) => (
                  <a
                    key={project.id}
                    className="glass gh-repo card-hover"
                    href={project.code}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="gh-repo-name">
                      {project.title.split(" — ")[0]}
                    </span>

                    <strong className="gh-repo-stars">
                      <Star size={14} />
                      {project.metrics[0].value}
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