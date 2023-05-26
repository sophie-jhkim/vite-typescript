# Vue 3 + Vite + Typescript Basic BoilerPlate

basic bolierplate for vite vue3 <br>
프로젝트 초기 세팅용 보일러플레이트

## History
-   2023.05.23 init
    -   vite vue3 프로젝트 생성
    -   router, axios, sass 설치
    -   tsconfig 설정

## 환경

-   window10
-   node 18.16.0

## Feature

-   vite vue3
-   typescript
-   scss
-   router@4
-   axios
-   pinia
-   vueuse

## 실행

```
$ npm install
$ npm run dev
```

## directory

```
.
├── public
├── src
│   ├── apis
│   ├── assets
│   │   ├── fonts
│   │   └── styles
│   │       └── base.css        # Eric Meyer default css with font
│   ├── components
│   ├── layouts
│   │   ├── BaseLayout.vue
│   │   ├── Footer.vue
│   │   └── Header.vue
│   ├── router
│   ├── types
│   ├── views

```

### note


-   기본 router, 404 및 layout 설정
-   reset css 설정.
    -   font 한글 및 영어는 Noto Sans KR, 숫자는 Roboto
-   router-active 스타일 설정(메뉴-상세까지 커버)

### TODO

-   [ ] vuex
-   [ ] 환경설정 .env
