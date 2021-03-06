import React, { useState, useEffect, ChangeEvent } from 'react';
import './Conversor.css'

interface Props {
    closeable: boolean;
    posicao: number;
    onClick(posicao:number): void;
}

export default (props:Props) => {
    
    // Declarando estados
    const [moedas, setMoedas] = useState<string[]>([]);
    const [moedaA, setMoedaA] = useState("");
    const [moedaB, setMoedaB] = useState("");
    const [qtd, setQtd] = useState<number>(0);
    const [resultado, setResultado] = useState<number>(0);

    // Obtendo lista de moedas disponíveis
    useEffect (() => {
        let url = "https://api.exchangeratesapi.io/latest"
        fetch(url)
            .then(resultado => resultado.json())
            .then (json => {
                let rates = Object.keys(json['rates']);
                rates.push('EUR');
                rates.sort();
                setMoedas(rates);
            })    
    }, [])
    
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
    
    // Conversão
    useEffect (() => {
        let url = `https://api.exchangeratesapi.io/latest?base=${moedaA}&symbols=${moedaB}`
        fetch(url)
            .then(resultado => {
                return resultado.json()
            })
            .then(json =>{
                let cotacao = parseFloat(json['rates'][moedaB]);
                let valorConvertido = Number((qtd * cotacao).toFixed(2));
                setResultado(valorConvertido);
            })
    }, [moedaA, moedaB, qtd])

    // HTML retornado    
    return (
        <div className="conversor">

            {props.closeable
            ? 
            <> 
                <button className="botaoFechar" onClick={()=>props.onClick(props.posicao)}>X</button> 
            </>
            : ""
            }

            <p> 
                <label htmlFor="inputQuantidade">Converter</label>
                <input id="inputQuantidade" placeholder="quantidade" className='inputQuantidade' type='number' onChange={qtdHandler}/>
            
            </p>

            <p>
                de
                <select name="moedas" id="moedas" onChange={moedaAHandler}>
                    <option></option>
                    {moedas.map(moeda => 
                        <option key={moeda} value={moeda}>{moeda}</option>    
                    )}
                </select>
                
                para 
                <select name="moedas" id="moedas" onChange={moedaBHandler}>
                    <option></option>
                    {moedas.map(moeda => 
                        <option key={moeda} value={moeda}>{moeda}</option>    
                    )}
                </select>
            </p>

            <h2>
                {resultado && moedaA && moedaB 
                ? resultado 
                : 0}
            </h2>
        </div>
    )
}