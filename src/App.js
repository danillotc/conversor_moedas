import React from 'react';
import './App.css';

import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <Conversor moedaA="BRL" moedaB="USD"/>
      <Conversor moedaA="USD" moedaB="BRL"/>
    </div>
  );
}

export default App;
