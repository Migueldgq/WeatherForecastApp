import { SearchBar } from "./components/SearchBar.jsx";
import { CityCard } from "./components/CityCard.jsx";
import { WEATHER_API_URL } from "./logic/api.js";
import { WEATHER_API_KEY } from "./logic/api.js";
import { useState } from "react";
import { Forecast } from "./components/Forecast.jsx";
import { ThreeDots } from "react-loader-spinner";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [icon, setIcon] = useState(null);
  const [city, setCity] = useState(null);
  //const [forecastIcon, setForecastIcon] = useState(null);

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
        //console.log("Forecast", forecastWeather);

        setCurrentWeather({
          city: searchData.label,
          ...currentWeather,
        });
        setIcon(currentWeather.weather[0].main);
        setForecast({ city: searchData.label, ...forecastWeather });
        setCity(searchData.label);
        //setForecastIcon(forecastWeather.weather[0].main);
        //console.log(setForecastIcon);
        //console.log(forecastWeather.weather[0].main);
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    fetchCurrentWeather();
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10 bg-gradient-to-t from-slate-800 to-slate-500 min-h-screen ">
        <SearchBar onSearchChange={handleOnSearchChange} />
        {currentWeather ? (
          <div className="lg:flex lg:flex-row lg:gap-4 flex flex-col gap-7">
            <CityCard data={currentWeather} icon={icon} />
          </div>
        ) : (
          <div>
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#ffffff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {forecast && forecast.list ? (
          <>
            <div className="text-center text-white font-semibold p-3">
              <p>{city} Weather next 5 days </p>
              <p> every 3 hours</p>
            </div>
            <ul className="flex flex-col gap-11 mb-10  bg-slate-600 rounded-md lg:grid lg:grid-cols-5  ">
              {forecast.list.map((forecastItem) => (
                <li key={forecastItem.dt}>
                  <Forecast
                    data={forecastItem}
                    icon={forecastItem.weather[0].main}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="w-[310px] h-[100px] text-white text-lg font-semibold text-center">
            No data available yet. Do a search for weather 🌤️ information.
          </div>
        )}
      </div>
    </>
  );
}

export default App;
