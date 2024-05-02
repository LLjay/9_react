import React, {useRef, useState} from 'react'

const UseRefText = () => {
  // let name;
  const [name, setName] = useState(""); 

  // let gender;
  const [gender, setGender] = useState("남자"); 

  const nameInput = useRef();
//   특정 무엇의? 주소를 추적할 수 있음

  const handleChangeName = (event) => {
      setName(event.target.value);
  }

  const handleChangeGender = (event) => {
      setGender(event.target.value);
  }

  const handleSubmit = (event) => {
      alert(`이름 : ${name}, 성별 : ${gender}`);
      event.preventDefault(); 
  }

  const handleReset = () => {
    setName("");
    setGender("남자");
    nameInput.current.focus();
  }

  // 리얼돔이나 스크롤을 집어와야 할 때가 생김, 스크롤 상태 유지해야 함



  // url마다 페이지 변환을 해줘야 함 -> 원래 서버에 요청해서 페이지 포워딩
  // 근데 리액트는 html이 하나, url을 변경할 수 없음
  // -> 북마크 등의 기능을 할 수 없음
  // url마다 컴포넌트를 지정하는 것, 페이지 컴포넌트

return (
  <form onSubmit={handleSubmit}>
      <label>
          이름 : 
          <input 
            type="text" 
            value={name} 
            onChange={handleChangeName}
            ref={nameInput}//리렌더링 되어도 이 아이를 추적
          />
      </label>
      <br />
      <label>
          성별 : 
          <select value={gender} onChange={handleChangeGender}>
              <option value="남자">남자</option>
              <option value="여자">여자</option>
          </select>
      </label>
      <button type="submit">제출</button>
      <button type="button" onClick={handleReset}>초기화</button>
  </form>
)
}

export default UseRefText