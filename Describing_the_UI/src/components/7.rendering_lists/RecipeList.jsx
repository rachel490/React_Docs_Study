import { recipes } from './data.js'

export function Recipe({ recipe }) {
  return (
    <li key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </li>
  )
}

// NOTE: key in the component => bc the component should be differentiated
export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  )
}
