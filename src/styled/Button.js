import styled from "styled-components";
export const Button = styled.button`
 color:white;
 padding: 10px 18px;
 background:black;
 border-radius:5px;
 width:220px;
 border:none;
 font-size:16px;
 border: 1px solid transparent;
 transition: 0.3s background ease-in;
 cursor: pointer;


 &:hover{
  color:black;
 background-color:white;
 border: 1px solid black;
 transition: 0.3s background ease-in;

 }
`;

export const OutlineButton = styled(Button)`

background-color:white;
border:1px solid black;
color: black;
 &:hover{
  color:white;
 background-color:black;
 border: 1px solid white;
 
 }
`;