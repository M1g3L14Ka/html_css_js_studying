
function HeaderPage({cart, favourites, setIsCartOpen, setIsFavouritesOpen, setSearchItem, setIsProfileOpen}) {
    return (
        <div className="header-info-div">
            <div className="header-img-div">
                <img id="header-logo-img" src='./src/assets/logo.png' alt="Лого" />
            </div>
            <div className="search-input-div">
                <input
                id="header-search-input" 
                type="text"
                placeholder="Что ищем?"
                onChange={(e) => setSearchItem(e.target.value)} 
                />
            </div>
            <div className="personal-info">
                <div className="favourites-div">
                    <button
                        id="header-add-to-favourites-btn"
                        className="header-personal-btn"
                        onClick={() => setIsFavouritesOpen(true)}
                    >
                        <img id="header-favourites-img"
                            src="./src/assets/whiteHeart.png"
                            alt="Избранное"
                        />
                    </button>
                        <span>{favourites.length}</span>
                </div>

                <div className="cart-div">
                    <button
                        id="header-cart-btn"
                        className="header-personal-btn"
                        onClick={() => setIsCartOpen(true)}
                    >
                        <img id="header-cart-img"
                            src="./src/assets/basket.png"
                            alt="Корзина"
                        />
                    </button>
                        <span>{cart.length}</span>
                </div>

                <div className="profile-div">
                    <button
                        id="header-profile-btn"
                        className="header-personal-btn"
                        onClick={() => setIsProfileOpen(true)}
                    >
                        <img id="header-profile-img"
                            src="./src/assets/1.png"
                            alt="Профиль"
                        />
                    </button>
                </div>
            </div>
        </div>
    ) 
}

export default HeaderPage