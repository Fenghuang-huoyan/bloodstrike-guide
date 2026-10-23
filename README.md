# Blood Strike Guide

Unofficial English fan guide for [Blood Strike](https://store.steampowered.com/app/3199170/Blood_Strike/) (Steam AppID **3199170**), aimed at **bloodstrike.wiki**.

Not affiliated with NetEase Games, Valve, or Steam. The site does not redeem codes, sell top-ups, or recover accounts.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://bloodstrike.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/bloodstrike/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/bloodstrike/ads.config.ts` | Adsterra Native Banner placeholder after Quick Answer |
| Active site | `sites/active` → `bloodstrike` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/bloodstrike/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so gtag is not injected. The Adsterra zone id is empty, so no ad script is injected. The 404 page has no ad slot.

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy.
