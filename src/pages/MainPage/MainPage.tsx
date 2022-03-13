import { Buttons } from '../../components/button'
import { Headers } from '../../components/header'

export function MainPage() {
  return (
    <>
      <div>
        <Headers />
      </div>
      <div>
        <img className={'next'} src="/img/main-page.jpg" alt="button-next" />
      </div>
      <h1>Let’s find your perfect pair!</h1>
      <p>Take the quiz to easily discover your perfect fit from thousands of styles</p>
      <Buttons name="Start Now" />
    </>
  )
}
