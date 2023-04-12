import '../../assets/css/css-crud/BoxEditProduto.css'
import lixeiraImg from '../../assets/img/delete.svg'
import editImg from '../../assets/img/edit.svg'
import fecharImg from '../../assets/img/close.svg'
import { useState } from 'react'

export const BoxEditProduto = (props) => {
    const [visible, setVisible] = useState("Box-edit-produto-div-button-clik-fechar")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("Box-edit-produto-div-button-clik-fechar" )  : setVisible("Box-edit-produto-div-button-clik")
        setPressed(!pressed)
    }

    return (
        <div className="Box-edit-produto-div" >
            <span className="Box-edit-produto-span">
                <p className="Box-edit-produto-text">{props.produtoname}</p>
                <div className="Box-edit-produto-div-button">
                    <button className="Box-edit-produto-button" onClick={() => setMenuVisible()}><img src={editImg} style={{ width:'30px'}} alt="" /></button>
                    <button className="Box-edit-produto-button"><img src={lixeiraImg} style={{ width:'30px'}} alt="" /></button>
                </div>
            </span>
            <hr className="Box-edit-produto-hr-fake"/>
            <div className={visible}>
                <button className="Box-edit-produto-button" id='button-lado' onClick={() => setMenuVisible()}><img src={fecharImg} style={{ width:'30px'}} alt="" /></button>
                <span className="Box-edit-produto-drop">
                    <p>{props.produtoname}</p>
                </span>
            </div>
        </div>
    )
}