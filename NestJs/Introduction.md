# [Introduction](https://docs.nestjs.com/)

[한국어 ver](https://github.com/nestjs/nest/blob/master/readme_kr.md)

Nest는 효과적이고, 확장 가능한 [Node.js](https://nodejs.org/) 서버 사이드 애플리케이션을 빌드하기 위한 프레임워크입니다. Nest는 모던 Javascript를 사용하고, [TypeScript](http://www.typescriptlang.org/)로 빌드되었으며(순수 자바스크립트와 호환성을 유지합니다) OOP(객체 지향 프로그래밍), FP(함수형 프로그래밍), FRP(함수 반응형 프로그래밍)의 요소들이 결합되었습니다.

내부적으로 Nest는 [Express](https://expressjs.com/)를 사용하지만, 많은 서드파티 플러그인들을 쉽게 사용하게 하는 다양한 라이브러리들과의 호환성을 제공합니다. 예시-[Fastify](https://github.com/fastify/fastify)

Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform.

## PHILOSOPHY

최근 몇 년간, Node.js 덕분에 Javascript는 웹의 프론트와 백엔드에서 사용하는 "공통어"가 되었고, 이것은 개발자의 생산성을 향상해주고, 빠르고, 테스트 가능하고 확장 가능한 프론트엔드 애플리케이션의 개발을 가능하게 해주는 [Angular](https://angular.io/)와 [React](https://github.com/facebook/react), [Vue](https://github.com/vuejs/vue) 등의 멋진 프로젝트들이 등장했지만. 이와 반해 서버 사이드 분야에서는 사용자를 도와주는 훌륭한 라이브러리가 다양하게 존재하지만, 이 중 어느 것도 가장 중요한 문제를 효과적으로 해결하지 못했습니다. - **구조(architecture)**의 문제.

Nest는 간편하게 고수준으로 테스트 가능하고, 확장 가능하면서, 내부 의존성이 낮으며(loosely coupled), 애플리케이션을 쉽게 유지할 수 있는 혁신적인 애플리케이션 구조(architecture)를 제공하는 것을 목표로 합니다. Nest 애플리케이션의 구조(architecture)는 Angular로부터 많은 영감을 받았습니다.

## INSTALLATION

To get started, you can either scaffold the project with the [Nest CLI](https://docs.nestjs.com/cli/overview), or clone a starter project (both will produce the same outcome).

To scaffold the project with the Nest CLI, run the following commands. This will create a new project directory, and populate the directory with the initial core Nest files and supporting modules, creating a conventional base structure for your project. Creating a new project with the **Nest CLI** is recommended for first-time users. We'll continue with this approach in [First Steps](https://docs.nestjs.com/first-steps).

```bash
$ npm i -g @nestjs/cli

$ nest new project-name
```

## ALTERNATIVES

Alternatively, to install the TypeScript starter project with **Git**:

```bash
$ git clone https://github.com/nestjs/typescript-starter.git project

$ cd project

$ npm install

$ npm run start
```

> Hint
>
> If you'd like to clone the repository without the git history, you can use **degit**.

Open your browser and navigate to `http://localhost:3000/`.

To install the JavaScript flavor of the starter project, use `javascript-starter.git` in the command sequence above.

You can also manually create a new project from scratch by installing the core and supporting files with **npm** (or **yarn**). In this case, of course, you'll be responsible for creating the project boilerplate files yourself.

```bash
$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```
