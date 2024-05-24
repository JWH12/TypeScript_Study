/*

접근 제어자

접근 제어자(Access Modifier)는 타입스크립트에서만 제공되는 기능으로 클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능 이다.

접근 제어자 종류 3가지

1. public : 모든 범위에서 접근 가능
public은 공공의 라는 뜻으로 어디서든지 이 프로퍼티에 접근할 수 있음을 의미한다.

필드의 접근 제어자를 지정하지 않으면 기본적으로 public 접근 제어자를 갖게 된다.


2. private : 클래스 내부에서만 접근 가능
특정 필드나 메서드의 접근 제어자를 private으로 설정하면 클래스 내부에서만 이 필드에 접근할 수 있게 된다.


3. proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
private과 public의 중간으로 클래스 외부에서는 접근이 안되지만 클래스 내부와 파생 클래스에서 접근이 가능하도록 설정하는 접근 제어자이다.



필드 생략

생성자에 접근 제어자를 설정하면 동일한 이름의 필드를 선언하지 못하게 된다. 그 이유는 생성자 매개변수에 접근 제어자가 설정되면 자동으로 필드도 함께 선언되기 때문이다.

접근 제어자가 설정된 매개변수들은 this.필드 = 매개변수가 자동으로 정의 된다.

*/

class Employee {
    // 필드
    private name: string; // private 접근 제어자 설정
    protected age: number;
    public position: string;
  
    // 생성자
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }
  
    // 메서드
    work() {
        console.log(`${this.name}이 일함`); // 여기서는 접근 가능
      }
  }

  // 상속
  class ExecutiveOfficer extends Employee {
    // 메서드
    func() {
        // this.name; // ❌ 오류 
        this.age; // ✅ 가능
    }
  }

/* 필드 생략
class Employee {
    // 생성자
    constructor(
      private name: string,
      protected age: number,
      public position: string
    ) {}
  
    // 메서드
    work() {
      console.log(`${this.name} 일함`);
    }
  } */