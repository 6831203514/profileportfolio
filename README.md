# Profile Portfolio — Min Yu Naing

A simple, static personal portfolio site. Pure HTML, CSS, and JavaScript —
no build step, no frameworks. Drop the folder on any static host (GitHub
Pages, Netlify, Vercel, your own server) and it just runs.

## Folder layout

```
profileportfolio/
├── index.html          # The single page
├── css/
│   ├── reset.css       # Tiny CSS reset
│   ├── styles.css      # Main styles (layout, type, components)
│   └── responsive.css  # Tablet + mobile overrides
├── js/
│   ├── nav.js          # Mobile nav toggle
│   ├── skills.js       # Renders + animates skill bars
│   └── year.js         # Auto-updates the footer year
└── assets/
    └── min-yu-naing.jpg
```

## Running it locally

Open `index.html` directly in a browser, or serve the folder with any
static server:

```bash
# Python 3
python3 -m http.server 8000

# Node (if you have it)
npx serve .
```

Then visit http://localhost:8000.

## Publishing on GitHub Pages

1. Create a new GitHub repository (for example `profileportfolio`).
2. Upload everything inside this folder to the repo root.
3. Go to **Settings → Pages**, pick the `main` branch and the `/ (root)`
   folder, and save.
4. Your site goes live at `https://<your-username>.github.io/profileportfolio/`.

## Editing content

- Text, links, jobs, certifications → `index.html`
- Colors, fonts, spacing → `css/styles.css` (CSS variables at the top)
- Skill list and levels → top of `js/skills.js`
- Profile photo → replace `assets/min-yu-naing.jpg` (keep the filename, or
  update the `<img src>` in `index.html`)
