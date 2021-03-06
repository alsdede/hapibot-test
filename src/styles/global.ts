import { createGlobalStyle,css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  ${({theme})=> css`
  html {
    font-size: 62.5%;
  }

  body {
    height:100vh;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background: ${theme.colors.mainBg};
    overflow:hidden;
  }

  `}

`

export default GlobalStyles
