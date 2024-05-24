/*

infer

infer는 조건부 타입 내에서 특정 타입을 추론하는 문법이다.

infer는 특정 함수 타입에서 반환값의 타입만 추출하는 특수한 조건부 타입인 ReturnType을 만들 때 이용할 수 있다.

조건식 T extends () => infer R에서 infer R은 이 조건식을 참이 되도록 만들 수 있는 최적의 R 타입을 추론하라는 의미이다.

*/

type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;

type FuncB = () => number;

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type C = ReturnType<number>; // 조건식을 만족하는 R추론 불가능 // never


// promise의 resolve 타입을 iinfer를 이용한 예시

// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string