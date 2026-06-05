# Herr Lim Control Panel

The owner control panel is powered by Sanity Studio in `studio/`.
The public website stays in Astro and reads menu data from Sanity at build time.

## What the owner can edit

- Menu categories
- Dish names in German and English
- Dish descriptions in German and English
- Prices
- Tags such as vegetarian, spicy, or very spicy
- Dish photos
- Basic website settings such as phone, address, and external links

## Local backtest without Sanity

Run the website build:

```bash
npm run build
```

If no Sanity project ID is configured, the website automatically uses
`src/data/menu.js` as fallback data. This lets you test safely without a CMS.

## Local backtest with Sanity

1. Create a Sanity project at `sanity.io/manage`.
2. Copy `.env.example` to `.env`.
3. Fill in:

```bash
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_STUDIO_PROJECT_ID=your_project_id
```

4. Start the control panel:

```bash
cd studio
npm run dev
```

5. Add one category and one dish in Sanity Studio.
6. In another terminal, build the public site:

```bash
npm run build
```

If Sanity has published menu data, the built site will use it. If Sanity is
empty or unreachable, the site falls back to `src/data/menu.js`.

## Vercel handoff

Set these environment variables in Vercel:

```bash
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
```

Then add a Sanity webhook that triggers a Vercel deploy whenever the owner
publishes menu changes.

## Recommended acceptance test

Before selling or handing over the website:

1. Change a dish price in Sanity.
2. Publish the change.
3. Trigger a Vercel rebuild.
4. Confirm the new price appears on the live website.
5. Change it back and repeat once more.

That proves the owner can update the menu without touching code.
