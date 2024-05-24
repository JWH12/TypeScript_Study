/*

객체 타입간의 호환성

타입스크립트는 프로퍼티에 따른 구조적타입 시스템이다.

객체 타입의 관계에서는 추가 프로퍼티가 없는 즉, 조건이 더 없는 타입의 객체가 슈퍼타입이 된다.

타입의 화헌성 처럼 서브타입에서 슈퍼타입이 되는 업캐스팅은 되지만 슈퍼타입에서 서브타입으로 되는 다운캐스팅은 할 수 없다.


초과 프로퍼티 검사 10:35

슈퍼타입에 서브타입의 객체를 객체 리터럴로 보내려고 할 때 에러가 발생한다.

슈퍼타입에 서브타입의 객체를 넣으려면 객체 리터럴을 사용하는 것이 아닌 변수에 저장한 뒤 인수를 사용하여 변수를 전달하면 된다.
*/

// 객체의 호환성
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
};

animal = dog;

// dog = animal;  // 다운캐스팅 오류


// 추가 프로퍼티 검사

type Book = {
    name: string;
    price: number;
};

type ProgramingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;

let programingBook: ProgramingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs", 
}

let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs", // 오류
};

let book3: Book = programingBook;

function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs", // 오류
})

func(programingBook);
