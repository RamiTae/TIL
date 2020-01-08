# AWS(Amazon Web Service)

# 1. Amazon S3(Simple Storage Service)

AWS에서 제공하는 인터넷용 스토리지 서비스.

클라이언트 배포에 많이 쓰인다.

redux 연습하면서 만들어뒀던 간단한 counter app으로 S3 버킷을 만들것이다.

아래는 해당 app의 파일 구조.

![08. 1-1](img/08.1-1.png)



## 1-1. react app을 build

```
$ npm run build
```

혹은

```
$ yarn build
```

build를 하면 아래와 같이 원래 없던 build디렉토리가 생긴다.

![08. 1-2](img/08.1-2.png)

일단 build해 놓고 C3버킷을 만들러 감



## 1-2. 버킷 생성

> https://s3.console.aws.amazon.com/

1. 버킷 만들기 버튼 클릭

![08.1-3](img/08.1-3.png)



2. 버킷 이름과 지역 선택 후 생성 버튼 클릭

![08.1-4](img/08.1-4.png)



## 1-3. 버킷 설정 변경

1. 방금 만든 버킷 이름 클릭

![08.1-5](img/08.1-5.png)



2. 속성에서 정적 웹 사이트 호스팅 클릭

![08.1-6](img/08.1-6.png)



3. 인덱스 시 실행될 html문서와 오류발생시 실행될 html문서를 적고 저장버튼 클릭

간단하게 생성만 테스트할 버킷이기 때문에 인덱스 문서와 오류 문서 둘 다 같은 index.html을 넣어줬다.

![08.1-7](img/08.1-7.png)



4. 정적 웹 사이트 호스팅이 활성화됨

![08.1-8](img/08.1-8.png)

버킷으로의 접근이 많으면 요금이 청구될수도 있기 때문에 여태껏 열심히 버킷 이름을 가렸지만

사진을 일일이 수정하려니 힘들어서 블로깅 끝나고 해당 버킷의 호스팅을 닫기로 했음.



## 1-4. 버킷 권한 편집

1. 권한 > 퍼블릭 액세스 차단 > 편집 버튼 클릭

![08.1-9](img/08.1-9.png)



2. 모든 퍼블릭 액세스 차단 해제 > 저장 버튼 클릭

![08.1-10](img/08.1-10.png)



3. 쫄지 말고 확인 입력 > 확인 버튼 클릭

![08.1-11](img/08.1-11.png)



이게 끝이 아니고 버킷 정책도 입력해야 함.

4. 권한 > 버킷 정책 클릭

하단의 정책 생성기 클릭

![08.1-12](img/08.1-12.png)



5. 정책 생성기로 형식에 맞는 정책 생성

> 퍼블릭 엑세스에 도움될 링크
>
> [What is ARN?](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/s3-arn-format.html)
>
> [What is principal in policy?](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/s3-bucket-user-policy-specifying-principal-intro.html)

버킷에 올릴 프로젝트에 맞는 Select Type of Policy, Principal, Actions, ARN정보를 입력한다.

![08.1-13](img/08.1-13.png)

![08.1-14](img/08.1-14.png)

Add Statement를 클릭하면 새 Principal이 추가된다.



그 아래의 Generate Policy버튼을 클릭.

![08.1-15](img/08.1-15.png)



정책이 JSON형식으로 생성됐다.

이제 이걸 복사해서 버킷 정책 편집기에 붙여넣으면 된다.

![08.1-16](img/08.1-16.png)



6. 정책 생성기로 만든 정책을 버킷 정책 편집기에 붙여넣음 > 저장 버튼 클릭

![08.1-17](img/08.1-17.png)

그러면 버킷 정책이 퍼블릭이 되었다는 표시가 뜬다.

이제 속성 > 정적 웹 사이트 호스팅 > 엔드포인트의 링크를 클릭하면 버킷에 접근할 수 있다!

하지만, 아직 버킷에 올린것이 아무것도 없기 때문에 해당 링크로 가도 404 Not Found가 뜰 것 이다.



## 1-5. 아까 build한 앱의 build 내용 업로드

1. 1-1에서 빌드한 앱에 생성된 build 디렉토리의 파일들을 버킷 개요에 업로드한다.

드래그앤 드랍으로 간편하게 업로드할 수 있다.

![08.1-18](img/08.1-18.png)

![08.1-19](img/08.1-19.png)

![08.1-20](img/08.1-20.png)



## 1-6. 버킷의 엔드포인트에서 app이 올라간 것을 확인

속성 > 정적 웹 사이트 호스팅 > 엔드포인트 링크로 접속하면

![08.1-21](img/08.1-21.png)



다음과 같이 원하던 앱이 올라간 것을 볼 수 있다!

![08.1-22](img/08.1-22.png)



블로깅이 끝났으니 정적 웹 사이트 호스팅 꺼야지~

AWS 사용하다가 요금폭탄 맞은 사람들이 더러 있다고 하니 이런건 조심해줘야 한다.

AWS계정 키도 함부로 git등의 공개된 곳에 올리면 안 됨.



---

# 2. Server Application deploy strategy

## 2-1. Amazon EC2(Elastic Compute Cloud)

서버를 운영할 수 있도록 원격 컴퓨터를 제공해주는 서비스.

서버 배포에 많이 쓰임.

EC2: AWS가 가진 클라우드 컴퓨터. 유저가 원격 접속할 수 있음.

> 생활코딩 EC2: https://opentutorials.org/course/608/3004
>
> EC2 공식 소개 문서: https://aws.amazon.com/ko/ec2/
>
> EC2 공식 기술 문서: https://docs.aws.amazon.com/ec2/index.html

**EC2**

* Amazon EC2는 웹 서비스 인터페이스를 사용해 다양한 운영 체제로 인스턴스를 시작하고, 이를 사용자 정의 애플리케이션 환경으로 로드하며, 네트워크의 액세스 권한을 관리하고, 원하는 수의 시스템을 사용해 이미지를 실행할 수 있는 **가상 컴퓨팅 환경**을 제공함.



> PM2: https://pm2.keymetrics.io/

PM2(process manager): 터미널을 꺼도 서버가 계속 작동하게 해줌.

보통 여러 서비스에서 쓰이기 때문에 global로 설치함.



## 2-2. Amazon RDS(Relational Database Service)

EC2에 mySQL을 설치해도 되겠지만, 환경변수 설정 등 번거롭기 때문에 RDS를 사용한다.

셋업이 되어있고, 환경설정을 UI에서 하는 DB에 특화된 컴퓨터.



> RDS 공식 소개 문서: https://aws.amazon.com/ko/rds/
>
> [https://ko.wikipedia.org/wiki/아마존\_관계형\_데이터베이스_서비스](https://ko.wikipedia.org/wiki/아마존_관계형_데이터베이스_서비스)

**RDS**

* AWS클라우드에 있는 분리된 DB 환경
* 클라우드에서 관계형 데이터베이스를 간편하게 설정, 운영 및 확장할 수 있다.
* 하드웨어 프로비저닝, 데이터베이스 설정, 패치 및 백업과 같은 시간 소모적인 관리 작업을 자동화하면서 비용 효율적이고 크기 조정 가능한 용량을 제공.
* 사용자가 애플리케이션에 집중하여 애플리케이션에 필요한 빠른 성능, 고가용성, 보안 및 호환성을 제공할 수 있도록 지원함.



![08.2](img/08.2.png)



> **참조**
>
> codestates immersive 