import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount func to start app
const mount = (e) => {
  ReactDOM.render(<App />, e);
};

// if deelopment && isolation, mount inmediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// if runnin through container, export mount func
export { mount };
