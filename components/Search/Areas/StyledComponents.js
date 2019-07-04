import styled from 'styled-components';

const Main_ = styled.div`
   position: relative;
`;

const ShowAreas_ = styled.div`
   box-sizing: border-box;
   align-items: center;
   white-space: nowrap;
   height: 38px;
   line-height: 36px;
   padding: 0 70px 0 11px;
   margin: 0;
   margin-left: -1px;
   margin-right: 10px;
   border-radius: 0;
   border: 1px solid #cbd1d4;
   font-size: 14px;
   font-family: Arial, sans-serif;
   -webkit-appearance: none;
   -moz-appearance: none;
   -webkit-tap-highlight-color: transparent;
   color: #333;
   border-color: #cbd1d4;
   background-color: #f9f9f9;
   padding-right: 26px;
   background-color: #fff;
   background-image: url('/static/svg/arrow.svg');
   background-repeat: no-repeat;
   background-position: right center;
   transition: border-color 0.4s ease-in-out;
   cursor: pointer;
   &.selecte {
      border-color: #0f8fee;
   }
`;

const AreasList_ = styled.ul`
   position: absolute;
   top: 38px;
   left: 10px;
   display: flex;
   flex-direction: column;
   height: 0;
   padding: 0;
   margin: 0;
   list-style: none;
   overflow-y: scroll;
   -ms-overflow-style: none;
   scrollbar-width: none;
   box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
   z-index: 100;
   transition: all 0.4s ease-in-out;
   cursor: pointer;
   &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
   }
   &.selecte {
      height: 600px;
   }
`;

const Area_ = styled.li`
   width: 300px;
   padding: 15px 0 15px 50px;
   background: #fff;
   z-index: 100;
   transition: all 0.4s 0.1s ease-in-out;
   cursor: pointer;
   &:not(:last-child) {
      border-bottom: 1px solid #e6e6e6;
   }
   &:hover,
   &.selecte {
      color: #fff;
      background-color: #6fbbf6;
      border-color: #0e81d6;
   }
`;

export { ShowAreas_, AreasList_, Area_, Main_ };
