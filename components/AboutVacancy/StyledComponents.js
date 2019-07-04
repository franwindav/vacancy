import styled from 'styled-components';

const AboutVacancy_ = styled.div`
   position: relative;
   width: 700px;
   margin: auto;
   padding-bottom: 50px;
`;

const Title_ = styled.h1`
   margin: 0 0 15px;
   padding: 0;
   font-family: ProximaNovaCond, Arial, sans-serif;
   font-size: 36px;
   line-height: normal;
   font-weight: 400;
`;

const Salary_ = styled.div`
   font-family: ProximaNovaCond, Arial, sans-serif;
   font-size: 22px;
   margin-bottom: 25px;
   overflow-wrap: break-word;
   color: #333;
   line-height: 21px;
`;

const Container_ = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 15px;
`;

const Company_ = styled.a`
   display: inline-block;
   width: 450px;
   margin-top: 10px;
   margin-bottom: 7px;
   font-family: ProximaNovaCond, Arial, sans-serif;
   font-size: 22px;
   line-height: 1.4;
   color: #09f;
   text-decoration: none;
`;

const Address_ = styled.p`
   font-family: Arial, sans-serif;
   font-size: 14px;
   color: #333;
   line-height: 21px;
   margin: 0;
`;

const Logo_ = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   width: 200px;
   height: 100px;
`;

const Img_ = styled.img`
   position: absolute;
   max-width: 200px;
   max-height: 100px;
`;

const Info_ = styled.p`
   display: inline-block;
   margin-top: 20px;
   line-height: 1.57;
   font-family: Arial, sans-serif;
   font-size: 14px;
   color: #333;
`;

const Discription_ = styled.div`
   font-family: Arial, sans-serif;
   font-size: 14px;
   color: #333;
   line-height: 21px;
`;

export {
   AboutVacancy_,
   Title_,
   Salary_,
   Container_,
   Company_,
   Address_,
   Logo_,
   Img_,
   Info_,
   Discription_,
};
