/*

타입 추론

타입스크립트가 타입을 추론하는 과정을 타입 넓히기라고 한다.

변수에 입력 된 초기값을 기준으로 변수의 타입을 추론하는 것을 타입추론이라 한다.

변수에 초기값을 주지 않으면 암묵적으로 any 타입으로 추론되며 변수의 값이 입력이 될 때마다 타입이 변하는데 이것을 any타입의 진화라고 한다.


*/

let a = 10;

let d;
d = 10;  // number 타입
d.toFixed();

d = "hello"; // string 타입으로 변화
d.toUpperCase();
// d.toFixed(); 오류



// 리터럴 타입 추론
const num = 10; // 값이 10인 num 리터럴 타입 
const str = "hello" // 값이 "hello"인 str 리터럴 타입

// union 타입 추론
let arr = [1, "string"] // (number | string)[] 타입으로 추론
