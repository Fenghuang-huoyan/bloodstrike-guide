export const siteConfig = {
  siteName: 'Blood Strike Guide',
  domain: 'bloodstrike.wiki',
  url: 'https://bloodstrike.wiki',
  gameTitle: 'Blood Strike',
  steamAppId: 3199170,
  steamUrl: 'https://store.steampowered.com/app/3199170/Blood_Strike/',
  supportEmail: 'bloodstrike@global.netease.com',
  social: [
    { href: 'https://www.blood-strike.com/', label: 'Official site' },
    { href: 'https://www.blood-strike.com/news/', label: 'Official news' },
    { href: 'https://discord.gg/bloodstrike', label: 'Discord' },
  ],
  developer: 'NetEase Games',
  publisher: 'NetEase Games',
  tagline: 'Unofficial English fan guide for the free hero-shooter: codes, Strikers, weapons, and modes.',
  locale: 'en',
  themeColor: '#0b0e10',
  contentRoot: 'bloodstrike',
  homeTitle: 'Blood Strike Guide — Codes, Strikers, Weapons & Modes',
  homeDescription:
    'Unofficial English Blood Strike wiki for Steam AppID 3199170. Dated redeem-code status, Striker abilities, weapon notes, the beginner loop, and mode explainers for bloodstrike.wiki. Not affiliated with NetEase Games.',
  analytics: {
    gaId: 'G-YZ05QF1DFN',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Blood Strike: the BLOOD STRIKE logo over a squad of armed operators in red and black tactical gear',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Blood Strike: the white and red BLOOD STRIKE logo over a dark squad of operators',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'bloodstrike.wiki is an unofficial fan-made guide for Blood Strike. It is not affiliated with, endorsed by, or sponsored by NetEase Games, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. Redeem codes expire and change without notice — verify in-game. This site does not process top-ups or account recovery. Not responsible for bans, expired codes, or purchase decisions. The support address in the footer is NetEase’s contact from the Steam store page. Mail sent there does not reach the people who edit this wiki.',
  nav: [
    { href: '/codes', label: 'Codes' },
    { href: '/strikers', label: 'Strikers' },
    { href: '/weapons', label: 'Weapons' },
    { href: '/beginner-guide', label: 'Start' },
    { href: '/modes', label: 'Modes' },
  ],
  moreNav: [
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
  ],
  footerNav: [
    { href: '/codes', label: 'Codes' },
    { href: '/strikers', label: 'Strikers' },
    { href: '/weapons', label: 'Weapons' },
    { href: '/beginner-guide', label: 'Beginner guide' },
    { href: '/modes', label: 'Modes' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
  ],
  version: {
    label: 'Updated Nov 2026',
    detail:
      'Verified against Steam AppID 3199170 store data, SteamCharts player telemetry, and NetEase official Blood Strike patch announcements.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/3199170/Blood_Strike/',
      label: 'Steam store page',
    },
    {
      href: 'https://www.blood-strike.com/',
      label: 'Official Blood Strike site',
    },
    {
      href: 'https://www.blood-strike.com/news/',
      label: 'Official news',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
