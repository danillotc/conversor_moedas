import React, {useState} from 'react';
import './App.css';

import Conversor from './components/Conversor'
// import ConversoresExtra from './components/ConversoresExtra'
import Adicionador from './components/Adicionador'

function App() {

  const [conversores, setConversores] = useState ([]);
  
  function onClick () {
    const conversoresExtras = [];
    for (let i=0; i<conversores.length+1; i++) {
      conversoresExtras.push(<Conversor />);
    }
    setConversores(conversoresExtras);
  }

  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="ConversorContainer">
        <Conversor />
        {conversores}
        <Adicionador onClick={onClick}/>
      </div>
    </div>
  );
}

export default App;
