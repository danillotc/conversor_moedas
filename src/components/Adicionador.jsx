import React from 'react'
import './Adicionador.css'

export default (props) => {
    return (
        <>
            <button className="botaoAdicionar" onClick={props.onClick}>+</button>
        </>
    )
}