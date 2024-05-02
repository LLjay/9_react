import React from 'react'
import Comment from './Comment'

// comments라는 props 생성, 그 안에 json 형태로 값을 넣어주는 것
const comments = [
    {   id: 1,
        name : "이지수",
        comment : "안녕하세요. 이지수입니다.",
        path : "https://mblogthumb-phinf.pstatic.net/20150722_195/hyamc_1437540426562aMT8X_JPEG/chihuahua-longcoat.jpg?type=w420"
    },{
        id: 2,
        name : "전은지",
        comment : "게임!",
        path : "https://mblogthumb-phinf.pstatic.net/20150722_195/hyamc_1437540426562aMT8X_JPEG/chihuahua-longcoat.jpg?type=w420"
    },{
        id: 3,
        name : "이지수",
        comment : "와~",
        path : "https://mblogthumb-phinf.pstatic.net/20150722_195/hyamc_1437540426562aMT8X_JPEG/chihuahua-longcoat.jpg?type=w420"
    }
]
const CommentList = () => {
  return (
    <div>
        {comments.map(comment => {
            return <Comment key={comment.id} name={comment.name} comment={comment.comment} path={comment.path}/>
            // key를 넣어줘야 한다?
            // 리액트는 바뀐 부분을 리렌더링
            // 만약 요소 하나가 추가되어 4번이 추가되면, 1~3번이 바뀌지 않았을 때 다시 그려줄 필요가 없음
            // 하지만 만약 1~3번 사이에 추가되면 추가된 부분부터는 아예 새로 그리는 것이 됨
            // -> 효율성이 떨어짐
            // >>> 그래서 key를 넣는 것 (index는 선호하지 않음, index는 계속해서 바뀔 수 있기 때문)
            // >>> 고유한 것을 넣어야 함, 식별자
            // 이걸 넣으면 1~3번의 데이터는 바뀌지 않았고 4번만 추가됐구나 를 알 수 있음
            // 컴포넌트로 반복적인 렌더링을 시도할 경우 key 값을 넣어야 함
        })}
    </div>
  )

}

export default CommentList