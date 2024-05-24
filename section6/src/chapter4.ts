/*

인터페이스와 클래스

인터페이스를 이용해 클래스에 어떤 필드들이 존재하고, 어떤 메서드가 존재하는지 정의할 수 있다.

인터페이스를 클래스에서 implements 키워드와 함께 사용하면 해당 클래스가 생성하는 객체는 모두 이 인터페이스 타입을 만족하도록 클래스를 구현해야 한다.

*/


interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
  }
  
  class Character implements CharacterInterface {
    constructor(
      public name: string,
      public moveSpeed: number,
      private extra: string
    ) {}
  
    move(): void {
      console.log(`${this.moveSpeed} 속도로 이동!`);
    }
  }
