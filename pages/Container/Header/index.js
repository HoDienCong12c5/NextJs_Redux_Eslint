import React, { useEffect, useState, useRef } from 'react'
import HeaderPage, {
  ButtonMore,
  Image,
  NameHost,
  ContainerHome,
  Right,
  Left,
  MenuHome,
  ContainerLogo
} from './style'
import Media from 'react-media'
import MyModal from 'components/MyModal'
import messages, { NamePage ,RoutePage} from 'common/constants'
import Img from 'common/images'
import { useRouter } from 'next/router'

const itemMenu = [
  { label: NamePage.home, key: NamePage.home }, // remember to pass the key prop
  { label: NamePage.about, key: NamePage.about },
  { label: NamePage.contact, key: NamePage.contact },
  { label: NamePage.myCart, key: NamePage.myCart },
]
const Header = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState( false )
  const myModal = useRef( null )
  const onClick = ( key ) => {
    console.log( { key } )
  }
  const renderDesktop = () => {
    const onClick = ( key ) => {}
    return (
      <ContainerHome>
        <ContainerLogo
          onClick={()=>{router.push( RoutePage.home.path,RoutePage.home.as )}}
        >
          <Image src={Img.home.logo} />
          <NameHost fontWeight>Mlem Coffee</NameHost>
        </ContainerLogo>
        <Left>
          <MenuHome
            mode="horizontal"
            onClick={onClick}
            defaultSelectedKeys={['home']}
          >
            {itemMenu.map( ( item, index ) => (
              <MenuHome.Item key={index} icon={<></>}>
                <div>{item.label}</div>
              </MenuHome.Item>
            ) )}
          </MenuHome>
        </Left>
        <Right>
          <ButtonMore onClick={onClick} title={messages.Button.details} />
        </Right>
      </ContainerHome>
    )
  }
  const renderMobile = () => {
    return (
      <ContainerHome>
        <div
          onClick={()=>{router.push( RoutePage.home.path,RoutePage.home.as )}}
          style={{ display: 'flex', alignItems: 'center', gap: 15 }}
        >
          <Image src={Img.home.logo} />
          <NameHost fontWeight>Mlem Coffee</NameHost>
        </div>
        <Left>
          <ButtonMore>{messages.Button.details}</ButtonMore>
        </Left>
      </ContainerHome>
    )
  }

  return (
    <HeaderPage>
      <Media query="(min-width: 768px)">
        {( match ) => {
          if ( match ) {
            return renderDesktop()
          }
          return renderMobile()
        }}
      </Media>
      <MyModal ref={myModal} />
    </HeaderPage>
  )
}
Header.getInitialProps = async ( { query } ) => {
  return {}
}
export default Header
