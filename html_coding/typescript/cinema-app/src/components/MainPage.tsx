import type { IMovie } from "../types"
import MovieCard from "./MovieCard"

interface MainPageProps {
    movies: IMovie[]
}

function MainPage({movies}:MainPageProps) {

    return (
        <div className='movie-grid'>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}

export default MainPage