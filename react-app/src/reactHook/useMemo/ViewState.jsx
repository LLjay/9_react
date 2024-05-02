import React, {useMemo} from 'react'

const getNumber = (num) => {
    console.log("숫자 변경, +1")
    return num + 1;
}

const getText = (text) => {
    console.log("글자 변경")
    return text;
}

const ViewState = ({num, text}) => {
    // const {num, text} = props;
    // props에서 바로 뭐가 넘어올지 아니까 인자로 써줘도 됨

    // 
    // const viewNum = getNumber(num);
    // const viewText = getText(text);

    const viewNum = useMemo(() => getNumber(num),[num])
    // getNumber(num) 자체가 리턴값
    const viewText = useMemo(() => getText(text),[text])
  return (
    <div>
        {viewText} <br/>
        {viewNum}
    </div>
  )
}

export default ViewState