import Profile1 from './Challenge1'
import Profile2 from './Challenge2'
import Congratulations from './Challenge4'
import Gallery from './Challenge3'
import './styles.css'

export default function YourFirstComponent() {
  return (
    <div>
      <h2>[1.1] Your First Component</h2>
      <Profile1 />
      <Profile2 />
      <Gallery />
      <Congratulations />
    </div>
  )
}
