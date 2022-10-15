import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "Routes";

const App = () => {
    return (
      <div>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
      </div>
    );
};

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);
