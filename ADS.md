# Adsterra — bloodstrike.wiki

Native Banner is reserved for the homepage and guide pages, immediately after Quick Answer (`afterQuickAnswer` in `sites/bloodstrike/ads.config.ts`). The 404 page does not include the slot.

The zone is a placeholder. `id` and `scriptSrc` are empty, so `resolveAdPlacement` is inactive and the layout emits no script.

| Field | Value | Used in the script? |
| --- | --- | --- |
| Zone key | empty | No script until a real id is set |
| Script src | empty | No |
| Format | `native-banner` | Declared only |

Do not paste a zone key from another game. Adult and sensitive categories stay off.

`analytics.gaId` in `sites/bloodstrike/site.config.ts` is an empty string. The base layout loads gtag only when that string is non-empty.
