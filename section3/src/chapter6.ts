/*

type assertion(타입 단언)

as 옆에 타입을 명시하면 앞에 있는 값을 as옆에 명시한 타입으로 정의하라고 알려준다. ex) 값 as 단언


타입 단언의 규칙 5:00 

A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 한다.

다중단언을 할 수 있지만 그렇게 하면 타입스크립트를 사용하는 의미가 없어진다.


const 단언 10:16

const 단언은 let을 사용한 변수를 마치 const를 사용 한 것과 같은 효과를 나타낸다.

객체에 const 단언을 사용하면 객체의 프로퍼티가 readOnly가 되기 때문에 수정을 할 수 없다.


Non Null 단언 12:00

!(느낌표)를 뒤에 붙여주면 어떠한 값이 null이나 undefined가 아니라고 타입스크립트 컴파일러에 알리는 역할을 한다.


*/

// 타입 단언

type Person = {
    name: string;
    age: number;
}; 

let person = {} as Person;
person.name = "홍길동";
person.age = 20;

type Dog = {
     name: string;
     color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "징도"
} as Dog;


// 타입 단언의 규칙

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string //오류
let num3 = 10 as unknown as string; // 다중 단언


// const 단언 

let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow",
} as const; // 해당 프로퍼티가 모두 readonly가 됨


// Non Null 단언

type Post = {
    title: string;
    author?: string;
};

let post:Post = {
    title: "게시글1",
    author: "홍길동"
};

const len: number = post.author!.length; // author가 값이 없어도 undefined 혹은 null이 아닌 string이라고 단언한다.