import { LabelInput } from '../components/General/LabelInput'
import { LabelSelect } from '../components/General/LabelSelect'
import '../styles/Characters/CharacterFilter.css'

function setFilter({name, estatus, species, type, gender}){

}

export function CharacterFilter(){
    

    return(
        <main className="characterFiltersMain">
            <h1>Buscar personaje</h1>
            <form className='filtersForm'>
                <div className='filtersContainer'>
                    <LabelInput text={"Nombre"} placeholder={"Rick Sánchez"}/>
                    <LabelSelect text={"Estatus"} options={["none","alive", "dead", "unknow"]}/>
                    <LabelInput text={"Species"} placeholder={"Human, ..."}/>
                    <LabelInput text={"Type"} placeholder={"..."}/>
                    <LabelSelect text={"Gender"} options={["none", "female", "male", "genderless", "unknow"]}/>
                </div>
                
                <input type="submit" value="Buscar" id='submitButton'/> 
            </form>
            <div className='charactersDisplay'>

            </div>
        </main>
    )
}