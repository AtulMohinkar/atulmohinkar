import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react";
import profileImg from "../../assets/profile.png";
import { profile } from "../../data/profile";
import { useTypewriter } from "../../hooks/usePortfolio";

const social = [
  { icon: Github, href: profile.socials.github, label: "GitHub profile" },
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn profile" },
  { icon: Code2, href: profile.socials.leetcode, label: "LeetCode profile" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Send an email" },
];

export default function Hero() {
  const typed = useTypewriter(profile.typingWords);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <motion.span
          className="hero-orb orb-1"
          animate={{ y: [0, 26, 0], x: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="hero-orb orb-2"
          animate={{ y: [0, -22, 0], x: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="hero-orb orb-3"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">
            <Sparkles size={14} /> {profile.availability}
          </span>

          <p className="section-sub" style={{ marginTop: 0 }}>
            Hi, I'm
          </p>

          <h1 id="hero-title">{profile.name}</h1>

          {/* MOBILE PROFILE PHOTO */}
          <div className="hero-photo-mobile">
            <span className="photo-frame" aria-hidden="true" />

            <img
              className="hero-photo"
              src={profileImg}
              width={816}
              height={816}
              alt={`Portrait of ${profile.name}, MERN stack developer`}
            />

            <div className="glass float-badge badge-tl">
              <span className="dot-live" aria-hidden="true" />
              Available for hire
            </div>
          </div>

          <p className="typing" aria-live="polite">
            <span className="gradient-text">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero-tagline">{profile.tagline}</p>

          {/* buttons... */}
          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.resumeUrl} download>
              <Download size={17} /> Download Resume
            </a>
            <a className="btn btn-ghost" href="#projects">
              View Projects <ArrowRight size={17} />
            </a>
            <a className="btn btn-soft" href="#contact">
              Hire Me
            </a>
          </div>

          <div className="socials">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                className="icon-btn"
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="stat-row">
            <div className="glass stat">
              <strong>7 mo</strong>
              <span>Internship</span>
            </div>
            <div className="glass stat">
              <strong>MERN</strong>
              <span>Core Stack</span>
            </div>
            <div className="glass stat">
              <strong>7+</strong>
              <span>Module Build</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="photo-frame" aria-hidden="true" />
          <img
            className="hero-photo"
            src={profileImg}
            width={816}
            height={816}
            alt={`Portrait of ${profile.name}, MERN stack developer`}
          />
          <motion.div
            className="glass float-badge badge-tl"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="dot-live" aria-hidden="true" /> Available for hire
          </motion.div>
          <motion.div
            className="glass float-badge badge-br"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            React · Node · MongoDB
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
