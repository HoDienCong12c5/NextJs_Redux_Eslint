import React from 'react'
import Image from 'components/Image'
import messages from 'common/constants'
import Media from 'react-media'
import Container, {
  Left,
  Right,
  About,
  Des
} from './styled'
const Footer = () => {
  return (
    <Container >
      <Left >
        <About >

        </About>
        <Des >
          <Image src={''} height={35} width={35}/>
        </Des>
      </Left>
      <Right>
        
      </Right>
    </Container>
  )
}
export default Footer
