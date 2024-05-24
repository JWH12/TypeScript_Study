/*

keyof 연산자

객체 타입으로부터 프로퍼티의 모든 key들을 String Literal Union 타입으로 추출하는 연산자이다.

keyof 연산자는 keyof 타입 형태로 사용하며 타입의 모든 프로퍼티 key를 String Literal Union 타입으로 추출한다.

주의할 점은 keyof 연산자는 오직 타입에만 적용할 수 있는 연산자이다.

Typeof와 Keyof 함께 사용하기

typeof 연산자는 자바스크립트에서 특정 값의 타입을 문자열로 반환하는 연산자이지만 타입을 정의할 때 사용하면 특정 변수의 타입을 추론하는 기능도 가지고 있다.

*/

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "홍길동",
    age: 20,
};

//   type Person = typeof person;
// 결과
// {name: string, age: number, location:string}