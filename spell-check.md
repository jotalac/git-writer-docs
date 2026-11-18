# Spell Check

On the desktop, GitWriter underlines misspelled words as you type. It doesn't bring its own dictionaries; it asks your operating system's spell checker, so it uses the same dictionaries as your other apps. On Android and iOS, the keyboard checks the spelling instead.

<Screenshot src="spellcheck-menu.png" caption="A misspelled word with its suggestions" />

## Using it

- **Misspelled words** get a wavy underline. Code, links and maths aren't checked.
- **Suggestions:** right-click the word, or put the cursor on it and press <kbd>Shift</kbd> + <kbd>F10</kbd> (<kbd>Control</kbd> + <kbd>Return</kbd> on macOS). Pick a suggestion to replace the word.
- **Add to dictionary** in the same menu keeps the word from being underlined again, in every note.

## Choosing the language

The spell check language is in [Settings → Language](/settings#language):

| Option | What is checked |
| :--- | :--- |
| **Same as app language** *(default)* | The app's language. Change the app language, and the spell check follows. |
| A language | English, Spanish, Czech or German, whatever the app language is. Handy if you use the app in English but write your notes in Czech. |
| **No spell checking** | Nothing is underlined. |

Chinese can't be checked: the dictionaries the systems use need spaces between words, and Chinese doesn't have them. With the app in Chinese and **Same as app language**, nothing is underlined.

## Setting up your system

If nothing is underlined, your system most likely has no dictionary for the language yet.

### Windows

Windows only checks the languages you've added to it.

1. Open **Settings → Time & Language → Language & region**.
2. **Add a language** and pick the one you write in.
3. Make sure **Basic typing** is selected among its optional features. The keyboard layout isn't needed; you can remove it afterwards.

### macOS

Nothing to do: the dictionaries come with macOS.

If a language still isn't underlined, check that it's turned on in **System Settings → Keyboard → Text Input → Edit… → Spelling**. Choose **Automatic by Language**, or set up the languages you use.

### Linux

GitWriter uses **Hunspell** dictionaries. Install the package for your language:

::: code-group

```bash [Debian / Ubuntu]
sudo apt install hunspell-en-us   # English
sudo apt install hunspell-es      # Spanish
sudo apt install hunspell-cs      # Czech
sudo apt install hunspell-de-de   # German
```

```bash [Fedora]
sudo dnf install hunspell-en   # English
sudo dnf install hunspell-es   # Spanish
sudo dnf install hunspell-cs   # Czech
sudo dnf install hunspell-de   # German
```

:::

Package names differ by distribution, and some include the region (`hunspell-de-de`, but `hunspell-cs`). If a name doesn't work, search for it:

```bash
apt search hunspell     # Debian / Ubuntu
dnf search hunspell     # Fedora
```

GitWriter looks for dictionaries in `/usr/share/hunspell`, `/usr/share/myspell` and `/usr/local/share/hunspell`. Restart the app after installing one.

::: tip A dictionary without root
You can also put a dictionary in your home folder. Copy its two files, for example `cs_CZ.aff` and `cs_CZ.dic`, into `~/.local/share/hunspell`. LibreOffice's dictionary extensions contain them.
:::
