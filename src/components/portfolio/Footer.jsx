import {
  ArrowUp,
  Code2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              {profile.name}
            </a>

            <span className="footer-role">
              {profile.role}
            </span>
          </div>

          {/* Social links */}
          <div className="footer-socials">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.socials.leetcode}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LeetCode"
            >
              <Code2 size={16} />
              <span>LeetCode</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>
            <b>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </b>
          </span>
<br></br>
          <a href="#home" className="footer-top">
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}