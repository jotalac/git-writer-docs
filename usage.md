# Editor & Shortcuts

GitWriter's editor is a **live preview**: you write plain Markdown, and it's shown formatted as you type. The Markdown syntax is hidden everywhere except where you're editing, so the note reads like a rendered page but stays a plain text file.

<Screenshot src="editor-live-preview.png" caption="The live preview: the syntax shows only on the line with the cursor" />

## Writing

- **Formatting.** `**bold**`, `*italic*`, `~~strikethrough~~`, `` `code` `` and `[links](https://…)` are shown formatted. Move the cursor into them to see and edit the syntax.
- **Headings, quotes and lists.** `#` headings, `>` quotes (including GitHub alerts such as `> [!TIP]`), bulleted and numbered lists. Pressing <kbd>Enter</kbd> in a list continues it with the next bullet or number.
- **Task lists.** `- [ ]` and `- [x]` are shown as checkboxes. Click one to check or uncheck it.
- **Code blocks.** Fenced code blocks are syntax-highlighted for the language after the opening ```` ``` ````. The fences are hidden until you edit the block.
- **Maths.** Inline `$x^2$` and block `$$ … $$` formulas are rendered with LaTeX. Click a formula to edit its source.
- **Tables, images and horizontal rules** are drawn in place. Click one to edit its Markdown.
- **Links.** Click a link to open it. While you edit a link, a click only moves the cursor; hold <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> to open it anyway.

### Images

- **Paste** an image with <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd>, or **drop** an image file onto the editor (desktop). GitWriter saves it to the notebook's `images` folder and inserts the Markdown for it.
- On mobile, use the **Add image** and **Camera** buttons in the keyboard toolbar.
- **Resize** an image with a right-click (desktop): choose a size from 0.1× to 5×. The size is written into the alt text, as in Obsidian: `![photo|300](images/photo.png)`.

### Spell check (desktop)

Misspelled words are underlined. Right-click one (or press <kbd>Shift</kbd> + <kbd>F10</kbd>, or <kbd>Control</kbd> + <kbd>Return</kbd> on macOS) for suggestions, or to add the word to your dictionary. The language is set in [Settings](/settings#language). Code, links and maths aren't checked.

### Find

Press <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>F</kbd>, or <kbd>/</kbd> when you're not typing in the note, to search in the open note.

### Export to PDF

Right-click a note in the file tree and choose **Export to PDF**. You pick where to save it; the Downloads folder is suggested.

## Mobile

On Android and iOS, a toolbar above the keyboard gives you headings, bold, italic, lists, indentation, quotes, code, checkboxes, links, maths and images. The buttons toggle: tapping **Bold** on bold text makes it normal again.

<Screenshot src="mobile-toolbar.png" caption="The keyboard toolbar on Android" narrow />

### Android widget

Add the **GitWriter** widget to your home screen to see the notes of the active notebook. Tap a note to open it, or create a new note straight from the widget.

<Screenshot src="android-widget.png" caption="The home screen widget" narrow />

## Keyboard shortcuts

On macOS, use <kbd>Cmd</kbd> wherever <kbd>Ctrl</kbd> is listed.

### Formatting

| Shortcut | Action |
| :--- | :--- |
| <kbd>Ctrl</kbd> + <kbd>B</kbd> | Bold |
| <kbd>Ctrl</kbd> + <kbd>I</kbd> | Italic |
| <kbd>Ctrl</kbd> + <kbd>E</kbd> | Inline code |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Insert a link |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | Paste (an image too) |

### Editing

| Shortcut | Action |
| :--- | :--- |
| <kbd>Enter</kbd> | New line; continues a list |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | New line without continuing the list |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Indent / outdent the line or list item |
| <kbd>Alt</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> | Move the line (or the selected lines) up / down |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> or <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Redo |
| <kbd>Esc</kbd> | Leave the editor (unfocus) |

### Find

| Shortcut | Action |
| :--- | :--- |
| <kbd>Ctrl</kbd> + <kbd>F</kbd> or <kbd>/</kbd> | Open the find bar |
| <kbd>Enter</kbd> / <kbd>Shift</kbd> + <kbd>Enter</kbd> | Next / previous match |
| <kbd>Esc</kbd> | Close the find bar |

### Tabs and notes

| Shortcut | Action |
| :--- | :--- |
| <kbd>Ctrl</kbd> + <kbd>T</kbd> | New tab |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Close the tab |
| <kbd>Ctrl</kbd> + <kbd>Tab</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> | Next / previous tab |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | New note (when no note is open) |
| <kbd>F2</kbd> | Rename the open note (file tree focused) |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | Duplicate the open note (file tree focused) |
| <kbd>Delete</kbd> | Delete the open note (file tree focused) |

