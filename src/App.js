import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { data } from "./static/data";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <MainComponent data={data} />
    </div>
  );
}

export default App;
