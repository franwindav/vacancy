import React, { Component } from "react";
import Serch from "../components/serch";
import AboutVacancy from "../components/aboutVacancy";
import Router from "next/router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: "",
      id: ""
    };
  }
  render() {
    Router.ready(() => {
      this.state.searchFilter =
        Router.query.text != undefined ? Router.query.text : "";
      this.state.id = Router.query.id;
    });
    return [
      <Serch key="Serch" text={this.state.searchFilter} />,
      <AboutVacancy
        key="AboutVacancy"
        searchFilter={this.state.searchFilter}
        id={this.state.id}
      />
    ];
  }
}

export default App;
