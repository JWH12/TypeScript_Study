/*
  Partial<T>

  부분적인 또는 일부분의 라는 뜻으로 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환하여 기존 객체 타입에 정의된 프로퍼티들 중 일부분만 사용할 수 있도록 도와주는 타입이다.

  Partial<T> 타입은 타입 변수 T로 전달한 객체 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 변환한다.

*/

  interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
  }

  type Partial<T> = {
    [key in keyof T]?: T[key];
  };
  

  const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    content: "초안...",
  };


/*
  Required<T>

  필수의, 필수적인 이라는 뜻으로 특정 객체 타입의 모든 프로퍼티를 필수(선택적이지 않은) 프로퍼티로 변환

  모든 프로퍼티를 필수 프로퍼티로 만든다는 말은 반대로 바꿔보면 모든 프로퍼티에서 ‘선택적’ 이라는 기능을 제거하는 것 과 같기 때문에 다음과 같이 -?를 프로퍼티 이름 뒤에 붙여주면 된다.

*/

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
  }
  
  type Required<T> = {
    [key in keyof T]-?: T[key];
  };
  
  // 반드시 썸네일 프로퍼티가 존재해야 하는 게시글
  const withThumbnailPost: Post = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
  };



/*
  Readonly
  
  읽기 전용 이라는 뜻으로 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 변환한다.

*/