import { createGlobalStyle } from "styled-components";
import fundo from "../assets/fundo.jpg";
const GlobalStyle = createGlobalStyle`
//montar demais cores
:root {
  --white:#ffffff;
}
  body {
    margin: 0;
    padding: 0;
    background-image: url(${fundo});
    font-family: Nunito, sans-serif;
    color: var(--white);
  }
 button{
    cursor: pointer;
 }
`;

export default GlobalStyle;
