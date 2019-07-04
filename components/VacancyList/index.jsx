import React, { Component } from 'react';
import SEARCH_SERVICE from 'Service/searchService';
import PAGE_SERVICE from 'Service/pageService';
import CLEAR_SERVICE from 'Service/clearService';
import getDataFromApi from 'Utils/getVacancyListFromApi';
import getTitle from 'Utils/declension';
import Vacancy from '../Vacancy';
import PageControl from '../PageControl';
import { VavancyList_, Title_, List_ } from './StyledComponents';

class VavancyList extends Component {
   constructor(props) {
      super(props);
      this.searchFilter = SEARCH_SERVICE.searchText;
      this.pageCount = PAGE_SERVICE.pageCount;
      this.areas = 'def';
      this.state = {
         data: [],
         count: 0,
         pages: 0,
         areas: undefined,
      };
      this.serviceSearchFuncs = SEARCH_SERVICE.on(
         'changeSearchFilter',
         async newSearchFilter => {
            const newState = await getDataFromApi(newSearchFilter, this.pageCount, this.areas);
            this.searchFilter = newSearchFilter;
            this.setState(newState);
         },
         this,
      );
      this.serviceAreasFuncs = SEARCH_SERVICE.on(
         'changeAreas',
         async id => {
            this.pageCount = 0;
            this.areas = id;
            const newState = await getDataFromApi(this.searchFilter, this.pageCount, id);
            this.setState(newState);
         },
         this,
      );
      this.servicePageFuncs = PAGE_SERVICE.on(
         'changeCountPage',
         async newPageCount => {
            const newState = await getDataFromApi(this.searchFilter, newPageCount, this.areas);
            this.pageCount = newPageCount;
            this.setState(newState);
         },
         this,
      );
      this.serviceClearFuncs = CLEAR_SERVICE.on(
         'Clear',
         async p => {
            if (p.search) this.searchFilter = '';
            if (p.page) this.pageCount = 0;
            if (p.areas) this.areas = 'def';
            const newState = await getDataFromApi('', 0, 'def');
            this.setState(newState);
         },
         this,
      );
   }

   render() {
      if (this.state.data.length === 0) return '';
      return (
         <VavancyList_>
            <Title_>
               Найдено {this.state.count} ваканс
               {getTitle(this.state.count, 'ий', 'ия', 'ии')}
            </Title_>
            <List_>
               {this.state.data.map(e => (
                  <Vacancy key={e.id} data={e} />
               ))}
            </List_>
            <PageControl pages={this.state.pages} />
         </VavancyList_>
      );
   }

   componentWillUnmount() {
      this.serviceSearchFuncs.remove();
      this.serviceAreasFuncs.remove();
      this.servicePageFuncs.remove();
      this.serviceClearFuncs.remove();
   }
}

export default VavancyList;
