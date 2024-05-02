import React, {useState} from 'react'
// 다른 사람이 만들어놓은 함수를 사용하는 것
// 이런 식으로 가져와야 사용할 수 있음

/*
    #Hook
    - 함수형 컴포넌트에서 react state와 생명 주기 메소드 기능을 사용할 수 있게 만들어주는 함수
    - hook은 class 안에서는 동작하지 않음, 대신 class 없이 react를 사용할 수 있게 해줌

    const [변수명, set변수명] = useState(초기값);
    변수명 : 원하는 state 명을 설정하면 됨
    set변수명 : 해당 state의 값을 변경할 함수

    state : 컴포넌트의 상태값
    useState : 컴포넌트의 상태를 생성하고 관리할 수 있게 해주는 react hook

    컴포넌트는 state 값이 변경되면 이를 확인하고 요소를 리렌더링 해줌
*/


const UseStateTest = () => {
    // let num = 0;
    // 변수가 변하건 말건, state가 바뀌지 않는 이상 값은 바뀌지 않음
    // 내부에서는 바뀔 수 없으니까?

    const [num, setNum] = useState(0);
    // const [num, setNum] = useState(0);
    // 원래 클래스에서는 하나만 만들 수 있었지만 내가 원하는 만큼 선언해줘도 됨
    // 값을 바꾸고 싶다면 set을 이용
    // setNum(7) 값이 바뀌었다고 인식해서 계속 렌더링 하고 다시 돌아가고 하는 것

    const onClick1 = () => {
        // num++; 바뀌지 않음, 이 안에서 변수를 변경해주는 건 아무런 소용이 없음
        setNum(num + 1);
        console.log("onClick1 : " + num);
        // 이 안에서 숫자를 찍어봤자 화면에 출력되는 건 이전 것을 출력, 값을 덮어씌우는 것이므로
    }

    const onClick2 = () => {
        // num--;
        setNum(num - 1);
        console.log("onClick2 : " + num);
    }
  return (
    <div>
        <span>COUNT : {num}</span>
        <div>
            {/* props로 onClick1을 넘겨준 것 */}
            <button onClick={onClick1}>+</button>
            <button onClick={onClick2}>-</button>
        </div>
    </div>
  )
}

export default UseStateTest