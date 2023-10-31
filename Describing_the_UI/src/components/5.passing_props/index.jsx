import Gallery from './Gallery'
import Profile2 from './Profile2'
import Profile3 from './Profile3'
import './styles.css'

export default function PassingPropsToAComponent() {
  return (
    <div>
      <h2>[1.5] Passing props to a component</h2>
      <Gallery />
      <Profile2 />
      <Profile3 />
    </div>
  )
}
