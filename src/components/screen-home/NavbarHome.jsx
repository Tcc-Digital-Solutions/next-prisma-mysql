import '../../assets/css/css-home/NavbarHome.css'
import { BoxCategoria } from './BoxCategoria'
import { useEffect, useState } from 'react'



export const NavbarHome = () => {

    const [visible1, setVisible1] = useState("box-categoria-span-fechar")
    const [pressed1, setPressed1] = useState(false)

    const [visible2, setVisible2] = useState("box-categoria-span-fechar")
    const [pressed2, setPressed2] = useState(false)

    const [visible3, setVisible3] = useState("box-categoria-span-fechar")
    const [pressed3, setPressed3] = useState(false)

    const [visible4, setVisible4] = useState("box-categoria-span-fechar")
    const [pressed4, setPressed4] = useState(false)

    useEffect(() =>{
        setPressed2(false)
        setPressed3(false)
        setPressed4(false)
    }, [visible1])

    useEffect(() =>{
        setPressed1(false)
        setPressed3(false)
        setPressed4(false)
    }, [visible2])

    useEffect(() =>{
        setPressed1(false)
        setPressed2(false)
        setPressed4(false)
    }, [visible3])

    useEffect(() =>{
        setPressed1(false)
        setPressed2(false)
        setPressed3(false)
    }, [visible4])

    const setMenuVisible = (num) => {
        setCategoria(1)
        if (num == 1){
            pressed1 ? setVisible1("box-categoria-span-fechar") : setVisible1("box-categoria-span")
            setPressed1(!pressed1)
        }
        if (num == 2){
            pressed2 ? setVisible2("box-categoria-span-fechar") : setVisible2("box-categoria-span")
            setPressed2(!pressed2)
        }
        if (num == 3){
         
            pressed3 ? setVisible3("box-categoria-span-fechar") : setVisible3("box-categoria-span")
            setPressed3(!pressed3)
        }

        if (num == 4){
            pressed4 ? setVisible4("box-categoria-span-fechar") : setVisible4("box-categoria-span")
            setPressed4(!pressed4)
           
        }
    }
    
    const [categoria, setCategoria] = useState(1)

    const exibirProdutos = (categoria) => {
        setCategoria(categoria)
    }

    return (
        <div className="box-categoria-div" >
            <ul className="box-categoria-ul">
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible(1)} onBlur={() => setMenuVisible(1)} >Ferramentas 12v</button>
                    <span className={visible1}>
                    <div className='box-menu'>
                        <ul>
                            <li className={categoria == 1 ? 'active' : null} onMouseOver={() => exibirProdutos(1)}>Furadeiras e Parafusadeiras</li>
                            <li onMouseOver={() => exibirProdutos(2)}>Chave de Impacto</li>
                            <li onMouseOver={() => exibirProdutos(3)}>Serra Circular</li>
                            <li onMouseOver={() => exibirProdutos(4)}>Serra Tico-Tico</li>
                            <li onMouseOver={() => exibirProdutos(5)}>Plaina</li>
                            <li onMouseOver={() => exibirProdutos(6)}>Aspiradores</li>
                            <li onMouseOver={() => exibirProdutos(7)}>Barteria e Carregadores</li>
                            <li onMouseOver={() => exibirProdutos(8)}>Lanterna</li>
                        </ul>
                    </div>
                    <div className='box-produtos'>
                        {categoria == 1 ? 
                            <>
                                <BoxCategoria categoria='Furadeiras' />
                                <BoxCategoria categoria='Parafusadeiras' />
                            </>
                            :
                            categoria == 2? 
                            <>
                                <BoxCategoria categoria='Chave de Impacto' />
                            </>
                            : 
                            categoria == 3?
                            <>
                                <BoxCategoria categoria='Serra Circular' />
                            </>  
                            :
                            categoria == 4?
                            <>
                                <BoxCategoria categoria='Serra Tico-Tico' />
                            </>
                            
                            :
                            categoria == 5?
                            <>
                                <BoxCategoria categoria='Plaina'/>
                            </>
                            
                            :
                            categoria == 6?
                            <>
                                <BoxCategoria categoria='Aspiradores'/>
                            </>
                            
                            :
                            categoria == 7?
                            <>
                                <BoxCategoria categoria='Baterias'/>
                                <BoxCategoria categoria='Carregadores'/>
                            </>
                            
                            :
                            categoria == 8?
                            <>
                                <BoxCategoria categoria='Lanterna' />
                            </>
                            
                            :
                            null
                        }
                        
                    </div>
                    
                </span>
                </li>
                
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible(2)} onBlur={() => setMenuVisible(2)}>Ferramentas 18v </button>
                    <span className={visible2}>
                <div className='box-menu'>
                        <ul>
                            <li className={categoria == 1 ? 'active' : null} onMouseOver={() => exibirProdutos(1)}>Furadeiras e Parafusadeiras</li>
                            <li onMouseOver={() => exibirProdutos(2)}>Chave de Impacto</li>
                            <li onMouseOver={() => exibirProdutos(3)}>Serra Circular e Serra Tico-Tico</li>
                            <li onMouseOver={() => exibirProdutos(4)}>Plaina</li>
                            <li onMouseOver={() => exibirProdutos(5)}>Aspiradores e Soprador</li>
                            <li onMouseOver={() => exibirProdutos(6)}>Barteria e Carregadores</li>
                            <li onMouseOver={() => exibirProdutos(7)}>Lixadeiras e Lanternas</li>
                            <li onMouseOver={() => exibirProdutos(8)}>Esmelhiradeiras e Marteletes</li>

                        </ul>
                    </div>
                    <div className='box-produtos'>
                        {categoria == 1 ? 
                            <>
                                <BoxCategoria categoria='Furadeiras' />
                                <BoxCategoria categoria='Parafusadeiras' />
                            </>
                            :
                            categoria == 2? 
                            <>
                                <BoxCategoria categoria='Chave de Impacto' />
                            </>
                            : 
                            categoria == 3?
                            <>
                                <BoxCategoria categoria='Serra Circular' />
                                <BoxCategoria categoria='Serra Tico-Tico' />
                            </>  
                            :
                            categoria == 4?
                            <>
                                <BoxCategoria categoria='Plaina' />
                            </>
                            
                            :
                            categoria == 5?
                            <>
                                <BoxCategoria categoria='Aspiradores'/>
                                <BoxCategoria categoria='Soprador'/>
                            </>
                            
                            :
                            categoria == 6?
                            <>
                                <BoxCategoria categoria='Baterias'/>
                                <BoxCategoria categoria='Carregadores'/>
                            </>
                            
                            :
                            categoria == 7?
                            <>
                                <BoxCategoria categoria='Lixadeiras'/>
                                <BoxCategoria categoria='Lanternas'/>
                            </>
                            
                            :
                            categoria == 8?
                            <>
                                <BoxCategoria categoria='Esmelhiradeiras' />
                                <BoxCategoria categoria='Marteletes' />
                            </>
                             
                            :
                            null
                        }
                        
                    </div>
                </span>
                
                </li>
               
                
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible(3)} onBlur={() => setMenuVisible(3)}>Linha de Medição </button>
                    <span className={visible3}>
                <div className='box-menu'>
                        <ul>
                            <li className={categoria == 1 ? 'active' : null} onMouseOver={() => exibirProdutos(1)}>Niveladores</li>
                            <li onMouseOver={() => exibirProdutos(2)}>Medidores</li>
                            <li onMouseOver={() => exibirProdutos(3)}>Detectores</li>
                            <li onMouseOver={() => exibirProdutos(4)}>Acessórios</li>
                        </ul>
                    </div>
                    <div className='box-produtos'>
                        {categoria == 1 ? 
                            <>
                                <BoxCategoria categoria='Niveladores' />
                            </>
                            :
                            categoria == 2? 
                            <>
                                <BoxCategoria categoria='Medidores' />
                            </>
                            : 
                            categoria == 3?
                            <>
                                <BoxCategoria categoria='Detectores' />
                            </>  
                            :
                            categoria == 4?
                            <>
                                <BoxCategoria categoria='Acessórios' />
                            </>
                            
                            :
                            null
                        }
                        
                    </div>
                </span>
                </li>
                
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible(4)} onBlur={() => setMenuVisible(4)}>Acessórios</button>
                     {/* flex-direction: row-reverse;
                     margin-left: -300px; */}
                    <span className={visible4}>
                <div className='box-menu'>
                        <ul>
                            <li className={categoria == 1 ? 'active' : null} onMouseOver={() => exibirProdutos(1)}>Perfurar e Parafusar</li>
                            <li onMouseOver={() => exibirProdutos(2)}>Serrar</li>
                            <li onMouseOver={() => exibirProdutos(3)}>Cortar e Desbastar</li>
                            <li onMouseOver={() => exibirProdutos(4)}>Acabamento</li>

                        </ul>
                    </div>
                    <div className='box-produtos'>
                        {categoria == 1 ? 
                            <>
                                <BoxCategoria categoria='Perfurar e Parafusar' />
                            </>
                            :
                            categoria == 2? 
                            <>
                                <BoxCategoria categoria='Serrar' />
                            </>
                            : 
                            categoria == 3?
                            <>
                                <BoxCategoria categoria='Cortar e Desbastar' />
                            </>  
                            :
                            categoria == 4?
                            <>
                                <BoxCategoria categoria='Acabamento' />
                            </>
                            
                            :
                            null
                        }
                        
                    </div>
                </span>
                </li>
                
            </ul>

        </div>
    )
}