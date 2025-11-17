import weatherInfo from "../services/weatherInfo";
import { useEffect, useState } from "react";

const Weather = ({capital}) => {

    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        weatherInfo
            .getData(capital)
            .then(response => {
                console.log(response) 
                const temperature = response.main.temp     
                const icon = response.weather[0].icon
                const windSpeed = response.wind.speed
                
            setWeatherData(
            {temperature, icon, windSpeed}
            )    
        }) 
    }, [capital] )

    return(
        <>
            <h2>Weather in {capital}</h2>
            <p>Temperature: {weatherData.temperature} Celsius </p>
            <img src = {`https://openweathermap.org/img/wn/${weatherData.icon}.png`} alt="Weather State icon" />
            <p>Wind: {weatherData.windSpeed}</p>
        </>
    )
}

export default Weather