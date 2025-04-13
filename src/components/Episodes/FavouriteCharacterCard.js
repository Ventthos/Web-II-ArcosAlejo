import '../../styles/Episodes/FavoutiteCharacterCard.css'

export function FavoutiteCharacterCard({name, image}){
    return(
        <div className="favoutiteCharacterCard">
            <img src={image}/>
            <p className='characterName'>{name}</p>
        </div>
    )

}