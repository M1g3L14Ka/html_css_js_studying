

function HeaderPage({ inputMovie, setInputMovie, searchMovie, setIsProfileOpen }: any) {

    return (
        <div className="header-page-div">
            <h1>Movie App</h1>
            <div className="header-text-input">
                <input 
                    type="text" 
                    placeholder="Какой фильм ищем?"
                    id="header-input-text"
                    value={inputMovie}
                    onChange={(e) => setInputMovie(e.target.value)}
                    

                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            searchMovie()
                        }
                    }}
                />
            </div>

            <div className="header-profile">
                <button 
                    className="header-btn"
                    id="header-profile-btn"
                    onClick={() => setIsProfileOpen(true)}
                > 
                    <img className="btn-ico" src="/profileImg.png" alt="profile" />
                </button>
            </div>
        </div>
    )
}

export default HeaderPage