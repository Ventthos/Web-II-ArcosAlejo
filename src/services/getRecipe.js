const recipeDetailUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

export async function getRecipe(id){
    const data = await fetch(recipeDetailUrl+id)
    const dataJson = await data.json()
    return dataJson["meals"][0]
}