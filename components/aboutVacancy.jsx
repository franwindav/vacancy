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
    if (Object.keys(this.state.data).length == 0) return "";
    return (
      <div className={style["about-vacansy"]}>
        <h1 className={style.title}>{data.name}</h1>
        <Salary salary={data.salary} price={style.price} />
        <div className={style.container}>
          <div className={style.text}>
            <a href="" className={style.company}>
              {data.employer.name}
            </a>
            <p className={style.address}>{this.getAddress()}</p>
          </div>
          <div className={style.logo}>
            <img
              src={
                data.employer.logo_urls != undefined
                  ? data.employer.logo_urls["240"]
                  : ""
              }
              className={style.img}
            />
          </div>
        </div>
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
    //this.state.data = {};
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
