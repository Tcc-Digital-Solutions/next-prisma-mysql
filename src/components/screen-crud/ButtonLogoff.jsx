import '../../assets/css/css-crud/ButtonLogoff.css'
import logoffImg from '../../assets/img/logout.svg'

export const ButtonLogoff = () => {
    return (
        <div className="button-logoff-div" >
            <button className="button-logoff-button" ><img src={logoffImg} alt="" /></button>
        </div>
    )
}