import { NavLink, Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { useSaved } from "../hooks/useSaved.jsx";
import { useEffect } from "react";

export default function Header() {
  const [dark, setDark] = useLocalStorage(
    "bugle:dark",
    typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );
  const { savedIds } = useSaved();

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">The Daily Bugle</Link>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/saved">Saved ({savedIds.length})</NavLink>
          <button
            type="button"
            className="theme-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}
