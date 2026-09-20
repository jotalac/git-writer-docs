import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/git-writer-docs/',
  title: 'GitWriter Docs',
  description: 'A minimalistic, cross-platform Git-backed markdown editor.',
  head: [
    ['link', { rel: 'icon', href: 'favicon.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/git-writer-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Installation', link: '/installation' },
      { text: 'Usage & Shortcuts', link: '/usage' },
      { text: 'Git Sync', link: '/git-sync' },
      { text: 'Architecture', link: '/architecture' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Installation', link: '/installation' },
          { text: 'Usage & Shortcuts', link: '/usage' },
          { text: 'Git Sync', link: '/git-sync' },
        ],
      },
      {
        text: 'Technical Details',
        items: [
          { text: 'Architecture & Internals', link: '/architecture' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jotalac/git-writer' },
    ],
  },
});
