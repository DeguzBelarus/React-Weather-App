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
          {weather?.name ? ` ${weather.name}` : ``}
        </span>
      </p>
      <p className="city-temp-paragraph">
        Температура:
        <span className="city-temp">
          {weather?.main?.temp ? ` ${weather.main.temp} ${measurement}` : ``}
        </span>
      </p>
    </main>
  );
};

export default Main;
