export interface Routes {
  [index: string]: { url: string; label: string };
}

export const routes: Routes = {
  home: {
    url: '/',
    label: 'Home',
  },
  works: {
    url: '/works',
    label: 'Works',
  },
  blog: {
    url: '/blog',
    label: 'Blog',
  },
};
