import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthenticationProvider from "./contexts/loginContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </BrowserRouter>,
  rootElement
);
