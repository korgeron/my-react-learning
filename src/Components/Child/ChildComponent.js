export const ChildComponent = (props) => {
    console.log(props.count)
    return (
        <div className={'greetButton'}>
            <button onClick={()=>{
                props.greetHandler('Timmy')
            }}>Greet Parent</button>
        </div>
    )



}
