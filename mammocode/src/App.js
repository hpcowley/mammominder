import React, { Component } from 'react';
import QuizEnter from './QuizEnter';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="Application">
        <header className="App-header">
          <h1 className="App-title">Mammominder</h1>
        </header>
        <div className="Quiz">
          <QuizEnter />
        </div>
        <div className="App-footer">
          <p className="footer-text">
            For Kim. For Dawn.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
