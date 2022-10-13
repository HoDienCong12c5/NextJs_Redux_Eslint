import React from 'react'
import styled from 'styled-components'
import ButtonBasic from 'components/ButtonBasic'
import Image from 'components/Image'
import NormalText, { MediumText, TitleText } from 'components/Text'
const ContainerOther = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  width:100% ;
  max-width:90%;
  justify-content:center;
  @media screen and (max-width: 768px) {
    max-width:100%;
  }
`
export const ItemOther = styled.div`
  /* display: flex;
  flex-flow: column wrap !important; */
  text-align: center;
  gap: 10px;
  width:30%;

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
export const BtnMore = styled(ButtonBasic)`
  font-size: 20px;
  font-weight: bolder;
  color: white;
  padding: 10px;
  border-radius: 25px;
  max-width:130px;
  margin: auto;
`
export default ContainerOther
