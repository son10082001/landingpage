import { appConfig } from '.';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: 'QH88',
  metaTitle: 'QH88',
  description: 'QH88',
  ogImage: `${appConfig.appUrl}/og-image.jpg`,
};
