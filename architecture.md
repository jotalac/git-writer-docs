# Technical Details & Architecture

GitWriter is created as a minimalistic, local-first, note-taking application. This document details the technical architecture, design decisions, cross-platform, and internal implementations.

---

## High-Level Architecture

GitWriter is built using **Kotlin Multiplatform (KMP)** and **Compose Multiplatform (CMP)**, sharing all business logic, ui, data persistence, markdown parsing, and Git operations across desktop, Android, and iOS.

```
┌─────────────────────────────────────────────────────────────┐
│                 Compose Multiplatform UI                     │
│   (Material 3, Dynamic Color, Responsive Desktop & Mobile)  │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                  ViewModel & State Layer                    │
│    (AndroidX Lifecycle ViewModel, Koin Multiplatform DI)    │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                    Domain & Business Logic                  │
│       (Markdown Chunking, History Engine, Tree Models)      │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
┌──────────────▼─────────────┐ ┌──────────────▼───────────────┐
│     Persistence Layer      │ │     Git Synchronization       │
│  - AndroidX Room (SQLite)  │ │  - JVM/Android: Eclipse JGit │
│  - AndroidX DataStore      │ │  - iOS: libgit2 (C-Interop)  │
│  - FileKit & Native FS     │ │  - Conflict Resolution       │
└────────────────────────────┘ └──────────────────────────────┘
```

### Module Structure

The codebase is organized into targeted multiplatform modules and packages:

- **`shared`**: The core multiplatform engine containing all shared logic:
  - `feature/editor`: Block-based Markdown chunker, active editor, LaTeX rendering, keyboard navigation, and history stack.
  - `feature/editor_sidebar`: Recursive file tree, drag-and-drop file organization, and contextual actions.
  - `feature/git_sync`: Multiplatform Git repository interfaces, synchronization pipelines, and conflict resolution dialogs.
  - `feature/notebooks_management`: AndroidX Room DAO/Entity layer, local repository detection, and cloning workflows.
  - `feature/settings`: Appearance preferences, dynamic colors, localization, and sync settings.
  - `core`: Database initialization, Koin DI modules, clipboard utilities, image handlers, and platform abstraction hooks.
- **`desktopApp`**: Desktop launcher leveraging JVM, configuring window drag areas, menus, and packaging for Linux, macOS, and Windows.
- **`androidApp`**: Android application wrapper handling permissions, system theme integration, and Android lifecycle.
- **`iosApp`**: Xcode project hosting the Compose Multiplatform `UIViewController`.


## Synchronization Pipeline & Conflict Handling

Each notebook as a first-class Git repository. Synchronization follow this states:

```
[Local Changes] ──► [Commit] ──► [Git Fetch / Pull]
                                             │
                       ┌─────────────────────┴─────────────────────┐
                       │                                           │
                [Clean Fast-Forward]                        [Merge Conflict]
                       │                                           │
              [Git Push to Remote]                    [Interactive Resolver Dialog]
                       │                                    (OURS vs. THEIRS)
               [Status: UpToDate]                                  │
                                                       [Commit Resolution & Push]
```

### Conflict Resolution

When upstream changes conflict with local edits, GitWriter enters a `GitSyncStatus.Conflict` state and presents an interactive resolution dialog:
- **Per-File Resolution**: Users can choose between keeping local changes (`CheckoutCommand.Stage.OURS`) or remote changes (`CheckoutCommand.Stage.THEIRS`) for each file.
- **Batch Resolution**: One-click resolution to preserve either local or remote variants across all conflicting files.
- **Safe Merging**: If desired, users can abort the merge (`git.reset(HARD)`) to restore the previous clean working state.

---

## Hybrid Block-Based Markdown Editor

Rather than using a single monolithic `TextField` (which hinders rich formatting) or an embedded WebView (which consumes excessive memory and introduces rendering latency), GitWriter uses a **hybrid block editor**:

### AST Markdown Chunking (`MarkdownChunker`)

When a Markdown document is opened, GitWriter passes the raw text through `jetbrains-markdown` using GitHub Flavored Markdown rules (`GFMFlavourDescriptor`). 

The parser constructs an Abstract Syntax Tree (AST) and segments the text into discrete semantic blocks (headings, paragraphs, code blocks, lists, blockquotes, math equations, ...).


## Data Persistence & Offline-First Storage

### Plain-Text Git Repositories

GitWriter imposes **zero vendor lock-in**:
- Notebooks are standard folders on the filesystem containing plain `.md` files, directories, and images.
- A notebook is a standard Git worktree containing a `.git` directory.
- Users can open, edit, or commit files using external tools (VS Code, Obsidian, Neovim, or the terminal) at any time.

Default notebook storage locations:
- **Desktop**: `~/Documents/git-writer-notebooks`
- **Android**: App-specific external/internal storage directory (`.../git-writer-notes`)
- **iOS**: Sandboxed `NSDocumentDirectory` (`.../Documents/git-writer-notebooks`)
