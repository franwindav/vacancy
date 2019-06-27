import React, { Component } from "react";
import style from "../styles/vacancy.less";
import Salary from "./salary";
import Link from "next/link";

const Month = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"
];

class Vacancy extends Component {
  render() {
    const { data } = this.props;
    const date = new Date(data.published_at);
    return (
      <ul className={style.vacancy}>
        <li className={style.item}>
          <ul className={style.info}>
            <li>
              <Link
                href={`/vacancy?id=${data.id}${
                  this.props.text != "" ? "&text=" + this.props.text : ""
                }`}
              >
                <a className={style.name} href="">
                  {data.name}
                </a>
              </Link>
            </li>
            <li>
              <a className={style.meta} href="">
                {data.employer.name}
              </a>
            </li>
          </ul>
          <Salary salary={data.salary} price={style.price} />
        </li>
        <li className={style.item}>
          {this.getSnippet()}
          <div className={style.container}>
            <img src={this.getImgUrl()} className={style.logo} />
          </div>
        </li>
        <li className={style.item}>
          <div />
          <div className={style.data}>{`${date.getDate()} ${
            Month[date.getMonth()]
          }`}</div>
        </li>
      </ul>
    );
  }
  getImgUrl() {
    const { employer } = this.props.data;
    if (employer == undefined) return;
    if (employer.logo_urls == undefined) return;
    return employer.logo_urls["240"];
  }
  getSnippet() {
    const { snippet } = this.props.data;
    return (
      <div className={style.about}>
        <span dangerouslySetInnerHTML={{ __html: snippet.requirement }} />
        <br />
        <span dangerouslySetInnerHTML={{ __html: snippet.responsibility }} />
      </div>
    );
  }
  getSalary() {
    const { salary } = this.props.data;
    if (salary == undefined) {
      return;
    }
    if (salary.from != undefined && salary.to != undefined) {
      return (
        <div className={style.price}>
          {salary.from == salary.to
            ? `${salary.from} руб`
            : `${salary.from}-${salary.to} руб.`}
        </div>
      );
    } else if (salary.from != undefined) {
      return <div className={style.price}>от {salary.from} руб.</div>;
    } else {
      return <div className={style.price}>до {salary.to} руб.</div>;
    }
  }
}

export default Vacancy;
