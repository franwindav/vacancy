import React, { Component } from "react";
import style from "../styles/vacancyList.less";
import Vavancy from "./vacancy";
import fetch from "node-fetch";

class VavancyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0
    };
  }
  render() {
    return (
      <ul className={style.list}>
        {this.state.data.map(e => (
          <li className={style.vacancy} key={e.id}>
            <Vavancy data={e} text={this.props.searchFilter} />
          </li>
        ))}
      </ul>
    );
  }
  getTitle() {
    //TODO create
    if (this.state.count == undefined) return;
    return <h1>{this.state.count}</h1>;
  }
  componentWillReceiveProps(newProps) {
    this.updateDataFromApi(newProps);
  }
  componentDidMount() {
    this.updateDataFromApi(this.props);
  }
  updateDataFromApi(props) {
    fetch(
      `https://api.hh.ru/vacancies?currency=RUR&&text=${props.searchFilter}`
    ).then(response => {
      response.text().then(text => {
        let data = JSON.parse(text);
        this.setState({
          data: data.items,
          count: data.found
        });
      });
    });
  }
}

export default VavancyList;
