# 함께 가보고 싶은, 그런 곳. with-you

## 목표

nextJS와 mobx의 이해.
SEO챙기기

## 스택

- next.js
- react-query
- mobx
- styled-component
- mongo-db
- framer-emotion

## 참고

mobx세팅: https://colinch4.github.io/2021-06-07/mobx/
styled-components 세팅: https://www.yongho-kim.com/post/f2999080-95f8-4b95-adaf-029d9dbf40a4

## 오류/경고

1. @babel/plugin-proposal-class-properties 옵션중 loose:true적용시 경고 발생

해결: "@babel/plugin-proposal-private-methods", "@babel/plugin-proposal-private-property-in-object", 추가

2. 절대 경로 import

babel.rc와 tsconfig둘다 설정해줘야한다.

3. Text content did not match

미해결

4. next-dev.js?3515:32 Warning: Received `false` for a non-boolean attribute `rotate`.

불리언을 넘기니 생기는 경고문

rotate={rotate ? 1 : 0} 해결

5. 애니메이션

motion 라이브러리를 이용
