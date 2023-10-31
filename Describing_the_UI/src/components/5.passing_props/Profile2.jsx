import { getImageUrl2 } from './utils.js'

function Avatar({ person, size }) {
  return (
    <img
      className='avatar'
      src={getImageUrl2(person, size >= 90 ? 'b' : 's')}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export default function Profile2() {
  return (
    <>
      <Avatar
        size={40}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
      <Avatar
        size={90}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
      <Avatar
        size={210}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
    </>
  )
}
