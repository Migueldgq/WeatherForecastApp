import Icons from "./Icons";

export const CityCard = ({ data, icon }) => {
  return (
    <>
      <div className="Weather w-[340px] rounded-md shadow-xl bg-slate-600 text-white p-8 ">
        <div className="TopCard flex flex-col justify-between items-center">
          <span>
            <p className="CityName font-semibold text-2xl leading-none m-0 ">
              {data.city}
            </p>
          </span>
          <img
            src={Icons(icon)}
            alt="weather"
            className="weathericon max-w-[10rem]"
          />
          <span className="text-center">
            <p className="WeatherDescription font-medium leading-none m-0 ">
              {data.weather[0].description}
            </p>
          </span>
        </div>
        <div className="BottomCard text-center relative m-[15px] flex flex-col gap-3">
          <p className="font-bold text-7xl">{Math.round(data.main.temp)}°C</p>
          {/* <img
            src="../../public/weather-icons-master/production/fill/all/thermometer.svg"
            alt=""
            className="max-w-[2rem] absolute bottom-[-5px] left-[115px] "
          /> */}

          <p className="font-medium">
            H:{data.main.temp_max}°C | L:{data.main.temp_min}°C
          </p>
        </div>
      </div>
      <div className="DetailBox flex flex-col justify-evenly w-[340px] h-[400px] rounded-md shadow-xl bg-slate-600 text-white p-6 ">
        <p className="text-center font-medium">Details</p>
        <div className="h-[276px] grid grid-cols-2 grid-rows-2 gap-4">
          <div className="bg-slate-400 rounded-md flex flex-col p-5 relative">
            <span className="Label font-normal text-md">Feels like</span>
            <span className="Label-value font-semibold text-md ">
              {Math.round(data.main.feels_like)}°C
            </span>
            <img
              src="/icons/thermometer.svg"
              alt="thermometericon"
              className="absolute max-w-[50px] left-[85px] top-[10px]"
            />
          </div>
          <div className="bg-slate-400 rounded-md flex flex-col p-5 relative">
            <span className="Label font-normal text-md">Pressure</span>
            <span className="Label-value font-semibold text-md ">
              {Math.round(data.main.pressure)} hPa
            </span>
            <img
              src="/icons/barometer.svg"
              alt="barometericon"
              className="absolute max-w-[50px] left-[85px] top-[10px]"
            />
          </div>
          <div className="bg-slate-400 rounded-md flex flex-col p-5 relative">
            <span className="Label font-normal text-md">Wind </span>
            <span className="Label-value font-semibold text-md">
              {Math.round(data.wind.speed)} km/s
            </span>
            <img
              src="/icons/wind.svg"
              alt="windicon"
              className="absolute max-w-[50px] left-[85px] top-[10px]"
            />
          </div>
          <div className="bg-slate-400 rounded-md flex flex-col p-5 relative">
            <span className="Label font-normal text-md">Humidity</span>
            <span className="Label-value font-semibold text-md">
              {Math.round(data.main.humidity)}%
            </span>
            <img
              src="/icons/humidity.svg"
              alt="humidityicon"
              className="absolute max-w-[55px] left-[85px] top-[6px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
