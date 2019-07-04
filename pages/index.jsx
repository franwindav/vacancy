import React, { Component } from 'react';
import Serch from 'Components/Search';
import VacancyList from 'Components/VacancyList';

class App extends Component {
   render() {
      return [<Serch key="Serch" />, <VacancyList key="VacancyList" />];
   }
}

export default App;
