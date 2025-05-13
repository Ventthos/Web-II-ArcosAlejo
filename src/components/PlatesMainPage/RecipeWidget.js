import '../../styles/RecipeWidget.css'

export function RecipeWidget({name, imageUrl, recipeUrl}){
    return(
        <a href={recipeUrl} className='recipeContainer'>
            <img src={imageUrl}/>
            <p>{name}</p>
        </a>
    )
}