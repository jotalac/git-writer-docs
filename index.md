---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GitWriter"
  text: A Git-backed notes app.
  tagline: Minimalistic Markdown notes, synced through any Git host with end-to-end encryption.
  image:
    src: /git-writer-logo.svg
    alt: GitWriter Logo
  actions:
    - theme: brand
      text: Get started
      link: /tutorial/first-notebook
    - theme: alt
      text: Introduction
      link: /introduction
    - theme: alt
      text: How encryption works
      link: /encryption

features:
  - title: Cross-Platform
    details: Built with Kotlin & Compose Multiplatform, running natively on Linux, macOS, Windows, Android and iOS.
    icon:
      dark: /devices-white.svg
      light: /devices-black.svg
      width: 40

  - title: Git-Backed
    details: Your notes are plain Markdown files in Git repositories. Host them on GitHub, GitLab, Codeberg, a self-hosted Forgejo, or your own server.
    icon:
      dark: /iconmonstr-git-white.svg
      light: /iconmonstr-git-black.svg
      width: 40

  - title: End-to-End Encrypted
    details: Encrypt any notebook with a password. The Git host only ever stores encrypted data, while merging and conflicts keep working on your devices.
    icon:
      dark: /lock-white.svg
      light: /lock-black.svg
      width: 40
    link: /encryption

  - title: Open Source
    details: GitWriter is free and open source. No proprietary backend, no account, no vendor lock-in.
    icon:
      dark: /github-white.svg
      light: /github-black.svg
      width: 40
    link: https://github.com/jotalac/git-writer
---
