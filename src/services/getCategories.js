const categoriesUrl = "https://www.themealdb.com/api/json/v1/1/categories.php"

export async function getCategories(){
    const response = await fetch(categoriesUrl)
    const responseJson = await response.json()
    return responseJson["categories"]
}