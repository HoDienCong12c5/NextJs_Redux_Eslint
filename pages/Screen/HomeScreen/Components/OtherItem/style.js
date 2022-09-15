import React from 'react'
import styled from 'styled-components'
import DivNormal, { DivRow } from 'components/DivBase'
import Image from 'components/Image'
import NormalText, { MediumText, TitleText } from 'components/Text'
const ContainerOther = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-flow: column wrap;
  }
`
export const ItemOther = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
`
export const ImageCustom = styled(Image)`
  border-radius: 50%;
`
export const Title = styled(TitleText)`
  border-radius: 50%;
`
export const Details = styled(NormalText)`
  border-radius: 50%;
`

export default ContainerOther
