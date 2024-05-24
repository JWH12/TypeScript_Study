/*
 enum 0:24

 타입스크립트에만 있다.

 타입 별칭과 다르게 바로 중괄호를 사용한다.

 enum 타입을 쓰는 이유는 숫자 또는 문자로 역할을 부여해야 할 때 해당 타입을 사용하여 정의해두면 역할을 분류하기가 편해진다.

 enum을 설정 할 때 자동으로 숫자를 할당 시킬 수 있고 지정하여 할당 시킬 수도 있다. 숫자를 사용하는 enum을 숫자형 enum이라고 한다.

 enum은 다른 타입들과 다르게 컴파일해도 사라지지 않고 자바스크립트의 객체로 변환되기 때문에 마치 변수에 값을 넣듯이 작성 할 수 있다.

*/
// enum 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["GUEST"] = 3] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "홍길동",
    role: Role.ADMIN,
};
const user2 = {
    name: "김길동",
    role: Role.USER,
};
const user3 = {
    name: "최길동",
    role: Role.GUEST,
};
export {};
