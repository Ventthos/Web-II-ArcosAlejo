import '../../styles/Episodes/EpisodeCard.css'
import episodeCardImg from  '../../assets/img/episodeCardImg.png'
import likeButton from '../../assets/img/like.png'
import dislikeButon from '../../assets/img/dislike.png'
import { ButtonImage } from '../General/IconButton'

export function EpisodeCard({id, title, code, date, likesCount, dislikeCount, likeManager, onClick}){
    return(
        <div className="episodeCard" onClick={()=>onClick(id)}>
            <img src={episodeCardImg} alt="" />
            <div className="episodeCardInfo">
                <h3>{title}</h3>
                <div>
                    <p><strong>Código:</strong></p>
                    <p>{code}</p>
                </div>

                <div>
                    <p><strong>Fecha de emisión:</strong></p>
                    <p>{date}</p>
                </div>

                <div className='likeButtons'>
                    <div>
                        <ButtonImage iconURL={likeButton} className='likeButton' text={`Like (${likesCount})`} onClick={()=>likeManager(id, true)}/>

                    </div>
                    <div>
                        <ButtonImage iconURL={dislikeButon} className='dislikeButton' text={`No like (${dislikeCount})`} onClick={()=>likeManager(id, false)}/>
                    </div>  
                </div>
            </div>
        </div>
    )
}