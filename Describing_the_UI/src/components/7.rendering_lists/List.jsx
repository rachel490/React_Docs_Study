import { people } from './data.js'
import { getImageUrl } from './utils.js'

const chemist = people.filter(person => person.profession === 'chemist')
const others = people.filter(person => person.profession !== 'chemist')

export default function List() {
  const listItems = (targetArr) => {
    return targetArr.map(person => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    ))
  }

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>{listItems(chemist)}</ul>
      <h2>Everyone Else</h2>
      <ul>{listItems(others)}</ul>
    </article>
  )
}
