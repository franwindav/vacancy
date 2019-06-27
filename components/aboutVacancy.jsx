import React, { Component } from "react";
import Salary from "./salary";
import style from "../styles/aboutVacancy.less";

class AboutVacancy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className={style["about-vacansy"]}>
        <img
          src={data.employer != undefined ? data.employer.logo_urls["240"] : ""}
          className={style.logo}
        />
        <h1 className={style.title}>{data.name}</h1>
        <Salary salary={data.salary} price={style.price} />
        <a href="" className={style.company}>
          {data.employer != undefined ? data.employer.name : ""}
        </a>
        <p className={style.address}>{this.getAddress()}</p>
        <p className={style.info}>
          {this.getExperience()}
          <br />
          {data.employment != undefined ? data.employment.name : ""}
        </p>
        {this.getDescription()}
      </div>
    );
  }
  getDescription() {
    const { data } = this.state;
    return (
      <div
        className={style.discription}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    );
  }
  getExperience() {
    const { experience } = this.state.data;
    if (experience == undefined) return;
    let str;
    switch (experience.id) {
      case "noExperience": {
        str = "без опыта работы";
        break;
      }
      case "between1And3": {
        str = "1-3 лет";
        break;
      }
      case "between3And6": {
        str = "3-6 лет";
        break;
      }
      case "moreThan6": {
        str = "более 6";
        break;
      }
      default: {
        str = experience.name;
      }
    }
    return "Требуемый опыт работы: " + str;
  }
  getAddress() {
    const { address, area } = this.state.data;
    if (address == undefined || address.city == undefined) {
      return area == undefined ? "" : area.name;
    }
    let str = address.city;
    if (address.street != undefined) str += ", " + address.street;
    return str;
  }
  componentWillReceiveProps(newProps) {
    this.updateDataFromApi(newProps);
  }
  componentDidMount() {
    this.updateDataFromApi(this.props);
  }
  updateDataFromApi(props) {
    fetch(`https://api.hh.ru/vacancies/${props.id}`).then(response => {
      response.text().then(text => {
        let data = JSON.parse(text);
        this.setState({
          data: data
        });
      });
    });
  }
}

export default AboutVacancy;
