import { useState } from 'react'

import { Button } from '@/components/Button'
import { Header } from '@/components/Header'

import { Content, Description, MainImage, Title } from './MainPage.components'

export function MainPage() {
  const [currentStage, setCurrentStage] = useState(1)
  const countStage = 10
  return (
    <>
      <Header currentStage={currentStage} countStage={countStage}></Header>
      <Content>
        <MainImage src="/img/main-page.png" alt="Happy to see you" />
        <Title>Let’s find your perfect pair!</Title>
        <Description>
          Take the quiz to easily discover your perfect fit from thousands of styles
        </Description>
        <Button>Start Now</Button>
      </Content>
    </>
  )
}
