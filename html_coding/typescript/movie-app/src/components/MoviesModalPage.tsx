function MoviesModalPage({ movie, onClose, addToProfile, profile }: any) {
    if (!movie) return null;

    const isLiked = profile.some((item:any) => item.id === movie.id)

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-header">
                    <h2>{movie.title}</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-body">
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} 
                        alt={movie.title} 
                        className="modal-img"
                    />
                    
                    <div className="modal-info">
                        <p><strong>Дата выхода:</strong> {movie.release_date}</p>
                        <p><strong>Рейтинг:</strong> ⭐ {movie.vote_average}</p>
                        <p className="overview">{movie.overview || "Описание отсутствует."}</p>
                    </div>
                    <button
                        className="add-to-profile-btn" 
                        onClick={() => addToProfile(movie)}
                    >
                        {isLiked ? "Удалить из Профиля 💔" : "В Профиль ❤️"}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MoviesModalPage