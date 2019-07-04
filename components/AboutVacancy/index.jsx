import React, { Component } from 'react';
import Router from 'next/router';
import * as Components from './StyledComponents';
import getSalary from 'Utils/getSalary';
import getExperience from 'Utils/getExperience';

class AboutVacancy extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: {},
         id: 0,
      };
   }
   render() {
      Router.ready(() => {
         this.state.id = Router.query.id;
      });
      const { data } = this.state;
      if (Object.keys(this.state.data).length == 0) return '';
      return (
         <Components.AboutVacancy_>
            <Components.Title_>{data.name}</Components.Title_>
            <Components.Salary_>{getSalary(data.salary)}</Components.Salary_>
            <Components.Container_>
               <div>
                  <Components.Company_ href="">{data.employer.name}</Components.Company_>
                  <Components.Address_>{this.getAddress()}</Components.Address_>
               </div>
               <Components.Logo_>
                  <Components.Img_
                     src={
                        data.employer.logo_urls != undefined ? data.employer.logo_urls['240'] : ''
                     }
                  />
               </Components.Logo_>
            </Components.Container_>
            <Components.Info_>
               {getExperience(this.state.data.experience)}
               <br />
               {data.employment != undefined ? data.employment.name : ''}
            </Components.Info_>
            <Components.Discription_
               dangerouslySetInnerHTML={{
                  __html: data.description,
               }}
            />
         </Components.AboutVacancy_>
      );
   }
   getAddress() {
      const { address, area } = this.state.data;
      if (address == undefined || address.city == undefined) {
         return area == undefined ? '' : area.name;
      }
      let str = address.city;
      if (address.street != undefined) str += ', ' + address.street;
      return str;
   }
   componentWillReceiveProps() {
      this.updateDataFromApi();
   }
   componentDidMount() {
      this.updateDataFromApi();
   }
   async updateDataFromApi() {
      const { id } = this.state;
      const result = await fetch(`https://api.hh.ru/vacancies/${id}`);
      const text = await result.text();
      const data = JSON.parse(text);
      this.setState({
         data: data,
      });
   }
}

export default AboutVacancy;
