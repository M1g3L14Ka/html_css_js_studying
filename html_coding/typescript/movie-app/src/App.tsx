import { useEffect, useState } from 'react'
import HeaderPage from './components/HeaderPage'
import MainPage from './components/MainPage'
import SidebarPage from './components/SidebarPage'
import FooterPage from './components/FooterPage'
import MoviesModalPage from './components/MoviesModalPage'
import ProfileModalPage from './components/ProfileModalPage'
import { genresList } from './components/tags'
import './App.css'

function App() {

    const [profile, setProfile] = useState(() => {
        const saved = localStorage.getItem('my-profile')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('my-profile', JSON.stringify(profile))
    }, [profile])

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [movies, setMovies] = useState([])
    const [inputMovie, setInputMovie] = useState('')
    const [selectedMovie, setSelectedMovie] = useState(null)
    

     function getPopularMovies() {
        const API_KEY = 'a40ba55d04baf481a16c6078febeaf51';

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ru-RU&`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setMovies(data.results) 
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getPopularMovies()
    }, [])


    function searchMovie() {
        const API_KEY = 'a40ba55d04baf481a16c6078febeaf51';

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputMovie}&language=ru-RU`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setMovies(data.results)
        })
        .catch(err => console.error(err))
    }

    function getMoviesByGenre(genresId: any) {
        const API_KEY = 'a40ba55d04baf481a16c6078febeaf51';

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=${genresId}`)
        .then(res => res.json())
        .then(data => {
            console.log('Жанр', genresId, data)
            setMovies(data.results)
            setInputMovie('')
        })
        .catch(err => console.log(err))
    }

    function addToProfile(movie: any) {
    const isAlreadyAdded = profile.some((item:any) => item.id === movie.id)

    if (isAlreadyAdded) {
      const newProfile = profile.filter((item:any) => item.id !== movie.id)
      setProfile(newProfile)
    } else {
      setProfile([...profile, movie])
    }
  }

  return (
    <>
        <div className='container'>
            <header className='header'>
                <HeaderPage
                    inputMovie={inputMovie} 
                    setInputMovie={setInputMovie}
                    searchMovie={searchMovie}
                    setProfile={setProfile}
                    profile={profile}
                    setIsProfileOpen={setIsProfileOpen} 
                />
            </header>

            <main className='main'>
                <MainPage 
                    movies={movies} 
                    onMovieClick={setSelectedMovie}
                />
            </main>

            <aside className='sidebar'>
                <SidebarPage
                    genresList={genresList}
                    onGenreClick={getMoviesByGenre}
                    onReset={getPopularMovies}
                />
            </aside>

            <footer className='footer'>
                <FooterPage />
            </footer>

            {selectedMovie && (
                <MoviesModalPage 
                    movie={selectedMovie} 
                    onClose={() => setSelectedMovie(null)}
                    addToProfile={addToProfile}
                    profile={profile}
                />
            )}

            {isProfileOpen && (
                <ProfileModalPage
                    profile={profile}
                    onClose={() => setIsProfileOpen(false)}
                />
            )}
        </div>
    </>
  )
}

export default App
