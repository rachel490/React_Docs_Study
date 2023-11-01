import { people } from './data.js'
import { getImageUrl } from './utils.js'

const chemist = []
const others = []

people.forEach(person => (person.profession === 'chemist' ? chemist.push(person) : others.push(person)))

export function ScientistListSection({ title, people }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function ScientistList() {
  return (
    <article>
      <h1>Scientists</h1>
      <ScientistListSection title='Chemist' people={chemist} />
      <ScientistListSection title='Everyone Else' people={others} />
    </article>
  )
}
