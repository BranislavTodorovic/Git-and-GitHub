# Git and GitHub Workflow to Remember

Use this checklist for normal feature work. Run git status at the beginning, during the work, and at the end.

----------------------------------------------------------------------------------------------------

## Beginning: Prepare a Clean Starting Point

----------------------------------------------------------------------------------------------------

### 1. Check the current condition

**git status**

Confirm that there is no unfinished work.

----------------------------------------------------------------------------------------------------

### 2. Return to the official branch

**git switch main**

----------------------------------------------------------------------------------------------------

### 3. Download the newest shared work

**git pull --ff-only**

----------------------------------------------------------------------------------------------------

### 4. Create and enter a feature branch

**git switch -c BRANCH-NAME**

**Example:**

**git switch -c add-new-exercise**

----------------------------------------------------------------------------------------------------

## Middle: Create and Save the Change

----------------------------------------------------------------------------------------------------

### 5. Edit the intended files

Use your editor and save the changes.

----------------------------------------------------------------------------------------------------

### 6. Check which files changed

**git status**

----------------------------------------------------------------------------------------------------

### 7. Review the exact changes

**git diff**

----------------------------------------------------------------------------------------------------

### 8. Test the project

For a webpage:

**start index.html**

For JavaScript:

**node "path/to/file.js"**

Testing is performed by the browser, Node.js, or another project tool—not by Git.

----------------------------------------------------------------------------------------------------

### 9. Stage the intended files

**git add FILE-NAME**

----------------------------------------------------------------------------------------------------

### 10. Review what the commit will contain

**git diff --staged**

----------------------------------------------------------------------------------------------------

### 11. Create the commit

**git commit -m "Describe the completed change"**

----------------------------------------------------------------------------------------------------

### 12. Verify the local result

**git status**

Expected result: nothing to commit, working tree clean.

----------------------------------------------------------------------------------------------------

### 13. Upload the feature branch

**git push -u origin BRANCH-NAME**

----------------------------------------------------------------------------------------------------

## GitHub: Review and Merge

----------------------------------------------------------------------------------------------------

### 14. Create the pull request

On GitHub, choose:

> base: main ← compare: BRANCH-NAME

Review the files, create the pull request, and merge it after checks pass.

----------------------------------------------------------------------------------------------------

## End: Synchronize and Clean Up

----------------------------------------------------------------------------------------------------

### 15. Return to local main

**git switch main**

----------------------------------------------------------------------------------------------------

### 16. Download the merged work

**git pull --ff-only**

----------------------------------------------------------------------------------------------------

### 17. Verify synchronization

**git status**

Expected result:

> On branch main
> Your branch is up to date with 'origin/main'.
> nothing to commit, working tree clean

----------------------------------------------------------------------------------------------------

### 18. Delete the finished remote branch

**git push origin --delete BRANCH-NAME**

----------------------------------------------------------------------------------------------------

### 19. Remove stale remote references

**git fetch --prune**

----------------------------------------------------------------------------------------------------

### 20. Delete the finished local branch

**git branch -d BRANCH-NAME**

----------------------------------------------------------------------------------------------------

## Short Memory Sequence

> Status
> → Main
> → Pull
> → Create branch
> → Edit
> → Status
> → Diff
> → Test
> → Add
> → Diff staged
> → Commit
> → Status
> → Push
> → Pull request
> → Review
> → Merge
> → Main
> → Pull
> → Status
> → Delete remote branch
> → Prune
> → Delete local branch
> → Final status

----------------------------------------------------------------------------------------------------

