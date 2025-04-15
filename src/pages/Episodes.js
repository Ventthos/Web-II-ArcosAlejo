import { useEffect } from 'react'
import { EpisodeCard } from '../components/Episodes/EpisodeCard'
import '../styles/Episodes/EpisodesPage.css'
import { useState } from 'react'
import { Header } from '../components/General/Header'

export function Episodes(){
    const [episodes, setEpisodes] = useState([])

    async function fetchEpisodes()
    {
        const data = await fetch("https://rickandmortyapi.com/api/episode")
        const dataJson = await data.json()
        return dataJson
    }

    function uploadToLocalStorage(episodes) {
        const storedEpisodes = localStorage.getItem("episodes");
        const currentEpisodes = storedEpisodes ? JSON.parse(storedEpisodes) : [];
    
        const newEpisodes = episodes.filter(
            (episode) => !currentEpisodes.some((e) => e.id === episode.id)
        ).map((episode) => ({
            id: episode.id,
            likes: 0,
            dislikes: 0
        }));
        
        const updatedEpisodes = [...currentEpisodes, ...newEpisodes];
        console.log(newEpisodes)
        if(newEpisodes.length > 0){
            localStorage.setItem("episodes", JSON.stringify(updatedEpisodes));
        }
        return updatedEpisodes
    }

    function parseEpisodes(episodesData, episodesLocalData){

        return episodesLocalData.map((episode) => {
            const episodeData = episodesData.find((e) => e.id === episode.id);
            return {
                id: episode.id,
                name: episodeData.name,
                episode: episodeData.episode,
                air_date: episodeData.air_date,
                likes: episode.likes,
                dislikes: episode.dislikes
            };
        });
    }

    function addLike(episodeId, like) {
        const storedEpisodes = localStorage.getItem("episodes");
        const currentEpisodes = storedEpisodes ? JSON.parse(storedEpisodes) : [];
    
        const episode = currentEpisodes.find(ep => ep.id === episodeId);
        if (episode) {
            if (like) {
                episode.likes += 1;
            } else {
                episode.dislikes += 1;
            }
        }
    
        localStorage.setItem("episodes", JSON.stringify(currentEpisodes));
        setEpisodes(parseEpisodes(episodes, currentEpisodes));
    }

    function changePage(id){
        window.location.href = `episodes/${id}`
    }

    useEffect(() => {
        document.title = "Episodios"
        const fetchData = async () => {
            const data = await fetchEpisodes()
            const episodesLocalData = uploadToLocalStorage(data.results)
            setEpisodes(parseEpisodes(data.results, episodesLocalData))

        }
        fetchData()
    }, [])

    return(
        <div>
            <Header/>
            <main>
                <div className='title'>
                    <h1>Rick and Morty</h1>
                    <h2>Episodios</h2>
                </div>       
                <div className='grid'>
                    {
                        episodes.map((episode)=>
                            <EpisodeCard key={episode.id} id={episode.id} title={episode.name} code={episode.episode} date={episode.air_date} likesCount={episode.likes} 
                                dislikeCount={episode.dislikes} likeManager={addLike} onClick={changePage}/>
                        )
                    }
                </div>
            </main>
        </div>
        
   
    )
}