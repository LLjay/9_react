import React, {useState} from 'react'
import Toolbar from './Toolbar'

const LandingPage = () => {
    const [isLogin, setIsLogin] = useState();
    
    const onClickLogin = () => {
        setIsLogin(true)
    }

    const onClickLogout = () => {
        setIsLogin(false)
    }
    
  return (
    <div>
        <Toolbar
            isLogin = {isLogin}
            // setIsLogin = {setIsLogin}
            // setIsLogin을 여러군데 뿌려주면 어디서 바뀌었는지 알아내기 힘듦
            onClickLogin = {onClickLogin}
            onClickLogout = {onClickLogout}
            // 따라서 state가 
        />
        <div style={{ padding: 24 }}>KH 정보교육원</div>
    </div>
  )
}

export default LandingPage