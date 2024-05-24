/*

템플릿 리터럴 타입

타입 조작 기능들 중 가장 단순한 기능으로 템플릿 리터럴을 이용해 특정 패턴을 갖는 String 타입을 만드는 기능이다.


*/

// color와 animal의 타입들을 조합 할 경우

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

// 기본 방식
// type ColoredAnimal = `red-dog` | 'red-cat' | 'red-chicken' | 'black-dog';

// 템플릿 리터럴 타입
type ColoredAnimal = `${Color}-${Animal}`;