/*
함수 타입 정의 3:15

화살표 함수 타입 정의

화살표 함수 역시 반환값의 타입은 자동으로 추론


함수의 매개변수

매개변수의 이름뒤에 물음표(?)를 붙여주면 선택적 매개변수가 되어 생략이 가능

무조건 들어가야하는 필수 매개변수앞에 선택적 매개변수가 있으면 오류를 발생하기 때문에 선택적 매개변수 앞에 무조건 필수매개변수가 들어와야 한다.


...rest 파라미터를 사용하면 가변적인 인수를 받았을 때 배열로 묶어서 rest에 저장 할 수있게 하는 문법이다.

*/

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
// 타입스크립트의 경우 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 설명

function func(a: number, b: number): number {
    return a + b;
  }


// 화살표 함수 타입 정의하기

const add = (a: number, b: number): number => a + b;


//매개변수 기본값 설정하기

function introduce(name = "이정환",  age: number, tall?: number,) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

// 여러개의 숫자를 인수로 받는 함수의 경우
function getSum(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
  }
  
  getSum(1, 2, 3)    // ✅
//   getSum(1, 2, 3, 4) // ❌