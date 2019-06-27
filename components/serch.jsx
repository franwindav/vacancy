import React, { Component } from "react";
import styles from "../styles/search.less";
import Link from "next/link";
import Router from "next/router";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }
  render() {
    return (
      <div className={styles.search}>
        <img
          width="20px"
          className={styles.searchLogo}
          src="static/img/logo_hh.png"
        />
        <input
          className={styles.searchInput}
          type="text"
          ref={input => (this.searchInput = input)}
          placeholder="Я ищу..."
          value={this.state.text}
          onChange={e => {
            if (e.charCode == 13) return;
            console.log(this.searchInput.value);
            this.setState({
              text: this.searchInput.value
            });
          }}
          onKeyPress={e => {
            if (e.charCode == 13) {
              Router.push(
                this.state.text.trim() != "" ? `/?text=${this.state.text}` : "/"
              );
            }
          }}
        />
        <Link
          href={
            this.state.text.trim() != "" ? `/?text=${this.state.text}` : "/"
          }
        >
          <button className={styles.searchButton}>Найти</button>
        </Link>
      </div>
    );
  }
}

export default Search;
