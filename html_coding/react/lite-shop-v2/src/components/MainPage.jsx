

function MainPage ({products, addToCart, addToFavourites, cart, favourites}) {
    return (
        <div className="cards-grid">
            {products.map((product) => {
                const isAddedToCart = cart.some(item => item.id === product.id);
                const isAddedToFavourites = favourites.some(item => item.id === product.id);
                return (
                    <div className="cards-content" key={product.id}>
                        <div className="modal-header">
                            <h2>{product.name}</h2>
                            <button
                                id="main-add-to-favourites-btn"
                                onClick={() => addToFavourites(product)}
                            >
                                {
                                    isAddedToFavourites ? '🧡' : '🤍'
                                }
                            </button>
                        </div>
                        <img
                            src={product.img}
                            alt={product.name}
                        />
                        <p>{product.description}</p>
                        <p>Цена: {product.cost} ₽</p>
                        <button
                            id="main-add-to-card-btn" 
                            className="product-buy-btn"
                            onClick={() => addToCart(product)}
                            style={{
                                backgroundColor: isAddedToCart ? 'var(--fox-neutral)' : 'var(--fox-primary)',
                                color: isAddedToCart ? 'white' : 'var(--fox-cream)', 
                            }}  
                            >
                                {isAddedToCart ? 'Убрать из корзины' : 'Заказать'}
                        </button>
                    </div>
                    
                )
            })
            } 
        </div>
    )
}

export default MainPage