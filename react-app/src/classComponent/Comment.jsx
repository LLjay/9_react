// rcc
import React, { Component } from 'react'

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
        margin: 8,
        padding: 8
    },commentText : {
        color : "black",
        fontSize: 16
    }
}
class Comment extends Component {
    // 생성자
    constructor(props){
        super(props)

        // this는 Comment 클래스
        // Class Component에서는 state라는 json 형식의 map을 통해 필드 생성 가능 
        this.state = {};

        // 부모로부터 내려오는 props가 변화 / state가 변화 -> 컴포넌트 리렌더링
    }
    componentDidMount(){
        console.log(`${this.props.id}의 componentDidMount`)
    }
    componentDidUpdate(){
        console.log(`${this.props.id}의 componentDidUpdate`)
    }
  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.commentText}>
            {this.props.message}
        </span>
      </div>
    )
  }
}

export default Comment