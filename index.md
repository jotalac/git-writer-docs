---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GitWriter"
  text: A Git-backed notes app.
  tagline: Minimalistic markdown notes taking app.
  image:
    src: /git-writer-logo.svg
    alt: GitWriter Logo
  actions:
    - theme: brand
      text: Get started
      link: /introduction
    - theme: alt
      text: Usage Guide
      link: /usage
    - theme: alt
      text: Architecture
      link: /architecture

features:
  - title: Cross-Platform
    details: Built with Kotlin & Compose Multiplatform, running natively across Linux, macOS, Windows, Android, and iOS.
    icon:
      dark: /devices-white.svg
      light: /devices-black.svg
      width: 40

  - title: Git-Backed
    details: Your notes live in standard Git repositories. Host them on GitHub, GitLab, Codeberg, self-hosted Forgejo, or your private server.
    icon:
      dark: /iconmonstr-git-white.svg
      light: /iconmonstr-git-black.svg
      width: 40

  - title: Open Source & Extensible
    details: GitWriter is completely free and open source. Zero proprietary backends, zero vendor lock-in.
    icon:
      dark: /github-white.svg
      light: /github-black.svg
      width: 40
    link: https://github.com/jotalac/git-writer
---
