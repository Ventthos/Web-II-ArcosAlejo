import { useParams } from 'react-router'
import { CharacterCard } from '../components/Characters/CharacterCard'
import { FavoutiteCharacterCard } from '../components/Episodes/FavouriteCharacterCard'
import '../styles/Episodes/EpisodeDetail.css'
import { useEffect } from 'react'
import { type } from '@testing-library/user-event/dist/type'
import { useState } from 'react'

export function EpisodeDetail(){
    const {id} = useParams()

    const [episode, setEpisode] = useState({})
    const [randomCharacters, setRandomCharacters] = useState([])
    const [favouriteCharacters, setFavouriteCharacters] = useState([])

    async function fetchEpisode(id){
        const data = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        const json = await data.json()
        
        json.characters = await Promise.all(
            json.characters.map(async (character) => {
              const characterData = await fetch(character)
              return await characterData.json()
            })
          )

        console.log(json)
        return json
    }

    function uploadToLocalStorage(characters) {
        const storedData = localStorage.getItem("episodesCharacter");
        const currentData = storedData ? JSON.parse(storedData) : [];
    
        const episodeId = Number(id); 
        let localStorageData = currentData.find(item => item.id === episodeId);
    
        if (!localStorageData) {
            localStorageData = {
                id: episodeId,
                characters: []
            };
            currentData.push(localStorageData);
        }
    
        const existingCharacterIds = localStorageData.characters.map(c => c.id);
        const newCharacters = characters
            .filter(character => !existingCharacterIds.includes(character.id))
            .map(character => ({
                id: character.id,
                likes: 0
            }));
        localStorageData.characters = [...localStorageData.characters, ...newCharacters];
    
        const updatedData = currentData.map(item => 
            item.id === episodeId ? localStorageData : item
        );
    
        localStorage.setItem("episodesCharacter", JSON.stringify(updatedData));
        return localStorageData.characters
    }

    function parseCharacters(characters, charactersLocalData){
        return characters.map((character) => {
            const characterLocalData = charactersLocalData.find((c) => c.id === character.id);
            return {
                id: character.id,
                name: character.name,
                image: character.image,
                status: character.status,
                species: character.species,
                gender: character.gender,
                type: character.type,
                likes: characterLocalData ? characterLocalData.likes : 0,
                dislikes: characterLocalData ? characterLocalData.dislikes : 0
            };
        });
    }

    function addLike(characterId){
        const storedEpisodes = localStorage.getItem("episodesCharacter");
        const currentEpisodes = storedEpisodes ? JSON.parse(storedEpisodes) : [];
    
        const episodeData = currentEpisodes.find((episode) => episode.id === Number(id));
    
        if (episodeData) {
            const character = episodeData.characters.find((character) => character.id === characterId);
    
            if (character) {
                character.likes += 1;
            }
        }
    
        localStorage.setItem("episodesCharacter", JSON.stringify(currentEpisodes));
        setEpisode(prev => ({
            ...prev,
            characters: parseCharacters(prev.characters, episodeData?.characters ?? [])
        }));

        setRandomCharacters(prev => 
            prev.map(character => 
                character.id === characterId 
                    ? { ...character, likes: character.likes + 1 } 
                    : character
            )
        );
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchEpisode(id)
            const charactersLikes = uploadToLocalStorage(data.characters)
            const parsedCharacters = parseCharacters(data.characters, charactersLikes)
            data.characters = parsedCharacters
            setEpisode(data)
        }

        fetchData()

    }, [])

    useEffect(() => {
        console.log("Refrescando")
        if (!episode?.characters) return;
    
        if (randomCharacters.length === 0) {
            const shuffled = [...episode.characters].sort(() => Math.random() - 0.5).slice(0, 4);
            setRandomCharacters(shuffled);
        }

        const favourites = [...episode.characters].sort((a, b) => b.likes - a.likes).slice(0, 3);
    
        setFavouriteCharacters(favourites);
    }, [episode.characters]);

    return(
        <main className='episodeDetailMain'>
            <hr/>
            <h1>
                {episode.name}
            </h1>

            <p className='episodeInfo'><strong>Fecha de lanzamiento: </strong> {episode.air_date}. <strong>Código: </strong> {episode.episode}</p>

            <div className='favouriteCharactersContainer'>
                {favouriteCharacters.map((character) => (
                    <FavoutiteCharacterCard key={character.id} name={character.name} image={character.image}/>
                ))}
            </div>

            <div className='allCharactersContainer'>
                {randomCharacters.map((character) => (
                    <CharacterCard key={character.id} id={character.id} likeManager={addLike} link={`/characters/${character.id}`} 
                    name={character.name} specie={character.species} image={character.image} likes={character.likes}/>
                ))}
            </div>
        </main>
    )
}