import {Div} from 'components/DivBase'
import React from 'react'
import HomeContainer, {
  HomeInfor,
  ProductMain,
  Element,
  TitleInfor,
  Description,
  TitleSub,
  PriceBig,
  BtnBuy,
  ImageMain,
  ContainerFooterHome
} from './styled'
import Img from 'common/images'
import Media from 'react-media'
import TypeElement from './Components/TypeElement'
import {Title, Des} from 'common/constants'
import NFT from './NftDetails'
const Home = () => {
  const renderDesktop =()=>{
    return (
      <HomeContainer>
        <HomeInfor >
          <TitleInfor >
            {Title.solugun}
          </TitleInfor>
          <Description >
            {Des.solugun}
          </Description>
          <PriceBig>
            {'120.000 VNĐ'}
          </PriceBig>
          <BtnBuy fontBold fontSize={20}>
            Mua ngay
          </BtnBuy>
        </HomeInfor>
        <ProductMain >
          <ImageMain
            src={Img.home.logo}
            fullSize
          />
        </ProductMain >
        <Element>
          <TypeElement
            icon={Img.home.iconElement}
            title={Title.element}
            description={Des.element}
          />
          <TypeElement
            icon={Img.home.iconOrigin}
            title={Title.origin}
            description={Des.origin}
          />
          <TypeElement
            icon=''
            title={Title.flavoring}
            description={Des.flavoring}
          />
        </Element>
        <ContainerFooterHome >
          asdsaf
        </ContainerFooterHome>
      </HomeContainer>
    )
  }
  const render3D=() => {
    setTimeout(() => {
      return (
        <NFT />
      )
    },500)
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

  // <Div>

  //   <NFT />

  //   adfghdsfg
  // </Div>
  )
}
export default Home