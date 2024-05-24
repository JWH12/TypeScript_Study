/*

서로소 유니온 타입

서로소는 두개의 집합이 공통점이 하나도 없는 즉, 교집합이 없는 것을 말한다.

교집합이 없는 타입들로만 만든 유니온 타입이다.

string 리터럴 타입은 객체당 하나만 존재하기 때문에 정의를 해놓으면 다른 객체와 교집합이 될 수 없다.

*/


type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
  };
  
  type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
  };
  
  type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
  };
  

  type User = Admin | Member | Guest;

  function login(user: User) {
    switch (user.tag) {
      case "ADMIN": {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
        break;
      }
      case "MEMBER": {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
        break;
      }
      case "GUEST": {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
        break;
      }
    }
  }