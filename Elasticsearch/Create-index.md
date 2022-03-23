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
