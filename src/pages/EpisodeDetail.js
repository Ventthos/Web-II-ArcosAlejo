import { useParams } from 'react-router';
import { useEffect, useReducer } from 'react';
import { CharacterCard } from '../components/Characters/CharacterCard';
import { FavoutiteCharacterCard } from '../components/Episodes/FavouriteCharacterCard';
import '../styles/Episodes/EpisodeDetail.css';

const initialState = {
    episode: {},
    randomCharacters: [],
    favouriteCharacters: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_EPISODE_DATA': {
            const shuffled = [...action.payload.characters].sort(() => Math.random() - 0.5).slice(0, 4);
            const favourites = [...action.payload.characters].sort((a, b) => b.likes - a.likes).slice(0, 3);
            return {
                ...state,
                episode: action.payload,
                randomCharacters: shuffled,
                favouriteCharacters: favourites
            };
        }

        case 'LIKE_CHARACTER': {
            const updatedCharacters = state.episode.characters.map((char) =>
                char.id === action.payload
                    ? { ...char, likes: char.likes + 1 }
                    : char
            );

            const favourites = [...updatedCharacters].sort((a, b) => b.likes - a.likes).slice(0, 3);
            const newRandom = state.randomCharacters.map((char) =>
                char.id === action.payload
                    ? { ...char, likes: char.likes + 1 }
                    : char
            );

            return {
                ...state,
                episode: {
                    ...state.episode,
                    characters: updatedCharacters
                },
                favouriteCharacters: favourites,
                randomCharacters: newRandom
            };
        }

        default:
            return state;
    }
}

export function EpisodeDetail() {
    const { id } = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);

    async function fetchEpisode(id) {
        const data = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
        const json = await data.json();

        json.characters = await Promise.all(
            json.characters.map(async (character) => {
                const characterData = await fetch(character);
                return await characterData.json();
            })
        );

        return json;
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
        return localStorageData.characters;
    }

    function parseCharacters(characters, charactersLocalData) {
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

    function addLike(characterId) {
        const storedEpisodes = localStorage.getItem("episodesCharacter");
        const currentEpisodes = storedEpisodes ? JSON.parse(storedEpisodes) : [];

        const episodeData = currentEpisodes.find((episode) => episode.id === Number(id));

        if (episodeData) {
            const character = episodeData.characters.find((character) => character.id === characterId);
            if (character) character.likes += 1;
        }

        localStorage.setItem("episodesCharacter", JSON.stringify(currentEpisodes));

        dispatch({ type: 'LIKE_CHARACTER', payload: characterId });
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchEpisode(id);
            const charactersLikes = uploadToLocalStorage(data.characters);
            const parsedCharacters = parseCharacters(data.characters, charactersLikes);
            data.characters = parsedCharacters;
            dispatch({ type: 'SET_EPISODE_DATA', payload: data });
        };

        fetchData();
    }, [id]);

    return (
        <main className='episodeDetailMain'>
            <hr />
            <h1>{state.episode.name}</h1>

            <p className='episodeInfo'>
                <strong>Fecha de lanzamiento: </strong> {state.episode.air_date}. <strong>Código: </strong> {state.episode.episode}
            </p>

            <div className='favouriteCharactersContainer'>
                {state.favouriteCharacters.map((character) => (
                    <FavoutiteCharacterCard key={character.id} name={character.name} image={character.image} />
                ))}
            </div>

            <div className='allCharactersContainer'>
                {state.randomCharacters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        likeManager={addLike}
                        link={`/characters/${character.id}`}
                        name={character.name}
                        specie={character.species}
                        status={character.status}
                        image={character.image}
                        likes={character.likes}
                    />
                ))}
            </div>
        </main>
    );
}
