import React, { useState, ChangeEvent } from 'react';
import './Conversor.css'

export default () => {
    
    // Declarando estados
    const [moedas, setMoedas] = useState<string[]>([]);
    const [moedaA, setMoedaA] = useState("");
    const [moedaB, setMoedaB] = useState("");
    const [qtd, setQtd] = useState<number>(0);
    const [resultado, setResultado] = useState<number>(0);

    // Obtendo lista de moedas disponíveis
    let url = "https://api.exchangeratesapi.io/latest"

    fetch(url).then(resultado => resultado.json())
    .then (json => {
        let rates = Object.keys(json['rates']);
        rates.push('EUR');
        setMoedas(rates);
    })    

    
    // Funções Handle    
    function qtdHandler(event: ChangeEvent<HTMLInputElement>) {
        const aConverter = Number(parseFloat(event.target.value).toFixed(2));
        setQtd(aConverter);
    }
    
    function moedaAHandler(event: ChangeEvent<HTMLSelectElement>) {
        const moedaSelecionada = event.target.value;
        setMoedaA(moedaSelecionada);
    }
    
    function moedaBHandler(event: ChangeEvent<HTMLSelectElement>) {
        const moedaSelecionada = event.target.value;
        setMoedaB(moedaSelecionada);
    }
    
    // Conversão - buttonHandler
    function converter() {
        let url = `https://api.exchangeratesapi.io/latest?base=${moedaB}&symbols=${moedaA}`

        fetch(url)
            .then(resultado => {
                return resultado.json()
            })
            .then(json =>{
                let cotacao = parseFloat(json['rates'][moedaA]);
                let valorConvertido = Number((qtd * cotacao).toFixed(2));
                setResultado(valorConvertido);
            })
    }

    // HTML retornado    
    return (
        <div className="conversor">
            <h2>Quantidade: 
                <input type='number' onChange={qtdHandler}/>
            </h2>

            <h2>Converter de 
                
                <select name="moedas" id="moedas" onChange={moedaAHandler}>
                    <option value="BRL"></option>
                    {moedas.map(moeda => 
                        <option key={moeda} value={moeda}>{moeda}</option>    
                    )}
                </select>
                
                para 

                <select name="moedas" id="moedas" onChange={moedaBHandler}>
                    <option value="BRL"></option>
                    {moedas.map(moeda => 
                        <option key={moeda} value={moeda}>{moeda}</option>    
                    )}
                </select>
                </h2>

            <input type="button" value="Converter!" onClick={converter}/>
            
            <h2>{resultado}</h2>
        </div>
    )
}