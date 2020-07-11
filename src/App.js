import React from 'react';
import './App.css';

import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="ConversorContainer">
        <Conversor />
        <Conversor />
        <Conversor />
      </div>
    </div>
  );
}

export default App;
