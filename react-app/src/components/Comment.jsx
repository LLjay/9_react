import React from 'react'

// 변수를 하나 만들어서 그 안의 속성들을 스타일로 지정한거야
// 이 변수의 속성 중 하나를 스타일로 지정하겠다고 한 것
const styles = {
    nameText : {
        color: "black",
        fontSize: 16,
        fontweight: 'bold'
        
    },
    commentText : {
        color : "black",
        fontSize: 16
    },
    image: {
        width : 50,
        height: 50,
        borderRadius: 25
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
        margin: 8,
        padding: 8
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 8,
        alignItems: "flex-start"
    }
}

// 
const Comment = (props) => {
    console.log(props)
  return (
    <div style={styles.wrapper}>
        <div>
            <img 
                src={props.path} alt="" 
                style={styles.image}
            />
        </div>
        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commentText}>{props.comment}</span>
        </div>
    </div>
  )
}

export default Comment