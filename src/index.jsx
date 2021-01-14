import React from "react";
import Mcdu from "./Mcdu/Mcdu";
import ReactDOM from "react-dom";
import './styles.scss'
import Title from "./Title/Title";
import Scratchpad from "./Scratchpad/Scatchpad";

const App = () => {
  return (
      <svg className="main-wrapper" viewBox="0 0 1024 1024" width="1024" height="1024">
          <Title />
          <Mcdu />
          <Scratchpad />
      </svg>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
