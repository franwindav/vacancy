import React, { Component } from 'react';
import { ListControls_, PageControl_ } from './StyledComponents';
import SERVICE from 'Service/pageService';

const showControlPages = 5;

class Search extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      const { pageCount } = SERVICE;
      const { pages } = this.props;
      let res = [];
      let reg = 0;
      if (pageCount > 2) {
         if (pages > 6) {
            res.push(
               <PageControl_
                  className="before"
                  key={-2}
                  onClick={() => {
                     SERVICE.changeCountPage(0);
                  }}
               >
                  В начало
               </PageControl_>,
            );
         }
         if (pageCount < pages - 3) {
            reg = pageCount - 2;
         } else {
            reg = pages - 6;
            if (pages < 7) {
               reg = 0;
            }
         }
      }
      for (let i = 1; i <= showControlPages; i++) {
         let index = i + reg;
         if (index == pages) break;
         res.push(
            <PageControl_
               className={pageCount == index - 1 ? 'active' : ''}
               key={i}
               onClick={() => {
                  SERVICE.changeCountPage(index - 1);
               }}
            >
               {index}
            </PageControl_>,
         );
      }
      if (pageCount < pages - 4 && pages > 6)
         res.push(
            <PageControl_ className="ellipsis" key="...">
               ...
            </PageControl_>,
         );
      res.push(
         <PageControl_
            className={pages - 1 == pageCount ? 'active' : ''}
            key={-1}
            onClick={() => {
               SERVICE.changeCountPage(pages - 1);
            }}
         >
            {pages}
         </PageControl_>,
      );
      return <ListControls_>{res}</ListControls_>;
   }
}

export default Search;
