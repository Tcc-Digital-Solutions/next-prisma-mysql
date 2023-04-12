import '../../assets/css/css-crud/BoxPesquisaCadastro.css'
import lupa from '../../assets/img/search.svg'
import casa from '../../assets/img/home.svg'
import user from '../../assets/img/user-add.svg'
import manual from '../../assets/img/document-add.svg'
import { CadastroComponents } from './CadastroComponents'
import {  useState } from 'react';
import { ComponentsProdutosCadastrados } from './ComponentsProdutosCadastrados'
import { CadastroUser } from './CadastroUser'


export const BoxPesquisaCadastro = () => {
  
    const [danilo, setDanilo] = useState(true)
    const [danilo1, setDanilo1] = useState(false)
    const [danilo2, setDanilo2] = useState(false)

    const alterarMenu = (atual) => {
        if (atual == 1){
            setDanilo(true)
            setDanilo1(false)
            setDanilo2(false)
        }
        if (atual == 2){
            setDanilo(false)
            setDanilo1(true)
            setDanilo2(false)
        }

        if (atual == 3){
            setDanilo(false)
            setDanilo1(false)
            setDanilo2(true)
        }
    }



    return (
        <div className="box-pesquisa-cadastro-div" >
            <span className="box-pesquisa-cadastro-menu">
                <span className='box-pesquisa-cadastro-inputPesquisa-div'>
                    <span className='box-pesquisa-cadastro-inputPesquisa'>
                        <img src={lupa} alt="" style={{width: '18px'}}/>
                        <input id='box-pesquisa-cadastro-inputPesquisa-input' type="text" placeholder='O que esta buscando ?' style={{ width: '210px',border: '0', background: '#E1E1E1'}} />
                    </span>
                    <hr  />
                    <span className='box-pesquisa-cadastro-inputPesquisa-buttons-div'>
                        <button className='box-pesquisa-cadastro-inputPesquisa-buttons' onClick={() => alterarMenu(1)} > <img src={casa} alt="" style={{ marginRight: '16px',width:'30px'}}/>Página Inical</button>
                        <button className='box-pesquisa-cadastro-inputPesquisa-buttons'  onClick={() => alterarMenu(2)}> <img src={user} alt="" style={{ marginRight: '16px',width:'30px'}}/>Add user</button>
                        <button className='box-pesquisa-cadastro-inputPesquisa-buttons'  onClick={() => alterarMenu(3)} > <img src={manual} alt="" style={{ marginRight: '16px',width:'30px'}}/>Cadastro do manual</button>
                    </span>
                </span>
                <span>
                </span>
            </span> 
            <span className='box-manual-cadastrados-port-01'>
                {
                    danilo ? <ComponentsProdutosCadastrados/> :
                    danilo1 ? <CadastroUser/> :
                    danilo2 ? <CadastroComponents /> :
                    null
                }
            </span>
        </div>
    )
}
