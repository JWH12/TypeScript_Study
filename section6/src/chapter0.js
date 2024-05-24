/*

 자바스크립트 클래스

 클래스는 동일한 모양의 객체를 더 쉽게 생성하도록 도와주는 문법이다.

 동일한 모양의 객체를 여러개 생성해야 하면 어쩔 수 없이 중복 코드가 발생하게 되는데, 이런 상황에서 클래스 문법을 사용하여 중복 코드를 줄일 수 있다.


 클래스 선언

 객체를 생성하는 틀이다. 붕어빵이 객체라면 붕어빵 기계는 클래스라고 볼 수 있다.

 클래스를 선언했다면 다음으로는 필드를 선언해야 한다. 필드란 이 클래스가 생성할 객체가 갖는 프로퍼티를 의미한다. 

 필드를 선언했다면 다음으로는 생성자를 선언한다. 생성자는 특수한 메서드로 실질적으로 객체를 생성하는 함수이다.

 생성자에서는 매개변수로 프로퍼티 값을 받아 this.프로퍼티의 값으로 할당한다. 이때 this는 객체이며 현재 만들고 있는 객체를 의미한다.

 클래스를 이용해 새로운 객체를 생성할 때에는 new 클래스이름 형태로 클래스의 생성자 함수를 호출한다.

 클래스가 생성할 객체의 메서드도 설정 할 수 있다.

 메서드에 this를 활용해 객체 프로퍼티의 값을 활용하는 것이 가능하다.


 상속
 
 앞서 만든 클래스를 기반으로 추가적인 필드와 메서드를 갖는 클래스를 선언하고 싶다면 다음과 같이 상속을 이용하면 된다.

 super 라는 메서드를 호출하여 앞서 상속한 클래스의 생성자를 호출해줘야한다.

*/

class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요!`);
  }
}

const studentB = new Student("홍길동", "A+", 27);

console.log(studentB);
// Student { name: '홍길동', age: 27, grade: 'A+' }

// 상속

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}
