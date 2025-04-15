import { Routes, Route } from "react-router-dom"
import { Episodes } from "../pages/Episodes"
import { EpisodeDetail } from "../pages/EpisodeDetail"
import { CharacterFilter } from "../pages/CharacterFilter"
import { Extra } from "../pages/Extra"
import { CharacterDetail } from "../components/Characters/CharacterDetail"

export default function RickAndMortyRouter()
{
    return (
        <Routes>
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episodes/:id" element={<EpisodeDetail />} />
            <Route path="/characters" element={<CharacterFilter />} />
            <Route path="/" element={<Extra />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
        </Routes>
    )
}
