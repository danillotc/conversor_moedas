import React from 'react';
import './App.css';

import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>Conversor de moedas</h1>
        <Conversor />
      </div>
    </div>
  );
}

export default App;
