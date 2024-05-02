import React from 'react'
import Food from './Food'

const Menu = (props) => {
  return (
    <div id='menu'>
      <Food name={"짜장면"} price={7000}/> 
      <Food name={"햄버거"} price={6900}/>
      <Food name={"떡볶이"} price={6000}/>
      {/* Food.jsx로 만든 Food라는 이름의 컴포넌트를 넣은 것 */}
    </div>
  )
}

export default Menu