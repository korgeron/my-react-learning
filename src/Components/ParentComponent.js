import {ChildComponent} from "./ChildComponent";

export const ParentComponent = () =>{
    const greetParent =(name) => {
        alert(`Hello Parent of ${name}`)
    }
    return < ChildComponent greetHandler = {greetParent} />
}