import { getImageUrl } from './utils.js'

export default function Profile({ personData }) {
  const { name, imageUrl, profession, award, discovered } = personData

  return (
    <section className='profile'>
      <h2>{name}</h2>
      <img className='avatar' src={getImageUrl(imageUrl)} alt={name} width={70} height={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession.join('and ')}
        </li>
        <li>
          <b>Awards: {award.length} </b>
          {`(${award.join(', ')})`}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  )
}
