/*

타입 변수 응용


*/

// 예시 1) 만약 2개의 타입 변수가 필요한 상황이라면 T, U 처럼 2개의 타입 변수를 사용해도 된다.
function swap<T, U>(a: T, b: U) {
    return [b, a];
  }
  
  const [a, b] = swap("1", 2);


// 예시 2) 다양한 배열 타입을 인수로 받는 제네릭 함수를 만들어야 한다면 다음과 같이 할 수 있다.
function returnFirstValue<T>(data: T[]) {
    return data[0];
  }

  // 인수로 Number[] 타입의 값을 전달했으므로 이때의 T는 Number 타입으로 추론
  let num = returnFirstValue([0, 1, 2]);
  
  // 인수로 (String | Number)[] 타입의 값을 전달했으므로 이때의 T는 String | Number 타입으로 추론
  let str = returnFirstValue([1, "hello", "mynameis"]);


// 예시 3) 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하려면 다음과 같이 튜플 타입과 나머지 파라미터를 이용하면 된다.
// 함수 매개변수의 타입을 정의할 때 튜플 타입을 이용해 첫번째 요소의 타입은 T 그리고 나머지 요소의 타입은 …unknown[] 으로 길이도 타입도 상관 없도록 정의한다.
// 함수를 호출하고 [1, “hello”, “mynameis”] 같은 배열 타입의 값을 인수로 전달하면 T는 첫번째 요소의 타입인 Number 타입이 된다.
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
    return data[0];
  }
  
  let str2 = returnFirstValue2([1, "hello", "mynameis"]);
  // number



// 예시 4) 마지막으로 살펴볼 사례는 타입 변수를 제한하는 사례
// 타입 변수를 제한할 때에는 확장(extends)을 이용한다.
//  T extends { length : number } 라고 정의하면 T는 { length : number } 객체 타입의 서브 타입이 된다.


function getLength<T extends { length: number }>(data: T) {
    return data.length;
  }
  
  getLength("123");            // 인수로 length 프로퍼티가 존재하는 String 타입의 값을 전달
  
  getLength([1, 2, 3]);        // 인수로 length 프로퍼티가 존재하는 Number[] 타입의 값을 전달
  
  getLength({ length: 1 });    // 인수로 length 프로퍼티가 존재하는 객체 타입의 값을 전달
  
//   getLength(undefined);        // 인수로 undefined을 전달했으므로 오류
  
//   getLength(null);             // 인수로 null을 전달했으므로 오류