/*
 any 0:24
 
 특정 변수의 타입을 우리가 확실히 모를 때 사용한다.

 변수에 any 타입을 정의하면 어떤 타입이던지 해당 변수에 넣을 수 있다.

 모든 타입의 변수의 any 타입의 변수를 넣을 수 있다.

 any 타입의 경우 타입스크립트가 가지고 있는 효과를 모두 포기하는 것과 비슷하기 때문에 가능하면 안쓰는게 좋다.

 
 unknown 4:14

 any타입과 같이 모든 타입을 사용 할 수 있지만 any 타입과 다른점이 있다.
 1. unknown타입의 변수를 다른 타입에 넣을 수 없다.
 2. 타입과 관련된 메서드를 사용 할 수 없다.
 3. unknown값을 활용하고 싶을 때는 조건문을 통한 typeOf 연산자를 통하여 타입을 확실히 밝혔을 때만 활용이 가능하다.


 타입을 모르는 경우 any 타입보다는 unknown 타입을 사용하는 것이 안전하다.

*/


// any

let anyVar: any = 10;

let num: number = 10;
num = anyVar;


// unknown

let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if(typeof unknownVar === "number") {
    num = unknownVar;
}