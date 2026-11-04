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
      { text: 'Guide', link: '/introduction' },
      { text: 'Tutorial', link: '/tutorial/first-notebook' },
      { text: 'Encryption', link: '/encryption' },
      { text: 'Architecture', link: '/architecture' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Installation', link: '/installation' },
        ],
      },
      {
        text: 'Tutorial',
        items: [
          { text: '1. Your first notebook', link: '/tutorial/first-notebook' },
          { text: '2. Connect a Git remote', link: '/tutorial/connect-remote' },
          { text: '3. Add another device', link: '/tutorial/second-device' },
          { text: '4. Encrypt a notebook', link: '/tutorial/encrypt-notebook' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Editor & Shortcuts', link: '/usage' },
          { text: 'Syncing & Conflicts', link: '/git-sync' },
          { text: 'Settings', link: '/settings' },
        ],
      },
      {
        text: 'Technical Details',
        items: [
          { text: 'How Encryption Works', link: '/encryption' },
          { text: 'Architecture & Internals', link: '/architecture' },
        ],
      },
    ],

    outline: [2, 3],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jotalac/git-writer' },
    ],
  },
});
