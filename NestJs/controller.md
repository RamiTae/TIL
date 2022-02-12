# [controller](https://docs.nestjs.com/controllers)

컨트롤러는 들어오는 요청 을 처리 하고 클라이언트에 응답 을 반환 하는 역할을 합니다.
![controller image](https://docs.nestjs.com/assets/Controllers_1.png)

컨트롤러의 목적은 애플리케이션에 대한 특정 요청을 수신하는 것입니다. **라우팅** 메커니즘은 어떤 컨트롤러가 어떤 요청을 수신하는지 제어합니다. 종종 각 컨트롤러에는 둘 이상의 경로가 있고 각 경로는 다른 작업을 수행할 수 있습니다.

기본 컨트롤러를 만들기 위해 클래스와 **데코레이터**를 사용 합니다. 데코레이터는 클래스를 필수 메타데이터와 연결하고 Nest가 라우팅 맵을 생성할 수 있도록 합니다(요청을 해당하는 컨트롤러에 연결).

> **힌트**
>
> CLI의 [CRUD 생성기](https://docs.nestjs.com/recipes/crud-generator#crud-generator)를 사용하면 [유효성 검사](https://docs.nestjs.com/techniques/validation)가 내장 된 CRUD 컨트롤러를 빠르게 생성 할 수 있습니다.
>
> `nest g resource [name].`

> 22.02.11
>
> express를 사용하면 직접 routes를 다 연결해줘야 하는데 nestJs는 그런 작업을 알아서 해 주네. 👍
