import React, {useState} from 'react';
import './App.css';

import Conversor from './components/Conversor'
// import ConversoresExtra from './components/ConversoresExtra'
import Adicionador from './components/Adicionador'

function App() {

  const [conversores, setConversores] = useState ([]);
  
  function criarConversor () {
    const conversoresExtras = [];
    for (let i=0; i<conversores.length+1; i++) {
      conversoresExtras.push(<Conversor closeable={true} onClick={fecharConversor}/>);
    }
    setConversores(conversoresExtras);
  }
  
  function fecharConversor () {
    const conversoresExtras = [];
    for (let i=0; i<conversores.length; i++) {
      conversoresExtras.push(<Conversor closeable={true} onClick={fecharConversor}/>);
    }
    setConversores(conversoresExtras);
  }

  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="ConversorContainer">
        <Conversor closeable={false} />
        {conversores}
        {conversores.length<=6
        ? <Adicionador onClick={criarConversor}/>
        : "Esta viagem é realmente necessária?"}
      </div>
    </div>
  );
}

export default App;
