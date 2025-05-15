import '../styles/PlateDetail.css'
import { LiWithDelete } from '../components/General/LiWithDelete'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getRecipe } from '../services/getRecipe'
import { formatRecipe } from '../services/FormatRecipe'

export function PlateDetail(){
    const id = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(()=>{
        const getData = async()=>{
            const data = await getRecipe(id.id)
            const formated = formatRecipe(data)
            
            const recipesLocal = getRecipesLocal()
            const recipeInLocal = recipesLocal.find(recipe => recipe.id == id.id)
            if (recipeInLocal) {
                formated.ingredients = filterIngredientsDeleted(
                    recipeInLocal.ingredients,
                    formated.ingredients
                )
            }
            setRecipe(formated)
        }

        getData()
    }, [])

    function getRecipesLocal() {
        const recipes = localStorage.getItem("recipes");
        return recipes ? JSON.parse(recipes) : [];
    }

    function filterIngredientsDeleted(ingredientsLocal, ingredientsApi) {
        const filteredIngredients = ingredientsApi.filter(
            ingredient => !ingredientsLocal.includes(ingredient.ingredient)
        );
        return filteredIngredients;
    }

    function deleteIngredients(name) {
        const recipesJson = getRecipesLocal();
        let recipeInLocal = recipesJson.find(recipe => recipe.id == id.id);

        if (!recipeInLocal) {
            recipeInLocal = { id: id.id, ingredients: [] };
            recipesJson.push(recipeInLocal);
        }

        if (!recipeInLocal.ingredients.includes(name)) {
            recipeInLocal.ingredients.push(name);
        }

        localStorage.setItem("recipes", JSON.stringify(recipesJson));
        setRecipe(prev => ({
            ...prev,
            ingredients: filterIngredientsDeleted(recipeInLocal.ingredients, prev.ingredients)
        }))
    }

    

    return(
        <div className='detailContainer'>
            <div className='infoHeader'>
                <p>Id: <strong>{recipe?.idMeal}</strong></p>
                <p><strong>{recipe?.strCategory}</strong></p>
            </div>
            <div>
                <hr/>
                <h1 id='title'>{recipe?.strMeal}</h1>
                <hr/>
            </div>
            
            <main className='foodDisplayGrid'>
                <div className='plateImage'>
                    <img src={recipe?.strMealThumb}/>
                </div>
                <div className='foodSideView'>
                    <div className='foodSideViewInnerContainer'>
                        <div className='ingredientsList'>
                            <h2>Ingredients</h2>
                            <ul>
                                {
                                    recipe?.ingredients.length > 0 ?
                                    recipe?.ingredients.map((item, index) => (
                                        <LiWithDelete
                                            key={index}
                                            text={`${item.ingredient} (${item.measure})`}
                                            onDelete={()=>deleteIngredients(item.ingredient)}
                                        />
                                    ))
                                    :
                                    <p>No ingredients left</p>
                                }
        
                            </ul>
                        </div>

                        <div className='linksList'>
                            <h2>Links</h2>
                            <div>
                                <p><strong>Youtube</strong> </p>
                                {
                                    recipe?.strYoutube != "" ? 
                                        <a href={recipe?.strYoutube}>{recipe?.strYoutube}</a>
                                        :
                                        <p>No video to show</p>
                                }
                                
                            </div>
                            <div>
                                <p><strong>Website</strong> </p>
                                {
                                    recipe?.strSource != "" ? 
                                        <a href={recipe?.strSource}>{recipe?.strSource}</a>
                                        :
                                        <p>No website to show</p>
                                }
                                
                            </div>
                            
                        </div>
                    </div> 
                </div>
                <div className='foodSteps'>
                    <h2>Steps</h2>
                    <p>
                        {recipe?.strInstructions.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                               
                            </span>
                        ))}
                    </p>
                </div>
            </main>
            
        </div>
    )

}