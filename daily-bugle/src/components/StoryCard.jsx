import { Link } from "react-router-dom";
import SaveButton from "./SaveButton.jsx";

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function StoryCard({ story }) {
  return (
    <article className="card">
      <Link to={`/story/${story.id}`} className="card-link">
        <img src={story.image} alt="" loading="lazy" />
        <div className="card-body">
          <span className="tag">{story.category}</span>
          <h3>{story.title}</h3>
          <time dateTime={story.date}>{formatDate(story.date)}</time>
        </div>
      </Link>
      <div className="card-actions">
        <SaveButton id={story.id} />
      </div>
    </article>
  );
}
