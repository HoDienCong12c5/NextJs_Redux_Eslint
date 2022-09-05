import React from 'react'
import Image from 'components/Image'
import NormalText, { MediumText, TitleText } from 'components/Text'
import styled from 'styled-components'
import DivNormal, {DivRow} from 'components/DivBase'
const TypeContainer = styled(DivRow)`
    justify-content: flex-start;
`
const TitleType = styled(TitleText)`
    
`
const DesType = styled(NormalText)`
    
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
      {
        icon && <IconType
          alt={title}
          src={icon}
          width={100}
          height={100}
        />
      }

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
