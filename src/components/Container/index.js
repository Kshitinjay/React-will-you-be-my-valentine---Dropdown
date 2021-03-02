import React, { useState } from "react";
import "./Styling.css";
const Container = ({ states }) => {
  const [state, setState] = useState(0);
  const [city, setCity] = useState(state);
  const [town, setTown] = useState(city);

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleLandmarkChange = (event) => {
    setTown(event.target.value);
  };

  return (
    <div className="mainContainer">
      <h1>DropDown</h1>
      <div id="state-name">
        <label htmlFor="">State </label>
        <select value={state} id="state" onChange={handleStateChange}>
          {states.map((state, idx) => {
            return (
              <option value={idx} key={idx}>
                {state.name}
              </option>
            );
          })}
        </select>
        <div id="state-title">{states[state].name}</div>
        <div id="state-description">{states[state].description}</div>
      </div>

      <div id="city-name">
        <label htmlFor="">City </label>
        <select value={city} id="city" onChange={handleCityChange}>
          {states[state].city.map((city, idx) => {
            return (
              <option value={idx} key={idx}>
                {city.name}
              </option>
            );
          })}
        </select>
        <div id="city-title">{states[state].city[city].name}</div>
        <div id="city-description">{states[state].city[city].description}</div>
      </div>

      <div id="landmark-name">
        <label htmlFor="">Landmark </label>
        <select value={city} id="landmark" onChange={handleLandmarkChange}>
          {states[state].city[city].landmarks.map((landmark, idx) => {
            return (
              <option value={idx} key={idx}>
                {landmark.name}
              </option>
            );
          })}
        </select>
        <div id="landmark-title">
          {states[state].city[city].landmarks[town].name}
        </div>
        <div id="landmark-description">
          {states[state].city[city].landmarks[town].name}
        </div>
      </div>
    </div>
  );
};

export default Container;
