/*

인터페이스의 확장

하나의 인터페이스를 다른 인터페이스들이 상속받아 중복된 프로퍼티를 정의하지 않도록 도와주는 문법이다.

interface 타입이름 extends 확장_할_타입이름 형태로 extends 뒤에 확장할 타입의 이름을 정의하면 해당 타입에 정의된 모든 프로퍼티를 다 가지고 오게 된다.

인터페이스는 인터페이스 뿐만 아니라 타입 별칭으로 정의된 객체도 확장할 수 있다.



프로퍼티 재 정의하기

확장과 동시에 프로퍼티의 타입을 재 정의 하는 것 또한 가능하다.

한가지 주의할 점은 프로퍼티를 재 정의할 때 원본 타입을 A 재 정의된 타입을 B라고 하면 반드시 A가 B의 슈퍼 타입이 되도록 재정의 해야한다.


*/


  interface Animal {
    name: string;
    color: string;
  }
  
  interface Dog extends Animal {
    // name: "doldol"; // 타입 재 정의
    breed: string;
  }
  
  interface Cat extends Animal {
    isScratch: boolean;
  }
  
  interface Chicken extends Animal {
    isFly: boolean;
  }


  const dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
  };

  // 다중 확장
  interface DogCat extends Dog, Cat {}

  const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
  };