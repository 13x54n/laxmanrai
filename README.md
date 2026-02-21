# Laxman Rai – Portfolio

A personal portfolio site built with **Next.js 16**, **React 19**, **TypeScript**, and the **Once UI** design system. Content is driven by MDX (blog posts, project pages) and centralized config, so you can customize copy, routes, and styling without touching layout code.

---

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Once UI** (`@once-ui-system/core`) – design system, components, tokens
- **MDX** – blog and project content via `@next/mdx` and `next-mdx-remote`
- **gray-matter** – frontmatter parsing for posts
- **Sass** – styling (with modern compiler)
- **Biome** – formatting; **ESLint** – linting

---

## Getting started

```bash
# Install dependencies
npm install

# Run development server (default: http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Other scripts: `npm run lint`, `npm run biome-write` (format).

---

## Project structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── blog/
│   │   ├── posts/          # Blog post .mdx files (slug = filename without .mdx)
│   │   └── [slug]/         # Dynamic blog post page
│   ├── work/
│   │   ├── projects/       # Project .mdx files
│   │   └── [slug]/         # Dynamic project page
│   ├── gallery/            # Gallery page
│   ├── api/rss/            # RSS feed endpoint
│   ├── layout.tsx          # Root layout (fonts, theme, providers)
│   ├── page.tsx            # Home
│   └── sitemap.ts          # Generated sitemap
├── components/             # React components (Header, Footer, blog, work, etc.)
├── resources/
│   ├── content.tsx         # All copy & content (person, home, about, blog, work, gallery)
│   ├── once-ui.config.ts   # Routes, theme, fonts, effects, Mailchimp, schema, etc.
│   ├── index.ts            # Re-exports config + content
│   └── custom.css          # Extra global styles
├── types/                  # TypeScript types for config and content
└── utils/
    └── utils.ts            # getPosts(), getBlogPosts() for MDX data
public/
└── images/                 # Static assets (avatar, gallery, project images)
```

---

## Configuration

Almost everything is controlled from two places: **content** (who you are, what you show) and **Once UI config** (routes, theme, behavior).

### 1. Content – `src/resources/content.tsx`

- **person** – Name, role, avatar path, email, location (timezone), languages.
- **social** – Links (GitHub, LinkedIn, Email, etc.) and `essential` flag for About page.
- **newsletter** – Title/description and display toggle for the newsletter block.
- **home** – Home page title, description, headline, featured work link, subline.
- **about** – About page title/description, intro, work experiences (company, role, achievements, images), table of content and calendar toggles.
- **blog** – Blog section label, title, description (path is `/blog`).
- **work** – Projects section label, title, description (path is `/work`).
- **gallery** – Gallery title/description and list of images (src, alt, orientation).

Edit this file to change all copy, links, and section visibility.

### 2. Once UI config – `src/resources/once-ui.config.ts`

- **baseURL** – Canonical URL for the site (used in meta tags, schema, sitemap). **Set this to your real domain.**
- **routes** – Which top-level routes exist: `"/"`, `"/about"`, `"/work"`, `"/blog"`, `"/gallery"`. Set to `false` to hide a section from nav and routing.
- **protectedRoutes** – Paths that require a password (see `.env`).
- **display** – Location, time, theme switcher toggles.
- **fonts** – Next.js Google Fonts (e.g. Geist, Geist Mono) for heading, body, label, code.
- **style** – Theme (dark/light/system), neutral/brand/accent colors, border style, surface, transition, scaling.
- **effects** – Background effects (mask, gradient, dots, grid, lines).
- **mailchimp** – Newsletter form action URL and effects for that block.
- **schema** – Default JSON-LD (e.g. Organization) and logo.
- **sameAs** – Social profile URLs for schema.
- **socialSharing** – Which platforms to show on blog post share (X, LinkedIn, email, copy link, etc.).

---

## Blog posts

- **Location:** `src/app/blog/posts/*.mdx`
- **URL:** `/blog/<slug>` where slug is the filename without `.mdx` (e.g. `modern-frontend-in-2026.mdx` → `/blog/modern-frontend-in-2026`).

**Frontmatter** (required where noted):

```yaml
title: "Post title"
summary: "Short description for cards and meta"
publishedAt: "2026-02-15"
tag: "Frontend"
# optional:
subtitle: "Optional subtitle"
image: "/images/..."
sample: true   # if true, post is hidden from blog list, sitemap, and RSS (used for sample/docs)
```

Only posts **without** `sample: true` appear on the blog index, sitemap, and RSS. Sample/template posts can stay in the repo with `sample: true` so they don’t show in the UI.

**RSS:** `/api/rss` – includes all non-sample blog posts.

---

## Work / projects

- **Location:** `src/app/work/projects/*.mdx`
- **URL:** `/work/<slug>` (e.g. `building-sunya-a-smart-contract-security-analyzer.mdx` → `/work/building-sunya-a-smart-contract-security-analyzer`).

**Frontmatter** example:

```yaml
title: "Project name"
publishedAt: "2024-06-26"
summary: "Short description"
images:
  - "/images/projects/..."
team:
  - name: "Your Name"
    role: "Role"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://..."
link: "https://..."   # optional external link
```

Projects are listed on the home and work pages via `getPosts(["src", "app", "work", "projects"])`.

---

## Environment variables

Copy `.env.example` to `.env` and adjust as needed.

- **PAGE_ACCESS_PASSWORD** – Password for routes listed in `protectedRoutes` in `once-ui.config.ts`. Without it, protected routes use the default from the example.

No other env vars are required for basic run/build.

---

## Deployment

1. Set **baseURL** in `src/resources/once-ui.config.ts` to your production URL.
2. Build: `npm run build` (or your host’s build command).
3. Start: `npm start` or use the host’s Node/start command.
4. Optional: set `PAGE_ACCESS_PASSWORD` in the host’s environment for protected routes.

The site is static-friendly where possible (blog and work pages use `generateStaticParams`), with API routes only for RSS (and any you add).

---

## License

Portfolio content and customizations are yours. The underlying template (Once UI / Magic Portfolio) may have its own license—check the `@once-ui-system/core` and template terms as applicable.
