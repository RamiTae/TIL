# [aggregate](https://docs.mongodb.com/manual/aggregation/)

## [$lookup](https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#-lookup--aggregation-)

Performs a left outer join to an unsharded collection in the same database to filter in documents from the "joined" collection for processing. To each input document, the $lookup stage adds a new array field whose elements are the matching documents from the "joined" collection. The $lookup stage passes these reshaped documents to the next stage.

```
{
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}
```

```js
db.getCollection("students").aggregate([
  {
    $match: { classId: "class_1" },
  },
  { $skip: 0 },
  { $limit: 10 }, // 설정된 갯수만큼의 도큐먼트를 다음 파이프라인으로 전달하는 스테이지. lookup 이전에 limit을 하는 것이 효율적
  {
    $lookup: {
      // join
      from: "classes",
      localField: "classId",
      foreignField: "id",
      as: "class",
    },
  },
  {
    $unwind: "$class",
  },
  {
    $project: {
      _id: 1,
      id: 1,
      name: 1,
      "exam.id": 1,
      "exam.room": 1,
    },
  },
]);
```
