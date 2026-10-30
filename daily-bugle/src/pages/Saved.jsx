import { Link } from "react-router-dom";
import stories from "../data/stories.json";
import StoryCard from "../components/StoryCard.jsx";
import { useSaved } from "../hooks/useSaved.jsx";

export default function Saved() {
  const { savedIds } = useSaved();
  const saved = stories.filter((s) => savedIds.includes(s.id));

  return (
    <div className="container">
      <h1 className="page-title">Saved Stories</h1>
      {saved.length ? (
        <section className="grid">
          {saved.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </section>
      ) : (
        <p className="empty">
          Nothing saved yet. <Link to="/">Browse stories</Link>
        </p>
      )}
    </div>
  );
}
