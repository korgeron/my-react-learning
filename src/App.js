// HAVE TO IMPORT USING {} SINCE IT IS A NAMED EXPORT
// IF DEFAULT EXPORT THEN YOU DO NOT NEED {} FOR IMPORT AND CAN NAME THE IMPORT ANY NAME YOU WANT
// import {Greet} from "./Components/Greet";
// import {HelloWorld} from "./Components/HelloWorld";
// import {ParentComponent} from "./Components/Parent/ParentComponent";
// import {IdCard} from "./Components/Parent/IdCard";
// import './App.css';

// import './MyApp.css'
// import {Candidate} from "./Components/Candidate";
// import {ListComponent} from "./Components/ListComponent";
// import {Form} from "./Components/Form";
// import {FetchMovie} from "./Components/FetchMovie";
// import {Counter} from "./Components/Counter";
// import {SearchMovie} from "./Components/SearchMovie";
// import {MovieCard} from "./Components/MovieCard";
// import {NavBar} from "./Components/NavBar";
// import {Main} from "./Components/Main";

import './BusinessCardProject/BusinessCard.css'
import {BusinessCard} from "./BusinessCardProject/BusinessCard";

function App() {
    return (
        //Todo: Project Code
        <div>
            <BusinessCard />
        </div>
        //className={'container'} WAS HERE
        // <div >
        //     {/*<div className={'navbar'}>*/}
        //     {/*    <h1>Hello Im Learning React!</h1>*/}
        //     {/*</div>*/}

            // {/* className={'content'} WAS HERE */}
            // <div >
            //     {/*Todo: CODE GOES HERE*/}
                // {/*<Form />*/}
                // {/*<Candidate />*/}
                // {/*<ListComponent />*/}
                // {/*<FetchMovie />*/}
                // {/*<Counter />*/}
                // {/*<SearchMovie/>*/}
                // {/*<MovieCard />*/}
                // {/*<NavBar />*/}
                // {/*<Main />*/}
            // </div>
        // </div>








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
