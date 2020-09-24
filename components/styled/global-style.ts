import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Neutra Text';
    font-style: normal;
    font-weight: 500;
    src: url('fonts/NeutraText-Book.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Neutra Text';
    font-style: normal;
    font-weight: bold;
    src: url('fonts/NeutraText-Bold.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    color: ${(props) => props.theme.gray};
    font-family: 'Neutra Text';
    font-size: 16px;
    margin: 0;
  }
`;

export const theme = {
  pink: "#EE2C4D",
  gray: "#848584",
  lgBreakpoint: 768,
};

export default GlobalStyle;
