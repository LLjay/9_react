import React, {useEffect, useState} from 'react'

/**
 * #useEffect
 * 컴포넌트가 렌더링 될 때 특정 작업을 실행할 수 있도록 하는 react hook
 * 클래스형 컴포넌트의 생명 주기 메소드의 역할을 할 수 있음 
 * 
 * 컴포넌트가 마운트 됐을 때(처음 나타났을 때), 언마운트 됐을 때(화면에서 사라질 때)
 * 업데이트 됐을 때(특정 state, props가 바뀌었을 때)
 * 
 * 사용법
 * useEffect(effect, []);
 * 첫 번째 인자(effect) : 함수 -> 특정 상황에서 실행할 기능
 * 두 번째 인자 : 배열 -> 의존성 배열
 */
// state의 변화를 얘가 감지

const UseEffectTest = () => {
    const [name, setName] = useState("루앨");
    const [num, setNum] = useState(0);

    const handleKeyUpName = (ev) => {
        setName(ev.target.value);
    }

    const handleClickNum = (ev) => {
        setNum(num + 1);
    }

    // 렌더링 되었을 때, state가 변경될 때마다 console.log 실행됨
    // componentDidMount & componentDidUpdate의 역할 대체 가능
    useEffect(() => {
        console.log("의존성 배열이 없는 useEffect 호출");
        // 이 컴포넌트가 생성 되자마자 한 번 호출 해준 것, componentDidMount와 같은 것
    })

    // 렌더링 되었을 때 한 번만 실행 (최초 마운트)
    // componentDidMount의 역할 대체 가능
    useEffect(() => {
        console.log("번 배열을 의존성 배열로 가진 useEffect 호출")
    }, [])

    // 렌더링이 되었을 때, 그리고 name stage가 변경 되었을 때 호출
    // 의존성 배열 안에 있는 state가 변하면 해당 effect 함수를 호출
    // componentDidMount & componentDidUpdate
    useEffect(() => {
        console.log(`${name}[name] 의존성 배열을 가진 useEffect 호출`)
    }, [name]) // 특정 state가 바뀌면 그 state의 영향을 받는 애들한테만 effect를 걸어줘야 할 때
    
    // return 함수를 추가해 componentWillUnmount 역할을 할 수 있음
    useEffect(() => {
        return () => { // 컴포넌트 지울 때 호출
            console.log(`${name}함수를 리턴 하는 useEffect 호출`)
        }
    }, [name])

  return (
    <div>
        <p>안녕하세요. {name}입니다.</p>
        <input type="text" onKeyUp={handleKeyUpName}/>
        <p>{num}번 클릭</p>
        <button onClick={handleClickNum}>+</button>
    </div>
  )
}

export default UseEffectTest