import React from "react";
import { Button } from "antd";

import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.scss";

console.dir(styles);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button className="App-button">I love React</Button>
        <p className={styles["App-text"]}>React NO.1</p>
      </header>
    </div>
  );
};

export default App;
