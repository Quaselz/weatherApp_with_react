import { useEffect, useState } from "react";

const Home = ({location, fetchClicker}) => {
    const [weatherData, setWeatherData] = useState(null)
    const key = "459f15061b9746b864fb39524db59e1a"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ location +"&appid="+ key +"&units=metric&lang=de"
    console.log(url);
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.log(error))
    }, [fetchClicker])

    console.log(weatherData?weatherData:null);
    const iconLink = weatherData?"https://openweathermap.org/img/wn/" + weatherData.weather[0].icon +"@2x.png":null
    return ( 
        <section>
            
            {weatherData?
            <article>
                <div>
                    <h1>{weatherData.name}</h1>
                        <p>
                            {weatherData.weather[0].main} in {weatherData.name}
                        <img src={iconLink} alt={weatherData.weather[0].description} />
                        </p>
                        <p>Current: {weatherData.main.temp}°C</p>
                        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
                                    </div>
                <div>

                </div>
            </article>
            :""}
        </section>
        
     );
}
 
export default Home;