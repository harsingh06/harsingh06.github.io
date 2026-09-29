# Harmeet Singh — personal site

An Astro static site with JSON-driven portfolio pages and a Markdown blog.

## Requirements

- Node.js 22 or newer
- npm

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL shown by Astro (usually `http://localhost:4321/`). For a production check:

```bash
npm run build
npm run preview
```

## Edit content

- `src/data/profile.json`: introduction, expertise, skills, certifications and contact text
- `src/data/projects.json`: work highlights and community projects; set a `logo` field to a path such as `images/my-logo.svg` after placing it in `public/images/`
- `src/data/experience.json`: roles and achievements
- `src/data/blog-topics.json`: planned topics, labels, tags and last-updated timestamps
- `src/content/blog/*.md`: published articles; copy the sample file and update its frontmatter (`title`, `description`, `pubDate`, `tags`, `category`, `sample`)
- `src/styles/site.css`: visual design

The article `architecture-decision-records.md` is demonstration content and visibly marked as a sample. Replace it and set `sample: false` when publishing your own article. Build-time JSON imports mean edits appear after a rebuild and deployment; the browser does not fetch the JSON at runtime.

## Put it on GitHub Pages

1. Create a GitHub repository and put these source files on its `main` branch. Do not commit `node_modules/` or `dist/`.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. Push to `main`, or start **Deploy site to GitHub Pages** from the Actions tab. The workflow runs `npm ci`, builds the site, and publishes `dist/`.
4. Find the URL in the workflow's **deploy** job or the repository's Pages settings.

The workflow sets Astro's base path to `/<repository>/` for normal project repositories and `/` for a `<username>.github.io` repository. If you use a custom domain, set `SITE_BASE_PATH=/` for that build and configure the domain in GitHub Pages.

## Site structure

```text
src/data/                 JSON page content and planned topics
src/content/blog/         Markdown articles
src/pages/                Astro page templates and routes
src/layouts/              Shared shell
src/styles/               CSS
public/                   Browser JavaScript and future image assets
```
