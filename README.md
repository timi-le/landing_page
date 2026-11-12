# TIMILEHIN OLAPADE — FABLE DESIGN HANDOFF

A high-resolution visual direction + a working **front-end concept prototype** for a multidisciplinary personal website.

## What's included

- `preview/00-reference-board.png` — start here; four high-quality page directions in one image.
- `preview/01-desktop-home.png` — desktop home art-direction mockup.
- `preview/02-mobile-home.png` — mobile home art-direction mockup.
- `preview/03-technology.png` through `06-culture.png` — individual section mockups.
- `assets/timilehin-portrait.webp` — user's selected portrait.
- `assets/design-reference.jpg` — user's original design inspiration.
- `index.html`, `styles.css`, `app.js` — self-contained static interactive website concept with route switching, mobile navigation and research filters.
- `FABLE_MASTER_PROMPT.md` — paste this into Fable (or your AI site-building environment).
- `DESIGN_SYSTEM.md` — palette, type, layout and responsive design principles.
- `CONTENT_INVENTORY.md`, `CONTENT_MANIFEST.json` — editorial structure and factual publication safeguards.
- `VENTURE_SITE_PROMPTS.md` — optional separate briefs for dedicated Haldane and ATRX sites.

## How to feed the package to Fable

1. Start a new website project in Fable.
2. Provide `preview/00-reference-board.png`, `preview/01-desktop-home.png`, and `preview/02-mobile-home.png` as primary visual references. Add the four world-specific mockups afterward.
3. Upload the portrait and reference image if the platform permits. Do not allow the AI to replace the person's identity.
4. Paste the full contents of `FABLE_MASTER_PROMPT.md`. If Fable accepts uploaded files or repository import, provide `index.html`, `styles.css`, `app.js`, and the content manifest too. **Do not assume the service can import ZIPs or plain HTML directly; platform support varies.**
5. Request Phase A first: homepage + four worlds + responsive navigation, show previews at 1440px and 390px. Iterate until the design matches the visual references.
6. Request Phase B: real content model, case/research templates, filters, empty states.
7. Request Phase C: accessibility, SEO, performance, working links, reduced-motion, polish.
8. Complete factual and IP review; then configure approved domain and publish using Fable's supported deployment process.

## How to open the static prototype locally

From the extracted package root:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. The prototype does not need a build step, backend, package manager or API key.

> This is a static prototype, not a fully deployed production website. Route switching is hash-based within the single HTML app, the charts are decorative/illustrative, content is scaffolding, and no CMS, contact backend, analytics, authentication or deployment is included. Fable should create those features where appropriate rather than pretending they exist.

## Next content to provide

- Exact project titles, approved descriptions, architecture diagrams, links, demos and verified outcomes.
- Approved Haldane and ATRX messaging and deployment URLs.
- Canonical public GitHub and publication URLs.
- Music links, photographs, books and personal notes.
- A custom domain for the personal website (not necessarily a Haldane subdomain).

## Editorial safety

The code deliberately avoids fake results, fabricated client names, invented music taste, performance statistics, and undisclosed proprietary implementation. Keep draft content unpublished until checked.
