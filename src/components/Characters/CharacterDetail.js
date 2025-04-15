import { useParams } from 'react-router'
import '../../styles/Characters/CharacterDetail.css'
import { Header } from '../General/Header'
import { useContext, useEffect, useState } from 'react'
import { CharacterDetailCard } from './CharacterDetailCard'
import { CharacterContext } from '../../context/CharacterContext'
export function CharacterDetail(){
    const {id} = useParams()

    const {currentCharacter, setCurrentCharacter} = useContext(CharacterContext)
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const dataJson = await data.json()
            setCurrentCharacter(dataJson)
        }
        console.log(setCurrentCharacter)
        fetchData()
    }, [])


    return(
        <div>
            <Header/>
            <main className='characterDetailMain'>
            {currentCharacter?.name && (
                <CharacterDetailCard />
                )}   
            </main>
            
        </div>
    )

}