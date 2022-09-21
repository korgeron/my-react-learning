import {useState} from "react";

export const Counter = () => {

    const [num , setNum] = useState(0)
    const addNum = () => {
        setNum(num + 1)
    }
    const subNum = () => {
        setNum(num - 1)
    }

return (
    <div className={'CounterCard'}>
        <button onClick={subNum}>-</button>
        <div>{num}</div>
        <button onClick={addNum}>+</button>

    </div>
)


}


