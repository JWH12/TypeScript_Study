/*
 타입 좁히기

 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 말한다. 
 타입좁히기 방식에 도움을 주는 연산자(typeof, instanceof, in)를 타입 가드라고 한다.

 ※ instanceOf = A와 B가 같은지 확인
 Instanceof는 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산입니다. 따라서 직접 만든 타입과 함께 사용할 수 없다.

 ※ in = A가 B안에 있는지 확인 / in에는 null이나 undefined가 들어갈 수 없다.
 직접 만든 타입과 함께 사용하려면 다음과 같이 in 연산자를 이용해야 한다
*/

// 타입 좁히기

type Person = {
    name: string;
    age: number;
  };

  // value => number : toFixed
  // value => string : toUpperCase
  // value => Date : getTime
  // value => Person : name은 age 살이다
  
  function func(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
      console.log(value.toFixed());
    } else if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else if (value instanceof Date) {
      console.log(value.getTime());
    } else if (value && "age" in value) {
      console.log(`${value.name}은 ${value.age}살 입니다`)
    }
  }