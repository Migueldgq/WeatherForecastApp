import Icons from "./Icons";

export const Forecast = ({ data, icon }) => {
  const { dt, main, weather, clouds, wind, visibility, pop, sys, dt_txt } =
    data;

  const dateString = dt_txt;
  const date = new Date(dateString);

  const dayOfWeekNumber = date.getDay();

  
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayOfWeekName = dayNames[dayOfWeekNumber];

  const timeString = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateTimeString = `${dayOfWeekName} ${timeString}`;

  return (
    <div
      className="w-[340px] h-[104px] rounded-md
    bg-slate-400 flex flex-col p-[20px] relative text-white shadow-lg lg:w-[200px]"
    >
      <p className="font-semibold">{dateTimeString}</p>
      <p className="font-semibold">{Math.round(main.temp)}°C</p>
      <p className="">{weather[0].description}</p>
      <img
        src={Icons(icon)}
        alt="weather"
        className="weathericon max-w-[4rem] absolute top-[6px] left-[280px] lg:top-[40px] lg:left-[145px]"
      />
      {/* ... otras propiedades ... */}
    </div>
  );
};
