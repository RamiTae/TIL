# Basic Commands

- Check NGINX Version
  ```zsh
  $ nginx -v
  ```
- Check Configration file syntax before reloading
  - 푸시하려는 configration에 문제가 없는지 확인하기 위한 Syntax 유효성 검사
  ```zsh
  $ nginx -t
  ```
  - 권한 문제 발생 시 sudo로 실행
- Display current configrations
  - 현재 nginx인스턴스에서 구현된 configration을 보여줌.
  ```zsh
  $ nginx -T
  ```
  - 내 nginx가 무엇이며 nginx가 실제로 읽는 내용을 모두 출력함(include 포함)
  - include 매개변수에 포함된 구성은 알파벳순으로 읽어오기 때문에 커스텀 로직을 사용할 경우 주의해야 함.
    - z파일에서 선언, a파일에서 사용 => 안 됨
- Reload NGINX
  - configration을 가져와 기존 인스턴스로 푸시
  ```zsh
  $ nginx -s reload
  ```
