import styled from 'styled-components';

const ListControls_ = styled.ul`
   display: flex;
   justify-content: flex-start;
   margin: 0;
   padding: 0;
   margin-top: 30px;
`;

const PageControl_ = styled.div`
   box-sizing: border-box;
   margin: 0;
   margin-left: -1px;
   border-radius: 0;
   text-decoration: none;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   white-space: nowrap;
   -webkit-appearance: none;
   cursor: pointer;
   height: 38px;
   position: relative;
   padding: 0 15px;
   border: 1px solid #cbd1d4;
   line-height: 36px;
   transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
   color: #333;
   font-family: Arial, sans-serif;
   font-size: 14px;
   background-color: #f9f9f9;
   &.ellipsis {
      cursor: default;
      background-color: transparent;
      border-color: transparent;
   }
   &.before {
      margin-right: 15px;
   }
   &.active {
      box-shadow: inset 0 2px rgba(0, 0, 0, 0.2);
      background-color: #e5e5e5;
   }
`;
export { ListControls_, PageControl_ };
