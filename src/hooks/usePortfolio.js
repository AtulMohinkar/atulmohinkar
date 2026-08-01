import { useEffect, useState } from "react";

/** True once the component has mounted in the browser (SSR-safe guard). */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

/** Typing / deleting animation across a list of words. */
export function useTypewriter(words, typeSpeed = 90, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return undefined;
    }
    const t = setTimeout(
      () =>
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
        ),
      deleting ? 45 : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, pause]);

  return text;
}

/** Tracks the id of the section currently in view for nav highlighting. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}
