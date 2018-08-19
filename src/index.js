import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
// import data from "./input.json";
import styled, { css } from "styled-components";
import Map from "./components/Map";

import "./styles.css";

class App extends Component {
  state = { data: null };

  componentDidMount() {
    const url = `https://nycjs-meetup-server.herokuapp.com/groups/reactnyc,vueJsNYC,NYC-JavaScript-Flatiron,NY-JavaScript,AngularNYC,QueensJS,JS-NY`;
    fetch(url)
      .then(_ => _.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Map data={data} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
