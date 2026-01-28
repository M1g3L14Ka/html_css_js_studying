import type { IGenre } from "../types"



interface SidebarPageProps {
    genres: IGenre[];
    onGenreClick: (id: number) => void;
    onReset: () => void;
}


function SidebarPage({genres, onGenreClick, onReset}:SidebarPageProps) {
    return (
        <div className="sidebar-content">
            <h2>Жанры</h2>
            <div className="genre-grid">
                {genres.map((genre) => (
                    <button 
                        key={genre.id}
                        className="filter-btn"
                        onClick={() => onGenreClick(genre.id)}
                    >
                        {genre.name}
                    </button>
                ))}

            <button
                className="filter-btn"
                onClick={onReset}
            >
                Сбросить фильтр
            </button>

            </div>
        </div>
    )
}

export default SidebarPage