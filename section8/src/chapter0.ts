/*

인덱스드 엑세스 타입

인덱스를 이용해 다른 타입내의 특정 프로퍼티의 타입을 추출하는 타입이며 객체, 배열, 튜플에 사용할 수 있다.

주의할 점은 인덱스에는 값이 아니라 타입만 들어갈 수 있으며 인덱스에 존재하지 않는 프로퍼티 이름을 쓰면 오류가 발생한다.

인덱스드 엑세스 타입은 객체 프로퍼티의 타입 뿐만 아니라 특정 배열의 요소 타입을 추출하는데에도 이용할 수 있다.

배열의 요소 타입을 추출할 때에는 인덱스에 number 타입을 넣어주면 된다.

*/

//객체 프로퍼티의 타입 추출하기
// 작성자의 이름과 아이디를 붙여서 출력하는 어떤 함수가 있을 경우 
// Post["author"]는 Post 타입으로부터 author 프로퍼티의 타입을 추출한다. 그 결과 author 매개변수의 타입은 {id : number, name: string, age:number}가 된다.
// 대괄호 속에 들어가는 String Literal 타입인 “author” 를 인덱스 라고한다.

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age:number;
    };
}

const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "홍길동",
        age: 20
    },
};

function printAuthorInfo(author: Post["author"]) {
    console.log(`${author.id} - ${author.name}`);
}


// 배열 요소의 타입 추출하기

type PostList = {
title: string;
content: string;
author: {
    id: number;
    name: string;
    age: number;
};
}[];

const post2: PostList[number] = {
title: "게시글 제목",
content: "게시글 본문",
author: {
    id: 1,
    name: "김길동",
    age: 25,
},
};

// 튜플의 요소 타입 추출하기

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; // string

type Tup2 = Tup[2]; // boolean

type Tup3 = Tup[number] // number | string | boolean