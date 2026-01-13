

function SidebarPage({ genresList, onGenreClick, onReset }: any) {
    return (
        <div className="sidebar-page-div">
            <h2>Жанры</h2>
            
            <button
            className="filter-btn"
            onClick={onReset}>
                Сбросить фильтр
            </button>
            <div>
                {genresList.map((genre:any) => (
                    <button
                        className="filter-btn"
                        key={genre.id}
                        onClick={() => onGenreClick(genre.id)}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default SidebarPage