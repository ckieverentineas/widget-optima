import { Button } from '../../components/button'
import { Header } from '../../components/header'

export function MainPage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <img className={'next'} src="/img/main-page.jpg" alt="button-next" />
      </div>
      <h1>Let’s find your perfect pair!</h1>
      <p>Take the quiz to easily discover your perfect fit from thousands of styles</p>
      <Button>Start Now</Button>
    </>
  )
}
