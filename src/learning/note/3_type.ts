// interface Person {
//   name: string;
//   age: number; 
// }

type Person = {
  name: string;
  age: number; 
}

// interface로 선언 시 hover하면 'interface Person'이라고 뜨지만 (cmd 누르면 보임)
// type으로 선언하면 오브젝트를 한눈에 볼수 있다
const seho: Person = { 
  name: '세호',
  age: 30,
}

// interface는 확장(extends)이 가능, type은 불가능 



export {} // isolatedModules : true라서 export 필요