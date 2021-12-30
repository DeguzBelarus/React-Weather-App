import React from "react";
import { useEffect } from "react/cjs/react.development";
import "./Main.scss";

let measurement = "";

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
          {weather?.name ? ` ${weather.name}` : ` Город не выбран`}
        </span>
      </p>
      <p className="city-temp-paragraph">
        Температура:
        <span className="city-temp">
          {weather?.main?.temp ? ` ${weather.main.temp} ${measurement}` : ``}
        </span>
      </p>
      <p className="additionalinfo-paragraph">
        Влажность:
        <span className="additional-info">
          {weather?.main?.humidity ? ` ${weather.main.humidity}%` : ``}
        </span>
      </p>
      <p className="additionalinfo-paragraph">
        Описание:
        <span className="additional-info">
          {weather?.weather[0]?.description
            ? ` ${weather.weather[0].description}`
            : ``}
        </span>
      </p>
    </main>
  );
};

export default Main;
