import { SearchBar } from "./components/SearchBar.jsx";
import { CityCard } from "./components/CityCard.jsx";
import { WEATHER_API_URL } from "./logic/api.js";
import { WEATHER_API_KEY } from "./logic/api.js";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [icon, setIcon] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const fetchCurrentWeather = async () => {
      const lat = searchData.latitude;
      const lon = searchData.longitude;
      try {
        const responseCurrentWeather = await fetch(
          `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const responseForecast = await fetch(
          `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const currentWeather = await responseCurrentWeather.json();
        const forecastWeather = await responseForecast.json();
        console.log("Current weather", currentWeather);
        console.log("Forecast", forecastWeather);

        setCurrentWeather({
          city: searchData.label,
          ...currentWeather,
        });
        setIcon(currentWeather.weather[0].main);
        setForecast({ city: searchData.label, ...forecastWeather });
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    fetchCurrentWeather();
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <SearchBar onSearchChange={handleOnSearchChange} />
        {currentWeather ? (
          <CityCard data={currentWeather} icon={icon}/>
        ) : (
          <h1>City not found</h1>
        )}
      </div>
    </>
  );
}

export default App;
