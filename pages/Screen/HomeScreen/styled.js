import ButtonBasic from 'components/ButtonBasic'
import Image from 'components/Image'
import NormalText, { MediumText, TitleText } from 'components/Text'
import styled from 'styled-components'
import { DivRow } from 'components/DivBase'
import { Color } from 'common/constants'
const HomeContainer = styled(DivRow)`
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 100px;
  @media screen and (max-width: 900px) {
    padding-left: 0px;
    flex-flow: column wrap !important;
    gap: 30px;
  }
`
export const HomeInfor = styled(DivRow)`
  max-width: 30%;
  flex-flow: column wrap;
  gap: 20px;
  padding-right: 10px;
  @media screen and (max-width: 900px) {
    padding-right: 0px;
    width: 100%;
    max-width: 100%;
  }
`
export const TitleInfor = styled.h1`
  font-size: 42px;
  text-align: center;
`
export const Description = styled(MediumText)`
  line-height: 30px;
`
export const ProductMain = styled.div`
  width: 40%;
  padding: 10px;
  @media screen and (max-width: 900px) {
    padding: 0px;

    max-width:100%;
  }
`

export const Element = styled(DivRow)`
  max-width: 30%;
  flex-flow: column wrap;
  align-items: flex-start;
  gap: 30px;
  padding-left: 10px;
  @media screen and (max-width: 900px) {
    padding-left: 0px;
    padding-top: 0px;
    max-width: 100% !important;
    width:60%;
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
  font-size: 20px;
  font-weight: bolder;
  color: white;
  padding: 20px;
  border-radius: 25px;
`
export const ContainerFooterHome = styled.div`
  justify-content:center;
  display: flex;
  flex-flow: row wrap;
  background: ${Color.chocolate};
  width: 90%;
  min-height: 300px;
  padding: 20px ;
  border-radius: 30px ;
  margin :0 auto;
  margin-top: 100px;
  justify-content: center;
    flex-direction: row;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column wrap;
    margin-top: 10px;
  }
`
export default HomeContainer
