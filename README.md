# peshalparajuli.com.np

Personal website of Peshal Parajuli, built with React + Vite.

## Edit content

All text (experience, education, skills, links) lives in `src/data.js`. Change it there and rebuild.
Styles are in `src/styles.css`; components are in `src/components/`.

## Run locally

```bash
npm install
npm run dev        # opens a local preview at http://localhost:5173
```

## Build and deploy

```bash
npm run build      # creates the dist/ folder
```

Upload everything inside `dist/` to your hosting's web root (usually `public_html`).
The build uses relative paths, so it also works in a subfolder.

Prefer a single file? `npm run build:single` puts the whole site into `dist-single/index.html`.

Free hosting options that work with this project: Netlify, Vercel, Cloudflare Pages or GitHub Pages
(build command `npm run build`, output folder `dist`). Point your `.com.np` domain's DNS at the host.
