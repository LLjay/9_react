import logo from './logo.svg';
import './App.css';
import Food from './components/Food';
import Menu from './components/Menu';
import Comment from './components/Comment';
// import CommentList from './components/CommentList';
import ContentList from './components/ContentList';
import CommentList from './classComponent/CommentList';
import UseStateTest from './reactHook/UseStateTest';
import SignUp from './sample/SignUp';
import LandingPage from './sample/LandingPage';
import UseEffectTest from './reactHook/UseEffectTest';
import UseMemoTest from './reactHook/useMemo/UseMemoTest';
import UseCallbackTest from './reactHook/useCallback/UseCallbackTest';
import UseRefText from './reactHook/UseRefText';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// BrowserRouter은 별칭, 별칭 부여해준 것
import Home from './pages/Home';
import FoodMenu from './pages/FoodMenu';

// 컴포넌트
// JSX 문법은 자바 스크립트 안에 HTML을 넣어줘도 인식
// <>는 태그로 HTML로 인식
// 하지만 자바 스크립트는 형식이 일정하지 않음, 따라서 {}를 치면 자바 스크립트로 인식

/*
  #react-router-dom
  react로 생성된 SPA 내부에서 페이지 이동이 가능하도록 만들어주는 라이브러리

  BrowserRouter(Router)
  history API를 이용해서 history 객체 생성
    // history 객체 : 웹에서 객체 만들어줄 때 history 객체도 같이 만들어줌, 페이지 이동 경로 정보를 가지고 있음
  라우팅을 진행할 컴포넌트 상위에 Router 컴포넌트를 생성하고 감싸줘야 함

  #Routes
  모든 Route의 상위경로에 존재해야 하며, location 변경 시 하위에 있는 모든 Route 중
  현재 location과 맞는 Route를 찾아줌

  #Route
  현재 브라우저의 location(window.href.location 정보를 가져옴) => 상태에 따라 다른 element 렌더링
*/

function App() {
  return (
    <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/food">FOOD List</Link>
              </li>
            </ul>
          </nav>
            {/* <CommentList/>
            <ContentList/>
            <UseStateTest/> */}
            {/* <LandingPage/> */}
            {/* <UseEffectTest/> */}
            {/* <UseMemoTest/> */}
            {/* <UseCallbackTest/> */}
            {/* <UseRefText/> */}
            <Routes>
              {/* route 안의 path로 접속하면 home 컴포넌트를 보내주겠다는 것 */}
              <Route path='/' element={<Home/>}/> 
              <Route path='/food' element={<FoodMenu/>}/>
            </Routes>
            {/* Link 태그 : a태그와 같음, 라우팅 된 url로 보냄 */}
        </div>
    </Router>
  );
}
// 노드 환경에 내가 이 function을 App이라는 이름으로 등록하겠다고 하는 것
export default App;
