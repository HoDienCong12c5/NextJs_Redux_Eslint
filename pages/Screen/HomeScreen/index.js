import { Div } from 'components/DivBase'
import React from 'react'
import CvContainer, {
  CvInfor,
  ProductMain,
  Element,
  TitleInfor,
  Description,
  TitleSub,
  PriceBig,
  BtnBuy
} from './styled'
import Media from 'react-media'
const Home = () => {
  const renderDesktop =()=>{
    return (
      <CvContainer>
        <CvInfor >
          <TitleInfor >
            Caffesdfsdf
          </TitleInfor>
          <Description >
            ádasd sdfsd s f
          </Description>
          <PriceBig>
            {'120.000 VNĐ'}
          </PriceBig>
          <BtnBuy >
            Mua ngay
          </BtnBuy>
        </CvInfor>
      </CvContainer>
    )
  }
  return (
    <Div>
      <Media query='(min-width:768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          // return renderDesktop()
        }}
      </Media>

    </Div>
  )
}
export default Home