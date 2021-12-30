import React, { useState, useRef, useEffect } from "react";
import "./Header.scss";

const Header = ({ setCity }) => {
  const cityInput = useRef(null);

  const handleCity = (event) => {
    event.preventDefault();

    setCity(cityInput.current.value);

    cityInput.current.value = "";
  };
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
    </header>
  );
};

export default Header;
