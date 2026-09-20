# Git Sync & Setup

GitWriter stores your notes as plain Markdown files in a Git repository and synchronizes them over HTTPS. Follow this guide to set up your repository and authenticate securely.
(files encryption coming soon)

## Step 1: Create a Git Repository

1. Go to your preferred Git provider (such as [GitHub](https://github.com), [GitLab](https://gitlab.com), [Codeberg](https://codeberg.org)).
2. Create a new repository.
3. Set the repository visibility to **Private** to ensure your personal notes remain confidential.
4. *(Optional)* Initialize with a `README.md` or keep it blank.

---

## Step 2: Generate a Personal Access Token (PAT)

Modern Git providers require a **Personal Access Token** instead of account passwords for HTTPS operations.

> [!TIP] Security Best Practice: Use Fine-Grained Tokens
> On GitHub, always create a **Fine-grained personal access token** scoped strictly to your notes repository. This follows the principle of least privilege.

### GitHub Step-by-Step

1. In GitHub, click your profile picture (top-right) and navigate to **Settings**.
2. Scroll to the bottom of the left sidebar and select **Developer settings**.
3. Expand **Personal access tokens** and click **Fine-grained tokens**.
4. Click **Generate new token**.
5. Configure the following token settings:
   - **Token name**: e.g., `GitWriter Notes`
   - **Expiration**: Choose your preferred expiration period (e.g., 90 days, 1 year, or custom).
   - **Repository access**: Select **Only select repositories**, then pick your notes repository (e.g., `my-notes`).
     > [!IMPORTANT] Minimal Security Scope
     > Scoping the token strictly to your notes repository ensures that even if the token were ever compromised, an attacker would have zero access to your other repositories, code, or personal data.
   - **Permissions**: Under **Repository permissions**, find **Contents** and set access to **Access: Read and write**. This grants GitWriter permission to read, create, and update your markdown note files.
6. Click **Generate token** at the bottom.
7. **Copy and store your token safely** — GitHub will only show it once.

### Other Git Hosts (GitLab, Codeberg, Gitea)
For other Git hosts, navigate to your account **Access Tokens** settings and create a token with repository read and write permissions (e.g., `read_repository` and `write_repository` scopes).

---

## Step 3: Connect GitWriter to your Repository

1. Open **GitWriter** on your device.
2. On the notebook edit screen/clone screen and provide:
   - **Repository URL**: The HTTPS clone URL of your repository (e.g., `https://github.com/username/my-notes.git`).
   - **Username**: Your account username (e.g. your GitHub username), .
   - **Password / Token**: Paste the Personal Access Token generated in Step 2.
3. Confirm the changes.

---

## Step 4: Syncing Notes

Once connected:
- Any note you write or modify is saved locally and tracked with Git commits.
- GitWriter pulls remote updates and pushes your commits so that all your devices stay synchronized without relying on a proprietary cloud service.
- If there is a unresolvable merge conflict you will be prompted to resolve in a pop up dialog.
