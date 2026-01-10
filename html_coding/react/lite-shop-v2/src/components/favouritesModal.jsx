
function FavouritesModal({totalCostFavourites, closeFavourites, removeFromFavourites, favourites}) {

    return(
        <div className="modal-overlay" onClick={closeFavourites}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h1>Избранное</h1>
                    <button className="close-btn" onClick={closeFavourites}>&times;</button>
                </div>

                {favourites.length === 0 && <h3>Вы еще ничего не выбрали</h3>}

                <div>
                    <h2>Товаров в избранном на сумму: {totalCostFavourites} ₽</h2>
                </div>
                    {favourites.map((fav) => {
                        return (
                            <div className="cart-item" key={fav.id}>
                            <div className="cart-header">
                                <img src={fav.img} alt={fav.name} />

                                <h3>{fav.name}</h3>
                                <p>Цена: {fav.cost} ₽</p>
                            
                            </div>
                            <div className="cart-delete-btn-div">
                                <button 
                                    className="basket-modal-delete-item-btn"
                                    onClick={() => removeFromFavourites(fav)}
                                >
                                    Убрать
                                </button>    
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
    )
}

export default FavouritesModal