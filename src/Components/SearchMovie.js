//Todo: Need to finish at the fetch data
import {useState} from "react";
import {keys} from "../keys";
import {MovieCard} from "./MovieCard";


export const SearchMovie = () => {
    const [title, setTitle] = useState('')
    const changeHandler = (event) => {
        setTitle(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(title);

        fetch('http://www.omdbapi.com/?type=movie&t=' + title + '&apikey=' + keys())
            .then(res => res.json())
            .then(data => {
                // data.Search.map(results => {
                //     console.log(results);
                    <MovieCard poster={data.Poster} title={data.Title}/>
                // })
                console.log(data)
            })
            .catch(err => console.error(err))

    }
    return (
        <form onSubmit={submitHandler}>
            <div className={'MyForm'}>
                <label>Search For Movie</label>
                <input value={title} onChange={changeHandler} type="text"/>
                <button>Search</button>
            </div>
        </form>
    )

}