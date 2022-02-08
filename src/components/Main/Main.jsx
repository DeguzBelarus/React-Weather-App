import React, { useState, useEffect } from "react";
import "./Main.scss";

const Main = ({
  weather,
  daylyWeather,
  units,
  currentPosAccessed,
  getWeather,
  currentPositionGetWeather,
}) => {
  const [measurement, setMeasurement] = useState("℃");
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const refreshWeather = () => {
    if (currentPosAccessed) {
      navigator.geolocation.getCurrentPosition(currentPositionGetWeather);
    } else {
      getWeather();
    }
  };

  useEffect(() => {
    if (units === "metric") {
      setMeasurement("℃");
    } else {
      setMeasurement("℉");
    }
  }, [units]);

  return (
    <main>
      <div className="current-weather-container">
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
        <button className="refresh-button" onClick={refreshWeather}>
          Обновить
        </button>
      </div>

      {weather?.main && (
        <div className="dayly-weather-container">
          {daylyWeather
            ? daylyWeather.daily.map((day, index) => {
                return (
                  <div className="dayly-weather-item" key={index}>
                    <div className="date">
                      {weather?.main
                        ? `${new Date(day.dt * 1000)
                            .toLocaleString()
                            .slice(0, 10)}`
                        : ""}
                    </div>
                    <div className="temp">
                      <p className="day-temp">
                        {weather?.main ? `${day.temp.day} ${measurement}` : ""}
                      </p>
                      <p className="night-temp">
                        {weather?.main
                          ? `${day.temp.night} ${measurement}`
                          : ""}
                      </p>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      )}
    </main>
  );
};

export default Main;
