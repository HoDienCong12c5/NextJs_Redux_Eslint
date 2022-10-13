import React from 'react'
import Image from 'components/Image'
import NormalText, { MediumText, TitleText } from 'components/Text'
import styled from 'styled-components'
import DivNormal, {DivRow} from 'components/DivBase'
const TypeContainer = styled(DivRow)`
    justify-content: flex-start;
    display: flex;
    flex-flow: row wrap;
    gap: 2%;
    width: 100% ;
`
const TitleType = styled(TitleText)`
  width: 68%;

`
const DesType = styled(NormalText)`
    font-size: 14px ;
    @media screen and (max-width: 768px) {
      font-size: 13px ;
  }
`
const IconType = styled(Image)`
    
`

const TypeElement = ({
  icon,
  title,
  description,
  onClick=null
}) => {
  return (
    <TypeContainer onClick={onClick}>
      <div style={{width:'28%'}}>
        {
          icon && <Image
            alt={title}
            src={icon}
            width={'100%'}
            height={'100%'}
          />
        }
      </div>

      <TitleType >
        {title}
        <DesType >
          {description}
        </DesType>
      </TitleType>
    </TypeContainer>
  )
}
export default TypeElement
