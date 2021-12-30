import React from "react";
import { useEffect } from "react/cjs/react.development";
import "./Main.scss";

const Main = ({ weather }) => {
  return (
    <main>
      <p className="city-name-paragraph">
        Город:
        <span className="city-name">
          {weather?.name ? ` ${weather?.name}` : ``}
        </span>
      </p>
      <p className="city-temp-paragraph">
        Температура:
        <span className="city-temp">
          {weather?.main.temp ? ` ${weather?.main.temp}` : ``}
        </span>
      </p>
    </main>
  );
};

export default Main;
