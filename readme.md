# Documentation

Docs for the [GitWriter](https://github.com/jotalac/git-writer) app, built with [VitePress](https://vitepress.dev).

https://jotalac.github.io/git-writer-docs/

```bash
npm install
npm run docs:dev
```

## Screenshots

Pages show screenshots with `<Screenshot src="name.png" caption="…" />`. Until `public/screenshots/name.png` exists, a placeholder with the file name is shown. Add `narrow` for phone screenshots, so they aren't stretched to the full width.

The screenshots used so far:

| File | What it shows |
| :--- | :--- |
| `overview-desktop.png` | The whole app on the desktop: file tree, tabs, editor |
| `add-notebook-init.png` | Add Notebook dialog, Init tab |
| `add-notebook-clone.png` | Add Notebook dialog, Clone (git) tab, on a phone |
| `add-notebook-clone-encrypted.png` | The Clone tab with the notebook password filled in, on a phone |
| `add-notebook-import.png` | Add Notebook dialog, Import existing tab |
| `sidebar-file-tree.png` | The file tree with a few notes and folders |
| `editor-live-preview.png` | The editor, with the cursor on a formatted line so its syntax shows |
| `open-notebook-dialog.png` | The list of notebooks |
| `github-new-repo.png` | Creating an empty private repository on GitHub |
| `github-token.png` | A fine-grained GitHub token: one repository, Contents read and write |
| `edit-notebook-remote.png` | Edit notebook with the remote credentials filled in |
| `edit-notebook-encrypt.png` | Edit notebook with Encrypt notebook on and the password fields |
| `github-encrypted-repo.png` | An encrypted notebook's repository on GitHub |
| `sync-button.png` | The sync button after a sync |
| `sync-button-states.png` | The sync button in a few states (syncing, failed, conflicts) |
| `conflict-dialog.png` | The merge conflict dialog |
| `mobile-toolbar.png` | The keyboard toolbar on a phone |
| `android-widget.png` | The Android home screen widget |
| `settings.png` | The settings |

## Diagrams

Diagrams are drawn in [Excalidraw](https://excalidraw.com) and shown with `<Diagram name="…" alt="…" />`, which picks `public/diagrams/<name>-light.svg` or `<name>-dark.svg` for the site's theme.

The editable sources are in `diagrams/*.excalidraw`. To change one:

1. Open the `.excalidraw` file on [excalidraw.com](https://excalidraw.com) (menu → Open).
2. Edit it.
3. Export it as SVG twice, both with **Background** off: once with **Dark mode** off as `<name>-light.svg`, once with it on as `<name>-dark.svg`.
4. Save the scene back to `diagrams/<name>.excalidraw`.
