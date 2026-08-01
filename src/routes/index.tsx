import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/portfolio.css";

import { ThemeProvider } from "../context/ThemeContext";
import Navbar, { ScrollProgress } from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Experience from "../components/portfolio/Experience";
import Education from "../components/portfolio/Education";
import { Achievements, Certifications } from "../components/portfolio/Credentials";
import Footer from "../components/portfolio/Footer";
import { BackToTop, CustomCursor, LoadingScreen } from "../components/portfolio/Extras";

// Heavier, below-the-fold sections are code-split.
const GithubDashboard = lazy(() => import("../components/portfolio/GithubDashboard"));
const Contact = lazy(() => import("../components/portfolio/Contact"));

const title = "Atul Mohinkar — MERN Stack Developer Portfolio";
const description =
  "Portfolio of Atul Mohinkar, a MERN stack developer from Nagpur building full-stack apps with MongoDB, Express.js, React.js and Node.js. Projects, experience and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "MERN stack developer, React developer portfolio, Node.js developer, full stack developer Nagpur, Atul Mohinkar",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Atul Mohinkar",
          jobTitle: "MERN Stack Developer",
          address: { "@type": "PostalAddress", addressLocality: "Nagpur", addressCountry: "IN" },
          sameAs: [
            "https://github.com/AtulMohinkar",
            "https://linkedin.com/in/atulmohinkar",
          ],
        }),
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="pf">
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Achievements />
          <Suspense fallback={<div className="section container">Loading…</div>}>
            <GithubDashboard />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
        <ToastContainer position="bottom-right" theme="dark" autoClose={4000} />
      </div>
    </ThemeProvider>
  );
}
