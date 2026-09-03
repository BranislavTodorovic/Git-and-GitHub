# Git Cheat Sheet

Every entry explains the complete command and each individual part. Replace uppercase placeholders with your actual information.

----------------------------------------------------------------------------------------------------

## Repository Setup

**git init**

**What this does:** Starts a new Git repository in the current folder.

- git — runs the Git program.
- init — initializes a repository and creates the hidden .git folder.

**git clone REPOSITORY-URL**

**What this does:** Downloads an existing remote repository and creates a local project folder.

- git — runs the Git program.
- clone — copies an existing repository, including its files and history.
- REPOSITORY-URL — the address of the repository to copy.

**Example:**

**git clone https://github.com/username/project-name.git**

**git remote add origin REPOSITORY-URL**

**What this does:** Connects the local repository to a remote repository.

- git — runs the Git program.
- remote — manages connections to online repositories.
- add — creates a new remote connection.
- origin — the conventional nickname for the primary remote repository.
- REPOSITORY-URL — the actual GitHub repository address.

**Example:**

**git remote add origin https://github.com/username/project-name.git**

**git remote set-url origin REPOSITORY-URL**

**What this does:** Changes the address saved for the origin remote.

- git — runs the Git program.
- remote — manages remote connections.
- set-url — replaces the address of an existing remote.
- origin — identifies the remote connection to change.
- REPOSITORY-URL — the new GitHub repository address.

**Example:**

**git remote set-url origin https://github.com/username/project-name.git**

**git remote -v**

**What this does:** Displays all configured remote fetch and push addresses.

- git — runs the Git program.
- remote — manages remote connections.
- -v — means verbose and displays the complete URLs.

----------------------------------------------------------------------------------------------------

## Check Changes and History

**git status**

**What this does:** Shows the current branch and the state of project files.

- git — runs the Git program.
- status — reports untracked, modified, staged, and deleted files without changing anything.

**git diff**

**What this does:** Shows unstaged changes in tracked files.

- git — runs the Git program.
- diff — compares working files with their staged or committed versions.

**git diff --staged**

**What this does:** Shows exactly what the next commit will contain.

- git — runs the Git program.
- diff — displays differences.
- --staged — limits the comparison to changes currently in the staging area.

**git log --oneline**

**What this does:** Shows commit history in a compact format.

- git — runs the Git program.
- log — displays commit history.
- --oneline — displays each commit on one line.

**git log --oneline --decorate --graph --all**

**What this does:** Shows a compact visual history of every known branch.

- git — runs the Git program.
- log — displays commit history.
- --oneline — displays each commit on one line.
- --decorate — shows branch and tag names beside commits.
- --graph — draws the branch and merge structure.
- --all — includes all local and remote-tracking branches.

**git log --oneline -3**

**What this does:** Shows only the latest three commits.

- git — runs the Git program.
- log — displays commit history.
- --oneline — uses one compact line per commit.
- -3 — limits the output to three commits.

----------------------------------------------------------------------------------------------------

## Stage and Commit

**git add FILE-NAME**

**What this does:** Stages one file for the next commit.

- git — runs the Git program.
- add — places changes in the staging area.
- FILE-NAME — the file to stage.

**Example:**

**git add README.md**

**git add "PATH WITH SPACES"**

**What this does:** Stages a file whose path contains spaces.

- git — runs the Git program.
- add — places changes in the staging area.
- quotation marks — keep the entire path together as one argument.
- PATH WITH SPACES — the folder and file path to stage.

**Example:**

**git add "Generic Queries/query.sql"**

**git add .**

**What this does:** Stages changes in the current folder and its subfolders.

- git — runs the Git program.
- add — places changes in the staging area
- . — means the current folder and everything below it.

**git commit -m "COMMIT-MESSAGE"**

**What this does:** Records staged changes as a local checkpoint.

- git — runs the Git program.
- commit — saves the staged snapshot in repository history.
- -m — means message and supplies it directly in the command.
- COMMIT-MESSAGE — a short description of the completed change.

**Example:**

**git commit -m "Add initial README"**

----------------------------------------------------------------------------------------------------

## Work With Branches

**git branch**

**What this does:** Lists local branches.

- git — runs the Git program.
- branch — manages branches; without another argument, it lists local branches.
- * — in the output, marks the current branch.

**git branch -a**

**What this does:** Lists local and remembered remote branches.

- git — runs the Git program.
- branch — manages branches.
- -a — means all and includes remote-tracking branches.

**git switch BRANCH-NAME**

**What this does:** Moves to an existing branch.

- git — runs the Git program.
- switch — changes the active branch.
- BRANCH-NAME — the existing branch to enter.

**Example:**

**git switch main**

**git switch -c NEW-BRANCH**

**What this does:** Creates a branch and immediately enters it.

- git — runs the Git program.
- switch — changes the active branch.
- -c — creates a new branch before switching.
- NEW-BRANCH — the name assigned to the new branch.

**Example:**

**git switch -c add-contact-page**

**git branch -m NEW-NAME**

**What this does:** Renames the current branch.

- git — runs the Git program.
- branch — manages branches.
- -m — means move or rename in this command.
- NEW-NAME — the replacement branch name.

**Example:**

**git branch -m main**

**git branch -M main**

**What this does:** Forcefully renames the current branch to main when necessary.

- git — runs the Git program.
- branch — manages branches.
- -M — renames even if the target name already exists.
- main — the new branch name.

**git branch -d BRANCH-NAME**

**What this does:** Safely deletes a merged local branch.

- git — runs the Git program.
- branch — manages branches.
- -d — deletes only when Git considers the branch merged.
- BRANCH-NAME — the local branch to remove.

**Example:**

**git branch -d add-contact-page**

**git branch -D BRANCH-NAME**

**What this does:** Forcefully deletes a local branch.

- git — runs the Git program.
- branch — manages branches.
- -D — deletes even when the branch is unmerged.
- BRANCH-NAME — the local branch to remove.
- Warning — unmerged work can become difficult to recover.

**Example:**

**git branch -D abandoned-test**

----------------------------------------------------------------------------------------------------

## Push, Fetch, and Pull

**git push -u origin BRANCH-NAME**

**What this does:** Uploads a branch and remembers its remote connection.

- git — runs the Git program.
- push — uploads local commits.
- -u — sets the upstream used by later push and pull commands.
- origin — the nickname for the GitHub repository.
- BRANCH-NAME — the branch to upload.

**Example:**

**git push -u origin add-contact-page**

**git push**

**What this does:** Uploads new commits to the configured upstream branch.

- git — runs the Git program.
- push — sends local commits to the branch’s remembered remote destination.

**git fetch origin**

**What this does:** Downloads current remote information without changing working files.

- git — runs the Git program.
- fetch — downloads remote commits and branch information.
- origin — identifies the remote repository to contact.

**git fetch --prune**

**What this does:** Refreshes remote information and removes stale remote-tracking references.

- git — runs the Git program.
- fetch — downloads current remote information.
- --prune — removes local references to remote branches that no longer exist.

**git pull**

**What this does:** Downloads and integrates changes into the current branch.

- git — runs the Git program.
- pull — fetches remote commits and integrates them into the active local branch.

**git pull --ff-only**

**What this does:** Updates the current branch only when no merge commit is required.

- git — runs the Git program.
- pull — downloads and integrates remote commits.
- --ff-only — allows only a straightforward fast-forward update.

----------------------------------------------------------------------------------------------------

## Undo and Restore

**git restore --staged FILE-NAME**

**What this does:** Unstages a file but keeps its edits.

- git — runs the Git program.
- restore — changes file content or staging state.
- --staged — removes the selected file from the staging area.
- FILE-NAME — the file to unstage.

**Example:**

**git restore --staged README.md**

**git restore FILE-NAME**

**What this does:** Discards unstaged edits and restores the last committed version.

- git — runs the Git program.
- restore — restores file content.
- FILE-NAME — the tracked file whose edits will be discarded.
- Warning — uncommitted edits in the file may be lost.

**Example:**

**git restore index.html**

**git rm --cached FILE-NAME**

**What this does:** Stops tracking or unstages a file without deleting the local copy.

- git — runs the Git program.
- rm — removes a file from Git’s tracked or staged set.
- --cached — keeps the physical file on the computer.
- FILE-NAME — the file to remove from Git’s index.

**Example:**

**git rm --cached README.md**

**git reset --soft HEAD~1**

**What this does:** Removes the latest local commit and keeps its changes staged.

- git — runs the Git program.
- reset — moves the current branch to another commit.
- --soft — keeps the removed commit’s changes staged.
- HEAD — represents the current commit.
- ~1 — means one commit before HEAD.

**git reset --mixed HEAD~1**

**What this does:** Removes the latest local commit and keeps its changes unstaged.

- git — runs the Git program.
- reset — moves the current branch.
- --mixed — resets the staging area but preserves working-file changes.
- HEAD — represents the current commit.
- ~1 — means one commit before HEAD.

**git reset --hard HEAD~1**

**What this does:** Removes the latest local commit and discards its changes.

- git — runs the Git program.
- reset — moves the current branch.
- --hard — also resets the staging area and working files.
- HEAD — represents the current commit.
- ~1 — means one commit before HEAD.
- Warning — this can permanently discard uncommitted work.

**git revert COMMIT-ID**

**What this does:** Safely reverses a commit by creating a new commit.

- git — runs the Git program.
- revert — creates a new commit that reverses an earlier one.
- COMMIT-ID — the hash identifying the commit to reverse.

**Example:**

**git revert a4f83bc**

**git reflog -10**

**What this does:** Shows the ten latest local movements of HEAD.

- git — runs the Git program.
- reflog — displays recent local reference movements.
- -10 — limits the output to ten entries.

**git switch -c recovery COMMIT-ID**

**What this does:** Creates a recovery branch at a selected commit.

- git — runs the Git program.
- switch — changes branches.
- -c — creates a new branch.
- recovery — the new branch name.
- COMMIT-ID — the lost commit found with reflog.

**Example:**

**git switch -c recovery def4567**

----------------------------------------------------------------------------------------------------

## Temporary Work

**git stash push -u -m "Temporary backup"**

**What this does:** Temporarily saves tracked and untracked unfinished work.

- git — runs the Git program.
- stash — manages temporary saved work.
- push — creates a stash entry.
- -u — includes untracked files.
- -m — adds a description.
- Temporary backup — the description of the stash.

**git stash list**

**What this does:** Lists saved stash entries.

- git — runs the Git program.
- stash — manages temporary saved work.
- list — displays all existing stash entries.

**git stash pop**

**What this does:** Restores and then removes the newest stash when successful.

- git — runs the Git program.
- stash — manages temporary saved work.
- pop — reapplies the newest entry and removes it after a successful restoration.

----------------------------------------------------------------------------------------------------

## Delete a Remote and Local Branch

**git switch main**

**What this does:** Moves away from the finished feature branch and enters main.

- git — runs the Git program.
- switch — changes the active branch.
- main — the branch to enter.

**git push origin --delete BRANCH-NAME**

**What this does:** Deletes a branch from the remote GitHub repository.

- git — runs the Git program.
- push — communicates the branch operation to the remote.
- origin — identifies the GitHub repository.
- --delete — requests remote branch deletion.
- BRANCH-NAME — the branch to remove from GitHub.

**Example:**

**git push origin --delete add-contact-page**

**git fetch --prune**

**What this does:** Removes the stale local reference after remote deletion.

- git — runs the Git program.
- fetch — refreshes remote information.
- --prune — removes references to remote branches that no longer exist.

**git branch -d BRANCH-NAME**

**What this does:** Deletes the completed local branch safely.

- git — runs the Git program.
- branch — manages local branches.
- -d — deletes only when Git considers the work merged.
- BRANCH-NAME — the local branch to remove.

**Example:**

**git branch -d add-contact-page**

----------------------------------------------------------------------------------------------------

## Useful Final Checks

**git fetch origin**

**What this does:** Refreshes remote information before checking synchronization.

- git — runs the Git program.
- fetch — downloads remote commits and branch information.
- origin — the remote repository to check.

**git status --short --branch**

**What this does:** Shows compact file status and branch tracking information.

- git — runs the Git program.
- status — reports repository state.
- --short — uses compact file-status symbols.
- --branch — includes branch and upstream information.

**git branch -vv**

**What this does:** Shows branches with upstream connections and latest commits.

- git — runs the Git program.
- branch — manages and lists branches.
- -vv — means very verbose and includes upstream and commit details.

**git remote -v**

**What this does:** Confirms remote fetch and push addresses.

- git — runs the Git program.
- remote — manages remote connections.
- -v — displays complete URLs.

**git log -1**

**What this does:** Displays only the latest commit.

- git — runs the Git program.
- log — displays commit history.
- -1 — limits output to one commit.

----------------------------------------------------------------------------------------------------

