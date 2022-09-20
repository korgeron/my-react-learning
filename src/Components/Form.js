import {useState} from "react";


export const Form = () => {
    const [username, setUsername] = useState('')
    const formSubmit = (event) => {
        event.preventDefault()
        alert(`The username is ${username}. Wow! Great security RIGHT!?`)
    }
    return (

        <form onSubmit={formSubmit}>
            <div className={'MyForm'}>
                <label>Username</label>
                <div className={'border'}></div>
                <input type="text" value={username}
                       onChange={(event) => {
                           setUsername(event.target.value)
                       }}/>
                <button type={"submit"}>Submit</button>
            </div>
        </form>

    )
}