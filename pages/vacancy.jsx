import React, { Component } from 'react';
import Serch from 'Components/Search';
import AboutVacancy from 'Components/AboutVacancy';
import Router from 'next/router';

class App extends Component {
   render() {
      return [<Serch key="Serch" />, <AboutVacancy key="AboutVacancy" />];
   }
}

export default App;
