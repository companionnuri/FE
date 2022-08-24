import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router basename={process.env.PUBLIC_URL}> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);
