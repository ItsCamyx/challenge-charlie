import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
//montar demais cores
:root {
  --white:#ffffff;
  --black:#1E1E1E;
  --red:#FF0000;
}
  *{
    margin: 0;
    padding: 0;
    font-family: Nunito, sans-serif;
    color: var(--white);
  }
 button{
    cursor: pointer;
 }
`;

export default GlobalStyle;
