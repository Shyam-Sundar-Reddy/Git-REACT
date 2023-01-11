const commands = [
  {
    id: 1,
    emoji: "📚📚",
    comm: "1. git clone",
    use:
      "git clone is primarily used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location. The original repository can be located on the local filesystem or on remote machine accessible supported protocols. The git clone command copies an existing Git repository. sample:// git clone <https://name-of-the-repository-link>"
  },
  {
    id: 2,
    emoji: "🎋",
    comm: " 2. git branch",
    use:
      "The git branch command lets you create, list, rename, and delete branches. It doesn't let you switch between branches or put a forked history back together again. For this reason, git branch is tightly integrated with the git checkout and git merge commands."
  },
  {
    id: 3,
    emoji: "🔙",
    comm: "3. git checkout",
    use:
      "The git checkout command lets you navigate between the branches created by git branch . Checking out a branch updates the files in the working directory to match the version stored in that branch, and it tells Git to record all new commits on that branch."
  },
  {
    id: 4,
    emoji: "📜",
    comm: "4. git status",
    use:
      "Git status Whether the current branch is up to date. Whether there is anything to commit, push or pull. Whether there are files staged, unstaged or untracked. Whether there are files created, modified or deleted."
  },
  {
    id: 5,
    emoji: " 🧑‍🦰👩‍🦰+= 👶",
    comm: "5. git add",
    use:
      "The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit ."
  },
  {
    id: 6,
    emoji: "🔒",
    comm: "6. git commit",
    use:
      "The git commit command is one of the core primary functions of Git. Prior use of the git add command is required to select the changes that will be staged for the next commit. Then git commit is used to create a snapshot of the staged changes along a timeline of a Git projects history."
  },
  {
    id: 7,
    emoji: "🌐🗄️ ",
    comm: "7. git push",
    use:
      "The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo. It's the counterpart to git fetch , but whereas fetching imports commits to local branches, pushing exports commits to remote branches."
  },
  {
    id: 8,
    emoji: "🪢",
    comm: "8. git pull",
    use:
      "The git pull command is used to fetch and download content from a remote repository and immediately update the local repository to match that content. Merging remote upstream changes into your local repository is a common task in Git-based collaboration work flows."
  },
  {
    id: 9,
    emoji: "🐃<=🐂",
    comm: "9. git revert",
    use:
      "The git revert command is used for undoing changes to a repository's commit history. Other 'undo' commands like, git checkout and git reset , move the HEAD and branch ref pointers to a specified commit. Git revert also takes a specified commit, however, git revert does not move ref pointers to this commit."
  },
  {
    id: 10,
    emoji: "⛙",
    comm: "10. git merge",
    use:
      "Git merge will combine multiple sequences of commits into one unified history. In the most frequent use cases, git merge is used to combine two branches."
  }
];

export default commands;
