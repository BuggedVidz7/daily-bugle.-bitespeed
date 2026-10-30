import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import stories from "../data/stories.json";
import StoryCard, { formatDate } from "../components/StoryCard.jsx";
import SaveButton from "../components/SaveButton.jsx";

const categories = ["All", ...new Set(stories.map((s) => s.category))];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const featured = stories.find((s) => s.featured) ?? stories[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stories.filter(
      (s) =>
        (category === "All" || s.category === category) &&
        (!q || s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q))
    );
  }, [query, category]);

  const filtering = query.trim() || category !== "All";

  return (
    <div className="container">
      {!filtering && (
        <section className="hero">
          <Link to={`/story/${featured.id}`} className="hero-img">
            <img src={featured.image} alt="" />
          </Link>
          <div className="hero-body">
            <span className="tag">Featured · {featured.category}</span>
            <h1>
              <Link to={`/story/${featured.id}`}>{featured.title}</Link>
            </h1>
            <p>{featured.summary}</p>
            <time dateTime={featured.date}>{formatDate(featured.date)}</time>
            <SaveButton id={featured.id} />
          </div>
        </section>
      )}

      <section className="controls">
        <input
          type="search"
          placeholder="Search stories…"
          aria-label="Search stories"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="chips" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`chip ${c === category ? "active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {results.length ? (
        <section className="grid">
          {results.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </section>
      ) : (
        <p className="empty">No stories match your search.</p>
      )}
    </div>
  );
}
