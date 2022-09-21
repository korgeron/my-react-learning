import {useEffect, useState} from "react";
import {keys} from "../keys";

export const FetchMovie = () => {

    const [movie, setMovie] = useState([])
    useEffect(() => {
        fetch('http://www.omdbapi.com/?t=' + 'lord of the rings' + '&apikey=' + keys())
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(movie)
    return (
        <div className={'MovieCard'}>
            <img src={movie.Poster} alt={movie.Title}/>
            <div className={'MovieTitle'}>{movie.Title}</div>
            <div className={'MovieRate'}>{movie.Runtime}</div>
        </div>
    )
}