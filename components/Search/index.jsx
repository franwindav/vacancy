import React, { Component } from 'react';
import Router from 'next/router';
import { Main_, Logo_, Input_, Button_ } from './StyledComponents';
import Areas from './Areas';
import SEARCH_SERVICE from 'Service/searchService';
import CLEAR_SERVICE from 'Service/clearService';

class Search extends Component {
   constructor(props) {
      super(props);
      this.initText = SEARCH_SERVICE.searchText;
      this.serviceClearFuncs = CLEAR_SERVICE.on(
         'Clear',
         p => {
            if (!p.search) return;
            if (this.searchInput != undefined) this.searchInput.value = '';
         },
         this,
      );
   }
   render() {
      return (
         <Main_>
            <Logo_
               src="/static/svg/hh.svg"
               onClick={() => {
                  CLEAR_SERVICE.clearAll({
                     page: true,
                     search: true,
                     areas: true,
                  });

                  Router.push('/');
               }}
            />
            <Input_
               type="text"
               ref={input => (this.searchInput = input)}
               placeholder="Я ищу..."
               defaultValue={this.initText}
               onKeyPress={e => {
                  if (e.charCode == 13) {
                     SEARCH_SERVICE.changeSearchFilter(this.searchInput.value);
                     Router.push('/');
                  }
               }}
            />
            <Areas />
            <Button_
               onClick={() => {
                  SEARCH_SERVICE.changeSearchFilter(this.searchInput.value);
                  Router.push('/');
               }}
            >
               Найти
            </Button_>
         </Main_>
      );
   }
   componentDidMount() {
      SEARCH_SERVICE.changeSearchFilter(this.searchInput.value);
   }
   componentWillUnmount() {
      this.serviceClearFuncs.remove();
   }
}

export default Search;
