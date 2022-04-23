import styled from "styled-components";

export const Container = styled.div`
position: relative;
color: #6FCF97;
background-color: #fff; 
border: 2px solid #6FCF97;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;  
width: 100%;
height: 65px;  
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
border-radius: 31px;
margin-bottom: 36px;

&:hover{
    background-color:#6FCF97;
    color: #fff;
    cursor: pointer;
}
`;

export const Text = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;
 
`;

export const Floatimage = styled.img`
position: absolute; 
right: -50px;
width: 96px;
height: 96px;
`;