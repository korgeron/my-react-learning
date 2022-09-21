//Todo: Testing with SearchMovie
export const MovieCard = (prop) => {
    return (
        <div className={'MovieCard'}>
            <div>
                <img src={prop.poster} alt={prop.title}/>
            </div>
        </div>
    )
}