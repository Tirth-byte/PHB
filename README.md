# PANDEY: THE UNSOLVED MYSTERY™

A compact, chapter-based birthday investigation built with Vite, React, TypeScript, Motion and Lucide icons. It includes six navigable scenes, a filterable authentic-meme viewer, a five-round meme battle, an escalating forbidden experiment, opt-in audio, and a downloadable birthday-card finale.

All seven supplied photo files are used from optimized copies; originals remain untouched in `PANDEY/`. The active media registry lives in `src/data/media.ts`. Asset provenance, active counts, omissions, and deployment caveats are documented in `public/memes/ASSET-MANIFEST.md`.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a Git repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

Or with the Vercel CLI:

```bash
npm install -g vercel
vercel
```

No environment variables, backend, database, authentication, paid API, or remote media host is required. Google Fonts gracefully fall back to system fonts if unavailable.

## Interaction notes

- Sound starts off and must be enabled by the visitor. Once enabled, “Carefree” by Kevin MacLeod loops at low volume; reaction sounds temporarily duck the music.
- Use the chapter dots or Previous/Next controls to navigate. Page Up/Page Down also changes chapters.
- The meme room supports six responsive composition layouts, arrow keys, touch swipes, fullscreen viewing, random selection, native sharing, and high-resolution captioned PNG exports.
- The final birthday-card button renders and downloads a local PNG in the browser.

## Asset caveat

The supplied pack downloaded 36 recognizable classic meme templates; 13 were curated into the active 18-item viewer alongside local cats and Pandey-exclusive entries. Authentic Office/Mr. Bean reaction files were not supplied and are not represented. Review the rights status of classic meme imagery before public or commercial deployment.

Background music: “Carefree” by Kevin MacLeod (incompetech.com), downloaded from Wikimedia Commons and licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). The recording is stored locally and was not modified.
