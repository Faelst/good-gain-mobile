import React from 'react';
import { Container } from './styles';
import ItemView from '../../components/ItemView'

import image1 from '../../../../images/example/ex_ricardo.png'
import image2 from '../../../../images/example/ex_alonso.png'

const Semi: React.FC = () => {
  return (
    <Container>
      {[1].map((item, index) => (
        <ItemView
          key={index}
          name={["Ricardo_Willi", "AlonsoDantas1990"]}
          source={[image1, image2]}
          state={index === 0 ? "aguardando" : undefined}
        />
      ))}
    </Container>
  )
}

export default Semi;