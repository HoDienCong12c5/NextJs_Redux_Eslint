import ButtonBasic from 'components/ButtonBasic'
import ImageBase from 'components/Image'
import NormalText, { MediumText, TitleText } from 'components/Text'
import styled from 'styled-components'

const CvContainer = styled.div`
`
export const CvInfor = styled.div`
    width:35% ;
    display:flex ;
    flex-flow: column wrap ;
    gap:20px;
`
export const TitleInfor = styled(TitleText)`
    font-size:36px;
`
export const Description = styled(NormalText)`

`
export const ProductMain = styled.div`
    width:35%; 
`

export const Element = styled.div`
   width:30%;  
`
export const TitleSub = styled(MediumText)`

`
export const PriceBig = styled(TitleText)`
    font-size:24px;
`
export const Image = styled(ImageBase)`
    width:100% ;
`
export const Icon = styled(ImageBase)`
    width:80px;
    height:80px;
`
export const BtnBuy = styled(ButtonBasic)`
    width:80px;
    height:80px
`
export default CvContainer

