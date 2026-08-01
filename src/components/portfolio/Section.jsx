import { motion } from "framer-motion";

/**
 * Reusable scroll-reveal section wrapper.
 * Keeps semantics (<section aria-labelledby>) consistent across the page.
 */
export default function Section({ id, eyebrow, title, subtitle, children, icon }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow ? (
            <span className="eyebrow">
              {icon}
              {eyebrow}
            </span>
          ) : null}
          <h2 className="section-title" id={`${id}-title`}>
            {title}
          </h2>
          {subtitle ? <p className="section-sub">{subtitle}</p> : null}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

/** Simple staggered fade-up used by cards and list items. */
export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
