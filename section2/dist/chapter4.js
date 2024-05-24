/*
타입 별칭 0:43

타입 별칭은 타입을 마치 변수처럼 정의하도록 도와주는 문법이다.

타입의 별칭을 사용 할 때 같은 폴더에서 타입의 별칭이 중복되지 않게 해야한다.


인덱스 시그니처 5:27

인덱스 시그니처는 key와 value의 규칙을 기준으로 객체의 타입을 정의 할 수 있는 문법이다.


인덱스 시그니처 주의 할 점

인덱스 시그니처 타입은 규칙을 위반하지 않으면 모든 객체를 허용하는 타입이기 때문에 빈 객체를 만들었을 때 모를 수 있다.

하나의 프로퍼티를 생성했을 때 인덱스 시그니처의 타입과 프로퍼티 타입이 일치하지 않으면 오류를 발생시킨다.


*/
let user = {
    id: 1,
    name: "홍길동",
    nickname: "hong",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시"
};
let countryCodes = {
    Korean: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 1
};
export {};
