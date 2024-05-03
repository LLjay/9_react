// import React from 'react'
// import { FaPlus } from "react-icons/fa";
// import styled from 'styled-components';

// const InsertContainer = styled.div`
//     width: calc(100% - 24px);
//     padding: 24px 0;
//     display: inline-flex;
//     justify-content: center;
// `

// const InsertInput = styled.input`
//     min-width: 250px;
//     height: 40px;
//     padding: 6px 12px;
//     border-radius: 50px 0px 0px 50px;
//     border: none;
//     background-color: #f4f4f4;
//     outline: none;
// `

// const TodoInsert = () => {
//   return (
//     <div>
//         <input type="text" />
//         <button>
//             <FaPlus/>
//         </button>
//     </div>
//   )
// }

// export default TodoInsert


import React, {useState} from 'react'
import { FaPlus } from "react-icons/fa6";
import styled from 'styled-components';

const InsertContainer = styled.div`
    width: 100%;
    padding-bottom: 24px;
    display: inline-flex;
    justify-content: center;
`

const InsertInput = styled.input`
    min-width: 250px;
    height: 40px;
    padding: 6px 12px;
    border-radius: 50px 0px 0px 50px;
    border: none;
    background-color: #f4f4f4;
    outline: none;
`

const InsertBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    border-radius: 0px 50px 50px 0px;
`

const TodoInsert = ({onInsert}) => {
    // 넘겨줄 value 필요 -> 이걸 반환해줘야 하니까 함수를 넘겨준 것
    // 이 위치에서도 계속 title 값을 추적해주는 게 좋음

    const [todoTitle, setTodoTitle] = useState("");

    const onChangeTitle = (ev) => {
        setTodoTitle(ev.target.value)
    }

    const onSubmit = ev => { // 하나일 땐 괄호 생략 가능
        onInsert(todoTitle);
        setTodoTitle(""); // value 초기화
        // 한 번 넣고 입력하면 input은 비워줘야 하니까
    }

  return (
    <InsertContainer>
        <InsertInput 
            value={todoTitle}
            placeholder='할일 입력'
            onChange={onChangeTitle}/>
        <InsertBtn onClick={onSubmit}>
            <FaPlus/>
        </InsertBtn>
    </InsertContainer>
  )
}

export default TodoInsert