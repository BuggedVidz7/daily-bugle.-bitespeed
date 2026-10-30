import { Link, useParams } from "react-router-dom";
import stories from "../data/stories.json";
import SaveButton from "../components/SaveButton.jsx";
import { formatDate } from "../components/StoryCard.jsx";

export default function Article() {
  const { id } = useParams();
  const story = stories.find((s) => String(s.id) === id);

  if (!story) {
    return (
      <div className="container">
        <p className="empty">Story not found. <Link to="/">Back to home</Link></p>
      </div>
    );
  }

  return (
    <article className="container article">
      <Link to="/" className="back">← Back to stories</Link>
      <span className="tag">{story.category}</span>
      <h1>{story.title}</h1>
      <div className="meta">
        <time dateTime={story.date}>{formatDate(story.date)}</time>
        <SaveButton id={story.id} />
      </div>
      <img src={story.image} alt="" />
      <p className="lede">{story.summary}</p>
      {story.content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </article>
  );
}
