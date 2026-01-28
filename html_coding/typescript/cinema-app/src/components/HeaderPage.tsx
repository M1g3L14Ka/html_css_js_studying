

function HeaderPage({ inputMovie, searchMovie, setInputMovie, toggleFavourite}: any) {

    return (

        <div className="header-page-div">
            <h1>🎬 Кинотеатр на TypeScript</h1>
            <div className="header-input-area">
                <input 
                    type="text"
                    placeholder="Какой фильм ищем?" 
                    id="input-movie-title"
                    value={inputMovie} 
                    onChange={(e) => setInputMovie(e.target.value)}

                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            searchMovie()
                        }
                    }}
                />
            </div>

            <div className="profile-area">
                <button
                    id="header-prof-btn"
                    className="header-btn"
                    onClick={toggleFavourite}
                >
                    <img id="header-prof-btn-img" src="/profileImg.png" alt="profile" />
                </button>
            </div>
        </div>

    )
}

export default HeaderPage