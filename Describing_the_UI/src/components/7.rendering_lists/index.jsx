import Poem from './Poem'
import RecipeList from './RecipeList'
import ScientistList from './ScientistList'
import './styles.css'

export default function RenderingLists() {
  return (
    <div>
      <h2>Rendering Lists</h2>
      <ScientistList />
      <RecipeList />
      <Poem />
    </div>
  )
}
