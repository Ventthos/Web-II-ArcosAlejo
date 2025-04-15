import { useContext } from "react"
import { CharacterContext } from "../../context/CharacterContext"

export function CharacterDetailCard(){
    const {currentCharacter} = useContext(CharacterContext)

    return(
        <div className='characterDetail'>
            <img src={currentCharacter.image} alt={currentCharacter.name} />
            <div>
                <h1>{currentCharacter.name}</h1>
                <p><strong>Origin:</strong> {currentCharacter.origin.name}</p>
                <p><strong>Location:</strong> {currentCharacter.location.name}</p>
                <p><strong>Species:</strong> {currentCharacter.species}</p>
                <p><strong>Gender:</strong> {currentCharacter.gender}</p>
                <p><strong>Type:</strong> {currentCharacter.type || 'Unknown'}</p>
                <p><strong>Status:</strong> {currentCharacter.status}</p>
            </div>
        </div>
    )
}