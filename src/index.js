import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import store from "./store";
import App from "./App";

const theme = {
  green: "#20D45F",
  black: "#141414",
  grey: "#3A3A3A",
  lightGrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0,0,0,.09)",
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Roboto';
    overflow-x: hidden;
    background-color: ${theme.black};
    color: ${theme.offWhite}
  }

  a {
    text-decoration: none;
    color: ${theme.black}
  }

  ul {
    list-style-type:none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
