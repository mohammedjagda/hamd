# HAMD Trading & Exports — Website

A premium, animated marketing site for HAMD Trading & Exports, built with Next.js 15
(App Router), React 19, TypeScript, Tailwind CSS and Framer Motion.

## Design system

- **Palette** pulled from the logo: deep monsoon green (`field`), sun-dried gold
  (`turmeric`), and a pale husk/jute background (`harvest`). Defined in `tailwind.config.ts`.
- **Type**: Playfair Display for headings, Inter for body copy, Poppins for small
  uppercase labels — loaded via `next/font/google` in `app/layout.tsx`.
- **Signature motif**: a dashed "trade route" line (`components/RouteMotif.tsx`) and
  glowing origin→market pins in the Global Markets section, echoing the shipping-route
  visual language from the logo itself rather than a generic dot-grid.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. This project needs a normal internet connection on first
build so `next/font` can fetch Google Fonts — the sandbox this was built in has network
restrictions, so fonts couldn't be verified there, but the rest of the build (type-check,
static generation) passed cleanly.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## What's real vs. placeholder

- **Logo**: your uploaded logo, used as-is in `public/images/logo.png`.
- **Copy**: written for this brief (about, products, process, FAQ, testimonials) — replace
  with your real company history, buyer quotes, and product specs where you have them.
- **Photography**: every image currently points to `picsum.photos` placeholders. Swap the
  `src` values in `lib/data.ts` and the section components for licensed photography before
  going live — do not ship placeholder photography to production.
- **Contact form**: submits client-side only (shows a success state). Wire it to an email
  service or API route (e.g. Resend, SendGrid, or a Next.js Route Handler) before launch.
- **Global map**: a stylised, illustrative map with approximate marker positions — not a
  geographically accurate projection. Fine for a marketing motif; swap for a mapping library
  (e.g. react-simple-maps) if you need precise geography.

## Structure

```
app/            — App Router: layout, home page, sitemap.ts, robots.ts
components/     — one component per section (Hero, Products, Contact, etc.)
lib/data.ts     — all dummy content in one place — edit this first
public/images/  — logo + any local images
```

## Before launch

- Replace placeholder images and copy (see above).
- Point `metadataBase` / canonical URLs in `app/layout.tsx` and `app/sitemap.ts` at your
  real domain.
- Wire the contact form to a real backend.
- Run `npm run build` and check Lighthouse once real images are in place (unoptimized
  placeholder photography will affect scores more than the code itself).
