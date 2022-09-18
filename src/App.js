// HAVE TO IMPORT USING {} SINCE IT IS A NAMED EXPORT
// IF DEFAULT EXPORT THEN YOU DO NOT NEED {} FOR IMPORT AND CAN NAME THE IMPORT ANY NAME YOU WANT
import {Greet} from "./Components/Greet";
import {HelloWorld} from "./Components/HelloWorld";
import {ParentComponent} from "./Components/ParentComponent";
import {IdCard} from "./Components/IdCard";
import './App.css';

function App() {
    return (
        <div className="App">

            < ParentComponent />

            {/* prop set here */}
            <Greet whatEverYouWant='KEVIN'/>

            <HelloWorld greet={'HELLO THERE '} message={'MY FRESH REACT WORLD!'}/>
            < IdCard />


        </div>
    );
}

export default App;
