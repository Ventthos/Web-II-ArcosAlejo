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
            setRecipe(formatRecipe(data))
        }

        getData()
    }, [])

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
                                {recipe?.ingredients.map((item, index) => (
                                    <LiWithDelete
                                        key={index}
                                        text={`${item.ingredient} (${item.measure})`}
                                    />
                                ))}
        
                            </ul>
                        </div>

                        <div className='linksList'>
                            <h2>Links</h2>
                            <div>
                                <p><strong>Youtube</strong> </p>
                                <a href={recipe?.strSource}>{recipe?.strYoutube}</a>
                            </div>
                            <div>
                                <p><strong>Website</strong> </p>
                                <a href={recipe?.strSource}>{recipe?.strSource}</a>
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