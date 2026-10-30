import { useSaved } from "../hooks/useSaved.jsx";

export default function SaveButton({ id, className = "" }) {
  const { isSaved, toggleSaved } = useSaved();
  const saved = isSaved(id);

  return (
    <button
      type="button"
      className={`save-btn ${saved ? "is-saved" : ""} ${className}`}
      aria-pressed={saved}
      onClick={(e) => {
        e.preventDefault();
        toggleSaved(id);
      }}
    >
      {saved ? "★ Saved" : "☆ Save for later"}
    </button>
  );
}
