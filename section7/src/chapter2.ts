/*

Map 메서드 타입

배열 메서드 Map은 원본 배열의 각 요소에 콜백함수를 수행하고 반환된 값들을 모아 새로운 배열로 만들어 반환한다.

메서드를 적용할 배열을 매개변수 arr로 받고, 콜백 함수를 매개변수 callback으로 받는다.

map 메서드는 모든 타입의 배열에 적용할 수 있기 때문에 arr의 타입은 unknown[]으로 정의

callback의 타입은 배열 요소 하나를 매개변수로 받아 특정 값을 반환하는 함수로 정의

map 메서드는 원본 배열 타입과 다른 타입의 배열로도 변환할 수 있어야 한다.



ForEach 메서드 타입

forEach 메서드는 배열의 모든 요소에 콜백함수를 한번씩 수행해주는 메서드이다.

첫번째 매개변수 arr에는 순회 대상 배열을 받고 두번째 매개변수 callback에는 모든 배열 요소에 수행할 함수를 받는다.

map 메서드의 타입 정의와는 달리 forEach 메서드는 반환값이 없는 메서드이므로 콜백 함수의 반환값 타입을 void로 정의한다.

*/

// map 메서드 타입

const arr = [1, 2, 3];

function map<T, U>(arr: T[], callback: (item: T) => U): U[]{
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }


  map(arr, (it) => it.toString());


// forEach 메서드 타입

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }