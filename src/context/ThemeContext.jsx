import { createContext, useContext, useEffect, useState } from "react";

/** Theme context with localStorage persistence. Defaults to dark. */
const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  // Read the persisted theme after hydration to avoid SSR mismatches.
  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? window.localStorage.getItem("pf-theme") : null;
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.add("portfolio-body");
    window.localStorage.setItem("pf-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
