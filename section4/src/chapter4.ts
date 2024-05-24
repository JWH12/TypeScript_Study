/*

사용자 정의 타입 가드

사용자 정의 타입가드란 참 또는 거짓을 반환하는 함수를 이용해 우리 입맛대로 타입 가드를 만들 수 있도록 도와주는 타입스크립트의 문법이다.

*/


type Dog = {
    name: string;
    isBark: boolean;
  };
  
  type Cat = {
    name: string;
    isScratch: boolean;
  };
  
  type Animal = Dog | Cat;
  

  // Dog 타입인지 확인하는 타입 가드
  function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
  }
  
  // Cat 타입인지 확인하는 타입가드
  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
  }
  
  function warning(animal: Animal) {
    if (isDog(animal)) {
      console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else {
      console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
  }