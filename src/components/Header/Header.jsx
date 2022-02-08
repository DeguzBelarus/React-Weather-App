import React, { useRef, useEffect } from "react";
import "./Header.scss";

const Header = ({
  units,
  currentPosAccessed,
  setCity,
  setUnits,
  getWeather,
  currentPositionGetWeather,
}) => {
  const cityInput = useRef(null);

  const handleCity = (event) => {
    event.preventDefault();
    if (!cityInput.current.value) return;

    setCity(cityInput.current.value);

    cityInput.current.value = "";
  };

  const handleUnits = () => {
    if (units === "metric") {
      setUnits("imperial");
    } else {
      setUnits("metric");
    }
  };

  useEffect(() => {
    if (currentPosAccessed) {
      navigator.geolocation.getCurrentPosition(currentPositionGetWeather);
    } else {
      getWeather();
    }
  }, [units]);

  return (
    <header>
      <form className="cityinput-form" onSubmit={handleCity}>
        <input
          id="cityinput"
          type="text"
          placeholder="Введите название города..."
          ref={cityInput}
        />
        <button type="submit" id="city-submit-button">
          Отправить
        </button>
      </form>
      <div className="unitsChanger" onClick={handleUnits}>
        <span className={`${units === "metric" && "bold"}`}>℃</span>/
        <span className={`${units !== "metric" && "bold"}`}>℉</span>
      </div>
    </header>
  );
};

export default Header;
