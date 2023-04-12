import '../../assets/css/css-crud/BoxPesquisaCrud.css'
import lupaImg from '../../assets/img/search.svg'

export const BoxPesquisaCrud = () => {
    return (
        <div className="box-pesquisa-crud-div" >
            <span className="box-pesquisa-crud-span">
                <input className="box-pesquisa-crud-input" type="text" />
                <img src={lupaImg} style={{ width:'20px'}} alt="" />
            </span>
        </div>
    )
}