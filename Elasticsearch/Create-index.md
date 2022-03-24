# Create index

- [Create index API](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html)

API를 사용해서 index를 생성할 수 있다.

```
PUT /my-index-000001
```

## Request

`PUT /<index>`

## Prerequisites

elasticsearch 보안 기능이 활성화되어 있다면, 대상 인덱스에 대한 `create_index`나 `manage` 인덱스 권한이 있어야 함. alias에 인덱스를 추가하려면 alias에 대한 `manage`인덱스 권한이 있어야 함.

## Description

클러스터에 새 인덱스를 추가하기 위해 create index API를 사용할 수 있음.
index를 생성할 때 다음의 설정을 할 수 있음.

- 인덱스 설정
- 인덱스의 필드 매핑
- 인덱스 aliases

## Path parameters

`<index>`
(Required, string) 생성하고자 하는 index의 이름

index명은 다음 기준을 만족해야 함

- 소문자만 가능
- `\`, `/`, `*`, `?`, `"`, `<`, `>`, `|`, \` \` (space character), `,`, `#` 문자가 포함되면 안 된다.
- 7.0 이전 버전의 인덱스는 `:` 문자를 사용할 수 있지만, 7.0+ 이상의 버전에서는 사용할 수 없다.
- `-`, `_`, `+`로 시작할 수 없다.
- `.`나 `..`는 사용할 수 없다.
- 255byte 보다 크면 안 됨.(멀티 바이트 문자를 사용하면 더 빨리 255바이트에 도달할 수 있음.)
- `.`으로 시작하는 이름은 사라지게 될 예정이지만, [hidden indices](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html#index-hidden)와 internal indices는 플러그인으로 관리하게 될 예정.
