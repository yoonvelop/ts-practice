/*
  1. 인터페이스 선언
*/ 
interface User {
  name: string;
  age: number;
}

/*
  2. 변수에 사용하는 경우  
*/ 
const seho: User = { name: 'hi', age: 100 };

/*
  3. 함수의 매개변수에 사용하는 경우
*/ 
function getUser(user: User) {
  console.log(user);
}
getUser(seho);

/*
  4. 함수의 스펙(구조)에 사용하는 경우 (여러 사람이 라이브러리 함수를 만들어 쓰거나 할 경우)
*/
interface SumFunction { // 함수의 파라미터, 반환 타입을 인터페이스화
  (a: number, b: number): number;
}
let sum: SumFunction; // number 두개 받아서 number를 리턴
sum = function (num1: number, num2: number): number { // 정의 
  return num1 + num2;
};
// 아래와 동일하나 위처럼 인터페이스를 활용해서 정의 할 수도 있다
// const sum = (num1: number, num2: number): number => num1 + num2



/*
  5. 배열의 인덱싱에 사용하는 경우
*/ 
interface StringArray {
  [index: number]: string;
}
let arr: StringArray = [];
arr[0] = 'hi';
// arr[1] = 10; // index는 number로 들어갔지만 string이 아니라 에러

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string] : RegExp
}
const obj: StringRegexDictionary = {
  // cssFile: 'css' // 'string' 형식은 'RegExp' 형식에 할당할 수 없습니다.ts(2322)
  cssFile: /\.css$/, // 정규표현식으로 넣으면 잘들어감
  jsFile: /\.js$/ 
}


/* 
  6. 인터페이스 확장
*/
interface Person {
  name: string;
  age: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}
interface Developer extends Person {
  language: string;
}
const joo: Developer = { name: 'joo', age: 20, language: 'ts' };
// Developer는 Person을 상속하기 때문에 name이 없으면 에러





export {} // isolatedModules : true라서 export 필요