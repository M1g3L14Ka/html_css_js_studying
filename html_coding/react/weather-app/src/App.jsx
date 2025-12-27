import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import WeatherInfo from './components/WeatherInfo'
import './App.css'

function App() {
  
  // Загружаем погоду из памяти
  const [weather, setWeather] = useState(() => {
    const saved = localStorage.getItem('weather-in-city')
    return saved ? JSON.parse(saved) : null
  })

  // Сохраняем погоду при изменении
  useEffect(() => {
    localStorage.setItem('weather-in-city', JSON.stringify(weather))
  }, [weather])

  const [inputCity, setInputCity] = useState('')
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  // Часики
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Поиск погоды
  function handleSearch() {
    const API_KEY = "5e2193f2d24a7926c16cfc9a43973289";
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric&lang=ru`)
    .then(response => response.json())
    .then(data => {
      if(data.cod === '404' || data.cod === 404) {
        alert(`Город "${inputCity}" не найден :(`)
      } else {
        console.log(data)
        setWeather(data)
        setInputCity('') // Очищаем поле
      }
    })
    .catch(err => console.error("Ошибка:", err))
  }

  // Расчет времени города
  function getCurrentCityTime(timezoneOffset) {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const cityTime = utc + (1000 * timezoneOffset);
    return new Date(cityTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }

  return (
    <>
      <div className='container'>
        <motion.div 
          className='header'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>World Weather</h1>
          <h2>Ваше время: {time}</h2>
          
          <div className="input-group">
             <input 
              type="text"
              placeholder='Введите название города...'
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
             />
            <button onClick={handleSearch}>
              Узнать погоду
            </button>
          </div>

          {weather ? (
            <WeatherInfo weather={weather} getTime={getCurrentCityTime} />
          ) : (
            <h3>Введите город...</h3>
          )}
          
        </motion.div>
      </div>
    </>
  )
}

export default App