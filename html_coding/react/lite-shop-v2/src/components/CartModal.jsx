function CartModal({ cart, totalCostCart, closeCart, makeOrder, removeFromCart }) {

    return (
        <div className="modal-overlay" onClick={closeCart}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-header">
                    <h1>Корзина</h1>
                    <button className="close-btn" onClick={closeCart}>&times;</button>
                </div>
                <h2>Сумма в корзине: {totalCostCart} ₽</h2>
                <h3>Товары в корзине: </h3>

                {cart.length === 0 ? (
                    <h3 style={{textAlign: 'center', marginTop: '20px'}}>Корзина пуста 🦊</h3>
                ) : (
                    cart.map((product) => (
                        <div className="cart-item" key={product.id}>
                            <div className="cart-header">
                                <img src={product.img} alt={product.name} />

                                <h3>{product.name}</h3>
                                <p>Цена: {product.cost} ₽</p>
                            
                            </div>
                            <div className="cart-delete-btn-div">
                                <button 
                                    className="basket-modal-delete-item-btn"
                                    onClick={() => removeFromCart(product)}
                                >
                                    Убрать
                                </button>    
                            </div>
                        </div>
                    
                    ))
                )}
                <div className="cart-total">
                    <button
                        className="order-btn"
                        onClick={makeOrder}
                    >
                        {cart.length === 0 ? 'Корзина пуста' : 'Оформить зака'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartModal