/*

  Exclude<T, K>
  
  Exclude 타입은 T로부터 U를 제거하는 타입이다.

*/

type Exlcude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, string>; // boolean



/*

  Extract<T, K>

  Extract 타입은 T로 부터 U를 추출하는 타입이다.

*/

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // boolean



/*

  ReturnType<T>

  타입변수 T에 할당된 함수 타입의 반환값 타입을 추출하는 타입이다.

*/

  type ReturnType<T extends (...args: any) => any> = T extends (
    ...agrs: any
  ) => infer R ? R : never;
  
  function funcA() {
    return "hello";
  }
  
  function funcB() {
    return 10;
  }
  
  type ReturnA = ReturnType<typeof funcA>; // string
  
  type ReturnB = ReturnType<typeof funcB>; // number