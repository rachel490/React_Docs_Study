import Clock from './Clock'
import ProfileList from './ProfileList'
import './styles.css'

export default function KeepingComponentsPure() {
  // TODO: 동적 데이트로 변경하기
  const currentTime = new Date()

  return (
    <div>
      <h2>Keeping Components Pure</h2>
      <Clock time={currentTime} />
      <ProfileList />
    </div>
  )
}
