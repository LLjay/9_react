import React from 'react'

const Toolbar = (props) => {
    const {isLogin, onClickLogin, onClickLogout} = props;
  return (
    <div>
        {isLogin && <div style={{ padding: 24 }}>안녕하세요 이지수님</div>} 
        {/* &&는 앞의 내용이 true 여야 뒤를 검사하므로 앞이 false면 뒤는 검사하지 않음, 즉 출력하지 않고 넘어가는 것
        대신 앞의 내용이 true면 뒤를 검사하게 되므로 뒤의 내용을 출력하게 됨 */}
        {isLogin ? 
            <button onClick={onClickLogout}>로그아웃</button> :
            <button onClick={onClickLogin}>로그인</button>
        }
        {/* isLogin이 true면 로그아웃 버튼, false면 로그인 버튼 */}
    </div>
  )
}

export default Toolbar

// state를 만드는 위치 : state를 사용하는 곳의 가장 위쪽
// 그 state가 영향을 주는 가장 상단의 페이지에 위치해야 함
// state가 가장 위쪽에 있어야 여기저기 산발 되어서 각각 만들어주지 않고 하나의 값을 그대로 사용 가능
// setStatus 함수를 props로 내려줘야 함