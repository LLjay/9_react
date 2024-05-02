import React, { Component } from 'react'
import Comment from '../components/Comment';

// 서버에서 왔다고 가정
const serverComments = [
    {
        id : 1,
        message : "배고파요"
    },{
        id : 2,
        message : "뭐 먹을까요"
    },{
        id : 3,
        message : "점심 먹고 싶어요"
    }
]

let timer;
// Mounting : 컴포넌트를 붙여주는 것

/*
    class Component
    state(필드 대체)를 가지고 있고 이를 수정할 수 있음
    라이프 사이클에 따른 생명 주기 메소드를 사용할 수 있음
        // 라이프 사이클 메소드 티스토리 정리
*/
export default class CommentList extends Component {
    constructor(props){
        super(props) // props는 불변성을 가짐, 자식에서는 절대 바뀔 수 없음, 기존의 것을 삭제하고 다시 생성하는 것
        // 하지만 state는 바뀔 수 있음, 하지만 이 안에서 수정하는 게 아니고 덮어 씌우는 것

        // props => 

        // 필드를 대체해서 쓰는 것, 이 컴포넌트의 상세값을 저장하기 위한 공간
        // 키 값 형태의 데이터 맵 구조를 하나 만들어둔 것
        this.state = { // state는 어디서든 this로 가져올 수 있음
            // commentList : serverComments,
            commentList : []
        }
    }

    // 생성, 수정, 삭제 세 가지의 상태를 통한 메소드가 분류되어 있음
    // 요소 생성 -> componentDidMount
    // 요소 수정 -> componentDidUpdate
    // 요소 삭제 -> componentDidUnmount
    // 요소를 삭제하려면 state를 바꿔줘야 함

    // 함수는 실행하고 종료되면 바로 사라짐
    // 객체는 이 데이터가 소멸될 때까지 살아있음
    // 함수형 컴포넌트와 클래스형 컴포넌트
    // 따라서 사라지지 않도록? 다양한 기능을 함수형 컴포넌트에 걸어줄 것 -> 훅

    componentDidMount(){
        // 바로 화면에 붙여줄 것
        // const commentList = this.state.commentList; 아래 식과 똑같음
        const {commentList} = this.state; // 비구조 할당
        // 이 안에 있는 값을 바로 변수로 넣어서 만들어주는 형태의 문법
        // const {commentList, test1} = this.state;
        // const commentList = this.state.commentList;
        // const test1 = this.state.test1; 

        // setInterval : 일정 시간마다 특정 함수를 반복해서 실행
        timer = setInterval(() => {
            if (commentList.length < serverComments.length){
                const index = commentList.length; // 0
                commentList.push(serverComments[index]);
                this.setState({
                    // commentList : commentList = 
                    ...commentList // -> 같은 이름의 변수를 이걸로 바꿔줘
                    // 클래스형 컴포넌트에서는 state를 바꾸려면 통째로 덮어씌워줘야 함
                })
            } else {
                this.setState({
                    commentList : [] // 비워주기
                })
                clearInterval(timer)
            }
        }, 2000)
    }

    render() {
    return (
      <div>
        {
            serverComments.map(c => {
                return(
                    <Comment
                        key={c.id} // 그냥 키는 이 값으로 하겠다고 한 번 더 넣어주는 것
                        id={c.id}
                        message={c.message}/>
                )
            })
        }  
      </div>
    )
  }
}
