import React, { Component } from 'react';
import './Conversor.css'

export default class Conversor extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            moedaA_valor: '',
            moedaB_valor: 0
        }

        this.converter = this.converter.bind(this);
    }
    
    converter() {
        
        let url = `https://api.exchangeratesapi.io/latest?base=${this.props.moedaB}&symbols=${this.props.moedaA}`

        fetch(url)
            .then(resultado => {
                return resultado.json()
            })
            .then(json =>{
                let cotacao = json['rates'][this.props.moedaA];
                let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao).toFixed(2));
                this.setState({moedaB_valor});
            })
    }

    render() {
        return (
            <div className="conversor">
                <h2>Conversor de {this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}/>
                <input type="button" value="Converter!" onClick={this.converter}/>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}