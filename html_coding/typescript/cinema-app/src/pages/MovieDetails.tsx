import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import type { IMovie } from "../types"


export default function MovieDetails() {
    
    const {id} = useParams()
    const [movie, setMovies] = useState<IMovie | null>(null)


    const API_KEY = 'a40ba55d04baf481a16c6078febeaf51'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ru-RU`)
        .then(res => res.json())
        .then((data)=>{
            setMovies(data)
        })
    }, [id])

    if(!movie) return <h1 style={{color:'white', textAlign:'center'}}>Загрузка....</h1>

    function getTrailer() {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=ru-RU`)
        .then(res => res.json())
        .then(data => {
            const ruTrailer = data.results.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube')
            if(ruTrailer) {
                window.open(`https://www.youtube.com/watch?v=${ruTrailer.key}`, '_blank')
            } else {
                fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
                .then(res => res.json())
                .then(data => {
                    const enTrailer = data.results.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube')
                    if(enTrailer) {
                        window.open(`https://www.youtube.com/watch?v=${enTrailer.key}`, '_blank')
                    } else {
                        alert('Не удалось найти трейлер фильма 😢')
                    }
                }
                )
            }
        })
    }

    return (
        <div className="movie-details-info">

            <div className="movie-details-header-info">
                <h1>{movie.title}</h1>

                <Link to={`/`}>
                    <button
                        className="movie-details-close-btn"
                    >
                        &times;
                    </button>
                </Link>
            </div>
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title} 
                className="movie-details-img"
            />
            <button
                className="movie-details-trailer-btn"
                onClick={getTrailer}>
                Трейлер
            </button>

            <p>{movie.overview}</p>

            <h2>⭐ Рейтинг:  {movie.vote_average}</h2>
        </div>
    )
}