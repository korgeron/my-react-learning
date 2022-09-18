import {useState} from "react";


function increment(num) {
    return num++;
}

export const HelloWorld = (prop) => {
    const [message, setMessage] = useState(prop.greet + prop.message);
    const eventHandler = () => {
        setMessage('YOU CLICKED MY MESSAGE!')
    }
    return (
        <div className={'HelloWorld'}>
            <h1 onClick={eventHandler}>{message}</h1>

        </div>
    )

}