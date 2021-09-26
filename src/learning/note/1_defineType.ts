/**
 * 타입스크립트 기초 - 타입정의 (변수,함수)
 */

// 문자열
const str: string = 'hello';

// 숫자
const num: number = 10;

// 배열
const arr1: Array<string> = ['name','age'];
const arr2: string[] = ['name','age']; // 배열 - 리터럴 적용 (위에 배열과 동일하게 string 타입의 배열을 선언한것)

// 튜플 (타입 + 위치까지 지정, 모든 인덱스의 타입이 정해진 배열)
const address: [string, number] = ['판교', 40];

// 객체
const obj: object = {};

// 타입 객체
const person1:object = { // 타입이 object인 것만 정의
  age: 100,
  name: 'Capt' 
};
const person2: { age: number; name: string } = { // object 안의 속성의 타입까지 정의
  age: 100, 
  name: 'Capt' 
};
person2.age = 101;

// 진위값
let isLogin: boolean = false;

// 함수 - 매개 변수
function add1(a: number, b: number) {
  return a + b;
}

// 함수 - 반환 타입
function add2(a: number, b: number): number {
  return a + b;
}
// function add2(a: number, b: number): string { // return 타입으로 stirng이 올수 없으므로 에러
//   return a + b;
// }

// 함수 인자
function log(a: string) {
  console.log(a);
}
// log('a', 10); // 인자로 number를 받지 않으므로 파라미터 제한 에러

// 함수 옵셔널 파라미터(optional parameter)
function printText(text: string, type?: string) {
  console.log(text);
}
printText('hi'); // type은 옵션이므로 넘어오지 않아도 됨


export {} // isolatedModules : true라서 export 필요