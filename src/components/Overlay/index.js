import React from "react";
import { useState } from "react";
import SearchBar from "../SearchBar";
import WeatherView from "../WeatherView";
const Overlay = () => {
  const [input, setInput] = useState("London");
  return (
    <div className="overlay">
      <SearchBar input={input} setInput={setInput} />
      <WeatherView input={input} />
    </div>
  );
};

export default Overlay;
