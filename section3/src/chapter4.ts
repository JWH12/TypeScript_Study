/*

대수 타입

여러개의 타입을 합성해서 새롭게 만들어낸 타입으로 합집합 타입과 교집합 타입이 존재한다.

합집합 0:36

| 를 이용하여 타입을 추가하는 것의 제한은 없다.

Union 타입은 예시로 두개의 객체가 있을 때 하나의 객체에 포함 되거나 또는 두개의 객체가 겹치는 교집합에 포함 되어야 한다.


교집합 10:54

& 을 사용하여 교집합타입을 정의한다.

&을 사용하여 교집합으로 연결한 타입들의 프로퍼티를 모두 가지고 있어야 한다.


*/


// Union(합집합) 타입

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
}

let union2: Union1 = {
    name: "",
    language: "",
}

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
}

// let union4: Union1 = { // 어느 객체에도 포함되지 않기 때문에 오류를 발생
//     name: "",
// }


// intersection(교집합) 타입

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
}