// import React from 'react'
// import styled from 'styled-components'

// const App = styled.div`
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `

// // 컴포넌트라 대문자로 하는 것
// const Container = styled.div`
//     width: calc(100% - 24px);
//     padding: 24px;
//     display: inline-flex;
//     flex-direction: column;
//     justify-content: center;
// `
// // vscode-styled-components 확장 설치
// // export default Container 식으로 css 컴포넌트를 다 몰아서 넣고 쓰기도 함

// const Title1 = styled.h1`
//     font-size: 52px;
//     font-weight: 900;
//     text-align: center;
//     margin: 0px;
// `

// // 기존에 있던 스타일 컴포넌트를 가져와 하나만 바꿔주는 것
// const Title2 = styled(Title1)`
//     font-size: 12px;
// `

// // ant design

// const AppContainer = ({title, children}) => {
//   return (
//     // <div>{children}</div>
//     // 무조건 children이라는 이름으로 받아줘야 함
//     <App className='App'>
//         <Title1>{title}</Title1>
//         <Container>{children}</Container>
     
//     </App>
//   )
// }

// export default AppContainer



import React from 'react'
import styled from 'styled-components'

const App = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    width: calc(100% - 24px);
    padding: 24px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 52px;
    font-weight: 900;
    text-align: center;
    margin: 0px;
`

const AppContainer = ({title, children}) => {
  return (
    <App className='App'>
        <Title>{title}</Title>
        <Container>{children}</Container>
    </App>
  )
}

export default AppContainer