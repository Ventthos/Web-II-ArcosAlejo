import '../../styles/Characters/CharacterCard.css'
import likeButtonIcon from '../../assets/img/like.png'
import { ButtonImage } from '../General/IconButton'

export function CharacterCard({id, name, status, specie, image,link, likeManager, likes}){
    return(
        <div className='characterCard'>
            <div className='characterCardInfo'>
                <h3>{name}</h3>
                <div>
                    <p>
                        Estatus: {status}
                    </p>
                    <p>
                        Especie: {specie}
                    </p>
                </div>

                <div className='buttonsContainer'>
                    <a className='characterDetailButton' id="detail" href={link}>Ir al detalle</a>
                    <ButtonImage iconURL={likeButtonIcon} text={`Like (${likes})`} className={"characterDetailButton"} onClick={()=>likeManager(id)}/>
                </div>
                
            </div>
            
            <img className='characterProfile' src={image}></img>
        </div>
    )

}