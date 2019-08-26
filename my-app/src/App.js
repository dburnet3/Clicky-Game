import React, { Component } from "react";
import Header from "./components/Header";
import './App.css';
import Board from './components/Board';

class App extends Component {

  state = {
    score: 0
  };

  render() {
    return (
      <div>
        <Header />
        <Board />
      </div>
    );
  }
}
export default App;
