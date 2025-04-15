import { use, useContext, useEffect, useRef, useState } from 'react'
import { LabelInput } from '../components/General/LabelInput'
import { LabelSelect } from '../components/General/LabelSelect'
import '../styles/Characters/CharacterFilter.css'
import { CharacterCard } from '../components/Characters/CharacterCard'
import { Header } from '../components/General/Header'
import { PageContext } from '../context/PageContext'

export function CharacterFilter() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [filters, setFilters] = useState({
        name: "",
        status: "none",
        species: "",
        type: "",
        gender: "none"
    })
    const form = useRef()

    const {setLastRoute} = useContext(PageContext)

    const buildUrl = () => {
        const params = new URLSearchParams()
        if (filters.name) params.append("name", filters.name)
        if (filters.status !== "none") params.append("status", filters.status)
        if (filters.species) params.append("species", filters.species)
        if (filters.type) params.append("type", filters.type)
        if (filters.gender !== "none") params.append("gender", filters.gender)

        return `https://rickandmortyapi.com/api/character/?${params.toString()}`
    }

    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch(buildUrl())
            const data = await response.json()
            setCharacters(data.results || null)
        } catch (error) {
            setCharacters(null)
        } finally {
            setLoading(false)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(form.current)
        const data = Object.fromEntries(formData.entries())
        setFilters(data)
    }


    useEffect(() => {
        fetchData()
    }, [filters])

    function renderState() {
        if (loading) {
            return <h1 className='stateAnouncer'>Cargando...</h1>
        } else if (!characters) {
            return <p className='stateAnouncer'>No se encontraron resultados</p>
        } else {
            return characters.map((character) => (
                <CharacterCard
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    specie={character.species}
                    image={character.image}
                    link={`/characters/${character.id}`}
                />
            ))
        }
    }

    return (
        <div>
            <Header/>
            <main className="characterFiltersMain">
                <h1>Buscar personaje</h1>
                <form className='filtersForm' id="filtersForm" onSubmit={handleSubmit} ref={form}>
                    <div className='filtersContainer'>
                        <LabelInput text="Nombre" placeholder="Rick Sánchez" name="name" id="name" />
                        <LabelSelect text="Estatus" options={["none", "alive", "dead", "unknown"]} name="status" id="status" />
                        <LabelInput text="Species" placeholder="Human, ..." name="species" id="species" />
                        <LabelInput text="Type" placeholder="..." name="type" id="type" />
                        <LabelSelect text="Gender" options={["none", "female", "male", "genderless", "unknown"]} name="gender" id="gender" />
                    </div>

                    <input type="submit" value="Buscar" id='submitButton' />
                </form>
                <div className='charactersDisplay'>
                    {renderState()}
                </div>
            </main>
        </div>
        
    )
}