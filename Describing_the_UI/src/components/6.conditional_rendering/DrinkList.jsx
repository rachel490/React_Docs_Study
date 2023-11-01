import { Fragment } from 'react'

const drinkTypes = {
  tea: {
    'part of plant': 'leaf',
    'daffeine content': '15–70 mg/cup',
    age: '4,000+ years',
  },
  coffee: {
    'part of plant': 'bean',
    'caffeine content': '80–185 mg/cup',
    age: '1,000+ years',
  },
}

function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        {Object.entries(drinkTypes[name]).map(([key, value]) => (
          <Fragment key={name + key}>
            <dt>{key.charAt(0).toUpperCase() + key.slice(1)}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  )
}

export default function DrinkList() {
  return (
    <div>
      <Drink name='tea' />
      <Drink name='coffee' />
    </div>
  )
}
