/*
 함수 타입의 호환성
 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것을 의미한다.

 다음 2가지 기준으로 함수 타입의 호환성을 판단하게 된다.
 
  1. 두 함수의 반환값 타입이 호환되는가?
   A와 B 함수 타입이 있다고 가정한다면 A 반환값 타입이 B 반환값 타입의 슈퍼타입이라면 두 타입은 호환된다.
   A의 반환값 타입은 Number, B의 반환값 타입은 Number Literal 이다. 따라서 변수 a에 b를 할당하는 것은 가능하나 반대로는 불가능하다.

  2. 두 함수의 매개변수의 타입이 호환되는가?
   예시 1)
   두 함수 타입 C와 D가 있다고 가정할 때 두 타입의 매개변수의 개수가 같다면 C 매개변수의 타입이 D 매개변수 타입의 서브 타입일 때에 호환된다.
   C 매개변수의 타입은 Number, D 매개변수의 타입은 Number Literal 이다. 따라서 C 매개변수의 타입이 D 매개변수의 슈퍼타입이므로 D를 C로 취급하는것은 불가능하나 반대로는 가능하다.

   예시 2)
   animalFunc에 dogFunc를 할당하는 것은 불가능하다. dogFunc의 매개변수 타입이 animalFunc 매개변수 타입보다 작은 서브타입이기 때문입니다. 반대로는 가능하다.
   animalFunc 타입의 매개변수 타입은 Animal 타입이다. 그러나 dogFunc 함수 내부에서는 name과 color 프로퍼티에 접근한다. 
   따라서 이렇게 할당이 이루어지게 되면 animal.color처럼 존재할거라고 보장할 수 없는 프로퍼티에 접근하게 된다.
   dogFunc 함수의 매개변수는 Dog 타입이다. 그리고 animalFunc 함수 내부에서는 name 프로퍼티에만 접근하기 때문에 안전한 코드이다.

   2-1. 매개변수의 개수가 다를 때
   매개변수의 개수가 같아도 타입이 일치해야 한다.
   

*/


// 기준 1 반환 값 타입이 호환 되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
// b = a; // ❌


// 기준 2 : 매개변수의 타입이 호환되는가?

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // ❌
d = c; // ✅

type Animal = {
    name: string;
  };
  
  type Dog = {
    name: string;
    color: string;
  };
  
  let animalFunc = (animal: Animal) => {
    console.log(animal.name);
  };
  
  let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
  };
  
//   animalFunc = dogFunc; // ❌
  dogFunc = animalFunc; // ✅



//매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌