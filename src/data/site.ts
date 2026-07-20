export const site = {
  name: 'Poor Louis Farms',
  location: 'Wasilla, Alaska',
  tagline: 'Wild botanicals and handcrafted creations inspired by the Alaskan wilderness.',
  description:
    'Explore the products, botanicals, seasonal rhythms, and small-batch craft of Poor Louis Farms in Wasilla, Alaska.',
  canonicalOrigin: 'https://epi13.github.io/PoorLouisFarms',
  squareUrl: 'https://poor-louis-farms.square.site/',
  squareShopUrl: 'https://poor-louis-farms.square.site/s/shop',
  email: 'collamore@poorlouisfarms.com',
  facebook: 'https://www.facebook.com/poorlouisfarms',
  ownerNames: ['Alexander Collamore', 'Katherine Collamore'],
  navigation: [
    { label: 'Products', href: '/products/' },
    { label: 'Ingredients', href: '/ingredients/' },
    { label: "How It's Made", href: '/making/' },
    { label: 'Farm & Seasons', href: '/farm/' },
    { label: 'Journal', href: '/journal/' }
  ],
  footerNavigation: [
    { label: 'About the farm', href: '/about/' },
    { label: 'Seasons', href: '/seasons/' },
    { label: 'Frequently asked questions', href: '/faq/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Shop gateway', href: '/shop/' }
  ]
} as const;

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^https?:\/\//.test(path) || path.startsWith('mailto:')) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}` || '/';
}
