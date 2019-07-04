import styled from 'styled-components';

const Main_ = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 50px;
`;

const Button_ = styled.div`
   position: relative;
   height: 38px;
   box-sizing: border-box;
   margin: 0;
   padding: 0 15px;
   border: 1px solid #0f8fee;
   border-radius: 0;
   font-family: Arial, Helvetica, sans-serif;
   text-decoration: none;
   color: #fff;
   font-size: 14px;
   line-height: 36px;
   background-color: #0f8fee;
   cursor: pointer;
   outline: 0 !important;
   outline-color: transparent !important;
   outline-width: 0 !important;
   outline-style: none !important;
   transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;
   &:hover {
      background-color: #0e81d6;
      border-color: #0e81d6;
   }
`;

const Input_ = styled.input`
   box-sizing: border-box;
   width: 800px;
   height: 38px;
   padding: 0 11px;
   border-radius: 0;
   border: 1px solid #cbd1d4;
   font-size: 14px;
   font-family: Arial, sans-serif;
   color: #333;
   -webkit-appearance: none;
   -moz-appearance: none;
   -webkit-tap-highlight-color: transparent;
   background-color: #fff;
   outline: 0 !important;
   outline-color: transparent !important;
   outline-width: 0 !important;
   outline-style: none !important;
   transition: border-color 0.5s ease-in-out;
   &:hover,
   &:focus {
      border-color: #0f8fee;
   }
`;

const Logo_ = styled.img`
   vertical-align: top;
   width: 50px;
   height: 48px;
   margin-right: 10px;
   cursor: pointer;
`;

export { Main_, Logo_, Input_, Button_ };
