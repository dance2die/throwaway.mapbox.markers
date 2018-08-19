import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import data from "./input.json";
import styled, { css } from "styled-components";
import Map from "./components/Map";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Map data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
