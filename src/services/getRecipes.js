const recipesUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

export async function getRecipesPerCategory(category){
    const response = await fetch(recipesUrl+category)
    const responseJson = await response.json()
    return responseJson["meals"]
}