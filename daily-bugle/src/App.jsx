import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Article from "./pages/Article.jsx";
import Saved from "./pages/Saved.jsx";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story/:id" element={<Article />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="*" element={<p className="container empty">Page not found.</p>} />
        </Routes>
      </main>
      <footer className="footer">© The Daily Bugle · Fan-made demo project</footer>
    </>
  );
}
