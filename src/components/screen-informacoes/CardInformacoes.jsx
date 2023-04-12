
import React, { Component } from 'react';
import '../../assets/css/css-informacoes/cardInformacoes.css';
import imgbateria from '../../assets/img/img-bateria.png';
import imglampada from '../../assets/img/lightbulb.svg';
import imgarantia from '../../assets/img/warranty.svg';
import imgalerta from '../../assets/img/alert-error.svg';


function CardInformacoes({texto, icone}) {
    return ( 
        <>
        
            <div className='card-interno'>
                    <p className='card-texto'>{texto}</p>

                    <i className='img-icones'>
                    {
                         icone == 'bateria' ? <img src={imgbateria} style={{width:'30px'}}  /> : icone == 'lampada' ? <img src={imglampada} style={{width:'30px'}}/> : icone == 'garantia' ? <img src={imgarantia} style={{width:'30px'}}/> :  <img src={imgalerta} style={{width:'30px'}}/>
                        
                    }
                    </i>
             </div>               
        </>
     );
}

export default CardInformacoes;