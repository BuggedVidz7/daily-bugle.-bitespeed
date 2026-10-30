import { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage.js";

const SavedContext = createContext(null);

export function SavedProvider({ children }) {
  const [savedIds, setSavedIds] = useLocalStorage("bugle:saved", []);

  const isSaved = (id) => savedIds.includes(id);
  const toggleSaved = (id) =>
    setSavedIds((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]));

  return (
    <SavedContext.Provider value={{ savedIds, isSaved, toggleSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export const useSaved = () => useContext(SavedContext);
