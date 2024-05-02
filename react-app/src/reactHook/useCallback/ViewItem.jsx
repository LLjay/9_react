import React, {useEffect, useState} from 'react'

const ViewItem = ({getItems}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(5))
        console.log("숫자 변동")
    }, [getItems])

    return (
        items.map((item, index) => <div key={index}>{item}</div>)
    )
}

export default ViewItem