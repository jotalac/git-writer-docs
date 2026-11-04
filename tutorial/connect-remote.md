# 2. Connect a Git remote

A remote is a Git repository on a server, such as GitHub. Once your notebook has one, GitWriter syncs to it: your notes get a backup, and other devices can download them.

You'll need three things:

1. an **empty repository** on a Git host,
2. a **personal access token**, which GitWriter uses instead of your password,
3. the notebook from [part 1](/tutorial/first-notebook).

GitHub is used as the example below. Other hosts work the same way, and the [last section](#other-git-hosts) covers the differences.

## Step 1: Create a repository

1. On GitHub, click **+** → **New repository**.
2. Name it, for example `notes`.
3. Set it to **Private**.
4. **Don't** add a README, `.gitignore` or license. The repository must stay empty, because your notebook already has its own history.

<Screenshot src="github-new-repo.png" caption="Creating a new, empty, private repository on GitHub" />

5. Click **Create repository** and copy its HTTPS URL, for example `https://github.com/you/notes.git`.
::: tip Already have notes in a repository?
If the repository already holds notes, for example from another device, don't connect it to a new notebook. **Clone** it instead, see [part 3](/tutorial/second-device).
:::

## Step 2: Create a personal access token

GitHub doesn't accept your account password for Git over HTTPS. You create a **token** instead: a password that only works for what you allow it.

1. Click your profile picture → **Settings**.
2. At the bottom of the left sidebar, open **Developer settings**.
3. Open **Personal access tokens** → **Fine-grained tokens**, and click **Generate new token**.
4. Fill it in:
   - **Token name:** for example `GitWriter`.
   - **Expiration:** your choice. When it expires, you create a new one and paste it into GitWriter.
   - **Repository access:** **Only select repositories**, then pick your notes repository.
   - **Permissions** → **Repository permissions** → **Contents:** **Read and write**.
5. Click **Generate token** and copy it. GitHub shows it only once.

<Screenshot src="github-token.png" caption="A fine-grained token limited to the notes repository, with read and write access to its contents" />

::: tip Limit the token to one repository
A token limited to your notes repository can't touch anything else on your account, even if it leaks.
:::

## Step 3: Add the remote to the notebook

1. In GitWriter, open the notebook.
2. Click **Edit notebook** in the sidebar.
3. Under **Remote credentials**, fill in:
   - **Repository URL:** the HTTPS URL from step 1.
   - **Username:** your GitHub username.
   - **Password/Token:** the token from step 2.
4. Leave **Encrypt notebook** off for now. It's covered in [part 4](/tutorial/encrypt-notebook).
5. Click **Save**.

<Screenshot src="edit-notebook-remote.png" caption="Edit notebook button" />
<Screenshot src="edit-notebook-dialog.png" caption="Edit notebook dialog with filled in credentials" />

GitWriter checks that it can reach the repository with these credentials before saving. A typo in the URL or a token without access shows an error instead.

## Step 4: Sync

The **sync button** in the corner of the editor shows the sync state. Tap it to sync now.

<Screenshot src="sync-button.png" caption="The sync button, after a successful sync" />

The first sync uploads the whole notebook. Open the repository on GitHub and you'll see your notes there as plain Markdown files.

From now on you rarely need the button. With **Auto sync** on (it is by default), GitWriter syncs:

- when you open the notebook, so also when the app starts,
- every 10 minutes while the app is open,
- when the device comes back online,
- when you leave the app.

An automatic sync waits until you've stopped typing for a few seconds, so pulled changes never land mid-sentence. [Syncing & Conflicts](/git-sync) explains what a sync does in detail, and what happens when two devices change the same note.

## Other Git hosts

Everything works the same on any host that supports Git over HTTPS. Only the token is created differently:

| Host | Where | What to allow |
| :--- | :--- | :--- |
| GitLab | **Preferences → Access tokens** | `read_repository` and `write_repository` |
| Codeberg, Forgejo, Gitea | **Settings → Applications → Access tokens** | repository: read and write |

Use your username on that host as the **Username**.

## Next

Your notes are now backed up. Next, [get them onto another device](/tutorial/second-device).
