import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;\
    font-family:Roboto,sans-serif;
    background:#ffffff;
  }
  img{
    max-width:100%;
    height:auto;
  }
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
    padding:0;
    margin:0;
  }
  h1,h2,h3{
    font-family:Pacifico;
  }
  button{
    cursor:pointer;
  }
  input,button{
    font-family:inherit;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance:none;
  }
`;