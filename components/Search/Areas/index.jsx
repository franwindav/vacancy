import React, { Component } from 'react';
import Router from 'next/router';
import fetch from 'node-fetch';
import SEARCH_SERVICE from 'Service/searchService';
import CLEAR_SERVICE from 'Service/clearService';
import { ShowAreas_, AreasList_, Area_, Main_ } from './StyledComponents';

export default class Areas extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
         activeID: SEARCH_SERVICE.areasID,
         activeName: SEARCH_SERVICE.areasName,
      };
      this.serviceClearFuncs = CLEAR_SERVICE.on(
         'Clear',
         p => {
            if (!p.areas) return;
            this.setState({
               activeID: SEARCH_SERVICE.areasID,
               activeName: 'Все',
            });
         },
         this,
      );
   }

   render() {
      return (
         <Main_>
            <ShowAreas_
               ref={e => {
                  this.button = e;
               }}
               onClick={() => {
                  this.button.classList.toggle('selecte');
                  if (!this.list.classList.toggle('selecte')) {
                     document.onclick = undefined;
                     return;
                  }
                  document.onclick = () => {
                     Router.push('/');
                     if (Router.route != '/') {
                        document.onclick = undefined;
                        return;
                     }
                     this.button.classList.toggle('selecte');
                     this.list.classList.toggle('selecte');
                     document.onclick = undefined;
                  };
               }}
            >
               {this.state.activeName}
            </ShowAreas_>
            <AreasList_
               ref={e => {
                  this.list = e;
               }}
            >
               {this.state.data.map(e => (
                  <Area_
                     key={e.id}
                     className={e.id == this.state.activeID ? 'selecte' : ''}
                     onClick={() => {
                        this.setState({
                           activeID: e.id,
                           activeName: e.name,
                        });
                        SEARCH_SERVICE.changeAreasID(e.id, e.name);
                     }}
                  >
                     {e.name}
                  </Area_>
               ))}
            </AreasList_>
         </Main_>
      );
   }

   async componentDidMount() {
      const res = await fetch('https://api.hh.ru/areas');
      const text = await res.text();
      const data = [
         { id: 'def', name: 'Все' },
         ...JSON.parse(text)[0].areas.sort((a, b) =>
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0,
         ),
      ];
      this.setState({
         data,
      });
   }

   componentWillUnmount() {
      this.serviceClearFuncs.remove();
   }
}
