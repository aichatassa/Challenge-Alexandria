import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `

html {
    background: rgb(131,58,180);
    background: linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 40%, rgba(252,176,69,1) 82%);
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw
    font-family: 'Poppins', sans-serif;
}
body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
`

  
