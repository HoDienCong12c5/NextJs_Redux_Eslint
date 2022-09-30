import { Div } from 'components/DivBase'
import React, { useState, useEffect } from 'react'
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
  ContainerFooterHome,
} from './styled'
import Img from 'common/images'
import Media from 'react-media'
import TypeElement from './Components/TypeElement'
import OtherItem from './Components/OtherItem'
import messages, { Title, Des } from 'common/constants'
import firebase from 'services/firebase'
import Loading from 'components/Loading'
const Home = () => {
  const [dataMain, setDataMain] = useState( null )
  const [dataOther, setDataOther] = useState( [] )
  const [isLoad, setIsLoad] = useState( true )
  useEffect( () => {
    const get = async () => {
      const data = await firebase.FireStore.Product.getAllData()
      if ( data?.length > 0 ) {
        const tempData = data.find( ( item ) => item.type === '1' )
        setDataMain( tempData )
      }
    }
    const getOther = async () => {
      const data = await firebase.FireStore.OtherHome.getAllData()
      if ( data?.length > 0 ) {
        setDataOther( data )
      }
    }
    Promise.all( [get(), getOther()] )
  }, [] )
  const onPageExternal = ( url ) => {}
  const renderDesktop = () => {
    return (
      <HomeContainer>
        <HomeInfor>
          <TitleInfor>{Title.solugun}</TitleInfor>
          <Description>{Des.solugun}</Description>
          <PriceBig>{dataMain?.price || '120.000 VNĐ'} VNĐ</PriceBig>
          <BtnBuy onClick={() => onPageExternal()} fontBold fontSize={20}>
            {messages.Button.buy}
          </BtnBuy>
        </HomeInfor>
        {dataMain ? (
          <ProductMain>
            <ImageMain
              src={dataMain?.image ? dataMain?.image : Img.home.logo}
              fullSize
            />
          </ProductMain>
        ) : (
          <Loading />
        )}
        {dataMain ? (
          <Element>
            <TypeElement
              icon={Img.home.iconElement}
              title={Title.element}
              description={dataMain?.element ?? Des.element}
            />
            <TypeElement
              icon={Img.home.iconOrigin}
              title={Title.origin}
              description={dataMain?.origin ?? Des.origin}
            />
            <TypeElement
              icon={Img.home.iconSmell}
              title={Title.flavoring}
              description={dataMain?.flavoring ?? Des.flavoring}
            />
          </Element>
        ) : (
          <Loading />
        )}
        <ContainerFooterHome>
          {dataOther?.length > 0 ? (
            <OtherItem listData={dataOther} />
          ) : (
            <Loading />
          )}
        </ContainerFooterHome>
      </HomeContainer>
    )
  }
  const renderMobile = () => {
    return (
      <HomeContainer>
        <HomeInfor>
          <TitleInfor>{Title.solugun}</TitleInfor>
          <Description>{Des.solugun}</Description>
          <PriceBig>{dataMain?.price || '120.000 VNĐ'} VNĐ</PriceBig>
          <BtnBuy fontBold fontSize={20}>
            {messages.Button.buy}
          </BtnBuy>
        </HomeInfor>
        {dataMain ? (
          <ProductMain>
            <ImageMain
              src={dataMain?.image ? dataMain?.image : Img.home.logo}
              fullSize
            />
          </ProductMain>
        ) : (
          <Loading />
        )}
        {dataMain ? (
          <Element>
            <TypeElement
              icon={Img.home.iconElement}
              title={Title.element}
              description={dataMain?.element ?? Des.element}
            />
            <TypeElement
              icon={Img.home.iconOrigin}
              title={Title.origin}
              description={dataMain?.origin ?? Des.origin}
            />
            <TypeElement
              icon={Img.home.iconSmell}
              title={Title.flavoring}
              description={dataMain?.flavoring ?? Des.flavoring}
            />
          </Element>
        ) : (
          <Loading />
        )}

        <ContainerFooterHome>
          {dataOther?.length > 0 ? (
            <OtherItem listData={dataOther} />
          ) : (
            <Loading />
          )}
        </ContainerFooterHome>
      </HomeContainer>
    )
  }

  return (
    <Div>
      <Media query="(min-width:768px)">
        {( match ) => {
          if ( match ) {
            return renderDesktop()
          }
          return renderMobile()
        }}
      </Media>
    </Div>
  )
}
Home.getInitialProps = async ( { query } ) => {
  return {}
}
export default Home
