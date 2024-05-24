/*

제네릭 클래스

제네릭 클래스를 사용해 여러 타입의 리스트를 생성할 수 있는 범용적을 클래스를 정의한다.

클래스의 이름 뒤에 타입 변수를 선언하면 제네릭 클래스가 된다.

클래스는 생성자를 통해 타입 변수의 타입을 추론할 수 있기 때문에 생성자에 인수로 전달하는 값이 있을 경우 타입 변수에 할당할 타입을 생략해도 된다.

*/

class List<T> {
    constructor(private list: T[]) {}
  
    push(data: T) {
      this.list.push(data);
    }
  
    pop() {
      return this.list.pop();
    }
  
    print() {
      console.log(this.list);
    }
  }
  
  const numberList = new List([1, 2, 3]);
  const stringList = new List(["1", "2"]);
  

