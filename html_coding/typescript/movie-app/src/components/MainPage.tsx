

function MainPage({ movies, onMovieClick }: any) {

    return (
        <div className="films-grid">
                 {movies.map((movie:any) => {
                        return (
                            <div 
                                className="films-content"
                                key={movie.id}
                                onClick={() => onMovieClick(movie)}
                                style={{cursor:'pointer'}}
                            >
                                
                                <div className="card-header-info">
                                    <h2>{movie.title}</h2> 
                                </div>

                                <h3>Дата выхода: {movie.release_date}</h3>

                                <img 
                                    className="film-card-img" 
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                    alt={movie.title} 
                                />
                                
                                <h3>Рейтинг: {Math.floor(movie.vote_average)}</h3>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default MainPage