import Icons from "./Icons";

export const Forecast = ({ data, icon }) => {
  const { dt, main, weather, clouds, wind, visibility, pop, sys, dt_txt } =
    data;

  const dateString = dt_txt;
  const date = new Date(dateString);

  // Get the day of the week as a number (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeekNumber = date.getDay();

  // Create an array with the names of the days of the week
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the name of the day of the week using the obtained number
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
      <p>{dateTimeString}</p>
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
