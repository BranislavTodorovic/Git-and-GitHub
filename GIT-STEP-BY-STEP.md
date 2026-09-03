# Git and GitHub Step-by-Step Guide

This guide explains complete Git workflows. Each section begins with what the workflow does, breaks every command into its parts, and provides an example.

Uppercase values such as FILE-NAME, BRANCH-NAME, and REPOSITORY-URL are placeholders. Replace them with your own values.

----------------------------------------------------------------------------------------------------

## 1. Beginner Concepts

**What this does:** Introduces the words used throughout Git and GitHub workflows.

The **repository** is the complete project tracked by Git. A **branch** is a separate version of that project where you can safely make changes.

- **Repository** — a project folder tracked by Git.
- **Git** — records changes and commits on your computer.
- **GitHub** — stores an online copy of a repository.
- **Branch** — a separate version of a project.
- **main** — the usual official or default branch.
- **Commit** — a saved checkpoint in the project history.
- **origin** — the usual nickname for the primary GitHub repository.
- **Pull request** — a request to review and merge one branch into another.
- **Staging area** — changes prepared for the next commit.
- **Tracked file** — a file Git already knows about.
- **Untracked file** — a new file Git does not track yet.
- **Working tree** — the files currently inside your local project folder.
- **Local repository** — the repository stored on your computer.
- **Remote repository** — the repository stored online, such as on GitHub.
- **HEAD** — Git’s reference to the commit currently checked out.

----------------------------------------------------------------------------------------------------

## 2. Create and Enter a New Project Folder

**What this does:** Creates a folder for a project and moves the terminal into it.

**mkdir PROJECT-NAME**  
**cd PROJECT-NAME**

- mkdir — means “make directory” and creates a folder.
- PROJECT-NAME — the name of the folder to create.
- cd — means “change directory” and enters a folder.

**Example:**

**mkdir fashion-switchboard**  
**cd fashion-switchboard**

----------------------------------------------------------------------------------------------------

## 3. Start a Git Repository

**What this does:** Tells Git to begin tracking versions of files in the current folder.

**git init**

- git — runs the Git program.
- init — initializes a repository by creating a hidden .git folder.

**Example:**

**git init**

----------------------------------------------------------------------------------------------------

## 4. Check Repository Status

**What this does:** Shows the current branch and whether files are untracked, modified, staged, or committed.

**git status**

- git — runs Git.
- status — displays the working directory and staging-area state.

**Example:**

**git status**

Common results:

- **Untracked files** — Git is not tracking these files yet.
- **Changes not staged for commit** — tracked files changed but are not staged.
- **Changes to be committed** — changes are staged for the next commit.
- **Working tree clean** — there are no uncommitted changes.

----------------------------------------------------------------------------------------------------

## 5. Stage Changes

**What this does:** Selects changes to include in the next commit.

### Stage one file

**git add FILE-NAME**

- git — runs Git.
- add — places a file or its changes in the staging area.
- FILE-NAME — the file to stage.

**Example:**

**git add README.md**

### Stage all changes under the current folder

**git add .**

- git — runs Git.
- add — stages changes.
- . — represents the current folder and everything below it.

**Example:**

**git add .**

Run git status afterward to verify exactly what was staged.

----------------------------------------------------------------------------------------------------

## 6. Create a Commit

**What this does:** Records a permanent snapshot of the staged changes in local Git history.

**git commit -m "COMMIT-MESSAGE"**

- git — runs Git.
- commit — records the staged changes.
- -m — supplies the commit message directly in the command.
- "COMMIT-MESSAGE" — a short description of the completed change.

**Example:**

**git commit -m "Add initial README"**

A successful result shows a commit ID and a file summary.

----------------------------------------------------------------------------------------------------

## 7. Connect the Repository to GitHub

**What this does:** Connects the local repository to an existing online GitHub repository.

Create an empty repository on GitHub first. If files already exist locally, do not ask GitHub to create a README, license, or .gitignore.

**git remote add origin REPOSITORY-URL**

- git — runs Git.
- remote — manages connections to online repositories.
- add — creates a new connection.
- origin — the nickname assigned to the primary GitHub repository.
- REPOSITORY-URL — replace this with the actual GitHub repository address.

**Example:**

**git remote add origin https://github.com/username/project-name.git**

### Verify the remote

**git remote -v**

- git — runs Git.
- remote — manages remote connections.
- -v — displays the complete fetch and push URLs.

### Correct a remote URL

**git remote set-url origin REPOSITORY-URL**

- set-url — replaces an existing remote address.
- origin — identifies the remote to change.
- REPOSITORY-URL — the correct GitHub address.

**Example:**

**git remote set-url origin https://github.com/username/project-name.git**

----------------------------------------------------------------------------------------------------

## 8. Rename and Push the Initial Branch

**What this does:** Names the first branch main, uploads it to GitHub, and configures branch tracking.

**git branch -M main**  
**git push -u origin main**

For git branch -M main:

- branch — manages branches.
- -M — renames the current branch, replacing a conflicting name if necessary.
- main — the new branch name.

For git push -u origin main:

- push — uploads local commits.
- -u — connects the local branch to its remote upstream.
- origin — the GitHub repository nickname.
- main — the branch to upload.

After this first push, later pushes from main need only git push.

----------------------------------------------------------------------------------------------------

## 9. Create and Enter a Feature Branch

**What this does:** Creates a separate branch for new work and immediately enters it.

**git switch -c BRANCH-NAME**

- git — runs Git.
- switch — moves between branches.
- -c — creates a new branch before switching.
- BRANCH-NAME — a short, descriptive name for the work.

**Example:**

**git switch -c add-contact-page**

If the branch already exists, enter it without -c:

**git switch add-contact-page**

- switch — enters an existing branch.
- add-contact-page — the existing branch name.

----------------------------------------------------------------------------------------------------

## 10. Save and Push Feature-Branch Work

**What this does:** Reviews, stages, commits, and uploads work from a feature branch.

**git status**  
**git diff**  
**git add FILE-NAME**  
**git diff --staged**  
**git commit -m "COMMIT-MESSAGE"**  
**git push -u origin BRANCH-NAME**

- git status — lists changed files.
- git diff — shows unstaged content changes.
- git add FILE-NAME — stages the intended file.
- git diff --staged — shows exactly what the next commit will contain.
- git commit -m — records the staged changes.
- git push -u — uploads the branch and configures its upstream.

**Example:**

**git add index.html**  
**git commit -m "Add contact page"**  
**git push -u origin add-contact-page**

Later pushes from the same branch need only:

**git push**

----------------------------------------------------------------------------------------------------

## 11. Create and Merge a Pull Request

**What this does:** Requests review and merges feature-branch changes into main.

On GitHub:

1. Open the repository.
2. Select **Pull requests**.
3. Select **New pull request**.
4. Set **base** to main.
5. Set **compare** to the feature branch.
6. Review the changed files.
7. Create the pull request.
8. Merge it after review and checks pass.

**Example:**

> base: main ← compare: add-contact-page

Comparing main with main shows no changes.

----------------------------------------------------------------------------------------------------

## 12. Update Local Main After a Merge

**What this does:** Returns to local main and downloads the work merged on GitHub.

**git switch main**  
**git pull --ff-only**

For git switch main:

- switch — changes the active branch.
- main — the branch to enter.

For git pull --ff-only:

- pull — downloads and integrates remote commits.
- --ff-only — permits only a straightforward fast-forward update and avoids an automatic merge commit.

**Example:**

**git switch main**  
**git pull --ff-only**

----------------------------------------------------------------------------------------------------

## 13. Delete a Remote Branch and Prune References

**What this does:** Deletes a completed branch from GitHub and removes obsolete remote-tracking references locally.

**git push origin --delete BRANCH-NAME**

- git — runs Git.
- push — sends a branch-management request to the remote.
- origin — identifies the GitHub repository.
- --delete — requests deletion of the named remote branch.
- BRANCH-NAME — the remote branch to delete.

**Example:**

**git push origin --delete add-contact-page**

Then prune obsolete references:

**git fetch --prune**

- fetch — refreshes remote branch information.
- --prune — removes local references to remote branches that no longer exist.

----------------------------------------------------------------------------------------------------

## 14. Delete a Local Branch

**What this does:** Removes a completed feature branch from the local repository.

First switch away from it:

**git switch main**

Then delete it:

**git branch -d BRANCH-NAME**

- git — runs Git.
- branch — manages branches.
- -d — safely deletes a local branch only when Git considers its work merged.
- BRANCH-NAME — the local branch to delete.

**Example:**

**git branch -d add-contact-page**

Use -D only when intentionally discarding an unmerged branch.

----------------------------------------------------------------------------------------------------

## 15. Unstage a File Without Deleting It

**What this does:** Removes a file from the next commit while keeping its local changes.

**git restore --staged FILE-NAME**

- restore — restores file content or staging state.
- --staged — removes the file from the staging area.
- FILE-NAME — the file to unstage.

**Example:**

**git restore --staged README.md**

Before the repository has its first commit, use:

**git rm --cached FILE-NAME**

- rm — removes a file from Git’s tracked or staged set.
- --cached — keeps the physical file on the computer.
- FILE-NAME — the file to unstage.

----------------------------------------------------------------------------------------------------

## 16. Confirm Everything Is Saved and Synchronized

**What this does:** Checks for uncommitted work and compares local branches with GitHub.

**git fetch origin**  
**git status**  
**git branch -vv**  
**git log --oneline --decorate --graph --all -10**

- fetch origin — downloads current remote information without changing working files.
- status — reports uncommitted changes and synchronization.
- branch -vv — shows branches, upstreams, and latest commit IDs.
- log — displays commit history.
- --oneline — uses one compact line per commit.
- --decorate — displays branch and tag names.
- --graph — draws the branch structure.
- --all — includes local and remote-tracking branches.
- -10 — limits output to ten commits.

Look for:

- nothing to commit, working tree clean — all local changes are committed.
- up to date with 'origin/branch-name' — the branch matches GitHub.
- Matching local and remote commit IDs — commits are pushed and synchronized.

----------------------------------------------------------------------------------------------------

## 17. Navigate, View Files, and Open a Webpage

**What this does:** Moves around the filesystem, displays hidden files, creates a file, and opens a webpage for testing.

### Move up one folder

**cd ..**

- cd — changes the current directory.
- .. — means the parent folder, one level above the current folder.

### List files and folders

**ls**

- ls — lists the contents of the current folder.
- dir also works in Git Bash on Windows, but ls is the normal Git Bash command.

### Include hidden files

**ls -a**

- ls — lists files and folders.
- -a — means “all” and includes hidden items such as .git.

### Open or create an HTML file in Notepad

**notepad index.html**

- notepad — opens Windows Notepad.
- index.html — the file to open or create.
- Save the file with **Ctrl+S**.

### Open the webpage in a browser

**start index.html**

- start — asks Windows to open a file with its default application.
- index.html — the webpage to open.
- This is a Windows command, not a Git command.

----------------------------------------------------------------------------------------------------

## 18. Undo Commits Safely

**What this does:** Corrects local or shared commits while choosing whether their file changes should be kept.

Always run git status first. Reset rewrites local branch history; revert preserves shared history.

### Remove the latest local commit and keep changes staged

**git reset --soft HEAD~1**

- reset — moves the current branch to another commit.
- --soft — keeps the removed commit’s changes staged.
- HEAD — the current commit.
- ~1 — one commit before HEAD.

Use this when a commit has not been pushed and you want to recreate it.

### Remove the latest local commit and keep changes unstaged

**git reset --mixed HEAD~1**

- --mixed — keeps the changes in your files but removes them from staging.
- HEAD~1 — the commit immediately before the current commit.
- git reset HEAD~1 has the same default mixed behavior.

### Remove the latest local commit and its changes

**git reset --hard HEAD~1**

- --hard — resets the commit, staging area, and working files.
- This can permanently discard uncommitted work.
- Use it only after checking git status and confirming the work is disposable.

### Undo a pushed or shared commit

**git revert HEAD**

- revert — creates a new commit that reverses another commit.
- HEAD — selects the latest commit.
- The original commit remains in history.

Undo a specific shared commit with:

**git revert COMMIT-HASH**

- COMMIT-HASH — the identifier of the commit to reverse.

**Example:**

**git revert a4f83bc**

Use git revert instead of git reset for commits already pushed or shared.

----------------------------------------------------------------------------------------------------

## 19. Find and Recover a Lost Local Commit

**What this does:** Finds recent movements of HEAD and creates a recovery branch from a lost commit.

**git reflog**

- reflog — displays recent local movements of HEAD.
- It can reveal commits that disappeared after a reset.
- Reflog information exists only in your local repository.

Recover the commit into a new branch:

**git switch -c recovery COMMIT-HASH**

- switch — changes branches.
- -c — creates a new branch.
- recovery — the new branch name.
- COMMIT-HASH — the lost commit found in the reflog.

**Example:**

**git switch -c recovery def4567**

----------------------------------------------------------------------------------------------------

## 20. Temporarily Store Unfinished Work

**What this does:** Saves unfinished tracked and untracked changes temporarily so you can switch tasks or branches.

**git stash push -u -m "Temporary backup"**

- stash — manages temporary saved work.
- push — creates a stash entry.
- -u — includes untracked files.
- -m — adds a description.
- "Temporary backup" — explains what was saved.

List saved stashes:

**git stash list**

Restore the newest stash:

**git stash pop**

- pop — reapplies the newest stash and removes it if restoration succeeds.
- Review git status after restoring it.

----------------------------------------------------------------------------------------------------

## 21. Undo Decision Summary

**What this does:** Helps choose the safest command for the current state.

### Not committed yet

**git restore --staged FILE-NAME**  
**git restore FILE-NAME**

- The first command unstages the file but keeps its edits.
- The second command discards unstaged edits and must be used carefully.

### Committed but not pushed

**git reset --soft HEAD~1**  
**git reset --mixed HEAD~1**  
**git reset --hard HEAD~1**

- --soft — removes the commit and keeps changes staged.
- --mixed — removes the commit and keeps changes unstaged.
- --hard — removes the commit and discards its changes.

### Already pushed or shared

**git revert HEAD**

This safely reverses the change with a new commit.

### Lost a local commit

**git reflog**

Find its hash, then create a recovery branch from it.

----------------------------------------------------------------------------------------------------

## 22. Common Messages

### Nothing to commit, working tree clean

No files changed after the latest commit. This is normally a good result.

### A branch named 'name' already exists

The branch already exists. Enter it without -c:

**git switch name**

### Origin does not appear to be a Git repository

Run git remote -v, then add the missing remote or correct its URL.

### LF will be replaced by CRLF

This is a Windows line-ending warning, not a failed git add. Run git status to confirm that the files were staged.

----------------------------------------------------------------------------------------------------

