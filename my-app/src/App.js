import React, { Component } from "react";
import Header from "./components/Header";
import './App.css';
import Board from './components/Board';

class App extends Component {
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
