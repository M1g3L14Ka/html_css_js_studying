function ProfileModalPage({ profile, onClose }: any) {

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-header">
                    <h2>Избранные фильмы 🧡</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-body">
                    {profile.length === 0 ? (
                        <h3>Список пуст 😢</h3>
                    ) : (
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                            {profile.map((movie:any) => (
                                <div key={movie.id} style={{width: '100px'}}>
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                        style={{width: '100%', borderRadius: '5px'}}
                                    />
                                    <p style={{fontSize: '12px'}}>{movie.title}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ProfileModalPage