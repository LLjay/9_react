// JSX : 리액트에서 사용하는 기본적인 문법 체계
//       자바 스크립트와 HTML을 함께 사용
//       HTML을 사용하던 중 스크립트를 사용하고 싶을 때는 {}를 통해서 사용

// Component : 하나의 함수형 컴포넌트는 무조건 하나의 태그를 리턴
//             재사용 할 수 있는 가장 작은 단위의 Element
    // 리얼 돔에 들어가서 요소가 됨

// props : 부모 컴포넌트에서 자식 컴포넌트에 데이터를 전달하는 방식
//         컴포넌트의 속성값으로 전달
// 부모 요소가 바뀌면? 자식 요소는 리렌더링 함

// rafce
import React from 'react'
const Food = (props) => {
    console.log(props);
  return (
    <div>
        <h1>이 음식의 이름은 {props.name}</h1>
        <h1>이 음식은 1인분에 {props.price}원입니다.</h1>
    </div>
  )
}

// ed
export default Food

// 태그 하나를 리턴하면 그게 하나의 컴포넌트가 됨
