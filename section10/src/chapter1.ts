/*

  Pick<T, K>

  뽑다, 고르다 라는 뜻이다. 따라서 특정 객체 타입으로부터 특정 프로퍼티만을 골라내는 타입이다.

  예를 들어 Pick 타입에 T가 name, age가 있는 객체 타입이고 K가 name 이라면 결과는 name만 존재하는 객체 타입이된다.

  객체 타입을 변형하는 타입이므로 맵드 타입을 이용해 만들 수 있다.

*/

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
  }
  
  type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
  };
  
  const legacyPost: Pick<Post, "title" | "content"> = {
    title: "",
    content: "",
  }; // 추출된 타입 : { title : string; content : string }



/*

  Omit<T, K>

  생략하다, 빼다 라는 뜻이다. 따라서 특정 객체 타입으로부터 특정 프로퍼티 만을 제거하는 타입이다.

  예를 들어 Omit 타입에 T가 name, age가 있는 객체 타입이고 K가 name 이라면 결과는 name을 제외하고 age 프로퍼티만 존재하는 객체 타입이 된다.
  
  Exclude는 앞서 조건부 타입을 살펴볼 때 직접 만들어 본 적 있는 타입으로 이 타입은 2개의 타입 변수를 할당받는데 T로부터 K를 제거한다.
  
*/
 
  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
  };



/*

  Record<K, V>

  동일한 패턴을 가진 객체 타입을 쉽게 만들 수 있다.


*/

  type Record<K extends keyof any, V> = {
    [key in K]: V;
  };
  
  type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string } 
  >;