// HAVE TO IMPORT USING {} SINCE IT IS A NAMED EXPORT
// IF DEFAULT EXPORT THEN YOU DO NOT NEED {} FOR IMPORT AND CAN NAME THE IMPORT ANY NAME YOU WANT
// import {Greet} from "./Components/Greet";
// import {HelloWorld} from "./Components/HelloWorld";
// import {ParentComponent} from "./Components/Parent/ParentComponent";
// import {IdCard} from "./Components/Parent/IdCard";
// import './App.css';

import './MyApp.css'
import {Candidate} from "./Components/Candidate";
import {ListComponent} from "./Components/ListComponent";
import {AddCandidate} from "./Components/AddCandidate";

function App() {
    return (


        <div className={'container'}>
            <div className={'navbar'}>
                <h1>Hello Im Learning React!</h1>
            </div>
            <div className={'content'} >
                <Candidate />
                {/*<ListComponent />*/}
                <AddCandidate />
            </div>
        </div>








        // <div className="App">
        //
        //     < ParentComponent />
        //
        //     {/* prop set here */}
        //     <Greet whatEverYouWant='KEVIN'/>
        //
        //     <HelloWorld greet={'HELLO THERE '} message={'MY FRESH REACT WORLD!'}/>
        //     < IdCard />
        //
        //
        // </div>
    );
}

export default App;
