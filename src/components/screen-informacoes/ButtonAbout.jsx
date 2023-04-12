import '../../assets/css/css-informacoes/ButtonAbout.css'
import about from '../../assets/img/sobre-nos 1.png'
import { useState } from 'react'
import { Boxproduto } from './Boxproduto'

export const ButtonAbout = () => {
    const [visible, setVisible] = useState("ButtonAbout-box")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("ButtonAbout-box") : setVisible("ButtonAbout-box-fechar")
        setPressed(!pressed)
    }

    return (
        <div className="ButtonAbout-div" >
            <button className='ButtonAbout-button' onClick={() => setMenuVisible()}><img src={about} alt="" /></button>
            <span className={visible}>
                <Boxproduto/>
            </span>
        </div>
    )
}
