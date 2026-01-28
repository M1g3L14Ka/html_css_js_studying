import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails'
import ProfilePage from './pages/ProfilePage' 
import type { IMovie } from './types'
import './App.css'

function App() {

  const [favourites, setFavourites] = useState<IMovie[]>(() => {
    const saved = localStorage.getItem('movie-favs')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('movie-favs', JSON.stringify(favourites))
  }, [favourites])

  function toggleFavourite(movie: IMovie) {
    const isExists = favourites.some(f => f.id === movie.id)
    
    if (isExists) {
      setFavourites(prev => prev.filter(f => f.id !== movie.id))
    } else {
      setFavourites(prev => [...prev, movie])
    }
  }

  return (
    <Routes>
      <Route path="/" element={
        <HomePage 
           favourites={favourites} 
           toggleFavourite={toggleFavourite} 
        />
      } />
      
      <Route path="/movie/:id" element={<MovieDetails />} />
      
      <Route path="/profile" element={
        <ProfilePage 
           favourites={favourites} 
           toggleFavourite={toggleFavourite}
        />
      } />
    </Routes>
  )
}

export default App