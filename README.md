# sandhujasnoor.com — Jasnoor Sandhu Portfolio

Personal portfolio site for Jasnoor Sandhu, built with Next.js 14 (App
Router) and TypeScript. Visual design/motion is adapted from a design
reference; all content (projects, experience, education, skills) is
Jasnoor's own.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — routes: home page (`page.tsx`) and project detail pages under
  `app/projects/<slug>/page.tsx`.
- `components/` — `Nav`, `Hero`, `Projects`, `Values`, `Background`,
  `About`, `Footer`, plus shared behavior (`Cursor`, `useReveal`) and
  `components/projects/*` for individual project write-ups.
- `public/Jasnoor_Sandhu_Detailed_CV.html` — detailed resume page, linked from
  the About section.

## Deployment (GitHub + Vercel)

1. Push this repository to GitHub (e.g. `sandhujasnoor.com`).
2. In [Vercel](https://vercel.com), click **New Project** → import the
   GitHub repo → Vercel auto-detects Next.js → **Deploy**.
3. In the Vercel project's **Settings → Domains**, add `sandhujasnoor.com`
   (and `www.sandhujasnoor.com` if desired).
4. At your domain registrar, add the DNS records Vercel shows you
   (typically an `A` record for the apex domain and a `CNAME` for `www`
   pointing to `cname.vercel-dns.com`). DNS propagation can take up to a
   few hours.
5. Once DNS verifies, Vercel issues an SSL certificate automatically and
   the site is live at `https://sandhujasnoor.com`.

## Content updates

Project cards, timeline entries, skills, and contact links are defined as
typed data arrays at the top of their respective components — edit copy
there without touching JSX/markup.
