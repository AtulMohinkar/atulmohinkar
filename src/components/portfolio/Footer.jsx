import { ArrowUp, Code2, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <span>{profile.name}</span>
          </a>
          <p className="section-sub" style={{ maxWidth: "38ch" }}>
            {profile.role} based in {profile.location}. {profile.availability}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4>Connect</h4>
          <ul>
            <li>
              <a href={profile.socials.github} target="_blank" rel="noreferrer noopener">
                <Github size={14} /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer noopener">
                <Linkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.socials.leetcode} target="_blank" rel="noreferrer noopener">
                <Code2 size={14} /> LeetCode
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>
                <Mail size={14} /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with React & Framer Motion.
        </span>
        <a href="#home">
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
