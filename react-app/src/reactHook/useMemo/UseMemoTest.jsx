import React, {useState} from 'react'
import ViewState from './ViewState';

/**
 * #useMemo
 * useMemo는 Memorization 기법을 사용한 react hook
 * 메모리제이션 기법은 한 번 연산해본 결과를 기억해두고
 * 다시 동일한 입력이 돌아오면 기억해둔 데이터를 변환하는 방법
 * 
 * 사용법
 * useMemo(() => {}, [])
 * 
 * 첫 번째 인자 : 메모리제이션 해줄 함수
 * 두 번째 인자 : 의존성 배열
 */
// 최적화 과정, 안 써도 프로그램 실행에 따로 문제는 없음

const UseMemoTest = () => {
    const [num, setNum] = useState(0);
    const [text, setText] = useState("");

    const increaseNum = () => {
        setNum(num + 1);
    }

    const decreaseNum = () => {
        setNum(num - 1);
    }

    const onChangeText = (ev) => {
        setText(ev.target.value);
    }

    // 원래 글자나 숫자 하나만 바뀌어도 리렌더링 되어야 한다고 판단해 같은 값이어도 전체를 다시 그려줌

  return (
    <div>
        <div>
            <button onClick={increaseNum}>+</button>
            <button onClick={decreaseNum}>-</button>
            <input 
                type="text" 
                placeholder='글자를 입력하세요.'
                onChange={onChangeText}
            />
        </div>
        <ViewState
            num={num}
            text={text}
        />
    </div>
  )
}

export default UseMemoTest