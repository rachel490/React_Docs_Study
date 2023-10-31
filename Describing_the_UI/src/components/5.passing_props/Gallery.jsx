import Profile from './Profile.jsx'

const profiles = [
  {
    name: 'Maria Skłodowska-Curie',
    imageUrl: 'szV5sdG',
    profession: ['physicist', 'chemist'],
    award: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
    discovered: 'polonium (chemical element)',
  },
  {
    name: 'Katsuko Saruhashi',
    imageUrl: 'YfeOqp2',
    profession: ['geochemist'],
    award: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
    discovered: 'a method for measuring carbon dioxide in seawater',
  },
]

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {profiles.map(person => (
        <Profile key={person.name} personData={person} />
      ))}
    </div>
  )
}
