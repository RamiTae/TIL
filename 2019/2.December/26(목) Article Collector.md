fs.createReadStream: 큰 파일을 읽어올 때 스트리밍을 만듦

![스크린샷, 2019-12-24 15-36-03](../../../../사진/스크린샷, 2019-12-24 15-36-03.png)





body: 받아온 body(string)

img: `<img />`jsx들을 저장

text: string

tag: 

isTag



return <div>

datas.

</div>



for(let i = 0; i < body.length; i++){

​	body[i]순회 => 

* isTag가  false: text에 저장
* isTag가 true: 
  1. tag에 저장
  2. 닫는태그 만남
     1. parse(tag)
     2. img에 저장

}



```jsx
body: 받아온 body(string)

img: `<img />`jsx들을 저장


text = body.split(정규식)
text: Array['ddd','dddd','ggg', ..]
               0 ,  1   ,  2
img = body.match(정규식)
imb: Array['<img ~~ />','<img ~~ />','<img ~~ />', ...]
               0       ,     1      ,     2

body: text.forEach((val,idx)=>{
    body.push(val)
    if(img.idx){
      body.push(img.idx)
    }
})
body: Array['aaa', '<img/>', 'ddd', '<img/>', ... , 'ccc']

return <div>{body.map((data,idx)=>{
        if(idx%2) {
            return data
        }
        else {
            parse(data)
        }
    })}</div>
```





> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split
>
> https://www.regextester.com/
>
> https://regexper.com/
>
> https://regexr.com/

### `RegExp`를 사용해 구분자도 결과에 포함하기



`separator`가 포획 괄호 `()`를 포함하는 정규표현식일 경우, 포획된 결과도 배열에 포함됩니다.

```js
var myString = 'Hello 1 word. Sentence number 2.';
var splits = myString.split(/(\d)/);

console.log(splits);
```

위 예제의 로그 출력은 다음과 같습니다.

```html
[ "Hello ", "1", " word. Sentence number ", "2", "." ]
```





모든태그 받아옴`/(\<img[^>]+[\>])/g`