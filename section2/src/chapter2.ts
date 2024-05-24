/*
배열 0:24

배열의 들어가는 요소들의 타입이 다양 할 경우 3:02

다차원 배열의 타입을 정의하는 방법 4:41

튜플 5:54

순서를 정해서 값을 넣어야 할 때 튜플을 사용한다.

배열 메서드를 사용하면 튜플의 길이제한이 발생하지 않는다. 그 이유는 
자바스크립트로 변환 될 때 배열이라고 인식하여 push를 이요한 요소 추가에도 오류가 발생하지 않는다.


*/

// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["1", "2", "3"];

// 배열 타입의 제네릭 입력 방법
let boolArr: Array<boolean> = [true, false, true];

// 배열의 들어가는 요소들의 타입이 다양 할 경우
let multArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number [][] = [
    [1, 2, 3],
    [4, 5]
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
    ["홍길동", 1],
    ["이아무개", 2],
    ["박아무개", 3],
    ["김아무개", 4],
    // [5, "최아무개"], // 타입 오류 발생
    
]
