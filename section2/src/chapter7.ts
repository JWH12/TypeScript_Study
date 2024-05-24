/* 

void 0:22

함수에서 반환하는 값이 없을 때는 void 타입을 사용한다.

undefined 타입 또는 null 타입의 경우 return을 통하여 undefined, null 값을 반환해야 하기 때문에 retrun문을 사용하지 않을 때 void를 사용한다.

void 타입으로 정의한 변수에는 undefined 와 null 을 제외한 어떠한 타입의 값을 넣을 수 없다.


never 3:50

불가능한 타입

함수가 정상적으로 종료 될 수가 없어서 해당 함수에 반환값이 있는것이 불가능 할 때 never 타입을 사용한다.

자바스크립트에서 사용했던 throw new Error();의 경우에도 타입을 never 타입을 정의하는 것이 좋다.

never 타입으로 정의한 변수에는 any 타입을 포함한 어떠한 타입의 값을 넣을 수 없다.

*/


// void

function func1():void {
    console.log("hello");
};

// never 

function func2(): never {
    while(true){}
};

function func3(): never {
    throw new Error();
};


