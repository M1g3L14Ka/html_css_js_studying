import { useEffect, useState } from 'react'
import type { IMovie, IMovieResponse } from '../types'
import { genresList } from '../components/filterTags'
import HeaderPage from '../components/HeaderPage'
import MainPage from '../components/MainPage'
import SidebarPage from '../components/SidebarPage'
import FooterPage from '../components/FooterPage'


export default function HomePage() {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [page, setPage] = useState(1)
  const [mode, setMode] = useState('popular')
  const [currentGenre, setCurrentGenre] = useState<number | null>(null)
  const [inputMovie, setInputMovie] = useState('')

  const API_KEY = 'a40ba55d04baf481a16c6078febeaf51'

  useEffect(() => {
    let url = ''

    if(mode === 'popular') {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU&page=${page}` 
    }
    else if (mode === 'search' && inputMovie) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputMovie}&language=ru-RU&page=${page}`
    }
    else if (mode === 'genre' && currentGenre) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=${currentGenre}&page=${page}`
    }
    else {
      return
    }

    fetch(url)
    .then(res => res.json())
    .then((data: IMovieResponse) => {
      if(page === 1) {
        setMovies(data.results)
      } else {
        setMovies(prev =>[... prev, ...data.results])
      }
    })
  }, [page, mode, currentGenre])


  function searchMovie() {
    if(!inputMovie.trim()) return
    setMode('search')
    setPage(1)
  }
  
  function getPopularMovie() {
    setMode('popular')
    setPage(1)
    setInputMovie('')
  }

  function getMovieByGenre(genreId:number) {
    setMode('genre')
    setCurrentGenre(genreId)
    setPage(1)
  }

  function loadMore() {
    setPage(prev => page + 1)
  }

return (
    <>
        <div className='container'>

            <header className='header'>
              <HeaderPage
                inputMovie={inputMovie}
                setInputMovie={setInputMovie}
                searchMovie={searchMovie}
              />
            </header>

            <main className='main'>
              <MainPage
                movies={movies}
              />
              {movies.length > 0 && (
                <div className='main-page-load-more-btn'>
                  <button
                    className='load-more-btn'
                    onClick={loadMore}
                  >
                    Загрузить еще...
                  </button>
                </div>
              )}
            </main>

            <aside className='sidebar'>
              <SidebarPage
                genres={genresList}
                onGenreClick={getMovieByGenre}
                onReset={getPopularMovie}
              />
            </aside>

            <footer className='footer'>
              <FooterPage/>
            </footer>
        </div>
    </>
) 
}

