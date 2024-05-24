/*
 Unknown 타입 5:11

 모든 타입의 슈퍼타입(부모타입)이다.

 
 Never 타입 7:34

 모든 타입의 서브타입(자식타입)이다.
 모든 타입의 서브타입이기때문에 모든 타입의 업캐스팅이 가능하다.


 Void 타입 10:28
 
 void타입은 undefined 타입의 슈퍼타입이다.


 any타입 11:45

 모든타입의 슈퍼타입도 되며 never 타입을 제외한 모든 타입들의 서브타입도 되는 타입계층도를 무시하는 치트타입이다.


*/

// unknown 타입

function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // let num: number = unknownVar; //오류
    // let str: string = unknownVar; //오류
    // let bool: boolean = unknownVar; //오류
}


// never 타입

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10; //오류
    // let never2: never = "strig"; //오류
    // let never3: never = false; //오류
}

// void 타입

function voidExam(){
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}


// any 타입

function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = undefinedVar;

    undefinedVar = anyVar;

    // neverVar = anyVar; // 오류
}
