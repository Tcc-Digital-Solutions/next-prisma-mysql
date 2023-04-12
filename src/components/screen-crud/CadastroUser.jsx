import '../../assets/css/css-crud/CadastroUser.css'

export const CadastroUser = (props) => {

    return (
        <div className="components-cadastro-div" >
            <span className='true'>
                <p>{props.name}</p>
                <span  className="components-cadastro-true">
                    <span className="components-cadastro-span">
                        <form action="/" className='cadastro-user-form'>
                            <span>
                            <p>Nome do Usuário</p>
                            <input type="text" className='inputMult' name="nome" required />
                            </span>
                            <span>
                            <p>Senha do Usuario</p>
                            <input type="password" className='inputMult' name="password" required />
                            </span>
                            <span>
                            <p>Repetir Senha</p>
                            <input type="password" className='inputMult'  name="reaptpassword" required/>
                            </span> 
                            <button type='submit' className='cadastro-user-form-button'>Cadastrar</button> 
                        </form>
                    </span>                  
                </span>
            </span>
        </div>
    )
}