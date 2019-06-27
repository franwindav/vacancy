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
    if (this.state.data.length == 0) return "";
    return (
      <div className={style.container}>
        {this.getTitle()}
        <ul key="list" className={style.list}>
          {this.state.data.map(e => (
            <li className={style.vacancy} key={e.id}>
              <Vavancy data={e} text={this.props.searchFilter} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  getTitle() {
    let { count } = this.state;
    let x = count + "";
    let y = Number(x[x.length - 2] + x[x.length - 1]);
    let z = Number(x[x.length - 1]);
    let str;
    switch (true) {
      case y > 4 && y < 21: {
        str = "вакансий";
        break;
      }
      case z == 1: {
        str = "вакансия";
        break;
      }
      case z < 5: {
        str = "вакансии";
        break;
      }
      case z < 10 || z == 0: {
        str = "вакансий";
        break;
      }
    }
    return (
      <h1 key="h1" className={style.title}>
        Найдено {count} {str}
      </h1>
    );
  }
  componentWillReceiveProps(newProps) {
    //this.state.data = [];
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
