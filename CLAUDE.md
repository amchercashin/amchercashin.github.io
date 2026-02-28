# CLAUDE.md — AI Assistant Guide for amchercashin.github.io

## Project Overview

This is a minimal, hand-coded static portfolio hub site published via GitHub Pages at [https://amchercashin.github.io/](https://amchercashin.github.io/). It serves as a central landing page linking to external projects across three domains: Economics/Finance, Ethereum/NFTs, and Miscellaneous tools.

**There is no build system, no framework, and no dependencies.** Pure HTML and CSS only.

---

## Repository Structure

```
amchercashin.github.io/
├── index.html          # Entire site — single HTML file (143 lines)
├── main.css            # All styles (156 lines)
├── favicon-32x32.png   # Site favicon
├── img/                # All image assets (14 files, ~2 MB total)
│   ├── *.png           # PNG screenshots and logos
│   ├── *.jpg           # JPEG photos
│   ├── *.webp          # WebP images (preferred for photos)
│   ├── *.gif           # Animated GIFs for demos
│   └── *.svg           # SVG logos/icons
├── README.md           # Minimal README
└── LICENSE             # Unlicense (public domain)
```

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Markup | Vanilla HTML5 (semantic elements) |
| Styling | Vanilla CSS3 (flexbox, no preprocessor) |
| JavaScript | None (main.js referenced but unused) |
| Build | None |
| Dependencies | None |
| Deployment | GitHub Pages (auto-deploy from `master` branch) |
| Analytics | Google Analytics (UA-110058241-3) + Web-Stat pixel |

---

## Development Workflow

### Making Changes

1. Edit `index.html` or `main.css` directly — no build step needed.
2. Add images to the `img/` directory.
3. Commit and push to `master` — GitHub Pages deploys automatically.

```bash
git add index.html main.css img/
git commit -m "Describe what changed"
git push origin master
```

### Local Preview

Open `index.html` directly in a browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Or serve with any static server
python3 -m http.server 8000
```

No installation, compilation, or server setup required.

---

## HTML Conventions

### Content Layout

Content is organized into three `<section>` blocks separated by `<hr>` elements:

```html
<header>
  <!-- Site title and GitHub link -->
</header>

<section>
  <!-- Economics/Finance projects -->
</section>

<hr>

<section>
  <!-- Ethereum/NFT projects -->
</section>

<hr>

<section>
  <!-- Miscellaneous projects -->
</section>
```

### Adding a New Project Card

Each project is a `<figure>` element with an image and a `<figcaption>` containing links:

```html
<figure>
  <img src="img/your-image.png" alt="Description of image" />
  <figcaption>
    <p>Project Title</p>
    <p><a href="https://external-link.com">Link Text</a></p>
  </figcaption>
</figure>
```

- Place inside the appropriate `<section>`.
- Image must be in `img/` directory.
- Always include a meaningful `alt` attribute.
- Links in `<figcaption>` open in same tab by default (add `target="_blank"` for external sites if needed).

---

## CSS Conventions

### Layout

- Flexbox is used for all section layouts (`display: flex; flex-wrap: wrap`).
- Figures are fixed-size cards: `5cm × 5cm` on desktop, `2cm × 2cm` on mobile.
- Mobile breakpoint: `800px` (switches to `2cm` figure sizes).

### Hover Overlay

Each `<figure>` uses CSS to show the `<figcaption>` as an overlay on hover:

```css
figure figcaption {
  /* Initially hidden, visible on hover */
  background: rgba(79, 44, 16, 0.85); /* semi-transparent brown */
}
```

Do not change this hover pattern without updating both `figure img` and `figure figcaption` rules together.

### Image Styling

Images use `object-fit: cover` to fill the figure box uniformly. All images should be reasonably sized; prefer `.webp` over `.jpg`/`.png` for photographs to reduce file size.

---

## Image Guidelines

- **Format preferences:** `.webp` > `.gif` (for animations) > `.jpg` > `.png`
- **Naming:** Use descriptive, hyphen-separated names (e.g., `bond-groups.png`)
- **Size:** Keep individual images under 500 KB where possible
- **Location:** All images go in `img/` — no subdirectories

---

## Deployment

This repo follows the GitHub Pages `{username}.github.io` convention:

- **Master branch** (`master`) is the live deployment branch.
- GitHub Pages auto-deploys on every push to `master`.
- No workflow files or configuration needed.
- Live URL: `https://amchercashin.github.io/`

**Do not modify** `.github/` workflows or add Jekyll configuration (`_config.yml`) unless intentionally migrating away from the current plain-HTML setup.

---

## Content Sections

### Economics / Finance
Academic papers and quantitative tools (asset allocation, bond/stock clustering). Links point to MPRA (academic paper repository) or hosted tools.

### Ethereum
NFT collections and Ethereum utilities. Links point to OnCyber galleries, Etherscan contract pages, and GitHub repositories.

### Misc
Excel add-ins, browser projects, simulations. Links point to GitHub repositories and standalone hosted apps.

---

## Things to Avoid

- **Do not introduce a build system** unless explicitly requested — the simplicity is intentional.
- **Do not add JavaScript** without a clear need — the site works without it.
- **Do not add CSS frameworks** (Bootstrap, Tailwind) — custom CSS is maintained deliberately.
- **Do not change the `master` branch** for development work — use feature branches and PR.
- **Do not add linters or formatters** unless asked — no toolchain is configured.
- **Do not add a `_config.yml`** — this would activate Jekyll processing on GitHub Pages unnecessarily.

---

## Git Conventions

- **Default branch:** `master` (live production)
- **Development branches:** Create from `master`, merge via PR
- Commit messages are short and descriptive (e.g., `Add bond-groups project card`)
- No commit hooks, no CI, no automated testing

---

## Tracking

The site includes two analytics integrations embedded in `index.html`. Do not remove them when editing:

1. **Google Analytics** — `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-110058241-3">`
2. **Web-Stat** — `<div id="wts2174904">` tracking pixel near the bottom of `<body>`
