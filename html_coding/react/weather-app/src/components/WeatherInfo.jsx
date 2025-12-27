import { motion } from "framer-motion"

function WeatherInfo({ weather, getTime }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: 'left', 
        padding: '20px', 
        borderTop: '1px solid #444',
        marginTop: '20px'
      }}
    >
        <h2 style={{textAlign: 'center', color: '#61dafb', marginBottom: '5px'}}>
            {weather.name}, {weather.sys.country}
        </h2>
        
        <h4 style={{textAlign: 'center', color: '#aaa', margin: '0 0 20px 0'}}>
            🕒 Местное время: {getTime(weather.timezone)}
        </h4>
        
        <hr style={{borderColor: '#333', marginBottom: '15px'}}/>
        
        <div style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
            <div>🌡 Температура: {Math.round(weather.main.temp)}°C</div>
            <div>🤔 Ощущается как: {Math.round(weather.main.feels_like)}°C</div>
            <div>☁️ Небо: {weather.weather[0].description}</div>
            <div>
                💨 Ветер: {Math.round(weather.wind.speed)} м/с
                {weather.wind.gust && `, порывы до ${Math.round(weather.wind.gust)} м/с`}
            </div>
        </div>

    </motion.div>
  )
}

export default WeatherInfo