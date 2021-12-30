import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const appId = "8b8780daafab325a9ec3e3ac5be74490";
  const [city, setCity] = useState(null);
  const [units, setUnits] = useState("metric");
  const [lang, setLang] = useState("ru");
  const [currentPosAccessed, setcurrentPosAccessed] = useState(true);

  const [weather, setWeather] = useState(null);

  const currentPositionGetWeather = (position) => {
    setcurrentPosAccessed(true);
    let coords = position.coords;

    let latitude = coords.latitude;
    let longitude = coords.longitude;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}&units=${units}&lang=${lang}`
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json);
        console.log(json);
      });
  };

  const getWeather = () => {
    setcurrentPosAccessed(false);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${units}&lang=${lang}`
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json);
      });
  };

  useEffect(() => {
    if (weather == null) {
      navigator.geolocation.getCurrentPosition(currentPositionGetWeather);
    } else {
      getWeather();
    }
  }, [city]);

  return (
    <div className="App">
      <Header
        setCity={setCity}
        units={units}
        setUnits={setUnits}
        getWeather={getWeather}
        currentPositionGetWeather={currentPositionGetWeather}
        currentPosAccessed={currentPosAccessed}
      />
      <Main weather={weather} units={units} />
    </div>
  );
}

export default App;
