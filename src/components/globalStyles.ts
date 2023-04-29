import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  html, body, #root{
    height: 100%;
    width: 100%;
  }

  html {

  }

  body {
    position: relative;
    display: flex;

    margin: 0;
    padding: 0;

    font-family: Verdana, Geneva, Tahoma, sans-serif; 

    &.global-loading {
      cursor: "progress";
    }

  }

  #root {

  }
`;

export default GlobalStyles;
