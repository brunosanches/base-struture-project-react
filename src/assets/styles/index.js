import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Graphik;
    font-style: normal;
    font-weight: normal;
    src: url("https://s3-sa-east-1.amazonaws.com/monetus-assets/fonts/Graphik-Regular-Web.woff") format("woff");
  }
  
  body {
    -moz-box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -ms-box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    color: #14171a;
    font: normal 100%/1.4 Graphik, "Helvetica Neue", sans-serif;
    letter-spacing: -.02em;
    margin: 0;
    min-width: 320px;
    padding: 0 0 40px;
    text-rendering: optimizeLegibility;
    line-height: 1.5;

    @media screen and (min-width: 768px) {
      padding-bottom: 80px;
    }
  }
`;
