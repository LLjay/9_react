import React, {useState} from 'react'
// 제출 버튼을 클릭 시 alert를 이용하여 이름과 성별을 보여주는 팝업 실행
const SignUp = () => {
    // let name;
    // let gender;

    // let name;
    const [name, setName] = useState(""); // 초기값을 설정해준 것
    // 내가 바꾸지 않아도 될 값은 그냥 변수로 써도 됨, 하지만 이건 계속 바뀌어야 하므로 state에 넣어주는 것
    // 화면에 영향을 주는 값들을 state로 만들기

    // let gender;
    const [gender, setGender] = useState("남자"); // 어차피 둘 중 하나라 먼저 나오는 것을 넣어준 것

    const handleChangeName = (event) => {
        // event 핸들러로 지정해주면 첫 번째로 event 객체가 넘어옴
        setName(event.target.value);
    }

    const handleChangeGender = (event) => {
        // event 핸들러로 지정해주면 첫 번째로 event 객체가 넘어옴
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        event.preventDefault(); // 뭔가를 막는 역할...
        // 이 이벤트를 더 이어나가지 말고 여기서 끝내라
        // submit 막으려면 return false 주면 됨, 그것과 같은 효과
    }
    // const onChangeName = () => {
    //     setName({name});
    // }

    // const onChangeGender = () => {
    //     setGender({gender});
    // }

    // const onSubmit = () => {
    //     console.alert("이름 : " + name + ", 성별 : " + gender);
    // }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            이름 : 
            {/* 이 안에 값을 넣어줘도 value 안의 name 값은 덮어 씌워지지 않았으므로 변하지 않음 */}
            <input type="text" value={name} onChange={handleChangeName}/>
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
    </form>
  )
}

export default SignUp