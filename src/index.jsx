import React, { useState, createContext } from "react";
import Mcdu from "./Mcdu/Mcdu";
import ReactDOM from "react-dom";
import './styles.scss'
import Title from "./Title/Title";
import Scratchpad from "./Scratchpad/Scatchpad";

export const AppContext = createContext(null);

const App = () => {
    const [scratchpad, setScratchpad] = useState("SCRATCHPAD FIELD");
    const [title, setTitle] = useState("TITLE FIELD");
    // TODO find a way to do the below
    // const [scratchpad, setScratchpad] = useState(() => ({text: "SCRATCHPAD FIELD", opacity: 0, }));
    // const [title, setTitle] = useState(() => ({text: "TITLE FIELD", opacity: 0, }));
  return (
      <svg className="main-wrapper" viewBox="0 0 1024 1024" width="1024" height="1024">
          <AppContext.Provider value={[scratchpad, setScratchpad, title, setTitle]}>
              <Title />
              <Mcdu />
              <Scratchpad />
          </AppContext.Provider>
      </svg>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
