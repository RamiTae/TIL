# [Set environment variable in mac](https://phoenixnap.com/kb/set-environment-variable-mac)

## 전제 조건

- 최신 버전의 macOS를 실행하는 시스템
- 터미널에 대한 액세스
- 관리자 수준 권한이 있는 사용자

## 현재 환경 변수 확인

### 모든 환경 변수 확인

```zsh
printenv
```

> Note: 쉘 변수의 전체 목록을 표시하려면 `set`명령 사용

### 특정 환경 변수 확인

```zsh
echo $[variable name]
```

`echo` command를 사용해서 실행 파일이 있는 디렉토리 목록을 저장하는 `PATH` 변수의 값 확인:

```zsh
echo $PATH
```

> Note: `echo`로 변수 이름을 찾을 때는 항상 접두사`$`를 사용해야 한다.

## 임시 환경 변수 설정

임시 환경 변수에 할당한 값은 터미널 세션을 닫을 때까지만 지속됩니다. 이는 한 세션에만 사용하는 변수이거나 동일한 값을 여러 번 입력하는 것을 방지할 때 유용합니다.

`export` command 를 통해 임시 변수를 할당할 수 있습니다.

```zsh
export [variable_name]=[variable_value]
```

Where:

- `[variable_name]`: 할당하고자 하는 임시 환경 변수 명
- `[variable_value]`: 임시 환경 변수에 할당하려는 값

---

아래의 `export` command를 사용하면 기존 환경 변수에 새 값을 추가할 수도 있습니다:

```zsh
export [existing_variable_name]=[new_variable_value]:$[existing_variable_name]
```

Where:

- `[existing_variable_name]`: 새 값을 추가하려는 환경 변수의 이름
- `[new_variable_value]`: 기존 변수에 추가하려는 값

---

`PATH`변수에 사용자 정의 폴더 경로 추가:

```zsh
export PATH=/Users/test/test_folder:$PATH
```

## 영구 환경 변수 설정

영구 환경 변수는 `.bash_profile` 파일에 추가해야 함.

1. `.bash_profile` 다음을 사용하여 경로를 찾습니다 .

```zsh
~/.bash-profile
```

없다면 2번으로 넘어가기.

2. 텍스트 편집기로 `.bash_profile` 파일을 엽니다.

```zsh
vim ~/.bash-profile
```

3. `.bash_profile` 파일의 마지막에 다음 export명령을 사용하여 새 환경 변수를 추가합니다.

```zsh
export [variable_name]=[variable_value]
```

4. `.bash_profile` 파일에 대한 변경 사항을 저장합니다.

5. 새로운 `.bash_profile`를 시작하기 위해 터미널 창을 다시 시작하거나 다음 명령을 실행합니다.

```zsh
source ~/.bash-profile
```

## 환경 변수 제거

다음 명령을 사용하여 환경 변수를 제거합니다.

```zsh
unset [variable_name]
```
