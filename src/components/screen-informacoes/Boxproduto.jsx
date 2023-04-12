
import React, { Component } from 'react';
import '../../assets/css/css-informacoes/Boxproduto.css';

export const Boxproduto = (props) => {

    return (
        <div className='boxproduto-div' >
            <span className='boxproduto-text'>
                <p>CONTEÚDO DA EMBALAGEM</p>
            </span>
            <span className='boxproduto-item'>
                <ul>
                    <li>1 Furadeira / Parafusadeira GSR 120-LI</li>
                    <li>1 manual de instruções</li>
                    <li>1 carregador GAL 12V-20</li>
                    <li>1 manual de instruções para</li>
                    <li>carregador GAL 12V-20</li>
                    <li>1 bateria 12V Max de 2,0 Ah Li-Ion</li>
                    <li>1 maleta plástica</li>
                </ul>
            </span>
        </div>

    )
}