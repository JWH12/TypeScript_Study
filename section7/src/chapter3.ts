/*

제네릭 인터페이스

제네릭 인터페이스는 제네릭 함수와는 달리 변수의 타입으로 정의할 때 반드시 꺽쇠와 함께 타입 변수에 할당할 타입을 명시해주어야 한다.

제네릭 함수는 매개변수에 제공되는 값의 타입을 기준으로 타입 변수의 타입을 추론할 수 있지만 인터페이스는 마땅히 추론할 수 있는 값이 없기 때문이다.

인터페이스와 마찬가지로 타입 별칭에도 역시 제네릭을 적용할 수 있다. 그리고 타입으로 정의될 때 반드시 타입 변수에 설정할 타입을 명시해야 한다.



인덱스 시그니쳐와 함께 사용

제네릭 인터페이스는 인덱스 시그니쳐와 함께 사용하면 기존보다 훨씬 더 유연한 객체 타입을 정의할 수 있다.


*/

// 제네릭 인터페이스
interface KeyPair<K, V> {
    key: K;
    value: V;
  }

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0,
  };
  
  let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
  };



// 인덱스 시그니쳐 함께 사용

interface Map<V> {
    [key: string]: V;
  }
  
  let stringMap: Map<string> = {
    key: "value",
  };
  
  let booleanMap: Map<boolean> = {
    key: true,
  };


