/*
함수 타입 표현식

타입 별칭을 이용해서 타입을 별도로 정의 할 수 있다.

함수 타입 표현식이 반드시 타입 별칭과 함께 사용되어야 하는 것은 아니다.


호출(콜) 시그니쳐
자바스크립트에서는 함수도 객체이기 때문에, 위 코드처럼 객체를 정의하듯 함수의 타입을 별도로 정의할 수 있다. 

*/

// 함수 타입 표현식
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 다른 방법
const add2: (a: number, b: number) => number = (a, b) => a + b;


// 호출 시그니쳐

type Operation2 = {
    (a: number, b: number): number;
  };
  
  const add3: Operation2 = (a, b) => a + b;
  const sub2: Operation2 = (a, b) => a - b;
  const multiply2: Operation2 = (a, b) => a * b;
  const divide2: Operation2 = (a, b) => a / b;