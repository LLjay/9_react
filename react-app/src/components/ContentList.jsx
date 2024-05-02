import React from 'react'
import Content from './Content'
// Requests that should resolve in the current directory need to start with './'.

// 여러 개의 데이터를 배열에 담기
const contents = [
    {
        title : "쿠키",
        userName : "솔",
        path : "https://mblogthumb-phinf.pstatic.net/20150722_195/hyamc_1437540426562aMT8X_JPEG/chihuahua-longcoat.jpg?type=w420"
    },{
        title : "몽이",
        userName : "현",
        path : "https://mblogthumb-phinf.pstatic.net/20150722_195/hyamc_1437540426562aMT8X_JPEG/chihuahua-longcoat.jpg?type=w420"
    },{
        title : "이벨",
        userName : "젱",
        path : "https://mblogthumb-phinf.pstatic.net/20150722_195/hyamc_1437540426562aMT8X_JPEG/chihuahua-longcoat.jpg?type=w420"
    }
]

const ContentList = () => {
  return (
    <div>
        <Content title={contents.title} userName="세븐틴"
        path="https://mblogthumb-phinf.pstatic.net/20150722_195/hyamc_1437540426562aMT8X_JPEG/chihuahua-longcoat.jpg?type=w420"/>
    </div>
  )
}

export default ContentList