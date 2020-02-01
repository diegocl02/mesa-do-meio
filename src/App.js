import React from 'react';
import './App.css';
import Test from './test'
import { connect } from 'react-redux'
import Game from './components/Game'


function App(props) {
  console.log(props)
  return (
    <div className="App">
        <Game />
    </div>
  );
}

export default App
