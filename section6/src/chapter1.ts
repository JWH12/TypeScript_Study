/*

타입스크립트의 클래스

타입스크립트에서는 클래스의 필드를 선언할 때 타입 주석으로 타입을 함께 정의해야 한다.
그 이유는 함수 매개변수와 동일하게 암시적 any 타입으로 추론되는데 엄격한 타입 검사 모드(strict 옵션이 true로 설정되어 있을 경우)일 때에는 오류가 발생한다.

생성자에서 각 필드의 값을 초기화 하지 않을 경우 초기값도 함께 명시해주어야 한다.

타입스크립트의 클래스는 타입으로도 사용할 수 있다. 클래스를 타입으로 사용하면 해당 클래스가 생성하는 객체의 타입과 동일한 타입이 된다.


상속

타입스크립트에서 클래스의 상속을 이용할 때 파생 클래스(확장하는 클래스)에서 생성자를 정의 했다면 반드시 super 메서드를 호출해 슈퍼 클래스(확장되는 클래스)의 생성자를 호출해야 하며, 
호출 위치는 생성자의 최상단 이어야만 한다.

*/

class Employee {
    // 필드
    name: string = "";
    age: number = 0;
    position: string = "";
  
    // 생성자
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }
  
    // 메서드
    work() {
      console.log("일함");
    }
  }

  // 클래스를 타입으로 활용
  const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},
  };

  // 상속
  class ExecutiveOfficer extends Employee {
    officeNumber: number;
  
    constructor(
      name: string,
      age: number,
      position: string,
      officeNumber: number
    ) {
      super(name, age, position);
      this.officeNumber = officeNumber;
    }
  }