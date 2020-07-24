import React, {useState} from 'react';
import './App.css';

import Conversor from './components/Conversor'
import Adicionador from './components/Adicionador'

function App() {

  const [conversores, setConversores] = useState ([]);
  
  function criarConversor () {
    const conversoresExtras = conversores.map(conversor=>conversor);
    conversoresExtras.push(<Conversor key={conversoresExtras.length} posicao={conversoresExtras.length} closeable={true} onClick={fecharConversor}/>)
    setConversores(conversoresExtras);
    console.log(`CRIEI O CONVERSOR ${conversores.length} (:`)
  }
  
  function fecharConversor (posicao) {
    const conversoresExtras = conversores;
    conversoresExtras.splice(posicao,1);
    setConversores(conversoresExtras);
    console.log(`DELETEI O CONVERSOR ${posicao} :/`)
  }

  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="ConversorContainer">
        <Conversor closeable={false} />
        {conversores.map(conversor=>conversor)}
        {conversores.length<=6
        ? <Adicionador onClick={criarConversor}/>
        : "Esta viagem é realmente necessária?"}
      </div>
    </div>
  );
}

export default App;
