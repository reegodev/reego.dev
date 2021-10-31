export interface SocialLink {
  url: string
  icon: string
  label: string
  name: string
}

export const socialLinks: SocialLink[] = [
  {
    url: 'https://github.com/reegodev',
    icon: '/github-dark.svg',
    label: 'github.com/reegodev',
    name: 'Github profile',
  },
  {
    url: 'https://twitter.com/reegodev',
    icon: '/twitter.svg',
    label: 'twitter.com/reegodev',
    name: 'Twitter profile',
  },
  {
    url: 'https://www.polywork.com/reegodev',
    icon: '/polywork.svg',
    label: 'polywork.com/reegodev',
    name: 'Polywork profile',
  },
]