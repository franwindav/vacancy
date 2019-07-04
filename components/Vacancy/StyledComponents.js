import styled, { css } from 'styled-components';

const a = css`
   outline: none;
   border: 0;
   text-decoration: none;
   cursor: pointer;
   padding: 0;
   background: transparent;
   box-shadow: none;
   font-family: Arial, sans-serif;
   transition: color 0.1s;
`;

const Vacancy_ = styled.ul`
   position: relative;
   display: flex;
   flex-direction: column;
   width: 1010px;
   padding: 20px;
   border: 1px solid #e7e7e7;
   position: relative;
   margin-top: -1px;
   font-size: 14px;
   line-height: 1.571;
   list-style: none;
`;

const Item_ = styled.li`
   display: flex;
   justify-content: space-between;
`;

const Info_ = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   padding: 0;
`;

const Name_ = styled.a`
   ${a}
   color: #09f;
   font-size: 18px;
   max-width: 820px;
`;

const Meta_ = styled.a`
   ${a}
   color: #999;
   font-size: 12px;
`;

const Price_ = styled.div`
   font-size: 18px;
   line-height: 1.571;
   font-family: Arial, sans-serif;
   color: #333;
`;

const About_ = styled.div`
   width: 800px;
   font-family: Arial, sans-serif;
   font-size: 14px;
   color: #333;
   line-height: 1.571;
`;

const Container_ = styled.div`
   position: relative;
   width: 150px;
   height: 100px;
`;

const Logo_ = styled.img`
   position: absolute;
   top: 0;
   max-width: 150px;
   max-height: 100px;
`;

const Date_ = styled.div`
   color: #b2b2b2;
   font-family: Arial, sans-serif;
   font-size: 14px;
   line-height: 1.571;
   padding: 0;
   margin: 0;
   border: 0;
   outline: none;
   background: transparent;
`;

export { Vacancy_, Item_, Info_, Name_, Meta_, Price_, About_, Container_, Logo_, Date_ };
