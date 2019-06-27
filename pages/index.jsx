import React, { Component } from "react";
import Serch from "../components/serch";
import VacancyList from "../components/vacancyList";
import Router from "next/router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: ""
    };
  }
  render() {
    Router.ready(() => {
      this.state.searchFilter =
        Router.query.text != undefined ? Router.query.text : "";
    });
    return [
      <Serch key="Serch" text={this.state.searchFilter} />,
      <VacancyList key="VacancyList" searchFilter={this.state.searchFilter} />
    ];
  }
}

export default App;
