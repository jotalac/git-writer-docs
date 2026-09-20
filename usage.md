# Usage & Keyboard Shortcuts

This guide covers how to navigate, organize, and write effectively in GitWriter, along with a complete reference of keyboard shortcuts.

---

## Editor Workflow

GitWriter combines rendered Markdown with plain text editing through a **hybrid block model**:

- **Rendered by Default**: Notes are displayed as cleanly styled rich text with syntax highlighting, mathematical equations, formatted lists, embedded images...
- **In-Place Block Editing**: Click or tap any paragraph, heading, list item, or code block to instantly edit that block. Once finished, click elsewhere or press `Esc` to return to rendered view.
- **Interactive Checklists**: Task list checkboxes (`- [ ]` and `- [x]`) can be toggled by clicking directly on them in rendered mode without having to enter edit mode.
- **Math & LaTeX**: Write inline equations with `$f(x) = x^2$` or display blocks with `$$\int_0^\infty e^{-x} dx$$`.
- **Image Attachments**:
  - **Paste from Clipboard**: Press <kbd>Ctrl</kbd> + <kbd>V</kbd> (or <kbd>Cmd</kbd> + <kbd>V</kbd> on macOS) with an image in your clipboard. GitWriter automatically saves the image to your notebook folder `images` and inserts the Markdown image tag.
  - **Drag and Drop**: Drag image files from your file manager directly into the editor.

---

## Organizing Notebooks & Files

### Notebooks
- Each notebook is a self-contained directory backed by a Git repository.
- You can create a new blank notebook, clone a remote repository, or open an existing folder on your disk.
- Switch between notebooks using the notebook selector in the sidebar.

### File Tree & Navigation
- **Folders & Notes**: Create nested folders and Markdown files (`.md`) to organize your notes.
- **Drag and Drop Reorganization**: Drag files and folders within the sidebar tree to move them into different folders.
- **Context Menus**: Right-click any item in the file tree to rename, delete, or inspect it.
- **Tabs**: Open multiple notes simultaneously in tabs across the top of the editor.

---

## Keyboard Shortcuts Reference

GitWriter provides keyboard shortcuts designed to keep your hands on the keyboard for writing and navigation.

### Block Editing & Movement

| Shortcut | Action | Description |
| :--- | :--- | :--- |
| <kbd>Enter</kbd> | Split Block / New Item | Splits the current block at cursor into a new block, or adds new block bellow |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | Newline within Block | Adds a newline without creating a new block |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Enter</kbd> | New Block Below | Exits the active block and creates an empty block beneath it |
| <kbd>Alt</kbd> + <kbd>↑</kbd> | Move Block Up | Swaps the current block with the block above |
| <kbd>Alt</kbd> + <kbd>↓</kbd> | Move Block Down | Swaps the current block with the block below |
| <kbd>Tab</kbd> | Indent | Indents the active list item or line |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Outdent | Un-indents the active list item or line |
| <kbd>Backspace</kbd> *(at start)* | Merge Block | Merges the active block into the previous block |
| <kbd>Backspace</kbd> *(when empty)* | Delete Block | Removes the empty block and shifts focus |
| <kbd>Esc</kbd> | Exit Edit Mode | Deselects the current block and returns to rendered view |
| <kbd>↑</kbd> / <kbd>↓</kbd> *(at boundary)* | Navigate Blocks | Moves cursor to the preceding or following block |

### Text Formatting

| Shortcut | Markdown Syntax | Action |
| :--- | :--- | :--- |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>B</kbd> | `**bold**` | Toggle bold formatting |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>I</kbd> | `*italic*` | Toggle italic formatting |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>K</kbd> | `[](url)` | Insert Markdown link template |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>E</kbd> | `` `code` `` | Toggle inline code |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd> | `![image](path)` | Paste image from clipboard |

### Document History

| Shortcut | Action |
| :--- | :--- |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Z</kbd> | Undo last text edit or structural block modification |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Y</kbd> | Redo (alternative) |

### Search & Find

| Shortcut | Action |
| :--- | :--- |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>F</kbd> | Open Find bar / focus search query |
| <kbd>Enter</kbd> *(in find bar)* | Jump to next match |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> *(in find bar)* | Jump to previous match |
| <kbd>Esc</kbd> *(in find bar)* | Close Find bar |

### Tab Management

| Shortcut | Action |
| :--- | :--- |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>T</kbd> | Open a new tab |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>W</kbd> | Close active tab |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Tab</kbd> | Switch to next tab |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | Switch to previous tab |

### Navigation When No Block is Active

When you are viewing a note and no block is currently being edited:

| Key | Action |
| :--- | :--- |
| <kbd>↓</kbd> | Focus the first block of the note |
| <kbd>↑</kbd> | Focus the last block of the note |
| <kbd>Enter</kbd> | Append and focus a new block at the end of the note |

---

## Mobile Experience

On Android and iOS devices, GitWriter adapts the interface:

- **Mobile Keyboard Toolbar**: An on-screen toolbar appears above the soft keyboard providing quick access to headings, formatting (bold, italic, code), lists, checklists, photo/camera attachments, ...


## Next Steps

You can proceed to the [Git Sync](/git-sync) guide to configure your remote repository and personal access token.
