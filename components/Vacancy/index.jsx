import React, { Component } from 'react';
import Link from 'next/link';
import MONTH from 'Data/month';
import getSalary from 'Utils/getSalary';
import getImgUrl from 'Utils/getImgUrl';
import * as Components from './StyledComponents';

class Vacancy extends Component {
   render() {
      const { data } = this.props;
      const date = new Date(data.published_at);
      return (
         <Components.Vacancy_>
            <Components.Item_>
               <Components.Info_>
                  <li>
                     <Link as={`vacancy/${data.id}`} href={`vacancy?id=${data.id}`} prefetch>
                        <Components.Name_ href="">{data.name}</Components.Name_>
                     </Link>
                  </li>
                  <li>
                     <Components.Meta_ href="">{data.employer.name}</Components.Meta_>
                  </li>
               </Components.Info_>
               <Components.Price_>{getSalary(data.salary)}</Components.Price_>
            </Components.Item_>
            <Components.Item_>
               <Components.About_>
                  <span
                     dangerouslySetInnerHTML={{
                        __html: this.props.data.snippet.requirement,
                     }}
                  />
                  <br />
                  <span
                     dangerouslySetInnerHTML={{
                        __html: this.props.data.snippet.responsibility,
                     }}
                  />
               </Components.About_>
               <Components.Container_>
                  <Components.Logo_ src={getImgUrl(this.props.data.employer)} />
               </Components.Container_>
            </Components.Item_>
            <Components.Item_>
               <div />
               <Components.Date_>{`${date.getDate()} ${MONTH[date.getMonth()]}`}</Components.Date_>
            </Components.Item_>
         </Components.Vacancy_>
      );
   }
}

export default Vacancy;
