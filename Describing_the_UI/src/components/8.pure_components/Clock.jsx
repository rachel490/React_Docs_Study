export default function Clock({ time }) {
  let hours = time.getHours()

  // if (hours >= 0 && hours <= 6) {
  //   document.getElementById('time').classname = 'night'
  // } else {
  //   document.getElementById('time').classname = 'day'
  // }

  return (
    <h1 id='time' className={hours >= 0 && hours <= 6 ? 'night' : 'day'}>
      {time.toLocaleTimeString()}
    </h1>
  )
}
