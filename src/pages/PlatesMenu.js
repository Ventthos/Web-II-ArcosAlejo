import mainImage from '../assets/img/mainImage.png'
import '../styles/PlatesMenu.css'
import { useEffect, useReducer, useState } from 'react'
import { getCategories } from '../services/getCategories'
import { Category } from '../components/PlatesMainPage/Category'
import { SearchInput } from '../components/General/SearchInput'

function recipesReducer(state, action){
    switch(action.action){
        case "changeCategory":
            console.log("Cargando")
            return
        case "search":
            console.log("Buscando")
            return
        default:
            return
    }
}

export function PlatesMenu(){

    const [categories, setCategories] = useState(null)
    const [recipes, dispatchRecipes] = useReducer(recipesReducer, {
        currentRecipes: [],
        filteredRecipes: []
    })

    useEffect(()=>{
        const getData = async ()=>{
            const data = await getCategories()
            setCategories(data)
        }

        getData()
    }, [])
    
    
    return(
        <div className='platesMenu'>
            <img className="platesMenuHeroImage" src={mainImage}/>
            <div className='mainContainer'>
                {/* Lado de las categorias */}
                <aside className='categoriesContainer'>
                    <h2>Categories</h2>
                    <div className='categoriesGrid'>
                        {
                            categories ? 
                            categories.map(category => <Category key={category.idCategory} name={category.strCategory} imageUrl={category.strCategoryThumb}/>)
                            :
                            <p>Cargando categorias</p>
                        }
                    </div>
                </aside>

                {/* Display de las recetas */}
                <main className='recipesMainContainer'>
                    {/* Buscador de las recetas */}
                    <SearchInput placeholder={"Search recipes and more"}/>
                        
                    {/* Grid de las recetas */}
                    <div className='recipesGrid'>

                    </div>
                </main>
            </div>
        </div>
    )
}