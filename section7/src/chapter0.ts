/*

제네릭

함수나 인터페이스, 타입 별칭, 클래스 등을 다양한 타입과 함께 동작하도록 만들어 주는 타입스크립트의 기능이다.

반환값 타입이 return 문을 기준으로 추론되기 때문에 다양한 타입의 매개변수를 받고 해당 매개변수를 그대로 반환하는 함수가 필요 할 때 사용된다.

함수 이름 뒤에 꺽쇠를 열고 타입을 담는 변수인 타입 변수 T를 선언한다. 그리고 매개변수와 반환값의 타입을 이 타입변수 T로 설정한다.

T에 어떤 타입이 할당될 지는 함수가 호출될 때 결정 된다.

제네릭 함수를 호출할 때 타입 변수에 할당할 타입을 직접 명시하는 것도 가능하다.

타입 변수에 할당하고 싶은 특정 타입이 존재한다면 함수 호출과 함께 꺽쇠를 열고 직접 명시해주는 것이 좋다.

*/

function func<T>(value: T): T {
    return value;
  }
  
  let num = func(10);

  let str = func("string");
  
  let arr = func<[number, number, number]>([1, 2, 3]);