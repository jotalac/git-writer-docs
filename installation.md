# Installation

Download the latest build from the [Releases](https://github.com/jotalac/git-writer/releases) page.

## Desktop

### Linux

Download the `.deb` package (Debian, Ubuntu) or the `.rpm` package (Fedora, RHEL) and install it with your package manager. Builds are available for both `x86_64` and `arm64`.

### macOS

1. Download the `.dmg`.
2. Open it and drag **GitWriter** into your `Applications` folder.

Builds are for Apple Silicon Macs only. The database driver the app uses ships no native library for Intel Macs.

> [!NOTE] Unsigned app quarantine
> The macOS build is not signed, so Gatekeeper may refuse to open it. To allow it, run:
> ```bash
> xattr -d com.apple.quarantine /Applications/GitWriter.app
> ```

### Windows

Download the `.exe` installer and follow the setup wizard.

## Mobile

### Android

Download the `.apk` and install it. You may need to allow *Install from unknown sources* for your browser or file manager.

To get updates automatically, add the repository to [Obtainium](https://obtainium.imranr.dev/).

### iOS

The iOS build is an unsigned `.ipa`. Sideload it with your Apple ID using one of these tools:

- [AltStore](https://altstore.io/)
- [SideStore](https://sidestore.io/)
- [Sideloadly](https://sideloadly.io/)

## Next steps

Continue with the [tutorial](/tutorial/first-notebook) to create your first notebook.
