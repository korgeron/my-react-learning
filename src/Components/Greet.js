// TO ADD PROPS JUST PASS THROUGH FUNCTION
export const Greet = (props)=>{
   return(
        <div className={'Greet'}>
            {/*
                prop also here for display
                prop is set in the App.js
            */}
            <h1>Hello, {props.whatEverYouWant}!!</h1>
        </div>
    )
}


// THIS IS A NAMED EXPORT

// CAN ALSO DO A DEFAULT EXPORT LIKE : export default Greet


// VIEW APP.JS TO SEE HOW TO IMPORT