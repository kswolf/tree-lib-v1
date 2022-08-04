import React from "react";
import ReactDOM from "react-dom";
import BasicTree from "./BasicTree";
import getHierarchicalData from "./getHierarchicalData";
import "./styles.css";

function App() {
  let data = getHierarchicalData();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <BasicTree data={ data } />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
