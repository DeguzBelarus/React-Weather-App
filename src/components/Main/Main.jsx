import React from "react";
import { useEffect } from "react/cjs/react.development";
import "./Main.scss";

let measurement = "";
const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const Main = ({ weather, units }) => {
  useEffect(() => {
    if (units === "metric") {
      measurement = "℃";
    } else {
      measurement = "℉";
    }
  }, [units]);

  return (
    <main>
      <p className="city-name-paragraph">
        Город:
        <span className="city-name">
          {weather?.main ? ` ${weather.name}` : ` Город не выбран`}
        </span>
      </p>
      <p className="city-temp-paragraph">
        Температура:
        <span className="city-temp">
          {weather?.main ? ` ${weather.main.temp} ${measurement}` : ``}
        </span>
      </p>
      <p className="additionalinfo-paragraph">
        Влажность:
        <span className="additional-info">
          {weather?.main ? ` ${weather.main.humidity}%` : ``}
        </span>
      </p>
      <p className="additionalinfo-paragraph">
        Описание:
        <span className="additional-info">
          {weather?.main ? ` ${weather.weather[0].description}` : ``}
        </span>
      </p>
      <p className="additionalinfo-paragraph">
        На дату и время:
        <span className="additional-info">
          {weather?.main
            ? ` ${new Date(weather.dt * 1000).toLocaleString().slice(0, 17)}`
            : ``}
        </span>
      </p>
      <p className="additionalinfo-paragraph">
        День недели:
        <span className="additional-info">
          {weather?.main
            ? ` ${days[new Date(weather.dt * 1000).getDay()]}`
            : ``}
        </span>
      </p>
    </main>
  );
};

export default Main;
