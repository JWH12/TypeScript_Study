/*

맵드 타입

기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 타입 조작 기능이다.

interface에서는 만들 수 없다.

keyof 연산자를 이용하여 더 깔끔하게 코드를 작성 할 수 있다.

예시 설명

[key in “id” | “name” | “age”] 는 이 객체 타입은 key가 한번은 id, 한번은 name, 한번은 age가 된다는 뜻으로 3개의 프로퍼티를 갖는 객체 타입으로 정의된다.

대괄호 뒤에 선택적 프로퍼티를 의미하는 물음표(?) 키워드가 붙어있으므로 모든 프로퍼티가 선택적 프로퍼티가 된다.

*/



  interface User {
    id: number;
    name: string;
    age: number;
  }

  type PartialUser = {
    // [key in "id" | "name" | "age"]?: User[key]; // 방법1
    [key in keyof User]?: User[key];
  };

  // 읽기전용 프로퍼티가 된 타입
  type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
  };
  
  
  function fetchUser(): User {
    // ... 유저 정보 불러오는 기능
    return {
      id: 1,
      name: "이정환",
      age: 27,
    };
  }

  function updateUser(user: User) {
    // ... 유저 정보 수정 기능
  }