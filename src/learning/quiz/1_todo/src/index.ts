interface Todo {
  id: number, title: string, done: boolean
}

let todoItems: Todo[]; // let todoItems: object[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  //반환 타입을 : object[] 라고만 정의하면 'object' 형식에 'done' 속성이 없습니다.ts(2339) 에러남
  // object 안에 done이 있는지 보장되어있지 않기 때문
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void{
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
     id: 4,
     title: '아이템4',
     done: false,
  }
  addTodo(item1);
  addTodo({
    id: 5,
    title: '아이템5',
    done: false,
 })
}

// NOTE: 유틸 함수
function log(): void{
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();

export {} // isolatedModules : true라서 export 필요