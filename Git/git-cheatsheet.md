# git cheatsheet

## [git reset](https://git-scm.com/docs/git-reset)

- git reset [-q] [{tree-ish}] [--] {pathspec}…​
- git reset [-q] [--pathspec-from-file={file} [--pathspec-file-nul]] [{tree-ish}]
- git reset (--patch | -p) [{tree-ish}] [--] [{pathspec}…​]
- git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [{commit}]

  ***

- add 취소
  - `git reset HEAD ${staging 취소 할 파일}`
    - `--hard` option 입력하면 실패하면서 다음과 같이 뜸
    - `fatal: Cannot do hard reset with paths.`
- commit 취소
  - 최상단 commit 취소
    - `git reset HEAD^`
  - 두번째 commit 까지 취소
    - `git reset HEAD^^`
  - commit 취소 후 commit으로 변경 된 내용까지 삭제(로컬에서)
    - `git reset --hard HEAD^`

## [git cherry-pick](https://git-scm.com/docs/git-cherry-pick)

- 다른 브랜치에서 commit 옮겨올 때 사용
- git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff]
  [-S[{keyid}]] {**commit**}…​
- git cherry-pick (--continue | --skip | --abort | --quit)

## [git commit](https://git-scm.com/docs/git-commit)

- 레포지토리에 변경 사항을 기록함.

### 자주 사용하는 옵션

- `--fixup=[(amend|reword):]{commit}`
Create a new commit which "fixes up" {commit} when applied with git rebase --autosquash. Plain --fixup={commit} creates a "fixup!" commit which changes the content of {commit} but leaves its log message untouched. --fixup=amend:{commit} is similar but creates an "amend!" commit which also replaces the log message of {commit} with the log message of the "amend!" commit. --fixup=reword:{commit} creates an "amend!" commit which replaces the log message of {commit} with its own log message but makes no changes to the content of {commit}.

The commit created by plain --fixup={commit} has a subject composed of "fixup!" followed by the subject line from {commit}, and is recognized specially by git rebase --autosquash. The -m option may be used to supplement the log message of the created commit, but the additional commentary will be thrown away once the "fixup!" commit is squashed into {commit} by git rebase --autosquash.
