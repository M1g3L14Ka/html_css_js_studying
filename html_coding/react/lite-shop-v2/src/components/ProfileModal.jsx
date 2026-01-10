
function ProfileModal({ newOrder, closeProfile }) {

    return (
        <div className="modal-overlay" onClick={closeProfile}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-header">
                    <h2>Привет, Foxy! 🦊</h2>
                    <button className="close-btn" onClick={closeProfile}>&times;</button>                    
                </div>
                
                <h3>История заказов:</h3>

                {newOrder.length === 0 && <p>Вы еще ничего не заказывали.</p>}

                <div className="orders-list" style={{ marginTop: '20px' }}>
                    {newOrder.map((order) => {
                        return (
                            <div className="order-card" key={order.id} style={{
                                border: '1px dashed orange',
                                padding: '15px',
                                marginBottom: '15px',
                                borderRadius: '10px'
                            }}>
                                <div style={{display:'flex', justifyContent:'space-between', color:'gray'}}>
                                    <span>#{order.id}</span>
                                    <span>{order.date}</span>
                                </div>

                                <div style={{ margin: '10px 0' }}>
                                    <strong>Товары:</strong>
                                    <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                        {order.items.map((item) => (
                                            <li key={item.id}>
                                                {item.name} — {item.cost} ₽
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <h3 style={{ textAlign: 'right', color: 'gold' }}>
                                    Итого: {order.totalCost} ₽
                                </h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileModal