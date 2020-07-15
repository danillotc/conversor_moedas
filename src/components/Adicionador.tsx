import React from 'react'
import './Adicionador.css'

interface Props {
    onClick(): void;
}

export default (props:Props) => {
    return (
        <>
            <button className="botaoAdicionar" onClick={props.onClick}>+</button>
        </>
    )
}