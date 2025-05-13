import mainImage from '../assets/img/mainImage.png'
import '../styles/PlatesMenu.css'
import { useEffect, useReducer, useState } from 'react'
import { getCategories } from '../services/getCategories'
import { Category } from '../components/PlatesMainPage/Category'
import { SearchInput } from '../components/General/SearchInput'
import { getRecipesPerCategory } from '../services/getRecipes'
import { RecipeWidget } from '../components/PlatesMainPage/RecipeWidget'
import { debounce } from '../services/debounce'



function recipesReducer(state, action) {
  switch (action.type) {
    case "setCategory":
      return { ...state, category: action.category };
    case "setRecipes":
      return {
        ...state,
        currentRecipes: action.recipes,
        filteredRecipes: action.recipes.filter(recipe =>
          recipe.strMeal.includes(state.input)
        ),
      };
    case "setInput":
      console.log(action.input)
      return {
        ...state,
        input: action.input,
        filteredRecipes: state.currentRecipes.filter(recipe =>
          recipe.strMeal.includes(action.input)
        ),
      };
    default:
      return state;
  }
}


export function PlatesMenu(){

    const [categories, setCategories] = useState(null)
    const [recipes, dispatchRecipes] = useReducer(recipesReducer, {
        currentRecipes: [],
        filteredRecipes: [],
        input: "",
        category: ""
    })

    useEffect(()=>{
        const getData = async ()=>{
            const data = await getCategories()    
            setCategories(data)
            dispatchRecipes({ type: "setCategory", category:"Beef" })
        }

        getData()
    }, [])
    
    useEffect(() => {
        async function fetchData() {
            const recipesData = await getRecipesPerCategory(recipes.category);
            dispatchRecipes({ type: "setRecipes", recipes: recipesData });
        }

        if (recipes.category) {
            fetchData();
        }
    }, [recipes.category]);

    const debouncedSearch = debounce((e) =>
      dispatchRecipes({ type: "setInput", input: e.target.value }), 300
    );

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
                            categories.map(category => <Category key={category.idCategory} name={category.strCategory} imageUrl={category.strCategoryThumb}
                            onClick={()=>dispatchRecipes({type:"setCategory", category: category.strCategory})} active={recipes.category == category.strCategory}/>)
                            :
                            <p>Cargando categorias</p>
                        }
                    </div>
                </aside>

                {/* Display de las recetas */}
                <main className='recipesMainContainer'>
                    {/* Buscador de las recetas */}
                    <SearchInput placeholder={"Search recipes and more"} onChange={(e) => debouncedSearch(e)}/>
                        
                    {/* Grid de las recetas */}
                    <div className='recipesGrid'>
                        {
                          recipes.filteredRecipes.length > 0 ?
                            recipes.filteredRecipes.map(recipe=>
                                <RecipeWidget key={recipe.idMeal} name={recipe.strMeal} imageUrl={recipe.strMealThumb}/>
                            )
                            :
                            <p>No hay recetas para mostrar</p>
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}