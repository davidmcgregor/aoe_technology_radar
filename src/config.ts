import { Item, Radar } from './model';

export const radarName = 'AOE Technology Radar';
export const radarNameShort = 'Technology Radar';

export const quadrants = [
  'languages-and-frameworks',
  'methods-and-patterns',
  'platforms-and-aoe-services',
  'tools',
];

export const rings = [
  'adopt',
  'trial',
  'assess',
  'hold'
] as const;

export type Ring = typeof rings[number]

// todo: fix
export function assetUrl(file: string) {
  return '/' + file;
  // return `/techradar/assets/${file}`
}

const getPageNames = (radar: Radar) => {
  return [
    'index',
    'overview',
    'help-and-about-tech-radar',
    'aoe-toolbox',
    ...quadrants,
    ...getItemPageNames(radar.items),
  ]
}

export const getItemPageNames = (items: Item[]) => items.map(item => `${item.quadrant}/${item.name}`);

const messages:{[k: string]: string} = {
  'languages-and-frameworks': 'Languages & Frameworks',
  'methods-and-patterns': 'Methods & Patterns',
  'platforms-and-aoe-services': 'Platforms and Operations',
  'tools': 'Tools',
};

export const translate = (key: string) => (messages[key] || '-');

export function isMobileViewport() {
    // return false for server side rendering
    if (typeof window == 'undefined') return false;

    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 1200;
}

// const formatRelease = (release: moment.MomentInput) => moment(release, 'YYYY-MM-DD').format('MMM YYYY');
