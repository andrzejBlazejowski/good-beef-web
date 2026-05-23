# good-beef-web

Next.js frontend for [goodbeef.pl](https://goodbeef.pl). The homepage renders the Good Beef landing layout and loads content from **good-beef-strapi** on the server.

## Prerequisites

- Node.js 20+
- [good-beef-strapi](../good-beef-strapi) running on port **1337**
- Landing assets synced from [good-beef-html/goodbeef-landing-page](../good-beef-html/goodbeef-landing-page)

## Setup

```bash
cd good-beef-web
cp .env.example .env.local
npm install
npm run sync:landing-assets
```

In **good-beef-strapi** (separate terminal):

```bash
cd good-beef-strapi
npm install
npm run develop
# First time or empty DB:
npm run seed:landing
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Description |
|----------|-------------|
| `STRAPI_URL` | Strapi API base URL (default `http://localhost:1337`) |
| `STRAPI_API_TOKEN` | Optional API token if public permissions are restricted |

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run sync:landing-assets` | Copy CSS/JS/images from `good-beef-html/goodbeef-landing-page/assets` into `public/landing/assets` |

## Architecture

- **Static theme**: `/public/landing/assets` (Corvex / Good Beef landing CSS and JS)
- **Dynamic content**: Strapi REST API (`lib/strapi/getHomePageData.ts`), fetched in `app/page.tsx` (Server Components)
- **Interactivity**: jQuery plugins loaded sequentially via `components/landing/LandingScripts.tsx`
