# 몽구스에서 ObjectId 생성

- [몽구스에서 ObjectId 생성](https://answer-id.com/ko/56520525)

```js
const mongoose = require("mongoose");
const id = mongoose.Types.ObjectId("61e03e700000000000000000"); // 2022-01-13T15:00:00.000Z
```

mongoDB는 자동으로 생성되는 ObjectId가 있는데, 이는 시간 순서대로 생성되는 유니크한 값이다.

ObjectId는 기본적으로 indexing 되어있기 때문에 ObjectId를 이용해서 쿼리를 날리면 빠른 쿼리 작업이 가능하다.

개인적으로는 가독성이 좋지 않다고 생각하기 때문에 1회성 데이터 추출 작업에 주로 사용한다(재사용되지 않는 로직에 사용).

- [자주 사용하는 mongoDB id parser 사이트](https://steveridout.github.io/)
