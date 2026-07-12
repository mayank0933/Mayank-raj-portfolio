# Mayank Raj — Portfolio

A premium, dark-themed, glassmorphic personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Live sections: Hero (terminal boot-sequence intro) · About · Education timeline · Skills · Career Goal · Projects · Achievements · Certificates · Contact form · Footer.

---

## 1. Folder structure

```
mayank-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Assembles all sections
│   ├── globals.css         # Design tokens, glass utility, animations
│   ├── opengraph-image.tsx # Auto-generated OG share image
│   └── sitemap.ts          # Auto-generated sitemap.xml
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── CareerGoal.tsx
│   ├── FutureSections.tsx  # Projects / Achievements / Certificates
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Loader.tsx
│   └── ScrollToTop.tsx
├── lib/
│   └── data.ts              # ⭐ ALL your content lives here — edit this file first
├── public/
│   ├── favicon.svg
│   ├── profile-placeholder.svg
│   └── robots.txt
├── tailwind.config.ts
├── next.config.js
└── package.json
```

**`lib/data.ts` is the single source of truth.** Your name, bio, education, skills, contact info, socials, and (once you have them) projects/achievements/certificates and resume link all live there. You almost never need to touch component files to update content.

---

## 2. Local setup

Requires **Node.js 18.17+**.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

---

## 3. Customization checklist

| What | Where |
|---|---|
| Replace profile photo | Add `profile.jpg` to `/public`, then set `profile.photo` in `lib/data.ts` to `/profile.jpg` |
| Add your resume | Add `Mayank_Raj_Resume.pdf` to `/public`, set `profile.resumeUrl` in `lib/data.ts` |
| Add real GitHub/LinkedIn/X links | `socials` object in `lib/data.ts` |
| Add projects | Push entries into the `projects` array in `lib/data.ts` — cards render automatically, replacing the "Coming soon" state |
| Add achievements / certificates | Same pattern — `achievements` / `certificates` arrays |
| Update deployed domain (for SEO/OG) | `siteMeta.url` in `lib/data.ts` |
| Contact form behavior | `components/Contact.tsx` currently opens the visitor's email client via `mailto:` after validating name/email/message client-side. Swap this for a backend (e.g. Formspree, Resend, or an API route) if you want submissions delivered without relying on the visitor's mail client. |

---

## 4. Design system reference

- **Palette:** graphite background (`#0A0E12`), circuit-trace teal accent (`#4DD9C7`), solder-amber accent (`#F2A65A`).
- **Type:** Space Grotesk (display/headings), IBM Plex Sans (body), IBM Plex Mono (labels, data, timestamps).
- **Signature element:** the hero's terminal boot-sequence typing animation, echoing the ECE/electronics theme.
- Reduced motion is respected (`prefers-reduced-motion`), and all interactive elements have visible keyboard focus rings.

---

## 5. Deployment

### Option A — Vercel (recommended, zero config)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). Leave build settings as default (`npm run build`).
4. Click **Deploy**. Your site goes live at `your-project.vercel.app`, with a custom domain optional under Project → Settings → Domains.

CLI alternative:
```bash
npm i -g vercel
vercel
```

### Option B — Netlify

1. Push the project to GitHub.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Install the **Next.js Runtime** plugin (Netlify auto-suggests `@netlify/plugin-nextjs` — accept it; it handles SSR/edge routes for you).
6. Deploy. Netlify gives you a `*.netlify.app` URL, with custom domains under Site settings → Domain management.

### Option C — GitHub Pages (static export)

GitHub Pages only serves static files, so this app must be exported as static HTML. Note this disables the dynamic `opengraph-image.tsx` route (replace it with a static image in `/public` if you go this route) since GitHub Pages can't run edge functions.

1. In `next.config.js`, uncomment the two static-export lines:
   ```js
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     // If deploying to https://<user>.github.io/<repo>/ (project page, not user/org page):
     // basePath: '/<repo>',
   };
   ```
2. Build and export:
   ```bash
   npm run build
   ```
   Static files are generated into the `/out` folder.
3. Push `/out` to the `gh-pages` branch (or use a GitHub Action):
   ```bash
   npm i -g gh-pages
   gh-pages -d out
   ```
4. In your repo settings → **Pages**, set the source branch to `gh-pages`.
5. Your site is live at `https://<username>.github.io/<repo>/`.

---

## 6. Performance & accessibility notes

- Fonts are loaded via `next/font/google` (self-hosted, no layout shift, no external request at runtime).
- Images use `next/image` for automatic optimization — swap the placeholder SVG for a real photo and it will be served responsively.
- All animations respect `prefers-reduced-motion`.
- Semantic landmarks (`header`, `main`, `section`, `footer`) and labelled interactive controls are used throughout for screen readers.
- Run a Lighthouse audit after deployment (Chrome DevTools → Lighthouse) — this structure is built to score 90+ across Performance/Accessibility/Best Practices/SEO, but real-world scores depend on your hosting and the final profile photo/resume file sizes you add.
