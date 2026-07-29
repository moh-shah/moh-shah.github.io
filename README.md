# Portfolio

A small, dependency-free portfolio site: two HTML files, total, forever.

## What changed from the old setup

- **One project = one entry in a data file**, not a new HTML page.
  Add / edit / remove projects in `assets/js/projects.js`.
- **One shared header and footer**, built in one place and injected into
  every page automatically — `assets/js/main.js` → `renderHeader()` /
  `renderFooter()`. Edit them once, they update on every page.
- **One detail page template** (`project.html`) renders whichever project
  is requested via `project.html?slug=your-slug`, instead of a separate
  hand-copied HTML file per project.

## File structure

```
index.html              ← homepage (hero, work grid, about, contact)
project.html             ← single template for every project detail page
assets/
  css/style.css          ← all styling
  js/projects.js          ← ← YOUR PROJECT DATA (edit this to add work)
  js/main.js               ← site config (name/bio/links) + render logic
  img/                     ← put your images here
```

## How to add a new project

Open `assets/js/projects.js` and copy one of the existing objects, e.g.:

```js
{
  slug: "my-new-game",
  title: "My New Game",
  blurb: "A short one-line summary shown on the card.",
  status: "LIVE",              // LIVE | SHIPPED | IN DEV | PROTOTYPE
  year: "2026",
  role: "Solo developer",
  tech: ["Unity", "C#", "Photon"],
  cover: "assets/img/my-new-game/cover.jpg",   // or "" for a placeholder
  summary: [
    "What the project is and who it's for.",
    "A second paragraph on the technical or design challenge, if useful."
  ],
  highlights: [
    "Built real-time matchmaking for 1v1 ranked play",
    "Reduced client memory footprint by 40%"
  ],
  gallery: ["assets/img/my-new-game/1.jpg", "assets/img/my-new-game/2.jpg"],
  links: { live: "https://...", source: "https://github.com/...", video: "" }
},
```

Save the file. That's it — it now appears in the homepage grid, in the
hero's status console, and at `project.html?slug=my-new-game`. No new
HTML file needed.

## How to edit your name / bio / nav / socials

All in `assets/js/main.js`, at the top, in the `SITE` object.

## First-time setup checklist

Everything marked `TODO` needs a real value before you publish:

1. `assets/js/main.js` → fill in `SITE.bio`, `SITE.email`, `SITE.location`,
   `SITE.social`, `SITE.skills`.
2. `assets/js/projects.js` → replace every `TODO` field for each project
   (status, year, role, tech, summary, highlights, links). Delete any
   placeholder projects you don't want to keep.
3. Add real cover images to `assets/img/<project-slug>/` and reference
   them in the `cover` / `gallery` fields (optional — a placeholder panel
   shows automatically if `cover` is left as `""`).

## Deploying on GitHub Pages

This repo is already named `moh-shah.github.io`, so GitHub Pages will
serve it automatically once these files are on the `main` branch:

1. Delete the old files: `battleArena.html`, `courtPiece.html`,
   `golshifteh.html`, `liveops.html`, `matchRoom.html`, `mintHeroes.html`,
   `solitare.html`, `upsideDown.html`, `versus.html`, `zimoGames.html`,
   `index.js`, and the old `css/` / `sass/` folders (all superseded by
   this structure).
2. Copy everything from this folder into the root of your repo.
3. Commit and push to `main`.
4. In your repo → **Settings → Pages**, confirm the source is
   "Deploy from a branch" → `main` → `/ (root)`.
5. Visit `https://moh-shah.github.io` after a minute or two.

No build step, no dependencies to install — it's plain HTML/CSS/JS, so
this works exactly the same way your old site did, just with one place
to edit things instead of ten.
