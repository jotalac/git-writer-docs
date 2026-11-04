# Architecture & Internals

A short map of the code, for anyone who wants to read or change it. The [source is on GitHub](https://github.com/jotalac/git-writer).

## Layers

GitWriter is written in **Kotlin Multiplatform** with **Compose Multiplatform**. Almost everything, from the UI down to the sync, is shared code. Only the app entry points and the Git implementation differ per platform.

<Diagram name="architecture-layers" alt="Shared code: Compose UI, ViewModels, features, persistence and Git interfaces. Platform code: the app entry points, JGit and libgit2" />

## Modules

| Module | What's in it |
| :--- | :--- |
| `shared` · `feature/editor` | The live preview editor, find, edit history, LaTeX, spell check, shortcuts |
| `shared` · `feature/editor_sidebar` | The file tree, drag and drop, context menus |
| `shared` · `feature/git_sync` | Sync, conflict resolution, [encryption](/encryption) |
| `shared` · `feature/notebooks_management` | Notebooks in Room; creating, cloning, importing |
| `shared` · `feature/pdf_export`, `feature/settings` | PDF export, settings |
| `shared` · `core` | Database, Koin modules, platform abstractions |
| `desktopApp`, `androidApp`, `iosApp` | Entry points, packaging, the Android widget (Glance) |

Platform code lives in the usual source sets: `jvmAndAndroidMain` (JGit), `jvmMain`, `androidMain` and `iosMain` (libgit2).

## The live preview editor

The whole note is **one text field**, so selecting, copying, undo and cursor movement work across the whole note. The formatting is only a view of it:

<Diagram name="live-preview-pipeline" alt="Note text is parsed into a syntax tree, turned into decorations, transformed into the shown text, and widgets are drawn over it" />

1. **Parse** the note with JetBrains' Markdown parser (GitHub Flavored Markdown).
2. **Decorations** say how each range is shown: bold, hidden `**`, a heading, a checkbox. A decoration that touches the cursor shows its source instead.
3. **Shown text** comes from a `VisualTransformation` that hides the syntax and maps cursor offsets between the note and what you see.
4. **Overlays** (images, tables, maths, checkboxes) are composables placed over placeholders in the same layout pass, so they never lag behind the text.

## Git

- **JGit** on desktop and Android, **libgit2** on iOS through C interop (built by `tools/build-libgit2.sh`).
- Both implement the same interfaces (`GitSyncRepository`, `MirrorRepository`, `MailboxRepository`), and **the same contract tests** run against both, so every platform syncs the same way.
- What a sync does is in [Syncing & Conflicts](/git-sync); encrypted notebooks are in [How Encryption Works](/encryption).

## Data

- **Notes** are plain files in a Git repository per notebook. Nothing else is needed to read them.
- **Room (SQLite)** keeps the list of notebooks: folder, remote, credentials and, for encrypted notebooks, the key.
- **DataStore** keeps the settings.
