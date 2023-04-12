import '../../assets/css/css_universal/Navbarsearch.css'
import lupa from '../../assets/img/search.svg'

export const Navbarsearch = (props) => {


    return (
        <div className="navbarsearch-div" >
            <span  className="navbarsearch-span">
                <input className='navbarsearch-input' type="text" placeholder='O que você esta buscando ?'  />
                <img className='navbarsearch-img' src={lupa} style={{ width:'30px'}} alt="" />
            </span>
        </div>
    )
}
