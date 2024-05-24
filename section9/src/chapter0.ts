/*

조건부 타입

extends와 삼항 연산자를 이용해 조건에 따라 각각 다른 타입을 정의하도록 돕는 문법이다.

제네릭 조건부 타입

타입은 제네릭과 함께 사용하면 활용도가 높아진다.


*/

 type A = number extends string ? number : string;

 type ObjA = {
    a: number;
  };
  
  type ObjB = {
    a: number;
    b: number;
  };
  
  type B = ObjB extends ObjA ? number : string;

  // 제네릭 조건부 타입

  type StringNumberSwitch<T> = T extends number ? string : number;

  let varA: StringNumberSwitch<number>; // string

  let varB: StringNumberSwitch<string>; // number


 // 예시)  매개변수로 String 타입의 값을 제공받아 공백을 제거한 다음 반환하는 함수
 // 타입 단언보다의 사용도 가능하지만 오버로딩을 이용하는게 더 좋다. 오버로드 시그니쳐의 조건부 타입은 구현 시그니쳐 내부에서 추론이 가능하기 때문이다.

 function removeSpaces<T>(text: T): T extends string ? string : undefined;
  function removeSpaces(text: any) {
    if (typeof text === "string") {
      return text.replaceAll(" ", "");
    } else {
      return undefined;
    }
  }

  let result = removeSpaces("hi im winterlood"); // string

  let result2 = removeSpaces(undefined); // undefined

