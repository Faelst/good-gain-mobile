import React from 'react'

import {
  Container,
  CardContent,
  GoalContent,
  GoalTitle,
  GoalTitleBold,
  GoalText,
  GoalImage,
  IconCheck,
} from './styles'

import goalWoman from '../../images/goal-woman.png'

interface GoalCardProps {
  marginTop?: boolean
}

const GoalCard:  React.FC<GoalCardProps> = ({ marginTop }) => {
  return (
    <Container enabled={false} marginTop={marginTop}>
      <CardContent>
        <GoalImage source={goalWoman}/> 
        <GoalContent>
          <GoalTitle>Metas que
            <GoalTitleBold> vamos juntos bater.</GoalTitleBold>
          </GoalTitle>
          <GoalText>
            <IconCheck />
            {` Perder gordura`}
          </GoalText>
          <GoalText>
            <IconCheck />
            {` Aumentar musculos`}
          </GoalText>
        </GoalContent>
      </CardContent>
    </Container>
  )
}

export default GoalCard