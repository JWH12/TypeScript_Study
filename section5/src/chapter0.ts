/*

  인터페이스

  인터페이스란 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법이다.

  인터페이스에서도 동일한 방법으로 선택적 프로퍼티 설정이 가능하다.

  읽기 전용 프로퍼티 또한 동일한 방법으로 설정 가능하다.

  메서드의 타입을 정의할 수 있다.

  함수 타입 표현식과 호출 시그니쳐를 이용해 메서드의 타입을 정의할 수도 있다.

  함수 타입 표현식으로 메서드의 타입을 정의하면 메서드의 오버로딩 구현이 불가능하다.

  메서드에 오버로딩을 구현하고 싶으면 호출시그니쳐를 사용하여 구현 할 수 있다.

*/

interface Person {
    readonly name: string;
    age?: number;
    sayHi():void; 
    // sayHi: (a: number, b: number) => void; // ❌
    sayHi(a: number): void;
    sayHi(a: number, b: number): void;
};


const person: Person = {
    name: "이정환",
    // age : 27,
    sayHi: function(){
        console.log("Hi");
    }
  };

  person.sayHi();
  person.sayHi(1, 2);
// person.name = '홍길동' // ❌

  

