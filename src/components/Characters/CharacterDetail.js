import { useParams } from 'react-router'
import '../../styles/Characters/CharacterDetail.css'
import { Header } from '../General/Header'
import { useEffect, useState } from 'react'
import { CharacterDetailCard } from './CharacterDetailCard'
export function CharacterDetail(){
    const {id} = useParams()

    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const dataJson = await data.json()
            setCharacter(dataJson)
        }
        fetchData()
    }, [])

    useEffect(() => {
        console.log(character)
    }, [character])

    return(
        <div>
            <Header/>
            <main className='characterDetailMain'>
            {character.name && (
                <CharacterDetailCard 
                    image={character.image}
                    name={character.name}
                    origin={character.origin.name}
                    location={character.location.name}
                    species={character.species}
                    gender={character.gender}
                    type={character.type}
                    status={character.status}/>
                )}   
            </main>
            
        </div>
    )

}