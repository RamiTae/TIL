# git cheatsheet

## [git reset](https://git-scm.com/docs/git-reset)

- git reset [-q] [\<tree-ish\>] [--] \<pathspec\>…​
- git reset [-q] [--pathspec-from-file=\<file\> [--pathspec-file-nul]] [\<tree-ish\>]
- git reset (--patch | -p) [\<tree-ish\>] [--] [\<pathspec\>…​]
- git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [\<commit\>]

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
  - commit 취소 후 commit으로 변경 된 내용까지 삭제
    - `git reset --hard HEAD^`

## [git cherry-pick](https://git-scm.com/docs/git-cherry-pick)

- 다른 브랜치에서 commit 옮겨올 때 사용
- git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff]
  [-S[\<keyid\>]] \<**commit**\>…​
- git cherry-pick (--continue | --skip | --abort | --quit)
