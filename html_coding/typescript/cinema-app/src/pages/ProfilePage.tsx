import { Link } from "react-router-dom";
import type { IMovie } from "../types"
import MovieCard from "../components/MovieCard" // Импортируем карточку

interface ProfileProps {
    favourites: IMovie[];
    toggleFavourite: (movie: IMovie) => void;
}

export default function ProfilePage({ favourites, toggleFavourite }: ProfileProps) {

    return (
        <div className="container">
            <header className="header">
                <h1>Мой Профиль 👤</h1>
                <Link to={'/'}>
                    <button className="filter-btn">На Главную</button>
                </Link>
            </header>

            <main className="main">
                <h2>Избранные фильмы:</h2>
                
                {/* Если пусто */}
                {favourites.length === 0 && <h3>Список пуст... пока что!</h3>}

                <div className='movie-grid'>
                    {/* Перебираем ИЗБРАННОЕ */}
                    {favourites.map((movie) => (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                            {/* Кнопка удаления */}
                            <button 
                                onClick={() => toggleFavourite(movie)}
                                style={{background: 'red', marginTop: '10px', width: '100%'}}
                            >
                                Удалить 💔
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}