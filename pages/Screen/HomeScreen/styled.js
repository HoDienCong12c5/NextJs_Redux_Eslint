import ButtonBasic from 'components/ButtonBasic'
import Image from 'components/Image'
import NormalText, { MediumText, TitleText } from 'components/Text'
import styled from 'styled-components'
import {DivRow} from 'components/DivBase'
const HomeContainer = styled(DivRow)`
  flex-flow: row wrap;
  justify-content: space-between;
  /* gap:30px; */
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    flex-flow: column wrap;
    gap:30px;
  }
`
export const HomeInfor = styled(DivRow)`
  max-width: 30%;
  flex-flow: column wrap;
  gap: 20px;
  padding-right: 10px;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
  }
`
export const TitleInfor = styled(TitleText)`
  font-size: 42px;
`
export const Description = styled(MediumText)`
  line-height: 30px;
`
export const ProductMain = styled.div`
  width: 40%;
  padding: 10px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`

export const Element = styled((DivRow))`
  max-width: 30%;
  flex-flow: column wrap;
  align-items: flex-start;
  gap: 30px;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-top:0px;
  }
`
export const TitleSub = styled(MediumText)``
export const PriceBig = styled(TitleText)`
  font-size: 24px;
`
export const ImageBase = styled(Image)`
  width: 100%;
`
export const ImageMain = styled(Image)`
  border-radius: 50%;
`
export const Icon = styled(Image)`
  width: 80px;
  height: 80px;
`
export const BtnBuy = styled(ButtonBasic)`
  width: 80px;
  height: 80px;
`
export default HomeContainer
