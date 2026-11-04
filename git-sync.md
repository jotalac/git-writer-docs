# Syncing & Conflicts

Every notebook is a Git repository, and syncing it is plain Git: commit, pull, push. This page explains what happens during a sync and how to deal with conflicts. To set up a remote, see the [tutorial](/tutorial/connect-remote).

## What a sync does

<Diagram name="sync-steps" alt="A sync: commit all changes, pull, then push or resolve conflicts" />

1. **Commit.** Every change in the notebook (edited, new, moved and deleted notes, images) is committed.
2. **Pull.** GitWriter fetches what other devices pushed and merges it into your notes.
3. **Push.** The result goes back to the remote, and every device can pull it on its next sync.

If the open note changed during the pull, it's reloaded with the new content.

For an [encrypted notebook](/tutorial/encrypt-notebook), the same three steps run against a local copy, and only encrypted files are uploaded. See [How encryption works](/encryption).

## When it syncs

Tap the **sync button** to sync any time. With **Auto sync** on (Settings → Git Sync, on by default), GitWriter also syncs:

- when a notebook is opened, which includes app start,
- every **10 minutes** while the notebook is open and the device is online,
- when the device **comes back online**,
- when you **leave or close** the app.

An automatic sync waits until you've paused typing for 3 seconds. That way a pulled change never replaces the note in the middle of a sentence.

## The sync button

The button shows the notebook's state:

| State | Meaning |
| :--- | :--- |
| Up to date | The last sync succeeded. Tap to sync again. |
| Syncing | A sync is running. |
| Failed | The last sync failed. The error was shown at the bottom of the screen. Tap to retry. |
| Merge conflicts | Some notes changed on two devices. Tap to resolve them. |
| Offline | The device has no network connection. |
| Remote unreachable | The device is online, but the remote can't be reached. |
| Not configured | The notebook has no remote yet. See [Connect a Git remote](/tutorial/connect-remote). |

<Screenshot src="sync-button-states.png" caption="The sync button in different states" />

## Conflicts

Git merges changes **line by line**. Two devices editing different notes, or different parts of the same note, merge without you noticing. A **conflict** happens only when two devices changed the same lines of the same note between syncs.

### Resolving conflicts

GitWriter opens the **Git merge conflict** dialog, which lists every conflicting note. For each one choose:

- **Local:** keep this device's version.
- **Remote:** keep the version from the other device.

Or resolve all of them at once with **All local** or **All remote**.

<Screenshot src="conflict-dialog.png" caption="The merge conflict dialog" />

When the last conflict is resolved, GitWriter commits the result (a merge commit) and pushes it. If that push fails, nothing is lost: the resolution is committed locally and goes out with the next sync.

**Abort sync** cancels the merge and puts the notebook back the way it was before the sync. Your local changes stay committed, so the conflict comes back on the next sync until you resolve it.

::: tip Keeping both versions
The dialog keeps one whole version of each note. If you want parts of both, choose one version, then copy the missing part from the other device after the sync.
:::

### Resolving conflicts automatically

In **Settings → Git Sync → Conflict resolution** you can skip the dialog:

| Strategy | What happens on a conflict |
| :--- | :--- |
| **Manual merge** (default) | The dialog asks you. |
| **Auto merge** → *Always accept local changes* | This device's version always wins. |
| **Auto merge** → *Always accept remote changes* | The other device's version always wins. |

## Working with Git directly

A notebook is a normal Git repository, so you can use any Git tool on it: look at the history with `git log`, restore an old version of a note, or edit the notes in another editor. GitWriter commits whatever it finds on the next sync.

The exception is an encrypted notebook's remote. Don't push to it with other Git tools: it only accepts the encrypted files GitWriter writes.
