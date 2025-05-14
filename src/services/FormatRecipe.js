export function formatRecipe(data) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  return {
        idMeal: data.idMeal,
        strMeal: data.strMeal,
        strCategory: data.strCategory,
        strInstructions: data.strInstructions,
        strMealThumb: data.strMealThumb,
        strSource: data.strSource,
        strYoutube: data.strYoutube,
        ingredients: ingredients
    };
}