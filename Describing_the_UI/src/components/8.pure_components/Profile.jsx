import Panel from './Panel.jsx'
import { getImageUrl } from './utils.js'

let currentPerson

export default function Profile({ person }) {
  currentPerson = person

  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  )
}

function Header({person}) {
  return <h1>{person.name}</h1>
}

function Avatar({person}) {
  return <img className='avatar' src={getImageUrl(person)} alt={currentPerson.name} width={50} height={50} />
}
