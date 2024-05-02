import React from 'react'

// const styles = {}; -> 객체
// const styles = []; -> 배열

const styles = {
    wrapper : {
        border: "1px solid black",
        margin: "10px",
        width: "400px"
    },
    image : {
        width: "100%"
    }
}

// props 이라는 것을 인자로 받아 이 안의 내용에 전달, return 받음
const Content = (props) => {
  return (
    <div style={styles.wrapper}>
        <div>
            <img src={props.path} style={styles.image} alt="" />
        </div>
        <div>
            <div>{props.title}</div>
            <div>{props.userName}</div>
        </div>
    </div>
  )
}

export default Content