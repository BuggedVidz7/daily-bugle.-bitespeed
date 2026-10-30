# The Daily Bugle

A responsive news web app for Spider-Man stories, built with **React + Vite** (no backend).

**Live demo:** _add your Vercel/Netlify link here after deploying_

## Features
- Home page with a featured story and a grid of story cards (image, title, category, date)
- Full article page (`/story/:id`) when a card is clicked
- Search (title and summary) and category filter, which can be combined
- "Save for later" on every card and article, plus a Saved Stories page (`/saved`); saved stories persist across refreshes using `localStorage`
- 10 stories stored in `src/data/stories.json`
- Responsive layout (mobile, tablet, desktop) with shared colour, typography and spacing tokens in `src/index.css`
- **Bonus:** dark mode toggle (remembered across visits, defaults to the OS preference)

## Run locally
```bash
cd daily-bugle
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Project structure
```
src/
  data/stories.json      story data
  hooks/                 useLocalStorage, useSaved (context for saved IDs)
  components/            Header, StoryCard, SaveButton
  pages/                 Home, Article, Saved
```

## Deploy
- **Vercel:** import the repo, set the *Root Directory* to `daily-bugle`. `vercel.json` handles SPA routing.
- **Netlify:** base directory `daily-bugle`, build command `npm run build`, publish directory `dist`. `public/_redirects` handles SPA routing.

## How it works (quick explainer)
- Routing: React Router; `/story/:id` looks the story up in the JSON by id.
- Saved stories: only the IDs are stored (`bugle:saved` in `localStorage`) and exposed app-wide through a React context, so the header count, cards and Saved page stay in sync.
- Filtering: `useMemo` filters the list by category and search text; the hero hides while a filter is active.
- Theme: CSS variables swapped via `data-theme` on `<html>`.

Story images are placeholders from picsum.photos. This is a fan-made demo project.
