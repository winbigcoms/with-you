# 좋은 곳은 같이 가고 싶은 법. with-you

## 목표

nextJS와 mobx의 이해.
SEO챙기기

## 스택

- next.js
- react-query
- mobx
- styled-component
- mongo-db

## 참고

mobx세팅: https://colinch4.github.io/2021-06-07/mobx/
styled-components 세팅: https://www.yongho-kim.com/post/f2999080-95f8-4b95-adaf-029d9dbf40a4

## 오류/경고

1. @babel/plugin-proposal-class-properties 옵션중 loose:true적용시 경고 발생

해결: "@babel/plugin-proposal-private-methods", "@babel/plugin-proposal-private-property-in-object", 추가

2. 절대 경로 import

babel.rc와 tsconfig둘다 설정해줘야한다.
