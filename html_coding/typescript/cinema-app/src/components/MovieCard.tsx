import { Link } from "react-router-dom";
import type { IMovie } from "../types";

interface MovieCardProps {
    movie: IMovie;
}

function MovieCard({ movie }: MovieCardProps) {

    return (
        <Link to={`/movie/${movie.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="movie-card">
                <img
                    className="movie-card-img" 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title} 
                />
                <div className="movie-card-info">
                    <h2>{movie.title}</h2>
                </div>
            </div>
        </Link>
    )

}

export default MovieCard