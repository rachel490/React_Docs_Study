import Card from './Card'

export default function Profile3() {
  return (
    <div>
      <Card title='Photo'>
        <img className='avatar' src='https://i.imgur.com/OKS67lhm.jpg' alt='Aklilu Lemma' width={70} height={70} />
      </Card>
      <Card title='About'>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  )
}
