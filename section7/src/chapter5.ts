/*

Promise(프로미스)

promise는 제네릭 클래스로 구현되어 있다. 따라서 새로운 Promise를 생성할 때 타입 변수에 할당할 타입을 직접 설정해 주면 해당 타입이 바로 resolve 결과값의 타입이 된다.

reject 함수에 인수로 전달하는 값 즉 실패의 결과값 타입은 정의할 수 없다. 그래서 unknown 타입으로 고정되어 있기 때문에 catch 메서드에서 사용하려면 타입 좁히기를 사용해야 한다.

*/

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      // 결과값 : 20
      resolve(20);
    }, 3000);
  });
  
  promise.then((response) => {
    // response는 number 타입
    console.log(response);
  });
  
  promise.catch((error) => {
    if (typeof error === "string") {
      console.log(error);
    }
  });

  interface Post{
    id: number;
    title: string;
    content: string;
  }

  function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          title: "게시글 제목",
          content: "게시글 본문",
        });
      }, 3000);
    });
  }
