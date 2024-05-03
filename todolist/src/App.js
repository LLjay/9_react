// import logo from './logo.svg';
// import './App.css';
// import AppContainer from './components/AppContainer';
// import TodoInsert from './components/TodoInsert';

// function App() {
//   return (
//     <AppContainer title="Todolist">
//       <TodoInsert/>
//       {/* 이 사이에 들어가는 내용들은 무조건 children으로 인식되어 들어감 */}
//     </AppContainer>
//     // 이런 식으로 단일 태그 아니게 닫아주는 태그로 썼을 때 이 사이에 들어가는 공간을
//     // AppContainer에 props로 들어감, children이라는 이름으로
//   );
// }

// export default App;




import logo from './logo.svg';
import './App.css';
import AppContainer from './components/AppContainer';
import TodoInsert from './components/TodoInsert';
import { useState } from 'react';
import TodoListView from './components/TodoListView';

// const dummyTodos = [{
//   id: new Date().getTime() + 1, //key대체
//   title: "예습하기",
//   isDone: true
// },{
//   id: new Date().getTime() + 2, //key대체
//   title: "학습하기",
//   isDone: true
// },{
//   id: new Date().getTime() + 3, //key대체
//   title: "복습하기",
//   isDone: false
// }]

function App() {
  const [todos, setTodos] = useState([]);
  // todos에 데이터 추가 -> setTodos -> TodoInsert 내부에 input 요소의 value가 필요
  // 내리거나 반대로 주거나
  // 반대로 주려면 함수 만들어서 넘겨줌
  // App에서 데이터가 어떻게 바뀌는지를 알게 넘겨줘야 함

  const onInsert = (title) => {
    const todo = {
      id: new Date().getTime(), //key대체
      title: title,
      isDone: false
    }
    // todos + todo
    setTodos(todos => todos.concat(todo))
    // concat() : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 만들어 반환해줌
  }

  const onRemove = (id) => {
    // 데이터 지우려면 id 필요
    // filter 사용

    setTodos(/*todos => */ todos.filter(todo => todo.id !== id))
    // filter() : 조건을 만족하는 값만 모은 배열 반환
      // 그러니까 필요 없는 건 제거해줌
    
  }

  return (
    <AppContainer title={"TodoList"}>
      <TodoInsert onInsert={onInsert}/>
      <TodoListView
        todos={todos}
        onRemove={onRemove}
      />
    </AppContainer>
  );
}

export default App;
