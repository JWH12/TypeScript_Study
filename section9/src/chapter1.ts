/*

분산적인 조건부 타입

조건부 타입의 타입 변수에 Union 타입을 할당하면 분산적인 조건부 타입으로 조건부 타입이 업그레이드 된다.

분산적인 조건부 동작 방식
타입 변수에 할당한 Union 타입 내부의 모든 타입이 분리 되며 StringNuberSwitch<number | string> 타입은 다음과 같이 분산된다.
1. StringNumberSwitch<number>
2. StringNumberSwitch<string>

그리고 분산된 각 타입의 결과를 모아 다시 Union 타입으로 묶는다.

결과 : number | string

*/

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // string | number


// Exclude 조건부 타입 구현하기
// Union 타입으로부터 특정 타입만 제거하는 Exclude(제외하다) 타입을 다음과 같이 정의할 수 있다.
/* 
코드의 흐름 

1. Union 타입이 분리된다.
   - Exclude<number, string>
   - Exclude<string, string>
   - Exclude<boolean, string>

2. 각 분리된 타입을 모두 계산한다.
   - T = number, U = string 일 때 number extends string 은 거짓이므로 결과는 number
   - T = string, U = string 일 때 string extends string 은 참이므로 결과는 never
   - T = boolean, U = string 일 때 boolean extends string 은 거짓이므로 결과는 boolean

3. 계산된 타입들을 모두 Union으로 묶는다
   - 결과 :  number | never | boolean
계산 결과 타입 A는 number | never | boolean 타입으로 정의된다. 그런데 여기서 공집합을 의미하는 never 타입은 Union으로 묶일 경우 사라진다. 
그 이유는 공집합과 어떤 집합의 합집합은 그냥 원본 집합이 되기 때문이다. 따라서 최종적으로 타입 A는 number | boolean 타입이 된다. 

*/


type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

